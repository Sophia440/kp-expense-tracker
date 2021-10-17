import React from 'react'

const balance = document.getElementById('balance');

// TODO find out how to call functions correctly
function increase() {
    let current = 0.0
    current += parseFloat(balance.innerText.substring(1));
    current += 1.0
    balance.innerText = "$" + current.toString() + ".00";
}

function decrease() {
    let current = 0.0
    current += parseFloat(balance.innerText.substring(1));
    current -= 1.0
    balance.innerText = "$" + current.toString() + ".00";
}

export const Balance = () => {
    return (
        <div>
            <h2>Your Balance</h2>
            <h3 id="balance">$0.00</h3>
            <button type="button" className="btn" onClick="increase()">+</button>
            <button type="button" className="btn" onClick="decrease()">–</button>
        </div>
    )
}