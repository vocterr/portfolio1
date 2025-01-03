import { Router, Request, Response } from "express";
import { authenticate, AuthRequest } from "../middleware/authMiddleware";
import prisma from "../prisma/prisma";


const router = Router();

router.get("/me", authenticate, async (req: AuthRequest, res: Response) => {
    const userId = req.user?.userId;
    try {
        const user = await prisma.user.findFirst({
            where: {
                id: String(userId)
            },
           
            select: {
                settings: {
                    select: {
                        theme: true,
                        twoFactorAuth: true
                    }
                },
                name: true,
                role: true,
                email: true,
                profilePicture: true,
            }
        });
        res.json(user);
    }
    catch(error) {
        console.error(error);
        res.status(500).json({error: "Server error"});
    }
});

export default router;