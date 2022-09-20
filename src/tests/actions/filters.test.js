import {
    setTextFilter,
    setSortByAmount,
    setSortByDate,
    setStartDate,
    setEndDate
} from '../../actions/filters';
import moment from 'moment';

test('setTextFilter to return object with text value', () => {
    const text = 'some text'
    const action = setTextFilter(text);

    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    });
});

test('setSortByAmount to return object with type of sort by amount', () => {

    expect(setSortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT' });
});


test('setSortByDate to return object with type of sort by date', () => {

    expect(setSortByDate()).toEqual({ type: 'SORT_BY_DATE' });
});

test('setStartDate to return object with type of sort by date and a number for date', () => {

    const action = setStartDate(moment(0));

    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('setEndDate to return object with type of sort by date', () => {

    const action = setEndDate(moment(0));

    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});