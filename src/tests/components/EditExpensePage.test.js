import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses'


let startEditExpense, history, wrapper, startRemoveExpense;

beforeEach(() => {
    startRemoveExpense = jest.fn()
    startEditExpense = jest.fn()
    history = { push: jest.fn() }
    wrapper = shallow(<EditExpensePage startRemoveExpense={startRemoveExpense} expense={expenses[1]} startEditExpense={startEditExpense} history={history} />);
})


test('should render EditExpensePage correctly', () => {

    expect(wrapper).toMatchSnapshot();
})


test('should handle submit', () => {

    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(startEditExpense).toHaveBeenLastCalledWith(expenses[1].id, expenses[1])
})

test('should handle remove', () => {

    // const wrapper = shallow(<button onClick={remove} />);
    // wrapper.find('button').prop('onClick')({ id: expenses[1].id })
    wrapper.find('button').simulate('click')
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(startRemoveExpense).toHaveBeenLastCalledWith({ id: expenses[1].id })
})


// test('should set description on input change', () => {
//     const value = 'This is a new subscription';
//     const wrapper = shallow(<ExpenseForm />)

//     wrapper.find('input').at(0).simulate('change', {
//         target: { value }
//     })
//     expect(wrapper.state('description')).toBe(value);

// })