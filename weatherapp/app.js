const weather = require('./weather.js');
const query = process.argv[2];
if (query === undefined) {
  console.log('Please enter a location');
} else {
  weather(query, (error, {temp, location, des}) => {
    if (error !== undefined) {
      console.log(error);
    } else {
      console.log('Location - ' + location);
      console.log('Temperature - ' + temp);
      console.log('Description - ' + des);
    }
  });
}

//! if a code is required again and again convert it into a function so we can reuse it 'n' times

//! since it is async function we can convert into a callback function
