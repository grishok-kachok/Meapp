import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";

interface TransactionTypeProps {
  type: 'income' | 'expense';
  amount: number;
}

export function TransactionType({ type, amount }: TransactionTypeProps) {
  const Icon = type === 'income' ? ArrowUpIcon : ArrowDownIcon;
  const colorClass = type === 'income' ? 'text-green-500' : 'text-red-500';

  return (
    <span className={`flex items-center justify-end ${colorClass}`}>
      <Icon className="mr-1 h-4 w-4" />
      ₽{Math.abs(amount).toFixed(2)}
    </span>
  );
}