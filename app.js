console.log('starting app.js'); //keeping track of how app is running

//nodejs.org/api will show us all of the modules available to us

//fs.appendFile or others
const fs = require('fs');
const os = require('os');
const notes = require('./notes.js'); //requiring our own files


console.log('Result:', notes.add(9, -2));

// var res = notes.addNote();
// console.log(res);

// var user = os.userInfo();
//console.log(user);


// fs.appendFile('greetings.txt', 'Hello ' + user.username + '!', function (err) {
//     if (err) {
//         console.log('Unable to write to file');
//     }
// });


//es6 version - easier to use
// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`, function (err) {
//     if (err) {
//         console.log('Unable to write to file');
//     }
// });