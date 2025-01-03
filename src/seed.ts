// prisma/seed.ts

import { 
  PrismaClient,
  AccountType,
  TransactionType,
  BudgetPeriod,
  AIInsightType,
  NotificationType,
  Theme,
  UserRole
} from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // 1) Create Users
  const user1 = await prisma.user.create({
    data: {
      name: 'Alice Admin',
      email: '[email protected]',
      password: 'alice123',
      role: UserRole.ADMIN,
      profilePicture: 'https://example.com/images/alice.jpg',
    },
  });

  const user2 = await prisma.user.create({
    data: {
      name: 'Bob User',
      email: '[email protected2]',
      password: 'bob123',
      role: UserRole.USER,
      profilePicture: null,
    },
  });

  const user3 = await prisma.user.create({
    data: {
      name: 'Charlie Premium',
      email: '[email protected3]',
      password: 'charlie123',
      role: UserRole.PREMIUM,
      profilePicture: 'https://example.com/images/charlie.jpg',
    },
  });

  // 2) Create Accounts for each user
  const user1Checking = await prisma.account.create({
    data: {
      userId: user1.id,
      type: AccountType.CHECKING,
      name: 'Alice Checking',
      balance: 1500.50,
      currency: 'USD',
    },
  });

  const user1Savings = await prisma.account.create({
    data: {
      userId: user1.id,
      type: AccountType.SAVINGS,
      name: 'Alice Savings',
      balance: 5000,
      currency: 'USD',
    },
  });

  const user1CreditCard = await prisma.account.create({
    data: {
      userId: user1.id,
      type: AccountType.CREDIT_CARD,
      name: 'Alice Credit Card',
      balance: -300,
      currency: 'USD',
    },
  });

  const user2Checking = await prisma.account.create({
    data: {
      userId: user2.id,
      type: AccountType.CHECKING,
      name: 'Bob Checking',
      balance: 800,
      currency: 'USD',
    },
  });

  const user2Cash = await prisma.account.create({
    data: {
      userId: user2.id,
      type: AccountType.CASH,
      name: 'Bob Cash Wallet',
      balance: 100,
      currency: 'USD',
    },
  });

  const user3Investment = await prisma.account.create({
    data: {
      userId: user3.id,
      type: AccountType.INVESTMENT,
      name: 'Charlie Investment',
      balance: 10000,
      currency: 'USD',
    },
  });

  // 3) Create some Transactions
  // --- For user1
  const user1Tx1 = await prisma.transaction.create({
    data: {
      userId: user1.id,
      accountId: user1Checking.id,
      type: TransactionType.INCOME,
      category: 'Salary',
      amount: 3000,
      description: 'Monthly salary',
      date: new Date('2024-01-05'),
    },
  });

  const user1Tx2 = await prisma.transaction.create({
    data: {
      userId: user1.id,
      accountId: user1Checking.id,
      type: TransactionType.EXPENSE,
      category: 'Groceries',
      amount: 150.25,
      description: 'Weekly groceries',
      date: new Date('2024-01-06'),
    },
  });

  const user1Tx3 = await prisma.transaction.create({
    data: {
      userId: user1.id,
      accountId: user1CreditCard.id,
      type: TransactionType.EXPENSE,
      category: 'Entertainment',
      amount: 60,
      description: 'Streaming subscription + movie',
      date: new Date('2024-01-07'),
    },
  });

  const user1Tx4 = await prisma.transaction.create({
    data: {
      userId: user1.id,
      accountId: user1Savings.id,
      type: TransactionType.INCOME,
      category: 'Interest',
      amount: 5.75,
      description: 'Savings account interest',
      date: new Date('2024-01-10'),
    },
  });

  // --- For user2
  const user2Tx1 = await prisma.transaction.create({
    data: {
      userId: user2.id,
      accountId: user2Checking.id,
      type: TransactionType.INCOME,
      category: 'Freelance',
      amount: 400,
      description: 'Logo design payment',
      date: new Date('2024-02-01'),
    },
  });

  const user2Tx2 = await prisma.transaction.create({
    data: {
      userId: user2.id,
      accountId: user2Cash.id,
      type: TransactionType.EXPENSE,
      category: 'Dining',
      amount: 30,
      description: 'Lunch with friend',
      date: new Date('2024-02-02'),
    },
  });

  // --- For user3
  const user3Tx1 = await prisma.transaction.create({
    data: {
      userId: user3.id,
      accountId: user3Investment.id,
      type: TransactionType.INCOME,
      category: 'Dividends',
      amount: 200,
      description: 'Quarterly stock dividends',
      date: new Date('2024-03-01'),
    },
  });

  const user3Tx2 = await prisma.transaction.create({
    data: {
      userId: user3.id,
      accountId: user3Investment.id,
      type: TransactionType.EXPENSE,
      category: 'Management Fees',
      amount: 50,
      description: 'Investment account fees',
      date: new Date('2024-03-05'),
    },
  });

  // 4) Create Budgets
  // --- For user1
  const user1Budget1 = await prisma.budget.create({
    data: {
      userId: user1.id,
      category: 'Groceries',
      allocatedAmount: 600,
      period: BudgetPeriod.MONTHLY,
      startDate: new Date('2024-01-01'),
      endDate: new Date('2024-01-31'),
    },
  });

  const user1Budget2 = await prisma.budget.create({
    data: {
      userId: user1.id,
      category: 'Entertainment',
      allocatedAmount: 200,
      period: BudgetPeriod.MONTHLY,
      startDate: new Date('2024-01-01'),
      endDate: new Date('2024-01-31'),
    },
  });

  // --- For user2
  const user2Budget1 = await prisma.budget.create({
    data: {
      userId: user2.id,
      category: 'Dining',
      allocatedAmount: 150,
      period: BudgetPeriod.MONTHLY,
      startDate: new Date('2024-02-01'),
      endDate: new Date('2024-02-29'),
    },
  });

  // --- For user3
  const user3Budget1 = await prisma.budget.create({
    data: {
      userId: user3.id,
      category: 'Fees',
      allocatedAmount: 100,
      period: BudgetPeriod.YEARLY,
      startDate: new Date('2024-01-01'),
      endDate: new Date('2024-12-31'),
    },
  });

  // 5) Create BudgetAllocations
  // We'll allocate some transactions to matching budgets
  await prisma.budgetAllocation.create({
    data: {
      transactionId: user1Tx2.id, // Groceries expense
      budgetId: user1Budget1.id,
      allocatedAmount: 150.25,
    },
  });

  await prisma.budgetAllocation.create({
    data: {
      transactionId: user1Tx3.id, // Entertainment expense
      budgetId: user1Budget2.id,
      allocatedAmount: 60,
    },
  });

  await prisma.budgetAllocation.create({
    data: {
      transactionId: user2Tx2.id, // Dining expense
      budgetId: user2Budget1.id,
      allocatedAmount: 30,
    },
  });

  await prisma.budgetAllocation.create({
    data: {
      transactionId: user3Tx2.id, // Management Fees
      budgetId: user3Budget1.id,
      allocatedAmount: 50,
    },
  });

  // 6) Create Goals
  // --- For user1
  await prisma.goal.create({
    data: {
      userId: user1.id,
      title: 'Vacation Fund',
      targetAmount: 2000,
      currentAmount: 500,
      targetDate: new Date('2024-08-01'),
    },
  });

  // --- For user2
  await prisma.goal.create({
    data: {
      userId: user2.id,
      title: 'Emergency Fund',
      targetAmount: 1000,
      currentAmount: 200,
      targetDate: new Date('2025-01-01'),
    },
  });

  await prisma.goal.create({
    data: {
      userId: user2.id,
      title: 'New Laptop',
      targetAmount: 1500,
      currentAmount: 300,
      targetDate: new Date('2024-12-01'),
    },
  });

  // --- For user3
  await prisma.goal.create({
    data: {
      userId: user3.id,
      title: 'Stock Portfolio Growth',
      targetAmount: 20000,
      currentAmount: 10000,
      targetDate: new Date('2026-01-01'),
    },
  });

  // 7) Create AIInsights
  // --- For user1
  await prisma.aIInsight.create({
    data: {
      userId: user1.id,
      type: AIInsightType.RECOMMENDATION,
      content: 'Consider setting aside more funds for savings.',
      relevance: 0.9,
    },
  });

  await prisma.aIInsight.create({
    data: {
      userId: user1.id,
      type: AIInsightType.FORECAST,
      content: 'Your current expense trend suggests you might exceed your budget next month.',
      relevance: 0.8,
    },
  });

  // --- For user2
  await prisma.aIInsight.create({
    data: {
      userId: user2.id,
      type: AIInsightType.TIP,
      content: 'Automate a weekly transfer to your emergency fund.',
      relevance: 0.7,
    },
  });

  // --- For user3
  await prisma.aIInsight.create({
    data: {
      userId: user3.id,
      type: AIInsightType.RECOMMENDATION,
      content: 'Rebalance your investment portfolio for better diversification.',
      relevance: 0.85,
    },
  });

  // 8) Create Notifications
  // --- For user1
  await prisma.notification.create({
    data: {
      userId: user1.id,
      type: NotificationType.ALERT,
      message: 'Suspicious login attempt detected.',
      link: null,
      isRead: false,
    },
  });

  await prisma.notification.create({
    data: {
      userId: user1.id,
      type: NotificationType.REMINDER,
      message: 'Your credit card payment is due soon.',
      link: 'https://example.com/credit-card',
      isRead: false,
    },
  });

  // --- For user2
  await prisma.notification.create({
    data: {
      userId: user2.id,
      type: NotificationType.UPDATE,
      message: 'Your account balance has been updated.',
      link: null,
      isRead: true,
    },
  });

  // --- For user3
  await prisma.notification.create({
    data: {
      userId: user3.id,
      type: NotificationType.ALERT,
      message: 'Investment portfolio volatility is high.',
      link: 'https://example.com/investments',
      isRead: false,
    },
  });

  // 9) Create Settings
  // --- For user1
  await prisma.settings.create({
    data: {
      userId: user1.id,
      notificationPreferences: {
        email: true,
        push: false,
        sms: false,
      },
      theme: Theme.LIGHT,
      twoFactorAuth: true,
    },
  });

  // --- For user2
  await prisma.settings.create({
    data: {
      userId: user2.id,
      notificationPreferences: {
        email: false,
        push: true,
        sms: false,
      },
      theme: Theme.DARK,
      twoFactorAuth: false,
    },
  });

  // --- For user3
  await prisma.settings.create({
    data: {
      userId: user3.id,
      notificationPreferences: {
        email: true,
        push: true,
        sms: true,
      },
      theme: Theme.LIGHT,
      twoFactorAuth: true,
    },
  });

  // 10) Create AuditLogs
  // Some logs might not have a user (userId: null). Let's do both examples
  // --- For user1
  await prisma.auditLog.create({
    data: {
      userId: user1.id,
      action: 'LOGIN',
      description: 'User logged in successfully',
      ipAddress: '192.168.0.1',
    },
  });

  await prisma.auditLog.create({
    data: {
      userId: user1.id,
      action: 'UPDATE_PROFILE',
      description: 'User updated profile picture',
      ipAddress: '192.168.0.2',
    },
  });

  // --- For user2
  await prisma.auditLog.create({
    data: {
      userId: user2.id,
      action: 'RESET_PASSWORD',
      description: 'Password was reset via email link',
      ipAddress: '192.168.0.10',
    },
  });

  // --- For user3
  await prisma.auditLog.create({
    data: {
      userId: user3.id,
      action: 'LOGOUT',
      description: 'User logged out',
      ipAddress: '192.168.0.20',
    },
  });

  // Example without a user (null userId)
  await prisma.auditLog.create({
    data: {
      userId: null,
      action: 'SYSTEM_MAINTENANCE',
      description: 'Database maintenance performed',
      ipAddress: '127.0.0.1',
    },
  });
}

main()
  .then(async () => {
    console.log('Seeding successful!');
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error('Seeding error:', e);
    await prisma.$disconnect();
    process.exit(1);
  });
