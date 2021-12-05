//Notes
//Building app from smaller component is called composition.

import logo from "./logo.svg";
import "./App.css";
import Expenses from "./component/Expense/Expenses";
import NewExpense from "./component/NewExpense/NewExpense";
import { useState } from "react";

const dummy_Data = [
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

function App() {
  const [expenses, setExpenses] = useState(dummy_Data);

  const newExpenseHandler = function (data) {
    setExpenses((prevExpenses) => [data, ...prevExpenses]);
    //setExpenses([data,...dummy_Data]);
    //console.log(data);
  };
  return (
    <div>
      <NewExpense onNewExpense={newExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

// function arrayDiff(a, b) {
//   let arrDiff;
//   let arrDiffResult = [];
//   //debugger;
//   if (a.length === 0) return b;
//   if (b.length === 0) return a;
//   b.forEach((bEl, bIndex) => {
//     a.forEach((aEl, aIndex) => {
//       if (bEl === aEl) a.slice(aIndex);
//     });
//   });
//   return a;
// }

// console.log(arrayDiff([1, 2, 3], [1, 2]));

// function list(names) {
//   if (Array.isArray(names) && !names.length) return "";
//   if (names.length === 1) return names[0].name;
//   return names.reduce(function addNames(init, nameEl, index) {
//     const opList =
//       index === length - 1
//         ? `${init},${nameEl.name}`
//         : `${init}&${nameEl.name}`;
//     return opList.substring(1);
//   }, "");

//   //your code here
// }

// console.log(list());

export default App;
