console.log('starting app.js'); //keeping track of how app is running

//nodejs.org/api will show us all of the modules available to us

//third party or node modules
const fs = require('fs');
const _ = require('lodash');

// my files
const notes = require('./notes.js'); //requiring our own files