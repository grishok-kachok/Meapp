export function formatCurrency(amount: number): string {
  return `₽${Math.abs(amount).toFixed(2)}`;
}

export function formatTooltipCurrency(value: number): [string, string] {
  return [`₽${value}`, 'Сумма'];
}