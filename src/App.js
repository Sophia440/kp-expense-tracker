import './App.css';
import {Header} from "./components/Header";
import {Balance} from "./components/Balance";
import {IncomeExpenses} from "./components/IncomeExpenses";
import {Tabs} from "./components/Tabs";
import {AddTransaction} from "./components/AddTransaction";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {TransactionList} from "./components/TransactionList";
import {Invoices} from "./components/Invoices";
import {Expenses} from "./components/Expenses";

function App() {
    return (
        <Router>
            <div>
                <Header/>
                <div className="wrapper">
                    <Balance/>
                    <IncomeExpenses/>
                    <Tabs/>
                    <Routes>
                        <Route path="list" element={<TransactionList/>}/>
                        <Route path="invoices" element={<Invoices/>}/>
                        <Route path="expenses" element={<Expenses/>}/>
                    </Routes>
                    <AddTransaction/>
                </div>
            </div>
        </Router>
    );
}

export default App;
