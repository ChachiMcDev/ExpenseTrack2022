import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectTotalExpenses from '../selectors/expenses-total';


export const ExpenseSummary = ({ expenseCount, totalExpenses }) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const formattedExpenseTotal = numeral(totalExpenses / 100).format('$0,0.00');

    return (
        <div>
            <h1>Viewing {expenseCount} {expenseWord} totalling {formattedExpenseTotal} </h1>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        expenseCount: selectExpenses(state.expenses, state.filters).length,
        totalExpenses: selectTotalExpenses(selectExpenses(state.expenses, state.filters))
    };
};


export default connect(mapStateToProps)(ExpenseSummary)