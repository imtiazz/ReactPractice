import { useState } from "react/cjs/react.development";
import "./ExpenseForm.css";
const ExpenseForm = function (prop) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = function (event) {
    setEnteredTitle(event.target.value);
    //Use if state depend on previous value like increasing the counter
    // setEnteredTitle((prevState)=>{
    //   return {...prevState,enteredTitle:event.target.value};
    // })
  };

  const amountChangeHandler = function (event) {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = function (event) {
    setEnteredDate(event.target.value);
  };

  const submitHandler = function (event) {
    //console.log("imtiaz");
    event.preventDefault();
    const enteredData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    if (!enteredTitle || !enteredAmount || !enteredDate) return;

    prop.onSaveExpenseData(enteredData);
    setEnteredDate("");
    setEnteredTitle("");
    setEnteredAmount("");
  };
  const cancelClickHandler = function () {
    prop.onCancel(false);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step=".01"
            onChange={amountChangeHandler}
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="01/01/2019"
            max="12/12/2023"
            onChange={dateChangeHandler}
            value={enteredDate}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
          <button type="button" onClick={cancelClickHandler}>
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
};
export default ExpenseForm;
