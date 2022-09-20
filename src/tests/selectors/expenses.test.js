import selectExpenses from '../../selectors/expenses';
import moment from 'moment';

const expenses = [{
    id: '0',
    description: 'water bill',
    note: '',
    amount: 1.95,
    createdAt: 0
},
{
    id: '1',
    description: 'gas bill',
    note: '',
    amount: 4.95,
    createdAt: moment(0).subtract(4, 'days').valueOf()
},
{
    id: '2',
    description: 'ebppyah',
    note: '',
    amount: 10011.95,
    createdAt: moment(0).add(4, 'days').valueOf()
}]





test('should filter expenses by text value', () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters)

    expect(result).toEqual([expenses[2], expenses[0]])
})


test('should filter expenses by date with text value of s', () => {
    const filters = {
        text: 's',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters)

    expect(result).toEqual([expenses[1]])
})


test('should filter expenses by amount with no text value', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters)

    expect(result).toEqual([expenses[2], expenses[1], expenses[0]])
})




test('should filter expenses by amount with text value', () => {
    const filters = {
        text: 'bill',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters)

    expect(result).toEqual([expenses[1], expenses[0]])
})

test('should filter expenses by start date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters)

    expect(result).toEqual([expenses[2], expenses[0], expenses[1]])
})

test('should filter expenses by end date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0).add(2, 'days').valueOf()
    }
    const result = selectExpenses(expenses, filters)

    expect(result).toEqual([expenses[0], expenses[1]])
})