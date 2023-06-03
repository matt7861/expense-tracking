import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ({ onSaveExpenseData, displayHandler }) => {
  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const userInputHandler = (event) => {
    setUserInput((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(userInput.date),
    };
    onSaveExpenseData(expenseData);
    displayHandler();
    setUserInput({
      title: "",
      amount: "",
      date: "",
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input
            placeholder="Title"
            onChange={userInputHandler}
            value={userInput.title}
            name="title"
            type="text"
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input
            placeholder="Amount"
            onChange={userInputHandler}
            value={userInput.amount}
            name="amount"
            type="number"
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input
            value={userInput.date}
            name="date"
            onChange={userInputHandler}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={displayHandler}>Cancel</button>
        <button stype="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
