import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PlusIcon } from "lucide-react";

export function AddTransactionButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <PlusIcon className="mr-2 h-4 w-4" />
          Добавить транзакцию
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Добавить новую транзакцию</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="type">Тип</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Выберите тип" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="income">Доход</SelectItem>
                <SelectItem value="expense">Расход</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="amount">Сумма</Label>
            <Input id="amount" type="number" step="0.01" placeholder="0.00" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="category">Категория</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Выберите категорию" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="food">Продукты</SelectItem>
                <SelectItem value="transport">Транспорт</SelectItem>
                <SelectItem value="housing">Жильё</SelectItem>
                <SelectItem value="entertainment">Развлечения</SelectItem>
                <SelectItem value="utilities">Коммунальные услуги</SelectItem>
                <SelectItem value="healthcare">Здравоохранение</SelectItem>
                <SelectItem value="education">Образование</SelectItem>
                <SelectItem value="shopping">Покупки</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="description">Описание</Label>
            <Input id="description" placeholder="Введите описание транзакции" />
          </div>
        </div>
        <Button className="w-full">Сохранить</Button>
      </DialogContent>
    </Dialog>
  );
}