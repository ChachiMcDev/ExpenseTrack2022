import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensify Header</h1>
        <div className="menu">Menu on the right</div>
        <div>
            <NavLink to="/" activeClassName='is-active' exact={true}>Dash</NavLink>
            <NavLink to="/create" activeClassName='is-active'>Create</NavLink>

        </div>

    </header>
)

export default Header;