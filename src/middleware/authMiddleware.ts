import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export interface AuthRequest extends Request {
    user?: {
        userId: string
    }
}
export const authenticate =  (req: AuthRequest, res: Response, next: NextFunction) => {
    const token = req.cookies.token;
    if(!token) res.status(404).json({error: "NO TOKEN"});

    jwt.verify(token, process.env.JWT_SECRET as string, (err: any, user: any) => {
        if (err) return res.status(400).json(err);
        req.user = user;
        next();
    });
}