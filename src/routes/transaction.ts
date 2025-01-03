import { Router, Request, Response } from "express";
import { authenticate, AuthRequest } from "../middleware/authMiddleware";
import prisma from "../prisma/prisma";
import { getStartAndEndOfMonth } from "./budget";
import { Transaction } from "@prisma/client";

const router = Router();


router.post("/transaction", authenticate, async (req: AuthRequest, res: Response) => {
    const userId =  req.user?.userId;
    const {transaction} = req.body;
    try {
        const createdTransaction = await prisma.transaction.create({
            data: {
                ...transaction,
                userId: String(userId)
            }
        });
        res.json("Transaction Created Successfully!");
    }
    catch(error) {
        console.error(error);
        res.status(500).json({error: "Server error"});
    }
})
router.get("/transactions", authenticate, async (req: AuthRequest, res: Response) => {
    const userId = req.user?.userId;
    const {startOfMonth, endOfMonth} = getStartAndEndOfMonth();
    try {
        const transactions = await prisma.transaction.findMany({
            where: {
                userId: String(userId),
                
            },
            orderBy: {
                date: "desc"
            },
            
            select: {
                account: {
                    select: {
                        name: true
                    }
                },
                id: true,
                amount: true,
                type: true,
                category: true,
                date: true
            }
            
        });
        res.json(transactions);
    }
    catch(error) {
        console.error(error);
        res.status(500).json({error: "Server error"});
    }
});

router.get("/transaction/:transactionId", authenticate, async (req: AuthRequest, res: Response) => {
    const userId = req.user?.userId;
    try {
        const transaction = await prisma.transaction.findUnique({
            where: {
                id: String(req.params.transactionId),
                userId: String(userId)
            },
            include: {
                account: true
            }
        });
        res.json(transaction);
    }
    catch(error) {
        console.error(error);
        res.status(500).json({error: "Server error"});
    }
});

router.patch("/transaction/:transactionId", authenticate, async (req: AuthRequest, res: Response) => {
    const userId = req.user?.userId;
    let {transaction}: {transaction: Transaction} = req.body;
    try {
        const updatedTransaction = await prisma.transaction.update({
            data: {
                user: {
                    connect: {
                        id: userId
                    }
                },
                account: {
                    connect: {
                        id: transaction.accountId
                    }
                },
                category: transaction.category,
                type: transaction.type,
                amount: transaction.amount,
                description: transaction.description,
                date: transaction.date,
            },
            where: {
                id: String(req.params.transactionId)
            }
        });
        res.json({message: "Transaction updated successfully!"});
    }
    catch(error) {
        console.error(error);
        res.status(500).json({error: "Server error"});
    }
})

export default router;