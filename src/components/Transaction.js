import React from 'react';

export const Transaction = ({transaction, transactions, setTransactions}) => {

    const deleteTransaction = (id) => {
        setTransactions(transactions.filter((transaction) => transaction.id !== id))
    };

    const sign = transaction.amount < 0 ? '-' : '+';

    return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
            {transaction.text} <span>{sign}{Math.abs(transaction.amount)}</span>
            <button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>x</button>
        </li>
    )
}