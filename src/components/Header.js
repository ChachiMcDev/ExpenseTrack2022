import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectTotalExpenses from '../selectors/expenses-total';
import numeral from 'numeral';


export const Header = (props) => (
    <header>
        <h1>Expensify Header</h1>
        <p>You have {props.totalExpenses} amount of stuffs</p>
        <div className="menu">Menu on the right</div>
        <div>
            <NavLink to="/" activeClassName='is-active' exact={true}>Dash</NavLink>
            <NavLink to="/create" activeClassName='is-active'>Create</NavLink>

        </div>

    </header>
)



const mapStateToProps = (state) => {
    console.log('state:', state)
    return {
        //  expenses: selectExpenses(state.expenses, state.filters)
        totalExpenses: numeral(selectTotalExpenses(selectExpenses(state.expenses, state.filters)) / 100).format('$0,0.00')
    };
};

export default connect(mapStateToProps)(Header);
//numeral(amount / 100).format('$0,0.00')