export const addTransaction = (transaction) => {
    console.log("Transaction", transaction.id, "was added")
    return (dispatch) => {
        dispatch({
            type: "add_transaction",
            payload: transaction
        });
    }
}

export const deleteTransaction = (id) => {
    console.log("Transaction", id, "was deleted")
    return (dispatch) => {
        dispatch({
            type: "delete_transaction",
            payload: id
        });
    }
}

export const clearTransactionList = () => {
    console.log("Transaction list was cleared")
    return (dispatch) => {
        dispatch({
            type: "clear_list"
        });
    }
}