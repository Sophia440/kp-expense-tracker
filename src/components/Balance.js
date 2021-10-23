import React from 'react'

const {useState} = React;

export const Balance = () => {
    const [balance, setBalance] = useState(0);

    return (
        <div>
            <h2>Your Balance</h2>
            <h3 id="balance">${balance}.00</h3>
            <button type="button" className="btn" onClick={() => setBalance(balance + 1)}>+</button>
            <button type="button" className="btn" onClick={() => setBalance(balance - 1)}>–</button>
        </div>
    )
}