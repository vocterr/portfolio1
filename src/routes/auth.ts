import { Router, Request, Response } from "express";
import prisma from "../prisma/prisma";
import jwt from "jsonwebtoken"
import { authenticate, AuthRequest } from "../middleware/authMiddleware";

const router = Router();

router.post("/login", async (req: Request, res: Response): Promise<any> => {
    const { email, password } = req.body;
    try {
        const user = await prisma.user.findFirst({
            where: { email },
        });

        if (!user) return res.status(404).json({ error: "User doesn't exist" });

        const isMatch = user.password === password;
        if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

        const token = jwt.sign({ userId: user.id }, "1234");

        // Set cookies
        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
            maxAge: 1000 * 60 * 60 * 24 * 365,
        });

        res.cookie("loggedIn", "yes", {
            httpOnly: false,
            secure: true,
            sameSite: "none",
            maxAge: 1000 * 60 * 60 * 24 * 365,
        });

        // Log cookies for debugging
        console.log("Set-Cookie headers:", res.getHeaders()["set-cookie"]);

        res.json({ token, message: "Login successful" });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ error: "Server error" });
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