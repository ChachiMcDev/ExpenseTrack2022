import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';



test('should return 0 if no expenses', () => {
    const altExpenses = []

    const total = selectExpensesTotal(altExpenses)
    expect(total).toEqual(0)
})


test('should add up single expense', () => {

    const total = selectExpensesTotal([expenses[0]])
    expect(total).toEqual(expenses[0].amount)
})

test('should add up multiple expenses', () => {

    const total = selectExpensesTotal(expenses)
    expect(total).toEqual(
        expenses[0].amount +
        expenses[1].amount +
        expenses[2].amount +
        expenses[3].amount +
        expenses[4].amount +
        expenses[5].amount)
})


