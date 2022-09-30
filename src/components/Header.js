import React from 'react';
import { connect } from 'react-redux';
import MenuLinks from './MenuLinks'



export const Header = ({ isAuthenticated }) => (
    <header>
        <h1>Expensify Header</h1>


        <div className="menu">Menu on the right</div>





        {isAuthenticated ? <MenuLinks /> : ""}


    </header>
)

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.uid
})


export default connect(mapStateToProps)(Header)




