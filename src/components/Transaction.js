import React from 'react';
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators} from "../state";

export const Transaction = ({transaction}) => {
    const dispatch = useDispatch();
    const {deleteTransaction} = bindActionCreators(actionCreators, dispatch);

    const sign = transaction.amount < 0 ? '-' : '+';

    return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
            {transaction.text} <span>{sign}{Math.abs(transaction.amount)}</span>
            <button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>x</button>
        </li>
    )
}