import { Router, Request, Response } from "express";
import prisma from "../prisma/prisma";
import jwt from "jsonwebtoken"

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
        res.cookie("token", token, {httpOnly: true, maxAge: 1000 * 60 * 60 * 24 * 365 * 10});
        res.json(token);
    }
    catch(error) {
        console.error(error);
        res.status(500).json({error: "Server error"});
    }
});


export default router;