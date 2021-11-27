import React from 'react';

export const IncomeExpenses = ({transactions}) => {
    const amounts = transactions.map(transaction => transaction.amount);
    const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += parseInt(item)), 0)
        .toFixed(2);
    const expense = (amounts
        .filter(item => item < 0)
        .reduce((acc, item) => (acc += parseInt(item)), 0) * -1)
        .toFixed(2);
    return (
        <div className="inc-exp-container">
            <div>
                <h2>Income</h2>
                <p className="add-money">+${income}</p>
            </div>
            <div>
                <h2>Expense</h2>
                <p className="subtract-money">-${expense}</p>
            </div>
        </div>
    )
}