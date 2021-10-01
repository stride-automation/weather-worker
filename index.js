const https = require('https');
const querystring = require('querystring');
const geocode = require('./geocode');

const getWeather = (location, callback) => {
  const url = `https://api.darksky.net/forecast/${process.env.DARKSKY_API_KEY}/${location.latitude},${location.longitude}`;
  const request = https.request(url, {
    method: 'GET'
  }, (response) => {
    let data = '';
    response.on('data', (chunk) => {
      data += chunk;
    }
  );
  response.on('end', () => {
    const weather = JSON.parse(data);
    callback(undefined, weather);
  }
);
});

  request.on('error', (error) => {
    callback(error, undefined);
  }
);
request.end();
};

