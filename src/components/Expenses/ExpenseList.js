import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";
const ExpenseList = (props) => {
  if (props.items.length === 0) {
    return <h3 className="expenses-list__fallback"> No expenses found!</h3>;
  }
  if (props.items.length > 0) {
    return (
      <ul className="expenses-list">
        {props.items.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            key={expense.id}
          ></ExpenseItem>
        ))}
        ;
      </ul>
    );
  }
};

export default ExpenseList;
