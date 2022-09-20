import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFoundPage from '../components/NotFoundPage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import Header from '../components/Header';
import Footer from '../components/Footer';



//browser router needs a single root element!
const AppRouter = () => (

    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" exact={true} component={ExpenseDashboardPage}>

                </Route>
                <Route path="/create" component={AddExpensePage}>

                </Route>
                <Route path="/edit/:id" component={EditExpensePage}>

                </Route>
                <Route path="/help" component={HelpPage}>

                </Route>
                <Route component={NotFoundPage}>

                </Route>
            </Switch>
            <Footer />
        </div>
    </BrowserRouter>
)



export default AppRouter;