import uuid from 'uuid';
import database from '../firebase/firebase';
//ACTIONS

// component calls action generator
// action generator returns object 
//component dispatches object
// redux sstore changes

//component calls action genrator
//action generaotr returns function
//component disptatches function (?)
//function runs (has the ability to dispatch other actions and do whatever it wants)

// ADD_EXPENSE
const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
})


export const startAddExpense = (expenseData = {}) => {

    return (dispatch) => {
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenseData;

        const expense = { description, note, amount, createdAt }
        return database.ref('expenses').push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }))
        })

    };
};

// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})


export const startRemoveExpense = ({ id }) => {
    return (dispatch) => {
        const { } = { id }
        return database.ref(`expenses/${id}`).get().then((snapshot) => {
            snapshot.val().remove()
            dispatch(removeExpense({ id: snapshot.val().key }))
        })
    }
}



// EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

export const startEditExpense = (id, updates) => {

    return (dispatch) => {
        database.ref('expenses').filter((ex) => {
            return ref.key !== ref.key
        })
    }
}


//SET_EXPENSES
export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
})

export const startSetExpenses = () => {

    return (dispatch) => {

        return database.ref('expenses').once('value').then((snapshot) => {
            const expenses = [];
            snapshot.forEach((childSnapshot) => {
                expenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });

            dispatch(setExpenses(expenses));
        })
    }
}


export { addExpense, removeExpense, editExpense }