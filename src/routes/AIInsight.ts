import { Router, Response } from "express";
import { authenticate, AuthRequest } from "../middleware/authMiddleware";
import prisma from "../prisma/prisma";
import cron from "node-cron";
import { generateAIInsightForUser } from "../utils/aiModel";
const router = Router();

router.get("/AIInsights", authenticate, async (req: AuthRequest, res: Response) => {
    const userId = req.user?.userId;

    try {
        const aiInsights = await prisma.aIInsight.findMany({
            where: {
                userId: String(userId)
            }
        });
        res.json(aiInsights);
    }
    catch(error) {
        console.error(error);
        res.status(500).json({error: "Server error"});
    }
});

router.get("/recentAIInsights", authenticate, async (req: AuthRequest, res: Response) => {
    const userId = req.user?.userId;
    try {
        const AIInsights = await prisma.aIInsight.findMany({
            where: {
                userId: String(userId)
            },
            take: 3,
            orderBy: {
                createdAt: "desc"
            }
        });
        res.json(AIInsights);
    }
    catch(error) {
        console.error(error);
        res.status(500).json({error: "Server error"});
    }
});

/*

cron.schedule("* * * * *", async () => {
  console.log("Running scheduled AI insight generation...");

  try {
    const users = await prisma.user.findMany();

    for (const user of users) {
        try {
          const transactions = await prisma.transaction.findMany({
            where: { userId: user.id },
            orderBy: { date: "asc" },
          });
      
          if (transactions.length < 2) {
            console.log(`Not enough transactions for user ${user.id}. Skipping...`);
            continue;
          }
      
          const { relevance, content } = await generateAIInsightForUser(
            user.id,
            transactions
          );
      
          await prisma.aIInsight.create({
            data: {
              userId: user.id,
              type: "FORECAST",
              content,
              relevance,
            },
          });
      
          console.log(`AI Insight created for user ${user.id}`);
        } catch (error) {
          console.error(`Error generating insight for user ${user.id}:`, error);
        }
      }
      

    console.log("AI insight generation completed.");
  } catch (error) {
    console.error("Error generating AI insights:", error);
  }
});

router.post("/createinsight", authenticate, async (req: AuthRequest, res: Response) => {
    console.log("Running scheduled AI insight generation...");

  try {
    const users = await prisma.user.findMany();

    for (const user of users) {
        try {
          const transactions = await prisma.transaction.findMany({
            where: { userId: user.id },
            orderBy: { date: "asc" },
          });
      
          if (transactions.length < 2) {
            console.log(`Not enough transactions for user ${user.id}. Skipping...`);
            continue;
          }
      
          const { relevance, content } = await generateAIInsightForUser(
            user.id,
            transactions
          );
      
          await prisma.aIInsight.create({
            data: {
              type: "FORECAST",
              content,
              relevance,
              user: {
                connect: {
                  id: String(user.id)
                }
              }
            },
          });
      
          console.log(`AI Insight created for user ${user.id}`);
        } catch (error) {
          console.error(`Error generating insight for user ${user.id}:`, error);
        }
      }
      

    console.log("AI insight generation completed.");
  } catch (error) {
    console.error("Error generating AI insights:", error);
  }
});
*/

export default router;