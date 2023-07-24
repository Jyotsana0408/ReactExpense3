//import logo from './logo.svg';
import React from "react";
//import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses/Expenses.js";
import NewExpense from "./components/NewExpense/NewExpense.js";

import "./App.css";

const App = () => {
  const expenses = [
    {
      title: "Car Insurence",
      Amount: 50000,
      date: new Date(2023, 7, 15),
      LocationOfExpenditure: "CarAgency",
    },
    {
      title: "Toilet Paper",
      Amount: 500,
      date: new Date(2023, 6, 5),
      LocationOfExpenditure: "Mall",
    },
    {
      title: "Shoping",
      Amount: 7000,
      date: new Date(2023, 2, 10),
      LocationOfExpenditure: "Clothes",
    },
    {
      title: "Movie",
      Amount: 1000,
      date: new Date(2023, 5, 13),
      LocationOfExpenditure: "Movie",
    },
  ];

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(Expenses, {item: expenses })
  // );

    return (
      <>
        <div>
          <NewExpense/>
          <Expenses item={expenses}/>
        </div>
      </>
  );
}
export default App;
