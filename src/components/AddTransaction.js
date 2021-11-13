import React, {useState, useEffect} from 'react'
import {v4} from 'uuid'
import {randomColor} from 'randomcolor'

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const [transactions, setTransactions] = useState(
        JSON.parse(localStorage.getItem('transactions')) || []
    );

    useEffect(() => {
        localStorage.setItem('transactions', JSON.stringify(transactions))
    }, [transactions]);

    const newTransaction = () => {
        if (text.trim() !== '') {
            const newTransaction = {
                id: v4(),
                text: text,
                amount: amount,
                color: randomColor({
                    luminosity: 'light'
                })

            };
            setTransactions((transactions) => [...transactions, newTransaction])
        } else {
            alert('Input something');
        }
        setText('')
        setAmount(0)
    }

    return (
        <>
            <h4>Add new transaction</h4>
            <form>
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
                <button className="btn" onClick={newTransaction}>Add transaction</button>
            </form>
        </>
    )
}