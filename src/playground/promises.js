
const promise = new Promise((resolve, reject) => {

    setTimeout(() => {
        // resolve({
        //     name: 'suckit',
        //     huh: 'sohard'
        // })
        reject('shit went so south homey')
    }, 2000)

});


console.log('before')

promise.then((data) => {
    console.log('1:', data)
}).catch((err) => {
    console.log('error error:', err)
})



console.log('after')