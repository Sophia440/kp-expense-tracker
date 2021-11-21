import React from 'react';
import {Transaction} from './Transaction';

export const TransactionList = ({transactions, setTransactions}) => {
    return (
        <>
            <h4>History</h4>
            <ul className="list">
                {transactions.map(transaction => (
                    <Transaction key={transaction.id} transaction={transaction} transactions={transactions}
                                 setTransactions={setTransactions}/>))}
            </ul>
        </>
    )
}