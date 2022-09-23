
export default (expenses) => {
    if (expenses.length === 0) {
        return 0
    } else {
        return expenses.map((ex) => ex.amount)
            .reduce((prev, cur) => prev + cur)
    }
}


