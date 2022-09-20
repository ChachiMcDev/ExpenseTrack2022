
//get visible expenses
export default (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());



        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'amount') {
            return a.amount > b.amount ? -1 : 1
            // if (a.amount < b.amount) {
            //     return -1
            // } else if (a.amount > b.amount) {
            //     return 1
            // } else {
            //     return 0
            // }
        } else if (sortBy === 'date') {
            return a.createdAt > b.createdAt ? -1 : 1
            // if (a.createdAt > b.createdAt) {
            //     return -1
            // } else if (a.createdAt < b.createdAt) {
            //     return 1
            // } else {
            //     return 0
            // }
        } else {
            return 0
        }
    })
}

