// Realistic mock data based on DATA_SCHEMA.md

export const mockUser = {
  id: "user-1",
  name: "Hoàng",
  avatar: "https://i.pravatar.cc/150?u=hoang",
  timezone: "Asia/Ho_Chi_Minh",
  theme: {
    palette: "deep-sea-mint",
    mode: "dark"
  },
  createdAt: "2025-01-01T00:00:00Z"
};

export const mockWeather = {
  city: "Hà Nội",
  temperature: 28,
  condition: "partly-cloudy",
  icon: "cloud-sun",
  updatedAt: "2026-07-17T08:00:00Z"
};

export const mockGoal = {
  id: "goal-1",
  title: "Launch LifeOS MVP",
  deadline: "2026-12-31T23:59:59Z",
  progress: 65,
  milestones: [
    { id: "m1", title: "Design System", completed: true, completedAt: "2026-06-15T00:00:00Z" },
    { id: "m2", title: "Core Modules", completed: false, completedAt: null },
    { id: "m3", title: "API Integration", completed: false, completedAt: null }
  ],
  createdAt: "2026-05-01T00:00:00Z"
};

// Generate 365 days of heatmap data
const generateHeatmap = () => {
  const cells = [];
  const today = new Date();
  for (let i = 364; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    // Randomize some levels
    const isWeekend = d.getDay() === 0 || d.getDay() === 6;
    let level = 0;
    if (Math.random() > 0.4) {
      level = isWeekend ? Math.floor(Math.random() * 3) + 2 : Math.floor(Math.random() * 3) + 1;
    }
    cells.push({
      date: d.toISOString().split('T')[0],
      value: level > 0 ? level * 150000 + Math.random() * 50000 : 0,
      level: level
    });
  }
  return { year: today.getFullYear(), cells };
};

export const mockFinancialData = {
  income: 35000000,
  expense: 12500000,
  saving: 22500000,
  savingsRate: 64.2,
  goal: 20000000,
  currency: "VND",
  emergencyFund: {
    current: 85000000,
    target: 150000000,
    percentage: 56.6
  },
  heatmap: generateHeatmap(),
  transactions: [
    { id: "t1", amount: -150000, category: "food", description: "Phở + Cafe", date: "2026-07-17T08:30:00Z", type: "expense" },
    { id: "t2", amount: -500000, category: "shopping", description: "Mua sách", date: "2026-07-16T15:00:00Z", type: "expense" },
    { id: "t3", amount: 35000000, category: "salary", description: "Lương tháng 7", date: "2026-07-15T10:00:00Z", type: "income" },
    { id: "t4", amount: -250000, category: "transport", description: "Đổ xăng + Grab", date: "2026-07-14T09:00:00Z", type: "expense" },
    { id: "t5", amount: -1500000, category: "utilities", description: "Tiền điện nước", date: "2026-07-10T12:00:00Z", type: "expense" },
  ],
  balance: 22500000,
  monthlyBurnRate: 12500000 / 17 * 30 // Approx estimate based on month progress
};

export const mockHabits = [
  {
    id: "h1",
    name: "Đọc sách 30p",
    icon: "book",
    streak: 12,
    bestStreak: 45,
    week: ["done", "done", "done", "done", "missed", "done", "pending"],
    completionRate: 85,
    history: [],
    createdAt: "2025-10-01T00:00:00Z"
  },
  {
    id: "h2",
    name: "Tập gym",
    icon: "dumbbell",
    streak: 3,
    bestStreak: 21,
    week: ["missed", "done", "done", "done", "missed", "pending", "pending"],
    completionRate: 65,
    history: [],
    createdAt: "2026-01-01T00:00:00Z"
  },
  {
    id: "h3",
    name: "Thiền 10p",
    icon: "brain",
    streak: 5,
    bestStreak: 15,
    week: ["done", "done", "done", "done", "done", "pending", "pending"],
    completionRate: 90,
    history: [],
    createdAt: "2026-05-15T00:00:00Z"
  }
];

