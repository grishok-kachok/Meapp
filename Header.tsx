import { Button } from "@/components/ui/button";
import { UserCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

export function Header() {
  const { logout } = useAuth();

  return (
    <header className="border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <UserCircle className="h-6 w-6" />
          <span className="text-xl font-bold">Семейный Бюджет</span>
        </Link>
        <nav className="flex items-center space-x-6">
          <Link to="/dashboard" className="text-sm font-medium hover:text-primary">
            Главная
          </Link>
          <Link to="/transactions" className="text-sm font-medium hover:text-primary">
            Транзакции
          </Link>
          <Link to="/analytics" className="text-sm font-medium hover:text-primary">
            Аналитика
          </Link>
          <Button variant="outline" onClick={logout}>
            Выйти
          </Button>
        </nav>
      </div>
    </header>
  );
}