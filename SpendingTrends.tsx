import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  { category: "Продукты", thisMonth: 400, lastMonth: 340 },
  { category: "Транспорт", thisMonth: 300, lastMonth: 280 },
  { category: "Жильё", thisMonth: 800, lastMonth: 800 },
  { category: "Развлечения", thisMonth: 200, lastMonth: 250 },
];

export function SpendingTrends() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Сравнение расходов по месяцам</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis 
                dataKey="category"
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
                cursor={{ fill: 'rgba(0, 0, 0, 0.1)' }}
                contentStyle={{ background: 'hsl(var(--background))', border: '1px solid hsl(var(--border))' }}
                formatter={(value) => [`₽${value}`, '']}
              />
              <Bar 
                dataKey="thisMonth" 
                fill="hsl(var(--chart-1))" 
                name="Текущий месяц"
                radius={[4, 4, 0, 0]} 
              />
              <Bar 
                dataKey="lastMonth" 
                fill="hsl(var(--chart-2))" 
                name="Прошлый месяц"
                radius={[4, 4, 0, 0]} 
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}