import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';




export class EditExpensePage extends React.Component {


    onSubmit = (expense) => {

        this.props.startEditExpense(this.props.expense.id, expense)
        this.props.history.push('/')
    }

    onRemove = () => {

        this.props.startRemoveExpense({ id: this.props.expense.id })
        this.props.history.push('/')
    }

    render() {

        return (
            <div>

                <ExpenseForm

                    expense={this.props.expense}
                    onSubmit={this.onSubmit}
                />

                <button
                    onClick={this.onRemove}
                >
                    Remove
                </button>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => {
            return expense.id === props.match.params.id
        })
    };
};

const mapDispatchToProps = (dispatch) => {


    return {
        startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
        startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);


// const EditExpensePage = (props) => {
//     // console.log('thesePROPS', props)

//     // const id = props.match.params.id
//     // console.log(id)
//     // // const getExp = props.expenses.find((expense) => {
//     // //     return id === expense.id
//     // // })

//     // const editExp = props.expenses.filter((ex) => {
//     //     return ex.id === id
//     // })
//     // console.log('expense with id', editExp)
//     const id = props.match.params.id
//     return (

//         <div>
//             editing id of {props.match.params.id}

//             <ExpenseForm
//                 expense={props.expense}
//                 onSubmit={(expense) => {
//                     props.dispatch(editExpense(id, expense))
//                     props.history.push('/')
//                 }} />

//             <button onClick={() => {
//                 props.dispatch(removeExpense({ id }))
//                 props.history.push('/')
//             }}>Remove</button>

//         </div>
//     )
// }


