import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (prop) => {
  const [isFromVisible, setFormVisible] = useState(false);
  const saveExpenseDataHandler = function (data) {
    const formData = {
      ...data,
      id: Math.random().toString(),
    };
    //console.log(formData);
    prop.onNewExpense(formData);
    setFormVisible(false);
  };
  const showFormHandler = function () {
    setFormVisible(true);
  };
  const stopEditingHandler = function (data) {
    setFormVisible(data);
  };

  return (
    <div className="new-expense">
      {!isFromVisible && (
        <button onClick={showFormHandler}>Add New Expense</button>
      )}
      {isFromVisible && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        ></ExpenseForm>
      )}
    </div>
  );
};

export default NewExpense;
