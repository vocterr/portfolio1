import express from "express";
import cors from "cors"
import path from "path";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/user";
import authRoutes from "./routes/auth";
import accountRoutes from "./routes/account";
import transactionRoutes from "./routes/transaction";
import budgetRoutes from "./routes/budget";
import goalRoutes from "./routes/goals";
import AIInsightRoutes from "./routes/AIInsight";
import notificationRoutes from "./routes/notification";
import auditLogsRoutes from "./routes/auditLogs";
import settingRoutes from "./routes/settings";
const app = express();

app.use("/uploads", express.static(path.join(__dirname, "images")));

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));

app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", accountRoutes);
app.use("/api", transactionRoutes);
app.use("/api", budgetRoutes);
app.use("/api", goalRoutes);
app.use("/api", AIInsightRoutes);
app.use("/api", notificationRoutes);
app.use("/api", auditLogsRoutes);
app.use("/api", settingRoutes);

app.listen(3001, () => console.log(3001));
