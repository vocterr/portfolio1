const path = require("path");
const bindingPath = path.join(
  __dirname,
  "node_modules/@tensorflow/tfjs-node/lib/napi-v8/tfjs_binding.node"
);
try {
  require(bindingPath);
  console.log("tfjs_binding.node loaded successfully!");
} catch (err) {
  console.error("Failed to load tfjs_binding.node:", err);
}
