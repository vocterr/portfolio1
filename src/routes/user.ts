import { Router, Request, Response } from "express";
import { authenticate, AuthRequest } from "../middleware/authMiddleware";
import prisma from "../prisma/prisma";
import upload from "../utils/multer";


const router = Router();


router.patch("/user", authenticate, upload.single("image"), async (req: AuthRequest, res: Response) => {
    const userId = req.user?.userId;
    const {name, email, password} = req.body;

    try {

        const profilePicture = req.file ? `http://localhost:3001/uploads/${req.file.filename}` : undefined;
        const updatedUser = await prisma.user.update({
            data: {
                name,
                email,
                password,
                profilePicture: profilePicture || undefined
            },
            where: {
                id: String(userId)
            }
        });
        res.json(updatedUser);
    }catch(error) {
        console.error(error);
        res.status(500).json({error: "Server error"});
    }
});

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
                createdAt: true
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