//import logo from './logo.svg';
import React, {useState}from "react";
//import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses/Expenses.js";
import NewExpense from "./components/NewExpense/NewExpense.js";

import "./App.css";
const DUMMY_EXPENSES = [
  {
    id:'e1',
    title: "Car Insurence",
    Amount: 7000,
    date: new Date(2023, 7, 15),
  },
  {
    id:'e2',
    title: "Toilet Paper",
    Amount: 500,
    date: new Date(2023, 6, 5),
  },
  {
    id:'e3',
    title: "Shoping",
    Amount: 7000,
    date: new Date(2023, 2, 10),
  },
  {
    id:'e4',
    title: "Movie",
    Amount: 1000,
    date: new Date(2023, 5, 13),
  },
]
const App = () => {
  
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
     setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
     });
  };

    return (
      <>
        <div>
          <NewExpense onAddExpense={addExpenseHandler}/>
          <Expenses item={expenses}/>
        </div>
      </>
  );
}
export default App;
