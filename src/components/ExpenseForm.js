import React from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'


const date = moment()
date.format('MMM Do, YYYY')
console.log(date.format('MMM Do, YYYY'))

//use local component to manage state
//upon submiting the form is when to add it to store/state



// constructor(props) {
//     super(props)
//     this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
//     this.handleAddOption = this.handleAddOption.bind(this);
//     this.handlePick = this.handlePick.bind(this)
//     this.handleDeleteOne = this.handleDeleteOne.bind(this)

//     this.state = {
//         options: []
//     };

// };


export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props)


        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? parseFloat(props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calenderFocused: false,
            error: ''
        }

    }

    //parseFloat(this.state.amount, 10) * 100
    // state = (props) => {
    //     if (props.editExpense) {
    //         return { ...editExpense }
    //     } else {
    //         return {
    //             description: '',
    //             note: '',
    //             amount: '',
    //             createdAt: moment(),
    //             calenderFocused: false,
    //             error: ''
    //         }
    //     }
    // }

    onDescriptionChange = (e) => {
        const description = e.target.value
        this.setState(() => ({ description }))
    }

    onNoteChange = (e) => {
        const note = e.target.value
        this.setState(() => ({ note }))
    }


    onAmountchange = (e) => {
        const amount = e.target.value;

        if (!amount || amount.match(/^\d*(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }))
        }
    }

    onDateChange = (createdAt) => {
        this.setState(() => ({ createdAt }))
    }

    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calenderFocused: focused }))
    }

    onFormSubmit = (e) => {
        e.preventDefault()
        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({ error: 'Please provide description and/or amount' }))
        } else {
            this.setState(() => ({ error: '' }))
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
    }

    render() {
        return (
            <div>

                <div><h1>{this.state.error}</h1></div>
                <form
                    onSubmit={(e) => { this.onFormSubmit(e) }}
                >
                    <input
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input
                        type="number"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountchange}
                    />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calenderFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea
                        placeholder="Add a note (optional)"
                        value={this.state.note}
                        onChange={this.onNoteChange}>
                    </textarea>
                    <button>Add Expense</button>
                </form>

            </div>
        )
    }
}


