// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyCxdvudCUiVRH_9RNR9NI0Qt-mBN-YvtUI",
//     authDomain: "expense-app-2022.firebaseapp.com",
//     projectId: "expense-app-2022",
//     storageBucket: "expense-app-2022.appspot.com",
//     messagingSenderId: "1004795030833",
//     appId: "1:1004795030833:web:581b855f4ff7bbe3a6d410",
//     databaseURL: "https://expense-app-2022-default-rtdb.firebaseio.com",
// };

// // Initialize Firebase
// const firebase = initializeApp(firebaseConfig);

// firebase.database().ref().set({
//     name: 'chachi nelson'
// })

import * as firebase from 'firebase';
import expenses from '../tests/fixtures/expenses';

const config = {
    apiKey: "AIzaSyCxdvudCUiVRH_9RNR9NI0Qt-mBN-YvtUI",
    authDomain: "expense-app-2022.firebaseapp.com",
    projectId: "expense-app-2022",
    databaseURL: "https://expense-app-2022-default-rtdb.firebaseio.com",
    storageBucket: "expense-app-2022.appspot.com",
    messagingSenderId: "1004795030833",
    appId: "1:1004795030833:web:581b855f4ff7bbe3a6d410"
};



firebase.initializeApp(config);

const database = firebase.database()




export { firebase, database as default }

// expenses.map((expense) => {
//     console.log(expense)
//     database.ref('expenses').push(expense)
// })

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = []

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         })
//         console.log(expenses)
//     }).catch((err) => {
//         console.log(err)
//     })



// database.ref('expenses')
//     .on('value', (snapshot) => {

//         const expenses = []
//         snapshot.forEach((child) => {
//             expenses.push({
//                 id: child.key,
//                 ...child.val()
//             })
//         })
//         console.log(expenses)
//     })

// database.ref('expenses').on('child_removed', (snap) => {
//     console.log('child removed', snap.key, snap.val())
// })

// database.ref('expenses').on('child_changed', (snap) => {
//     console.log('childe changed:', snap.key, snap.val())
// })

// database.ref('expenses').on('child_added', (snap) => {
//     console.log('child added:', snap.key, snap.val())
// })

    // .then((snapshot) => {
    //     const expenses = []

    //     snapshot.forEach((snapChild) => {
    //         expenses.push({
    //             id: snapChild.key,
    //             ...snapChild.val()
    //         })
    //     })
    //     console.log('here the expenses:', expenses)
    // }).catch((err) => {
    //     console.log('robot balls error:', err)
    // })


// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val())
// })

// database.ref().set(
//     {
//         name: "chuck nelson",
//         age: 45,
//         stressLevel: 6,
//         job: {
//             title: 'rocket worker',
//             company: 'yourmom'
//         },
//         location: {
//             city: 'compton',
//             country: 'USA'
//         }
//     }
// ).then((data) => {
//     console.log('data saved:', data)
// }).catch((err) => {
//     console.log(err)
// })



// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Portland'
// })

// database.ref('attributes').set({
//     height: 6.1,
//     weight: 250
// })

// const wtf = firebase.database().ref('users/hmm/idk')
// wtf.set({
//     answerpls: 'uhmmm',
//     wahtassup: 'yes you do kmow'
// }).then((data) => {
//     console.log('data has been written ya knows', data)
// }).catch((err) => {
//     console.log('you know we got: ', err)
// })



// database.ref().update({
//     stressLevel: 90,
//     'job/company': "Amazon",
//     'location/city': 'Seattle'

// })

// // const jUpdate = database.ref('job')
// // const cUpdate = database.ref('location')

// // database.ref().update({
// //     stressLevel: 900
// // })
// // jUpdate.update({ company: 'Boeing' })
// //     .then(() => {
// //         //do fuckall
// //     }).catch((err) => {
// //         console.log(err)
// //     })


// // cUpdate.update({ city: 'FUCKACLLL' })
// //     .then(() => { })
// //     .catch((err) => {
// //         console.log(err)
// //     })


// // database.ref('location/city')
// //     .once('value')
// //     .then((snapshot) => {
// //         const snapit = snapshot.val();
// //         console.log(snapit)
// //     }).catch((err, snapit) => {
// //         console.log(err, '::')
// //     })




// // database
// //     .ref()
// //     .remove()
// //     .then(() => {
// //         console.log('remove success')
// //     })
// //     .catch((err) => {
// //         console.log('robot balls, error error', err)
// //     })


// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val())
// })

// // setTimeout(() => {
// //     database.ref('age').set(21)
// // }, 3500)



// // setTimeout(() => {
// //     database.ref('age').set(55)
// // }, 3500)


// // setTimeout(() => {
// //     database.ref('age').off(onValueChange)
// // }, 8                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    500)


// // setTimeout(() => {
// //     database.ref('age').set(32)
// // }, 3500)


// const onValueChangeName = database.ref().on('value', (snapit) => {
//     console.log('xxxxxxxx', snapit.val().name + ' is a ' + snapit.val().job.title + ' at ' + snapit.val().job.company)
// })

// database.ref('name').set('johnny hotnutz')