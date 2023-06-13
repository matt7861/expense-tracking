import React, { useState } from "react";
import "./ExpenseForm.css";

// ExpenseForm component which receives onSaveExpenseData and displayHandler as props
const ExpenseForm = ({ onSaveExpenseData, displayHandler }) => {
  // Define the initial state for the form
  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  // Define handler for input changes
  const userInputHandler = (event) => {
    setUserInput((prev) => {
      // Update the relevant state property based on the input name
      return { ...prev, [event.target.name]: event.target.value };
    });
  };

  // Define handler for form submission
  const submitHandler = (event) => {
    event.preventDefault(); // Prevent page reload

    // Prepare the data to be saved
    const expenseData = {
      title: userInput.title,
      amount: +userInput.amount,
      date: new Date(userInput.date),
    };

    // Invoke the onSaveExpenseData function passed as prop
    onSaveExpenseData(expenseData);
    // Invoke the displayHandler function to handle hiding/displaying the form
    displayHandler();
    // Reset form fields
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
          <label>Title</label>
          <input
            placeholder="Title"
            onChange={userInputHandler}
            value={userInput.title}
            name="title"
            type="text"
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
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
          <label>Date</label>
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
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
