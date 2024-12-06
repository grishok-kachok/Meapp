interface ChartTooltipProps {
  active?: boolean;
  payload?: any[];
  formatter?: (value: number) => [string, string];
}

export function ChartTooltip({ active, payload, formatter }: ChartTooltipProps) {
  if (!active || !payload?.length) {
    return null;
  }

  return (
    <div className="rounded-lg border bg-background p-2 shadow-sm">
      {payload.map((entry, index) => {
        const [value, label] = formatter ? formatter(entry.value) : [entry.value, entry.name];
        return (
          <div key={index} className="flex items-center space-x-2">
            <div className="h-2 w-2 rounded-full" style={{ background: entry.color }} />
            <span>{label}: {value}</span>
          </div>
        );
      })}
    </div>
  );
}