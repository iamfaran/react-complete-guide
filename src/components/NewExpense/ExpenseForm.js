import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setEnteredAmount] = useState("");
  const [date, setEnteredDate] = useState("");

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: title,
      amount: +amount,
      date: new Date(date),
    };
    props.onSaveExpenseData(expenseData);
    // Two way binding
    //meaning gotta use variable of useState in input El
    setTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  const hideFormHandler = () => {
    props.onHideForm(false);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} value={title} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={amount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value={date}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={hideFormHandler}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
