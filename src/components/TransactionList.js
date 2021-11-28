import React from 'react';
import {Transaction} from './Transaction';
import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators} from "../state";

export const TransactionList = () => {
    const {transactions} = useSelector((state) => state.transactions);

    // TODO revive localStorage (deleted after adding redux)
    //const {transactions} = JSON.parse(localStorage.getItem('transactions')) || [];

    const dispatch = useDispatch();
    const {clearTransactionList} = bindActionCreators(actionCreators, dispatch);

    return (
        <>
            <h4>History</h4>
            <ul className="list">
                {transactions.map(transaction => (
                    <Transaction key={transaction.id} transaction={transaction} transactions={transactions}/>))}
            </ul>
            <button className="btn" onClick={clearTransactionList}>Clear</button>
        </>
    )
}