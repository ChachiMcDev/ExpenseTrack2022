import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from '../../components/ExpenseSummary';

test('should correctly render expense summary with 1 expense', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={1} totalExpenses={235} />)
    expect(wrapper).toMatchSnapshot();
})

test('should correctly render expense summary with 1 expense', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={5} totalExpenses={654546135212186581} />)
    expect(wrapper).toMatchSnapshot();
})