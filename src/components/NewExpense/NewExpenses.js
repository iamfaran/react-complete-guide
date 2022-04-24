import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import NewExpenseBtn from "./NewExpenseBtn";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  };

  if (!showForm) {
    return (
      <div className="new-expense">
        <NewExpenseBtn onExpenseBtn={setShowForm}></NewExpenseBtn>
      </div>
    );
  }
  return (
    <div className="new-expense">
      {/* <NewExpenseBtn></NewExpenseBtn> */}
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onHideForm={setShowForm}
      />
    </div>
  );
};

export default NewExpense;
