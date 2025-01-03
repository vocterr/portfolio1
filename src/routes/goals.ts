import {Router, Response} from "express";
import { authenticate, AuthRequest } from "../middleware/authMiddleware";
import prisma from "../prisma/prisma";

const router = Router();

router.get("/goals", authenticate, async (req: AuthRequest, res: Response) => {
    const userId = req.user?.userId;
    try {
        const goals = await prisma.goal.findMany({
            where: {
                userId: String(userId)
            }
        });
        res.json(goals);
    }
    catch(error) {
        console.error(error);
        res.status(500).json({error: "Server error"});
    }
});

router.post("/goal", authenticate, async (req: AuthRequest, res: Response) => {
    const {goal}= req.body;
    const userId = req.user?.userId;
    console.log(goal, "userid:", userId);
    try {
        const createdGoal = await prisma.goal.create({
            data: {
                ...goal,
                userId: String(userId)
                
            }
        });
        res.json("Goal Created Successfully!");
    }
    catch(error) {
        console.error(error);
        res.status(500).json({error: "Server error"});
    }
})

router.patch("/goal/:goalId", authenticate, async (req: AuthRequest, res: Response) => {
    const userId = req.user?.userId;
    const {goal} = req.body;
    try {
        const updatedGoal = await prisma.goal.update({
            data: goal,
            where: {
                userId: String(userId),
                id: String(req.params.goalId)
            }
        });
        res.json({message: "Goal Updated Successfully!"})
    }
    catch(error) {
        console.error(error);
        res.status(500).json({error: "Server error"});
    }
})

router.get("/goal/:goalId", authenticate, async (req: AuthRequest, res: Response) => {
    const userId = req.user?.userId;
    try {
        const goal = await prisma.goal.findUnique({
            where: {
                userId: String(userId),
                id: String(req.params.goalId)
            }
        });
        res.json(goal);
    }
    catch(error) {
        console.error(error);
        res.status(500).json({error: "Server error"});
    }
});


router.get("/recentGoals", authenticate, async (req: AuthRequest, res: Response) => {
    const userId = req.user?.userId;
    try {
        const goals = await prisma.goal.findMany({
            where: {
                userId: String(userId)
            },
            orderBy: {
                createdAt: "desc"
            },
            take: 3
        });
        res.json(goals);
    }
    catch(error) {
        console.error(error);
        res.status(500).json({error: "Server error"});
    }
});

export default router;