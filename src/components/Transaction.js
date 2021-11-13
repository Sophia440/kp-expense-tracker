import React, {useState, useEffect} from 'react';

export const Transaction = ({transaction}) => {
    const [transactions, setTransactions] = useState(
        JSON.parse(localStorage.getItem('transactions')) || []
    );

    // useEffect(() => {
    //     localStorage.setItem('transactions', JSON.stringify(transactions))
    // }, [transactions]);

    const deleteTransaction = (id) => {
        setTransactions(transactions.filter((transaction) => transaction.id !== id))
        // TODO figure out why transaction isn't removed
        //localStorage.setItem('transactions', JSON.stringify(transactions))
    };

    const sign = transaction.amount < 0 ? '-' : '+';

    return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
            {transaction.text} <span>{sign}{Math.abs(transaction.amount)}</span>
            <button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>x</button>
        </li>
    )
}