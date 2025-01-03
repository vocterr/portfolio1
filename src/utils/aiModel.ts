import * as tf from "@tensorflow/tfjs-node";
import path from "path";
import fs from "fs";
import { Transaction } from "@prisma/client";

export const trainAndSaveModelForUser = async (
  transactionData: Transaction[],
  userId: string
) => {
  const normalize = (value: number, min: number, max: number) =>
    (value - min) / (max - min);

  // Extract and normalize data
  const amounts = transactionData.map((t) => t.amount);
  const indices = transactionData.map((_, index) => index);

  const minAmount = Math.min(...amounts);
  const maxAmount = Math.max(...amounts);
  const normalizedAmounts = amounts.map((amount) =>
    normalize(amount, minAmount, maxAmount)
  );

  const xs = tf.tensor2d(indices, [indices.length, 1]);
  const ys = tf.tensor2d(normalizedAmounts, [normalizedAmounts.length, 1]);

  // Build and train the model
  const model = tf.sequential();
  model.add(tf.layers.dense({ units: 50, activation: "relu", inputShape: [1] }));
  model.add(tf.layers.dense({ units: 1 }));
  model.compile({ optimizer: tf.train.adam(), loss: "meanSquaredError" });

  await model.fit(xs, ys, {
    epochs: 10, // Reduced for testing
    batchSize: 1,
    callbacks: {
      onEpochEnd: (epoch, logs) => {
        console.log(`Epoch ${epoch + 1}: Loss = ${logs?.loss}`);
      },
    },
  });

  // Save the model for the specific user
  const modelDir = path.join(__dirname, "..", "saved-models", userId);
  const modelPath = `file://${modelDir}`;

  try {
    // Check or create directory
    if (!fs.existsSync(modelDir)) {
      console.log(`Directory does not exist. Creating: ${modelDir}`);
      fs.mkdirSync(modelDir, { recursive: true });
    }

    // Ensure directory is writable
    fs.accessSync(modelDir, fs.constants.W_OK);

    console.log(`Saving model to: ${modelPath}`);
    await model.save(modelPath);

    // Verify save
    const files = fs.readdirSync(modelDir);
    if (files.length === 0) {
      throw new Error(
        `Model files were not created in directory: ${modelDir}`
      );
    }

    console.log(`Model successfully saved for user ${userId} at ${modelDir}`);
    console.log("Saved files:", files);
  } catch (err) {
    console.error(`Failed to save model for user ${userId}:`, err);
    throw err;
  }

  return { minAmount, maxAmount };
};

  
  

export const loadModelForUser = async (userId: string) => {
    const modelDir = path.join(__dirname, "..",  "saved-models", userId);
    const modelPath = path.join(modelDir, "model.json");
  
    // Ensure the directory exists
    if (!fs.existsSync(modelDir)) {
      console.log(`Creating directory for user ${userId} at ${modelDir}`);
      try {
        fs.mkdirSync(modelDir, { recursive: true });
      } catch (err) {
        console.error(`Failed to create directory for user ${userId}:`, err);
        throw err;
      }
    }
  
    // If the model file doesn't exist, create and save a new model
    if (!fs.existsSync(modelPath)) {
      console.log(`Model for user ${userId} not found. Creating a new model...`);
  
      try {
        const model = tf.sequential();
        model.add(tf.layers.dense({ units: 50, activation: "relu", inputShape: [1] }));
        model.add(tf.layers.dense({ units: 1 }));
  
        model.compile({ optimizer: tf.train.adam(), loss: "meanSquaredError" });
  
        // Save the new model
        await model.save(`file://${modelDir}`);
        console.log(`New model created and saved for user ${userId} at ${modelDir}`);
        return model;
      } catch (err) {
        console.error(`Failed to save model for user ${userId}:`, err);
        throw err;
      }
    }
  
    // Load and return the existing model
    try {
      const model = await tf.loadLayersModel(`file://${modelPath}`);
      console.log(`Model loaded successfully for user ${userId}`);
      return model;
    } catch (err) {
      console.error(`Failed to load model for user ${userId}:`, err);
      throw err;
    }
  };
  
  

  export const generateAIInsightForUser = async (
    userId: string,
    transactionData: Transaction[]
  ) => {
    const { minAmount, maxAmount } = await trainAndSaveModelForUser(
      transactionData,
      userId
    );
  
    const model = await loadModelForUser(userId);
    const futureIndex = transactionData.length;
  
    const inputTensor = tf.tensor2d([futureIndex], [1, 1]);
    const normalizedPrediction = model.predict(inputTensor) as tf.Tensor;
    const prediction = normalizedPrediction.dataSync()[0];
    const predictedAmount = prediction * (maxAmount - minAmount) + minAmount;
  
    const transactionAmounts = transactionData.map((t) => t.amount);
    const meanAmount =
      transactionAmounts.reduce((acc, amount) => acc + amount, 0) /
      transactionAmounts.length;
  
    const variance =
      transactionAmounts
        .map((amount) => (amount - meanAmount) ** 2)
        .reduce((acc, diffSquared) => acc + diffSquared, 0) /
      transactionAmounts.length;
  
    const stdDev = Math.sqrt(variance);
  
    const relevance = Math.max(
      0,
      Math.min(1, 1 - Math.abs(predictedAmount - meanAmount) / stdDev)
    );
    const content = `Based on your spending history, we predict your next month's spending to be approximately $${predictedAmount.toFixed(
      2
    )}.`;
  
    return { relevance, content };
  };
  