import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card.js';

import './ExpenseItem.css';

const ExpenseItem = (props) => {

  // const title = props.title;
  // const amount = props.amount;
  // const LocationOfExpenditure = props.LocationOfExpenditure;

  const clickHandler = () =>{
      console.log('Clicked!!');
  }
  const deleteExpense = () =>{
    console.log('Delete expense!!');
}

  return (
    <Card className='expense-item'>
        <ExpenseDate date={props.date}/>
          <div className='expense-item_description'>
            <h2>{props.title}</h2>
            </div>
          <div className='LocationOfExpenditure mx-2'>
            <h3>{props.LocationOfExpenditure}</h3>
            </div>
          <div className='expense-item_price'>${props.Amount} </div>
          <button onClick={clickHandler}>Change title</button>
          <button onClick={deleteExpense}>Delete expense</button>

    </Card>  
)
  }

export default ExpenseItem;
