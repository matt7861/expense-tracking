import { useState } from "react";
import ExpenseItems from "./components/Expenses/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";
import ExpensesFilter from "./components/Expenses/ExpensesFilter";
import NewExpense from "./components/NewExpense/NewExpense";

const INITIAL_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2020, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2022, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 300,
    date: new Date(2019, 4, 12),
  },
  {
    id: "e5",
    title: "New Desk (Wooden)",
    amount: 100,
    date: new Date(2019, 3, 12),
  },
  {
    id: "e6",
    title: "New Desk (Wooden)",
    amount: 50,
    date: new Date(2019, 1, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const onAddExpense = (expense) => {
    setExpenses((prev) => [...prev, expense]);
  };

  return (
    <div>
      <NewExpense onAddExpense={onAddExpense} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
