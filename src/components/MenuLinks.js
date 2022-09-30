import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { startLogout } from '../actions/auth';



export const MenuLinks = ({ startLogout }) => (
    <div>
        <NavLink to="/dashboard" activeClassName='is-active' exact={true}>Dash</NavLink>
        <NavLink to="/create" activeClassName='is-active'>Create</NavLink>
        <NavLink id="logout" to="/" onClick={startLogout} activeClassName='is-active'>LogOut</NavLink>
    </div>
)



const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(MenuLinks)