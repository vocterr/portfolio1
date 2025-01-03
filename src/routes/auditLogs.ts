import { Router, Response } from "express";
import { authenticate, AuthRequest } from "../middleware/authMiddleware";
import prisma from "../prisma/prisma";

const router = Router();

router.get("/recentAuditLogs", authenticate, async (req: AuthRequest, res: Response) => {
    const userId = req.user?.userId;
    try {
        const auditLogs = await prisma.auditLog.findMany({
            where: {
                userId: String(userId)
            },
            orderBy: {createdAt: "desc"},
            take: 3
        });
        res.json(auditLogs);
    }
    catch(error) {
        console.error(error);
        res.status(500).json({error: "Server error"});
    }
});

export default router;