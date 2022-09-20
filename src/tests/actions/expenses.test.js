import { addExpense, removeExpense, editExpense } from '../../actions/expenses'

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

    const expenseData = {
        description: 'jojojo',
        note: 'im a note',
        amount: 200,
        createdAt: 100
    }

    const action = addExpense(expenseData);

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});


test('to setup add expense action object with default values', () => {
    const defaultData = {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
    }
    const action = addExpense();

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            ...defaultData
        }
    });
});