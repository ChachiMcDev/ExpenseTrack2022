import expensesReducer from '../../reducers/expenses';
import moment from 'moment';

const expenses = [{
    id: '0',
    description: 'sock bill',
    note: '',
    amount: 0,
    createdAt: moment(0)

},
{
    id: '1',
    description: 'water bill',
    note: '',
    amount: 0,
    createdAt: moment(0)
},
{
    id: '2',
    description: 'descrip for id 2',
    note: '',
    amount: 3000,
    createdAt: moment(0)
}]

test('expense reducers', () => {

    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});


test('should add an expense', () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense: {
            id: '123',
            description: 'lalalala',
            note: '',
            amount: 2000,
            createdAt: moment(0)
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([
        ...expenses,
        {
            id: '123',
            description: 'lalalala',
            note: '',
            amount: 2000,
            createdAt: moment(0)
        }
    ]
    );
});


test('should remove an expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: 1
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual([
        ...expenses.filter((expense) => {
            return expense.id !== action.id;
        })
    ]);
});


test('should edit an expense by id', () => {
    const updates = {
        description: 'Big Daddy sock bill',
        note: 'adding note',
        amount: 7000,
        createdAt: moment(0)
    }
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates
    };

    const state = expensesReducer(expenses, action);

    expect(state).toEqual([
        {
            id: '0',
            description: 'Big Daddy sock bill',
            note: 'adding note',
            amount: 7000,
            createdAt: moment(0)

        },
        expenses[1],
        expenses[2]
    ])
})

test('should not edit expense if id not found', () => {
    const amount = 12000
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-10',
        amount
    };

    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expenses)
});