console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;

var command = argv._[0];
console.log('Command : ' + command);
// console.log('Process ARGS ' , process.argv);
console.log('Yargs ARGS ' , argv);

if(command === 'add'){
  var note = notes.addNote(argv.title,argv.body);
  if(note){
    console.log('SUCCESS!! YOUR NOTE WAS ENTERED INTO THE DATABASE!');
    console.log(`The Title Is : ${note.title}`);
    console.log(`The Body  Is : ${note.body}`);
  }
} else if(command === 'list'){
  notes.getAll();
} else if(command === 'read'){
  notes.getNote(argv.title);
} else if(command === 'remove'){
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'SUCCESS! Note Was Removed' : 'ERROR! Note Not Found';
  console.log(message);
} else{
  console.log('Command not recognized');
}
