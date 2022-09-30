import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';


// ...rest is the remaining destructored 
export const PublicRoute = ({
    isAuthenticated,
    component: Component,
    ...restofprops
}) => (
    <Route {...restofprops} component={(props) => (
        isAuthenticated ? (<Redirect to="/dashboard" />) : (<Component {...props} />)
    )} />
)

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
})

export default connect(mapStateToProps)(PublicRoute)