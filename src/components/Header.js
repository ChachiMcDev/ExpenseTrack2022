import React from 'react';
import { NavLink } from 'react-router-dom';
import ExpenseSummary from './ExpenseSummary';



export default () => (
    <header>
        <h1>Expensify Header</h1>

        <ExpenseSummary />
        <div className="menu">Menu on the right</div>
        <div>
            <NavLink to="/" activeClassName='is-active' exact={true}>Dash</NavLink>
            <NavLink to="/create" activeClassName='is-active'>Create</NavLink>

        </div>

    </header>
)





