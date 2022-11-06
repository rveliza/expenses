import './ExpenseItem.css';

const ExpenseItem = () => {
    const expenseDate = new Date(2023, 3, 28);
    // Fri Apr 28 2023 00:00:00 GMT-0400 (hora de verano oriental)
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 294.67;

    return (
        <div className='expense-item'>
            <div>{expenseDate.toLocaleDateString()}</div>
            <div className='expense-item__description'>
                <h2>{expenseTitle}</h2>
                <div className='expense-item__price'>{expenseAmount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;