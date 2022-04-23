import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";

const Expenses = ({ expenses }) => {
  const [expenseFilter, setExpenseFilter] = useState("2019");
  const expenseFilterHandler = (filterValue) => {
    setExpenseFilter(filterValue);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
        onChangeExpense={expenseFilterHandler}
        expFilterValue={expenseFilter}
      ></ExpensesFilter>

      {expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          key={expense.id}
        ></ExpenseItem>
      ))}
    </Card>
  );
};

export default Expenses;
