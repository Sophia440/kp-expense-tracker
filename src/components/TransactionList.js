import React, { useState } from 'react';
import { Transaction } from './Transaction';

export const TransactionList = () => {
    const [transactions] = useState(
        JSON.parse(localStorage.getItem('transactions')) || []
    );

    return (
        <>
            <h4>History</h4>
            <ul className="list">
                {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
            </ul>
        </>
    )
}