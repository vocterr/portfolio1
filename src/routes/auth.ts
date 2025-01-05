import { Router, Request, Response } from "express";
import prisma from "../prisma/prisma";
import jwt from "jsonwebtoken"
import { authenticate, AuthRequest } from "../middleware/authMiddleware";

const router = Router();

router.post("/login", async (req: Request, res: Response): Promise<any> => {
    const {email, password}  = req.body;
    try {
        const user = await prisma.user.findFirst({
            where: {
                email
            }
        });
        if (!user)  return res.status(404).json({error: "User doesnt exist"});
        const isMatch = user.password == password ? true : false

        if (!isMatch) return res.status(400).json({error: "Invalid credentials"});

        const token = jwt.sign({userId: user.id}, "1234");
        res.cookie("token", token, {
            httpOnly: true, // Only accessible by the server
            secure: true, // Requires HTTPS
            sameSite: "strict", // Needed for cross-origin requests
            maxAge: 1000 * 60 * 60 * 24 * 365, // Expiry time
        });
        
        res.cookie("loggedIn", "yes", {
            httpOnly: false,
            secure: true, // Requires HTTPS
            sameSite: "strict", // Needed for cross-origin requests
            maxAge: 1000 * 60 * 60 * 24 * 365, // Expiry time
        });
        res.json(token);
    }
    catch(error) {
        console.error(error);
        res.status(500).json({error: "Server error"});
    }
});


router.post("/register", async (req: Request, res: Response): Promise<any> => {
    const {name, email, password} = req.body;
    try {
        const userExists = await prisma.user.findUnique({
            where: {
                email
            }
        });
        if (userExists) return res.status(400).json({error: "User already exists"});
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password
            }
        });
        res.json(user);
    }
    catch(error) {
        console.error(error);
        res.status(500).json({error: "Server error"});
    }
});

router.post("/logout", async (req: AuthRequest, res: Response) => {
    res.clearCookie("token");
    res.clearCookie("loggedIn");
    res.json("Logged out successfully!");
});


export default router;