import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import selectExpenses from './selectors/expenses';

import moment from 'moment'

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css'

const store = configureStore();


const expenseOne = store.dispatch(addExpense({ description: 'Water BillZ', note: 'drink the water', amount: 300, createdAt: moment().add(4, 'days').valueOf() }))
const expenseTwo = store.dispatch(addExpense({ description: 'Gas Bill', note: '', amount: 200, createdAt: moment().add(1, 'days').valueOf() }))
const expenseThree = store.dispatch(addExpense({ description: 'Rent', note: 'tv/internet', amount: 1500, createdAt: moment().add(31, 'days').valueOf() }))
const expenseFour = store.dispatch(addExpense({ description: 'PetFood', amount: 2600, createdAt: moment().add(28, 'days').valueOf() }))


// store.dispatch(setTextFilter('pet'))

// setTimeout(() => {
//     store.dispatch(setTextFilter('bill'))
// }, 3000)

store.subscribe(() => {
    console.log('current state/ subscribed', store.getState())
})
const state = store.getState()
const visExpenses = selectExpenses(state.expenses, state.filters)


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))

