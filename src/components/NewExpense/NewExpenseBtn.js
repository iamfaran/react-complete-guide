import "./NewExpenseBtn.css";

const NewExpenseBtn = (props) => {
  console.log(props);
  const showFormBtnHandler = () => {
    props.onExpenseBtn(true);
  };

  return <button onClick={showFormBtnHandler}>Add New Expense</button>;
};
export default NewExpenseBtn;
