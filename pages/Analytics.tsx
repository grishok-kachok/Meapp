import { SpendingTrends } from "@/components/analytics/SpendingTrends";
import { SavingsGoal } from "@/components/analytics/SavingsGoal";
import { CategoryDistribution } from "@/components/dashboard/CategoryDistribution";

export function Analytics() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Аналитика</h1>
      
      <div className="grid gap-6 md:grid-cols-2">
        <SpendingTrends />
        <CategoryDistribution />
      </div>
      
      <div className="md:w-2/3">
        <SavingsGoal />
      </div>
    </div>
  );
}