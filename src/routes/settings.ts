import { Router, Response } from "express";
import { authenticate, AuthRequest } from "../middleware/authMiddleware";
import prisma from "../prisma/prisma";

const router = Router();

router.get("/settings", authenticate, async (req: AuthRequest, res: Response) => {
    const userId = req.user?.userId;
    try {
        const settings = await prisma.settings.findUnique({
            where: {
                userId: String(userId)
            }
        });
        res.json(settings);
    }
    catch(error) {
        console.error(error);
        res.status(500).json({error: "Server error"});
    }
});

router.post("/settings", authenticate, async (req: AuthRequest, res: Response) => {
    const userId = req.user?.userId;
    try {
        const settings = await prisma.settings.create({
            data: {
                userId: String(userId),
                notificationPreferences: {
                    email: true,
                    sms: true,
                    push: true
                }
            }
        });
        res.json(settings);
    }
    catch(error) {
        console.error(error);
        res.status(500).json({error: "Server error"});
    }
});

router.patch("/settings", authenticate, async (req: AuthRequest, res: Response) => {
    const userId = req.user?.userId;
    const {settings} = req.body;
    try {
        const updatedSettings = await prisma.settings.update({
            data: settings,
            where: {
                userId: String(userId)
            }
        });
        res.json({message: "Settings updated successfully!"});
    }
    catch(error) {
        console.error(error);
        res.status(500).json({error: "Server error"});
    }
})

export default router;