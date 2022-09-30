import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import { startAddExpense, addExpense, removeExpense, startRemoveExpense, editExpense, setExpenses, startSetExpenses, startEditExpense } from '../../actions/expenses'
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';


const uid = 'thisisfakeuidover123'
const mockStore = configureMockStore([thunk])
const defualtAuthState = { auth: { uid } }


beforeEach((done) => {

    const expensesData = {};
    expenses.forEach(({ id, description, note, amount, createdAt }) => {
        expensesData[id] = { description, note, amount, createdAt };
    });
    database.ref(`users/${uid}/expenses`).set(expensesData).then(() => done())
})



test('removeExpense to return object with id', () => {
    const action = removeExpense({ id: '123abc' });

    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('editExpense to return object with id and updates', () => {
    const action = editExpense('abc123', {
        description: 'blahdidyblah',
        amount: 123
    });

    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'abc123',
        updates: {
            description: 'blahdidyblah',
            amount: 123
        }
    });
});


test('addExpense to return object with expense properrties', () => {

    const action = addExpense(expenses[2]);

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]

    });
});

test('should add expense to database and store', (done) => {

    const store = mockStore(defualtAuthState)
    const expenseData = {
        description: 'Mouse',
        note: 'needed new',
        amount: 3000,
        createdAt: 1000
    }

    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions()
        expect(actions).toEqual([{
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        }]);

        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value')
    }).then((snap) => {
        expect(snap.val()).toEqual(expenseData)
        done()

    })
})

test('should add expense with defaults to database and store', (done) => {

    const store = mockStore(defualtAuthState)
    const defaultData = {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
    }

    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions()
        expect(actions).toEqual([{
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...defaultData
            }
        }])

        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value').then((snap) => {
            expect(snap.val()).toEqual(defaultData)
            done()
        })

    })
})


test('should setup set expense action object with data', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    })
});


test('should fetch expenses from firebase', (done) => {

    const store = mockStore(defualtAuthState)
    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        })
        done()
    })
})



test('should remove expense from database and store', (done) => {
    const store = mockStore(defualtAuthState)
    console.log(jasmine.DEFAULT_TIMEOUT_INTERVAL)
    store.dispatch(startRemoveExpense({ id: expenses[1].id })).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            id
        })
        return database.ref(`users/${uid}/expenses/${id}`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val()).toBeFalsy()

    })
    done()
});


test('should edit expense in database and store', () => {
    const store = mockStore(defualtAuthState)
    const updates = {
        description: "used to be blah, now just ahh yeah",
        note: "new note",
        amount: 50000
    }

    store.dispatch(startEditExpense(expenses[5].id, updates)).then(() => {
        const actions = store.getActions()

        expect(actions[0]).toEqual({
            type: 'EDIT_EXPENSE',
            id,
            updates
        })
    })
})

