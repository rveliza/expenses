import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
    // const [enteredTitle, setEnteredTitle] = useState('');
    // const [enteredAmount, setEnteredAmount] = useState('');
    // const [enteredDate, setEnteredDate] = useState('');
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    });

    const titleChangeHandler = event => {
        setUserInput({
            enteredTitle: event.target.value,
            ...userInput
        });
    }
    const amountChangeHandler = event => {
        setUserInput({
            enteredAmount: event.target.value,
            ...userInput
        });
    }
    const dateChangeHandler = event => {
        setUserInput({
            enteredDate: event.target.value,
            ...userInput
        });
    }

    return(
        <form action="">
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label htmlFor="">Title</label>
                    <input type="text" name="" id="" onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label htmlFor="">Amount</label>
                    <input type="number" name="" id="" min="0.01" step="0.01" onChange={amountChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label htmlFor="">Date</label>
                    <input type="date" name="" id="" min="2022-01-01" max="2023-01-01" onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );

}

export default ExpenseForm;