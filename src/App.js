import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpenses";

const INITITAL_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {

  const [expenses, setExpenses] = useState(INITITAL_EXPENSES)
  const addExpenseHandler = (expenseData) => {
    
    // Prev Expenses Array stored in expenses var, also usestate 
    //saves value even when we exit the function
    //prev state remembers the value that's how it works
    setExpenses((prevState)=>{
      console.log(expenses)
      debugger
      return [expenseData, ...prevState]
    })
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses expenses={expenses}></Expenses>;
    </div>
  );
};

export default App;
