import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';


// ...rest is the remaining destructored 
export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...restofprops
}) => (
    <Route {...restofprops} component={(props) => (
        isAuthenticated ? (<Component {...props} />) : (<Redirect to="/" />)
    )} />
)

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
})

export default connect(mapStateToProps)(PrivateRoute)