import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpenseList from "./ExpenseList";

const Expenses = ({ expenses }) => {
  const [expenseFilter, setExpenseFilter] = useState("2019");
  const expenseFilterHandler = (filterValue) => {
    setExpenseFilter(filterValue);
  };

  // this component is already rendering again because we are using filter
  // state here so we just need to manipulate our UI to make filter work
  const filterExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === expenseFilter
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        onChangeExpense={expenseFilterHandler}
        expFilterValue={expenseFilter}
      ></ExpensesFilter>
      <ExpenseList items={filterExpenses}></ExpenseList>
    </Card>
  );
};

export default Expenses;