export const mockTasks = [
  {
    id: "task-1",
    title: "Review PR design system",
    description: "Check figma to code implementation of tokens",
    priority: "high",
    status: "pending",
    deadline: "2026-07-17T17:00:00Z",
    tags: ["work", "review"],
    category: "Work",
    completedAt: null,
    createdAt: "2026-07-16T10:00:00Z",
    updatedAt: "2026-07-16T10:00:00Z"
  },
  {
    id: "task-2",
    title: "Gia hạn server LifeOS",
    description: "",
    priority: "medium",
    status: "pending",
    deadline: "2026-07-18T10:00:00Z",
    tags: ["infra", "billing"],
    category: "Personal",
    completedAt: null,
    createdAt: "2026-07-15T09:00:00Z",
    updatedAt: "2026-07-15T09:00:00Z"
  },
  {
    id: "task-3",
    title: "Viết Tech Spec cho v1.1",
    description: "Tập trung vào API integration layer",
    priority: "medium",
    status: "pending",
    deadline: "2026-07-20T23:59:59Z",
    tags: ["planning", "documentation"],
    category: "Work",
    completedAt: null,
    createdAt: "2026-07-17T08:00:00Z",
    updatedAt: "2026-07-17T08:00:00Z"
  },
  {
    id: "task-4",
    title: "Mua đồ ăn mèo",
    description: "Pate Royal Canin 1 thùng",
    priority: "low",
    status: "completed",
    deadline: "2026-07-16T20:00:00Z",
    tags: ["errands"],
    category: "Personal",
    completedAt: "2026-07-16T19:30:00Z",
    createdAt: "2026-07-15T08:00:00Z",
    updatedAt: "2026-07-16T19:30:00Z"
  }
];

export const mockAnalytics = {
  completionRate: 75,
  focusScore: 82,
  burnoutRisk: 25,
  weekly: [
    { date: "2026-07-11", dayLabel: "T7", tasksCompleted: 2, tasksTotal: 3, habitsCompleted: 3, habitsTotal: 3, productivityScore: 85 },
    { date: "2026-07-12", dayLabel: "CN", tasksCompleted: 1, tasksTotal: 2, habitsCompleted: 2, habitsTotal: 3, productivityScore: 65 },
    { date: "2026-07-13", dayLabel: "T2", tasksCompleted: 5, tasksTotal: 5, habitsCompleted: 3, habitsTotal: 3, productivityScore: 95 },
    { date: "2026-07-14", dayLabel: "T3", tasksCompleted: 4, tasksTotal: 6, habitsCompleted: 2, habitsTotal: 3, productivityScore: 70 },
    { date: "2026-07-15", dayLabel: "T4", tasksCompleted: 6, tasksTotal: 7, habitsCompleted: 3, habitsTotal: 3, productivityScore: 88 },
    { date: "2026-07-16", dayLabel: "T5", tasksCompleted: 3, tasksTotal: 4, habitsCompleted: 3, habitsTotal: 3, productivityScore: 80 },
    { date: "2026-07-17", dayLabel: "T6", tasksCompleted: 1, tasksTotal: 4, habitsCompleted: 1, habitsTotal: 3, productivityScore: 45 },
  ],
  monthly: [
    { weekLabel: "Week 1", avgProductivity: 72, avgTaskCompletion: 68, avgHabitCompletion: 80 },
    { weekLabel: "Week 2", avgProductivity: 75, avgTaskCompletion: 72, avgHabitCompletion: 78 },
    { weekLabel: "Week 3", avgProductivity: 82, avgTaskCompletion: 80, avgHabitCompletion: 85 },
    { weekLabel: "Week 4", avgProductivity: 78, avgTaskCompletion: 75, avgHabitCompletion: 82 },
  ],
  insights: [
    { type: "positive", message: "Focus score của bạn đã tăng 12% so với tuần trước.", metric: "Focus Score", delta: 12 },
    { type: "warning", message: "Bạn có 2 task quá hạn trong mục Personal.", metric: "Overdue Tasks", delta: 2 },
    { type: "neutral", message: "Bạn đang duy trì thói quen đọc sách rất tốt (12 ngày).", metric: "Habit Streak", delta: 1 }
  ]
};
