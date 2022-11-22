import './Expenses.css';
import ExpensesChart from './ExpensesChart';
import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';

const Expenses = props => {
    const [filteredYear, setFilteredYear] = useState('2022');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.items.filter(expense => {
        const expenseDate = expense.date.getFullYear().toString();
        return expenseDate === filteredYear;
    });

    

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList items={filteredExpenses} />
            </Card>

        </div>
    );
}

export default Expenses;