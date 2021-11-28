import React, {useState} from 'react'
import {v4} from 'uuid'
import {randomColor} from 'randomcolor'
import {useDispatch} from "react-redux";
import {bindActionCreators} from 'redux'
import {actionCreators} from "../state/index"

export const AddTransaction = () => {
    const dispatch = useDispatch();
    const {addTransaction} = bindActionCreators(actionCreators, dispatch);

    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const onSubmit = e => {
        e.preventDefault();
        if (text.trim() !== '') {
            const newTransaction = {
                id: v4(),
                text: text,
                amount: amount,
                color: randomColor({
                    luminosity: 'light'
                })
            }
            addTransaction(newTransaction);
        } else {
            alert('Input something');
        }
        setText('')
        setAmount(0)
    }

    return (
        <>
            <h4>Add new transaction</h4>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)}
                           placeholder="Enter text..."/>
                </div>
                <div className="form-control">
                    <label htmlFor="amount"
                    >Amount <br/>
                        (negative - expense, positive - income)</label
                    >
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}
                           placeholder="Enter amount..."/>
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    )
}