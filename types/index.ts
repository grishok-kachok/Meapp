export interface User {
  id: string;
  email: string;
  name: string;
  role: 'head' | 'member';
}

export interface Family {
  id: string;
  name: string;
  code: string;
  headOfFamily: string;
  members: User[];
}

export interface Transaction {
  id: string;
  userId: string;
  familyId: string;
  category: string;
  amount: number;
  type: 'income' | 'expense';
  date: string;
  description: string;
}

export interface Category {
  id: string;
  name: string;
  type: 'income' | 'expense';
  icon: string;
}