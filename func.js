const fs = require('fs');
const chalk = require('chalk');

//! making all the functions to add remove read and list

// ! adding a note function

const addNote = (title, body) => {
  // ? using load so that we can use this function everywhere

  const notes = load();

  const noteExists = notes.filter((note) => {
    return note.title === title;
  });
  if (noteExists.length === 0) {
    notes.push({
      title,
      body
    });
    save(notes);
    console.log(chalk.green.inverse('SUCESS'));
    console.log(chalk.yellow('New Note added'));
  } else {
    console.log('Note title already exists');
    console.log(chalk.red.inverse('Error'));
  }
};

//! removing a note

const removeNote = (title) => {
  const notes = load();
  const removeNote = notes.filter((note) => {
    return note.title !== title;
  });
  if (removeNote.length < notes.length) {
    console.log(chalk.green.inverse('SUCESS'));
    save(removeNote);
    console.log('Note has been removed');
  } else {
    console.log('Note Does not exist');
    console.log(chalk.red.inverse('Error'));
  }
};

//! reading a note
const readNote = (title) => {
  const notes = load();
  const readingNote = notes.filter((note) => {
    return note.title === title;
  });
  if (readingNote.length !== 0) {
    console.log(chalk.green.inverse('NOTE'));
    console.log(`Title - ${readingNote[0].title}`);
    console.log(`Title - ${readingNote[0].body}`);
  } else {
    console.log('Note does not exist');
    console.log(chalk.red.inverse('Error'));
  }
};

//! list all the notes

const listNotes = () => {
  const notes = load();

  if (notes.length !== 0) {
    console.log(chalk.blueBright.inverse(' All Notes '));
    console.log('');
    notes.forEach((note) => {
      console.log(`Title - ${note.title}`);
      console.log(`Title - ${note.body}`);
      console.log('');
    });
  } else {
    console.log('Error');
    console.log('No Notes Available');
  }
};

// ! function to load our file
const load = () => {
  try {
    const dataJSON = fs.readFileSync('notes.json').toString();
    const data = JSON.parse(dataJSON);
    return data;
  } catch (error) {
    return [];
  }
};

load();

// ! function to Save our file
const save = (notes) => {
  const dataJSON = JSON.stringify(notes); //! converting the data to JSON
  fs.writeFileSync('notes.json', dataJSON);
};

module.exports = {
  addNote,
  removeNote,
  readNote,
  listNotes,
};
