import { createStore } from 'redux';


const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT_COUNT',
    incrementBy: incrementBy
})

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT_COUNT',
    decrementBy: decrementBy
})

const resetCount = () => ({
    type: 'RESET'
})


const setCount = ({ count = 500 } = {}) => ({
    type: 'SET',
    count
})


const addWords = ({ sayit } = {}) => ({
    type: 'SAYITLOUD',
    sayit
})

//Reducer
//1. reducers are pure functions (output determined by input),
//never change state or action

const initialState = { sayit: '' }

const countReducer = (state = { count: 0 }, action) => {

    switch (action.type) {

        case 'INCREMENT_COUNT':
            return { count: state.count + action.incrementBy };
        case 'DECREMENT_COUNT':
            return { count: state.count - action.decrementBy };
        case 'RESET_COUNT':
            return { count: 0 };
        case 'SET':
            return { count: action.count }
        // case 'SAYITLOUD':
        //     return { sayit: action.sayit }
        default:
            return state;
    }


};

const store = createStore(countReducer)

const unsubscribe = store.subscribe(() => {
    console.log('gettin state', store.getState())

})

//store.dispatch(incrementCount())

// store.dispatch(addWords({

//     sayit: 'herrrosz'
// }))


store.dispatch(incrementCount({
    incrementBy: 75
}))

// //increment

store.dispatch(incrementCount({
    incrementBy: 9
}))

// //unsubscribe()





// //decrement
// store.dispatch(decrementCount({
//     type: 'DECREMENT_COUNT',
//     decrementBy: 22
// }))

// store.dispatch(decrementCount())




// //reset
// store.dispatch(resetCount())


// store.dispatch(setCount({
//     type: 'SET',
//     count: 101
// }))


// store.dispatch(setCount({}))

