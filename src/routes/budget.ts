import { Router, Response } from "express";
import { authenticate, AuthRequest } from "../middleware/authMiddleware";
import prisma from "../prisma/prisma";

const router = Router();


export const getStartAndEndOfMonth = () => {
    const now = new Date();
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    return {startOfMonth, endOfMonth};
}


router.post("/budget", authenticate, async (req: AuthRequest, res: Response) => {
    const userId = req.user?.userId;
    const {budget} = req.body
    try {
        const createdBudget = await prisma.budget.create({
            data: {
                ...budget,
                userId: String(userId)
            }
        });
        res.json("Budget Created Successfully!");
    }
    catch(error) {
        console.error(error);
        res.status(500).json({error: "Server error"});
    }
})

router.patch("/budget/:budgetId", authenticate, async (req: AuthRequest, res: Response) => {
    const userId = req.user?.userId;
    const {budget} = req.body;
    try {
        const updatedBudget = await prisma.budget.update({
            data: budget,
            where: {
                id: String(req.params.budgetId),
                userId: String(userId)
            }
        });
        res.json({message: "Budget Updated Successfully!"});
    }
    catch(error) {
        console.error(error);
        res.status(500).json({error: "Server error"});
    }
})

router.get("/budget/:budgetId", authenticate, async (req: AuthRequest, res: Response) => {
    const userId = req.user?.userId;
    try {
        const budget = await prisma.budget.findUnique({
            where: {
                userId: String(userId),
                id: String(req.params.budgetId)
            }
        });
        res.json(budget);
    }
    catch(error) {
        console.error(error);
        res.status(500).json({error: "Server error"});
    }
});

router.get("/budgets", authenticate, async (req: AuthRequest, res: Response) => {
    const userId =  req.user?.userId;
    try {
        const budgets = await prisma.budget.findMany({
            where: {
                userId: String(userId)
            },
            include: {
                budgetAllocations: {
                select: {
                    allocatedAmount: true
                }
                }
            }
        });
        res.json(budgets);
    }
    catch(error) {
        console.error(error);
        res.status(500).json({error: "Server error"});
    }
})

router.get("/monthlyBudgets", authenticate, async (req: AuthRequest, res: Response): Promise<any> => {
    const userId = req.user?.userId;
    const {startOfMonth, endOfMonth} = getStartAndEndOfMonth();
    try {
        const budgets = await prisma.budget.findMany({
            where: {
                userId: String(userId),
                startDate: {
                    gte: startOfMonth
                },
                endDate: {
                    lte: endOfMonth
                }
            },
            orderBy: {
                allocatedAmount: "desc"
            },
            include: {
                budgetAllocations: {
                    include: {
                        transaction: {
                            select: {
                                category: true,
                                date: true
                            }
                        }
                    }
                }
            }
        });
        res.json(budgets);
    }
    catch(error) {
        console.error(error);
        res.status(500).json({error: "Server error"});
    }
});

export default router;