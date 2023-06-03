import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = ({ onAddExpense }) => {
  const [displayForm, setDisplayForm] = useState(false);

  const onSaveExpenseData = (data) => {
    const expenseData = {
      ...data,
      id: Math.random().toString(),
    };

    onAddExpense(expenseData);
  };

  const displayHandler = () => {
    setDisplayForm((prev) => !prev);
  };

  return (
    <div className="new-expense">
      {!displayForm && (
        <button onClick={displayHandler}>Add New Expense</button>
      )}
      {displayForm && (
        <ExpenseForm
          displayHandler={displayHandler}
          onSaveExpenseData={onSaveExpenseData}
        />
      )}
    </div>
  );
};

export default NewExpense;
