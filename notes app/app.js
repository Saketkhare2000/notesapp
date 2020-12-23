// ? first we will initialize npm using command "npm init",
// ? click enter untill package.json is created

// const {argv} = require('yargs');
const yargs = require('yargs');
const func = require('./func.js');

// ! install the required node modules by npm i --"",

// ! to take input from users we use 'process.argv' , it will take the nth argument given in CLI and convert into an array,

// console.log(process.argv[2]);

// ? this command returns the 3rd word

// ? to use yargs and chalk we use the require function and make it const

// const fs = require('fs');

// console.log(process.argv); // this will print as an array

// console.log(yargs.argv); // this will print as an object

// ? to make a property in yargs we use -- in front of the required property

// ? to make the notes app we use yargs.command
//? command takes 3 arguments
// ? 1) Command sets the name
// ? 2) Describe - tells the user about the command
// ? 4) builder - adds the title and body to the function
// ? 3) handler - function which runs when code is executed

//! adding the command to add to the JSON file

yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string',
    },
  },

  handler: (argv) => {
    func.addNote(argv.title, argv.body);
  },
});

// ! making a yars.command for Reading the note

yargs.command({
  command: 'read',
  describe: 'read a note',
  builder: {
    title: {
      describe: 'note title',
      demandOption: true,
      type: 'string',
    },
  },
  handler: (argv) => {
    func.readNote(argv.title);
  },
});

//! maaking yargs command to remove a note

yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
  },
  handler: (argv) => {
    func.removeNote(argv.title);
  },
});

// ! making yargs command to list all the notes
yargs.command({
  command: 'list',
  describe: 'List all note',
  handler: () => {
    func.listNotes();
  },
});

yargs.parse();
