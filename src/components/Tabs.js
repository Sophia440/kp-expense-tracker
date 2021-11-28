import React from 'react';
import {Link} from "react-router-dom";

export const Tabs = () => {
    // TODO fix hover on tabs (primary-nav a:hover)
    return (
        <nav>
            <ul className="tabs primary-nav">
                <Link to="/list" className="tabs__link">
                    <li className="tabs__item">
                        History
                    </li>
                </Link>
                <Link to="/invoices" className="tabs__link">
                    <li className="tabs__item">
                        Income
                    </li>
                </Link>
                <Link to="/expenses" className="tabs__link">
                    <li className="tabs__item">
                        Expenses
                    </li>
                </Link>
            </ul>
        </nav>
    )
}