import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import NotFoundPage from '../components/NotFoundPage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute'

export const history = createHistory();

//browser router needs a single root element!
const AppRouter = () => (

    <Router history={history}>
        <div>
            <Header />
            <Switch>

                <Route path="/" exact={true} component={LoginPage} />

                <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />

                <PrivateRoute path="/create" component={AddExpensePage} />

                <PrivateRoute path="/edit/:id" component={EditExpensePage} />

                <Route path="/help" component={HelpPage}>

                </Route>
                <Route component={NotFoundPage} />

            </Switch>
            <Footer />
        </div>
    </Router>
)



export default AppRouter;