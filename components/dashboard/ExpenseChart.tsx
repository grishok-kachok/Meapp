import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { month: "Янв", amount: 2400 },
  { month: "Фев", amount: 1398 },
  { month: "Мар", amount: 9800 },
  { month: "Апр", amount: 3908 },
  { month: "Май", amount: 4800 },
  { month: "Июн", amount: 3800 },
];

export function ExpenseChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Обзор расходов</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis 
                dataKey="month"
                tickLine={false}
                axisLine={true}
                padding={{ left: 20, right: 20 }}
              />
              <YAxis
                tickLine={false}
                axisLine={true}
                width={80}
                tickFormatter={(value) => `₽${value}`}
              />
              <Tooltip 
                formatter={(value) => [`₽${value}`, 'Сумма']}
                contentStyle={{ background: 'hsl(var(--background))', border: '1px solid hsl(var(--border))' }}
              />
              <Line 
                type="monotone" 
                dataKey="amount" 
                stroke="hsl(var(--chart-1))"
                strokeWidth={2}
                dot={{ fill: "hsl(var(--chart-1))" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}