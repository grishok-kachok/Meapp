import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatDate } from "@/lib/utils";
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";

const transactions = [
  {
    id: "1",
    date: "2024-03-20",
    description: "Покупка продуктов",
    category: "Продукты",
    amount: -120.50,
    type: "expense"
  },
  {
    id: "2",
    date: "2024-03-19",
    description: "Зарплата",
    category: "Доход",
    amount: 3000.00,
    type: "income"
  },
  {
    id: "3",
    date: "2024-03-18",
    description: "Оплата интернета",
    category: "Коммунальные услуги",
    amount: -50.00,
    type: "expense"
  },
  {
    id: "4",
    date: "2024-03-17",
    description: "Кино",
    category: "Развлечения",
    amount: -15.00,
    type: "expense"
  }
];

export function TransactionList() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Дата</TableHead>
          <TableHead>Описание</TableHead>
          <TableHead>Категория</TableHead>
          <TableHead className="text-right">Сумма</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map((transaction) => (
          <TableRow key={transaction.id}>
            <TableCell>{formatDate(new Date(transaction.date))}</TableCell>
            <TableCell>{transaction.description}</TableCell>
            <TableCell>{transaction.category}</TableCell>
            <TableCell className="text-right">
              <span className={`flex items-center justify-end ${
                transaction.type === "income" ? "text-green-500" : "text-red-500"
              }`}>
                {transaction.type === "income" ? <ArrowUpIcon className="mr-1 h-4 w-4" /> : <ArrowDownIcon className="mr-1 h-4 w-4" />}
                ₽{Math.abs(transaction.amount).toFixed(2)}
              </span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}