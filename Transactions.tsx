import { AddTransactionButton } from "@/components/transactions/AddTransactionButton";
import { TransactionList } from "@/components/transactions/TransactionList";

export function Transactions() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Транзакции</h1>
        <AddTransactionButton />
      </div>
      <TransactionList />
    </div>
  );
}