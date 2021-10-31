import React from 'react';

export const IncomeExpenses = () => {
    return (
        <div className="inc-exp-container">
            <div>
                <h2>Income</h2>
                <p className="add-money">+$0.00</p>
            </div>
            <div>
                <h2>Expense</h2>
                <p className="subtract-money">-$0.00</p>
            </div>
        </div>
    )
}