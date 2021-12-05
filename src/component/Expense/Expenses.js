//Note
//Key added in line 24 - Its added to improve efficiency. As React will know where to update element
// Also when its not present, React will update all the to accomodate the newly added element
//Still confused wtach lecture 65 of React

import Card from "../UI/Card.js";
import "./Expenses.css";
import "./ExpensesFilter.js";
import ExpensesFilter from "./ExpensesFilter.js";
import { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart.js";

function Expenses(props) {
  const [enteredYear, setEnteredYear] = useState("");
  const selectYearHandler = function (data) {
    setEnteredYear(data);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    if (!enteredYear) return props.expenses;
    return expense.date.getFullYear() === +enteredYear;
  });

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={enteredYear}
          onSelectYear={selectYearHandler}
        />
        <ExpenseChart expenses={filteredExpenses} />
        <ExpenseList items={filteredExpenses} />
      </Card>
    </li>
  );
}

export default Expenses;
