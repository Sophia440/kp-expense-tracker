import './App.css';

function App() {
    return (
        <div>
            <header>
                <h1>Expense Tracker</h1>
            </header>

            <main>
                <div className="wrapper">
                    <h2>Your Balance</h2>
                    <h3 id="balance">$0.00</h3>
                    <button type="button" className="btn" onClick="increase()">+</button>
                    <button type="button" className="btn" onClick="decrease()">–</button>
                </div>
            </main>
            <script src="script.js"></script>
        </div>
    );
}

export default App;
