import './App.css';
import {useState} from 'react'
import {Header} from "./components/Header";
import {Balance} from "./components/Balance";
import {IncomeExpenses} from "./components/IncomeExpenses";
import {TransactionList} from "./components/TransactionList";
import {AddTransaction} from "./components/AddTransaction";

function App() {
    const [transactions, setTransactions] = useState(
        JSON.parse(localStorage.getItem('transactions')) || []
    );

    return (
        <div>
            <Header/>
            <div className="wrapper">
                <Balance transactions={transactions}/>
                <IncomeExpenses transactions={transactions}/>
                <TransactionList transactions={transactions} setTransactions={setTransactions}/>
                <AddTransaction transactions={transactions} setTransactions={setTransactions}/>
            </div>
        </div>
    );
}

export default App;
