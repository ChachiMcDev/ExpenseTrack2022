import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseItem } from '../../components/ExpenseItem';
import expenses from '../fixtures/expenses';


// const expense = expenses[1];
// id = { expense.id }
// description = { expense.description }
// amount = { expense.amount }
// note = { expense.note }
// createdAt = { expense.createdAt } 

test('should render ExpenseItem with expense', () => {
    const wrapper = shallow(<ExpenseItem {...expenses[1]} />)
    expect(wrapper).toMatchSnapshot()
})
