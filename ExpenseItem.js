import React, { useState} from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card.js';

import './ExpenseItem.css';

const ExpenseItem = (props) => {

  // const title = props.title;
  // const amount = props.amount;
  // const LocationOfExpenditure = props.LocationOfExpenditure;
  const [title, setTitle] = useState(props.title);
  const [Amount, setAmount] = useState(props.Amount);


  const clickHandler = () =>{
    setTitle('Updated!!');
    console.log(title);
  }
  const changeAmount = () =>{
    setAmount('100$');
    console.log(Amount);
  }

  return (
    <Card className='expense-item'>
        <ExpenseDate date={props.date}/>
          <div className='expense-item_description'>
            <h2>{title}</h2>
            </div>
          <div className='LocationOfExpenditure mx-2'>
            <h3>{props.LocationOfExpenditure}</h3>
            </div>
          <div className='expense-item_price'>${Amount} </div> 
          <button onClick={clickHandler}>Change title</button>
          <button onClick={changeAmount}>Change Amount</button>

    </Card>  
)
  }

export default ExpenseItem;
