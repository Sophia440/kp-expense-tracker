const initialState = {
    transactions: []
}

const reducer = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case "add_transaction":
            let newTransactionsAdded = [action.payload, ...state.transactions]
            localStorage.setItem('transactions', JSON.stringify(newTransactionsAdded))
            return {
                ...state,
                transactions: newTransactionsAdded
            }
        case "delete_transaction":
            let newTransactionsDeleted = state.transactions.filter(transaction => transaction.id !== action.payload)
            localStorage.setItem('transactions', JSON.stringify(newTransactionsDeleted))
            return {
                ...state,
                transactions: newTransactionsDeleted
            }
        case "clear_list":
            localStorage.clear()
            return {
                ...state,
                transactions: []
            }
        default:
            return state
    }
}

export default reducer;