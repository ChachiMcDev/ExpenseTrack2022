import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseItem } from '../../components/ExpenseItem';
import expenses from '../fixtures/expenses';



test('should render ExpenseItem with expense', () => {
    const wrapper = shallow(<ExpenseItem {...expenses[3]} />)
    expect(wrapper).toMatchSnapshot()
})
