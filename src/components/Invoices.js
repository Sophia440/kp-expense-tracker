import React from 'react'
import {Transaction} from "./Transaction";
import {useSelector} from "react-redux";

export const Invoices = () => {
    const {transactions} = useSelector((state) => state.transactions);

    let invoices = transactions.filter(transaction => transaction.amount >= 0);

    return (
        <div>
            <h4>Invoices</h4>
            <ul className="list">
                {invoices.map(transaction => (
                    <Transaction key={transaction.id} transaction={transaction} transactions={transactions}/>))}
            </ul>
        </div>
    )
}