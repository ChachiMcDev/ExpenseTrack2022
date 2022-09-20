import moment from 'moment'

const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const altFilters = {
    text: 'thi sis text over',
    sortBy: 'amount',
    startDate: moment(0),
    endDate: moment(0).endOf('month')
}

export { filters, altFilters };