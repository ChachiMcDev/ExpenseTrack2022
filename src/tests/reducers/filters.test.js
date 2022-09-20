import filtersReducer from '../../reducers/filters';
import moment from 'moment'


test('reducers', () => {

    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});


test('should set sortBy to amount', () => {

    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {

    const state = filtersReducer(undefined, { type: 'SORT_BY_DATE' });
    expect(state.sortBy).toBe('date');
});

test('should set endDate to end date', () => {
    const currentState = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const action = {
        type: 'SET_END_DATE',
        endDate: moment().endOf('month')
    }
    const state = filtersReducer(currentState, action);

    expect(state.endDate).toEqual(moment().endOf('month'));
});

test('should set startDate to start date', () => {
    const currentState = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const action = {
        type: 'SET_START_DATE',
        startDate: moment().startOf('month')
    }
    const state = filtersReducer(currentState, action);

    expect(state.startDate).toEqual(moment().startOf('month'));
});

test('should set text to text value', () => {
    const currentState = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const action = {
        type: 'SET_TEXT_FILTER',
        text: 'hugem so hard'
    }
    const state = filtersReducer(currentState, action);

    expect(state.text).toBe('hugem so hard');
});