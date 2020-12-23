const request = require('postman-request');

const weather = (query, callback) => {
  const access_key = 'bc39a4ba11ea00c5c072d15a3cb133aa';
  const url =
    'http://api.weatherstack.com/current?access_key=' +
    access_key +
    '&query=' +
    encodeURI(query); //? encodeURI makes sure that space and slash are in order so that the code odes not break

  request({url, json: true}, (error, res, data) => {
    if (error) {
      callback('no connection available', undefined);

      //   console.log('No connection Available');
    } else if (data.error) {
      callback('Location is invalid', undefined);
      //   console.log('location is invalid');
    } else {
      callback(undefined, {
        temp: data.current.temperature,
        location: data.location.name,
        des: data.current.weather_descriptions[0],
      });
      //   console.log('Location - ' + data.location.name);
      //   console.log('Temperature - ' + data.current.temperature);
      //   console.log('Description - ' + data.current.weather_descriptions[0]);
    }
  }); //? we know that the data recieved from API is JSON so to avoid "parse" we add json:true and convert the data incoming to object
};

module.exports = weather;
