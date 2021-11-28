import React from 'react'
import {useSelector} from "react-redux"

export const Balance = () => {
    const {transactions} = useSelector((state) => state.transactions);

    const amounts = transactions.map(transaction => transaction.amount);

    const total = amounts.reduce((acc, item) => (acc += parseInt(item)), 0).toFixed(2);

    return (
        <div>
            <h2>Your Balance</h2>
            <h3>${total}</h3>
        </div>
    )
}