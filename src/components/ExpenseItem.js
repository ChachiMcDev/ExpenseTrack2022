import React from 'react'
import { connect } from 'react-redux'
import { removeExpense } from '../actions/expenses';
import { Link } from 'react-router-dom'




export const ExpenseItem = ({ id, description, amount, note, createdAt, dispatch }) => (
    <div>
        <Link to={`/edit/${id}`}><h3>{description}</h3></Link>

        <p>{amount} - {createdAt} </p>
        <p>{note}</p>
        <button onClick={() => {
            dispatch(removeExpense({ id }))
        }}>Remove</button>

    </div>
)



export default connect()(ExpenseItem)




