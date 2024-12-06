import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function SavingsGoal() {
  const currentSavings = 8500;
  const goal = 10000;
  const progress = (currentSavings / goal) * 100;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Прогресс накоплений</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Progress value={progress} />
          <div className="flex justify-between text-sm">
            <span>Текущие накопления: ₽{currentSavings}</span>
            <span>Цель: ₽{goal}</span>
          </div>
          <p className="text-center text-muted-foreground">
            {`${progress.toFixed(1)}% от цели достигнуто`}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}