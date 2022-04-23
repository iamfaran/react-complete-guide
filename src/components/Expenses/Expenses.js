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

  // this component is already rendering again because we are using filter
  // state here so we just need to manipulate our UI to make filter work
  const filterExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === expenseFilter
  );
  console.log(filterExpenses);

  return (
    <Card className="expenses">
      <ExpensesFilter
        onChangeExpense={expenseFilterHandler}
        expFilterValue={expenseFilter}
      ></ExpensesFilter>

      {filterExpenses.map((expense) => (
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
