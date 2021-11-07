import React from 'react'

export const AddTransaction = () => {
    return (
        <>
            <h4>Add new transaction</h4>
            <form>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" className="form-field" placeholder="Enter text..."/>
                </div>
                <div className="form-control">
                    <label htmlFor="amount"
                    >Amount <br/>
                        (negative - expense, positive - income)</label
                    >
                    <input type="number" placeholder="Enter amount..."/>
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    )
}