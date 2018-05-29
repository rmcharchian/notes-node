console.log('starting app.js'); //keeping track of how app is running

//nodejs.org/api will show us all of the modules available to us

//fs.appendFile or others
const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js'); //requiring our own files


var filteredArray = _.uniq(['Roxie', 1, 'Roxie', 1, 2, 3, 4]);
console.log(filteredArray);

// console.log(_.isString(true));  //will be false because boolean is not a string
// console.log(_.isString('Roxie'));

// console.log('Result:', notes.add(9, -2));

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