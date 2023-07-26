import React, { useState } from 'react';
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card.js';
import ExpenseFilter from "./ExpensesFilter";
import './Expenses.css';

const Expenses = (props) => {

  const [filteredYear , setFilteredYear] = useState('2020');
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }
  
    return(
   <Card className='expenses'>
    <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}  />
          <ExpenseItem
          title={props.item[0].title}
          Amount={props.item[0].Amount}
          date={props.item[0].date}
          LocationOfExpenditure={props.item[0].LocationOfExpenditure}
        ></ExpenseItem>
        <ExpenseItem
          title={props.item[1].title}
          Amount={props.item[1].Amount}
          date={props.item[1].date}
          LocationOfExpenditure={props.item[1].LocationOfExpenditure}
        ></ExpenseItem>
        <ExpenseItem
          title={props.item[2].title}
          Amount={props.item[2].Amount}
          date={props.item[2].date}
          LocationOfExpenditure={props.item[2].LocationOfExpenditure}
        ></ExpenseItem>
        <ExpenseItem
          title={props.item[3].title}
          Amount={props.item[3].Amount}
          date={props.item[3].date}
          LocationOfExpenditure={props.item[3].LocationOfExpenditure}
        ></ExpenseItem>
   </Card>
    );
}

export default Expenses;
