import React from 'react';
import { connect } from 'react-redux';
import ExpenseItem from './ExpenseItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = ({ expenses }) => (
    <div>
        {
            expenses.length === 0 ? (<p>No Expenses</p>) : (expenses.map((ex) => (
                <ExpenseItem key={ex.id} {...ex} />
            )))
        }

    </div>
);


// export const ExpenseList = (props) => (
//     <div>

//         <h1>Expnese list</h1>
//         {props.expenses.map((y) => {
//             console.log(y)
//         })}
//         {props.expenses.map((x) => (

//             <ExpenseItem key={x.id} {...x} />
//         ))}
//     </div>
// )
const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList);

// description = { ex.description }
// amount = { ex.amount }
// note = { ex.note }
// createdAt = { ex.createdAt }