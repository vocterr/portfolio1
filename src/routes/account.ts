import { Router, Request, Response } from "express";
import { authenticate, AuthRequest } from "../middleware/authMiddleware";
import prisma from "../prisma/prisma";
import { Account } from "@prisma/client";

const router = Router();



router.post("/account", authenticate, async (req: AuthRequest, res: Response) => {
    const userId = req.user?.userId;
    const {account} = req.body;
    try {
        const createdAccount = await prisma.account.create({
            data: {
                ...account,
                user: {
                    connect: {
                        id: String(userId)
                    }
                }
            }
        });
        res.json("Account Created Successfully!");
    }
    catch(error) {
        console.error(error);
        res.status(500).json({error: "Server error"});
    }
});

router.get("/accounts", authenticate, async (req: AuthRequest, res: Response) => {
    const userId = req.user?.userId;
    try {
        const accounts = await prisma.account.findMany({
            where: {
                userId: String(userId)
            },
            include: {
                transactions: {
                    select: {
                        amount: true
                    }
                }
            }
        });
        res.json(accounts);
    }
    catch(error) {
        console.error(error);
        res.status(500).json({error: "Server error"});
    }
});

router.patch("/account/:accountId", authenticate, async (req: AuthRequest, res: Response) => {
    const {account}: {account: Account} = req.body;
    const userId = req.user?.userId;

    try {
        const updatedAccount = await prisma.account.update({
            data: account,
            where: {
                userId: String(userId),
                id: String(req.params.accountId)
            }
        });
        res.json({message: "Account updated successfully!"});
    }
    catch(error) {
        console.error(error);
        res.status(500).json({error: "Server error"});
    }
})

router.get("/account/:accountId", authenticate, async (req: AuthRequest, res: Response) => {
    const userId = req.user?.userId;
    try {
        const account = await prisma.account.findUnique({
            where: {
                id: String(req.params.accountId),
                userId: String(userId)
            }
        });
        res.json(account);
    }
    catch(error) {
        console.error(error);
        res.status(500).json({error: "Server error"});
    }
})
export default router;