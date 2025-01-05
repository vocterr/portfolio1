import {Router, Response} from "express";
import { authenticate, AuthRequest } from "../middleware/authMiddleware";
import prisma from "../prisma/prisma";


const router = Router();

router.get("/recentNotifications", authenticate, async (req: AuthRequest, res: Response) => {
    const userId = req.user?.userId;
    try {
        const recentNotifications = await prisma.notification.findMany({
            where: {
                userId: String(userId)
            },
            take: 3
        });
        res.json(recentNotifications);
    }
    catch(error) {
        console.error(error);
        res.status(500).json({error: "Server error"});
    }
});


router.get("/notifications", authenticate, async (req: AuthRequest, res: Response) => {
    const userId = req.user?.userId;
     try {
        const notifications = await prisma.notification.findMany({
            where: {
                userId: String(userId)
            }
        });
        res.json(notifications);
     }
     catch(error) {
        console.error(error);
        res.status(500).json({error: "Server error"});
    }
});

router.get("/recentNotifications", authenticate, async (req: AuthRequest, res: Response) => {
    const userId = req.user?.userId;
    try {
        const notifications = await prisma.notification.findMany({
            where: {
                userId: String(userId)
            },
            orderBy: {createdAt: "desc"},
            take: 3
        });
        res.json(notifications);
    }
    catch(error) {
        console.error(error);
        res.status(500).json({error: "Server error"});
    }
});

export default router;