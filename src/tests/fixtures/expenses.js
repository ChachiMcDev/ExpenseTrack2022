import moment from 'moment';

export default [{
    id: '0',
    description: 'sock bill',
    note: 'this is the sockbill note',
    amount: 50000,
    createdAt: 0

},
{
    id: '1',
    description: 'water bill',
    note: '',
    amount: 0,
    createdAt: moment(0).subtract(4, 'days').valueOf()
},
{
    id: '2',
    description: 'descrip for id 2',
    note: '',
    amount: 3000,
    createdAt: moment(0).add(4, 'days').valueOf()
}, {
    id: '3',
    description: 'cmon now 3',
    note: '',
    amount: 26000,
    createdAt: moment(0).add(1, 'days').valueOf()
}, {
    id: '4',
    description: 'yup ypu 4',
    note: '',
    amount: 3000,
    createdAt: moment(0).subtract(2, 'days').valueOf()
}, {
    id: '5',
    description: 'blah blah 5',
    note: '',
    amount: 100,
    createdAt: moment(0).add(3, 'days').valueOf()
}]