import React from 'react'
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates'
import { setTextFilter, setSortByDate, setSortByAmount, setStartDate, setEndDate } from '../actions/filters'





export class ExpenseListFilters extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            calendarFocused: null
        }
    }

    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    }

    onFocusChange = (calendarFocused) => {
        this.setState({ calendarFocused })
    }


    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value)
    }

    onSortByChange = (e) => {
        const eventValue = e.target.value;
        eventValue === 'amount' ? this.props.setSortByAmount() : this.props.setSortByDate()

    }

    render() {
        return (
            <div>
                <input type="text" value={this.props.filters.text} onChange={this.onTextChange} />

                <select value={this.props.filters.sortBy} onChange={this.onSortByChange}>
                    <option value="date">Date</option>
                    <option value="amount" >Amount</option>
                </select>

                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
            </div>

        )
    }

}


// const handleDropDown = (e, props) => {
//     const eventValue = e.target.value;
//     // let sortBy = props.filters.sortBy;
//     // eventValue === 'date' ? sortBy = 'date' : sortBy = 'amount'
//     eventValue === 'amount' ? props.dispatch(setSortByAmount()) : props.dispatch(setSortByDate())
// }

// const ExpenseListFilters = (props) => (

//     <div>
//         <input type="text" value={props.filters.text} onChange={(e) => {
//             console.log('heheheh', { ...props })
//             props.dispatch(setTextFilter(e.target.value))
//         }} />

//         <select value={props.filters.sortBy} onChange={(e) => {
//             handleDropDown(e, props)
//         }}>
//             <option value="date">Date</option>
//             <option value="amount" >Amount</option>
//         </select>

//         <DateRangePicker
//             startDate={props.filters.startDate}
//             endDate={props.filters.endDate}
//             onDatesChange={({ startDate, endDate }) => ({ filters: { startDate, endDate } })}

//         />
//     </div>
// )




const mapStateToProps = (state) => {

    return {
        filters: state.filters
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setTextFilter: (text) => dispatch(setTextFilter(text)),
        setStartDate: (startDate) => dispatch(setStartDate(startDate)),
        setEndDate: (endDate) => dispatch(setEndDate(endDate)),
        setSortByAmount: () => dispatch(setSortByAmount()),
        setSortByDate: () => dispatch(setSortByDate())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters)


// const eventValue = e.target.value;
// let sortBy = props.filters.sortBy;
// eventValue === 'date' ? sortBy = 'date' : sortBy = 'amount'
// eventValue === 'amount' ? props.dispatch(setSortByAmount()) : props.dispatch(setSortByDate())

