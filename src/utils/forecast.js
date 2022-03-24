const request = require("postman-request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=d3fba7184bdf710154ab01b36e28e41c&query=" +
    latitude +
    "," +
    -longitude +
    "&units=f";
  request({ url, json: true }, (error, {body}) => {
    if (error) {
      callback("Unable to connect to forecast services", undefined);
    } else if (body.error) {
      callback("Unable to find location. Try another search", undefined);
    } else {
      callback(
        undefined,
        body.current.weather_descriptions[0] +
          ". It is " +
         body.current.temperature +
          " degrees out there. It feels like " +
          body.current.feelslike +
          " degrees"
      );
    }
  });
};

module.exports = forecast;
