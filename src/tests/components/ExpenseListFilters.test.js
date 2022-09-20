import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';
import moment from 'moment'


let setTextFilter,
    setStartDate,
    setEndDate,
    setSortByAmount,
    setSortByDate,
    wrapper;


beforeEach(() => {
    setTextFilter = jest.fn(),
        setStartDate = jest.fn(),
        setEndDate = jest.fn(),
        setSortByAmount = jest.fn(),
        setSortByDate = jest.fn()

    wrapper = shallow(<ExpenseListFilters
        filters={filters}
        setTextFilter={setTextFilter}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        setSortByAmount={setSortByAmount}
        setSortByDate={setSortByDate}
    />)
})

test('should render ExpenseListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot();
})

test('should set text filter with altFilters', () => {
    wrapper.setProps({
        filters: altFilters
    })
    expect(wrapper).toMatchSnapshot();
})

test('should set text filter', () => {
    const value = 'hugemhard'
    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    });

    expect(setTextFilter).toHaveBeenLastCalledWith(value)
})

test('should sort by date', () => {
    const value = 'date'
    wrapper.setProps({
        filters: altFilters
    })
    wrapper.find('select').simulate('change', {
        target: {
            value
        }
    })

    expect(setSortByDate).toHaveBeenCalled()
})

test('should set sort by amount', () => {
    const value = 'amount'
    wrapper.find('select').simulate('change', {
        target: {
            value
        }
    });

    expect(setSortByAmount).toHaveBeenCalled()
})

test('should handle date changes', () => {
    const startDate = moment(0).add(4, 'years');
    const endDate = moment(0).add(8, 'years');

    wrapper.find('DateRangePicker').prop('onDatesChange')({ startDate, endDate })
    expect(setStartDate).toHaveBeenCalledWith(startDate)
    expect(setEndDate).toHaveBeenCalledWith(endDate)

})

test('should handle on focus change', () => {
    const calendarFocused = 'endDate'

    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused)
    console.log(wrapper.state('calendarFocused'))
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused)
})