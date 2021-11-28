import React from 'react'
import {Transaction} from "./Transaction";
import {useSelector} from "react-redux";

export const Expenses = () => {
    const {transactions} = useSelector((state) => state.transactions);

    let expenses = transactions.filter(transaction => transaction.amount < 0);

    return (
        <div>
            <h4>Expenses</h4>
            <ul className="list">
                {expenses.map(transaction => (
                    <Transaction key={transaction.id} transaction={transaction} transactions={transactions}/>))}
            </ul>
        </div>
    )
}