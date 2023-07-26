import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card.js";
import ExpenseFilter from "./ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {props.item.map((expense) => (
        <ExpenseItem
          key= {expense.id}
          title={expense.title}
          Amount={expense.Amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
