// get weather
function getWeather() {
  
  // get weather
  fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=e0d8a1b6c7f8b3c5c7f0f0a2b7a4a7a5')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // set weather
      setWeather(data);
    });
}

// set weather
function setWeather(data) {

  // set weather
  let weather = data.weather[0].main;
  let icon = data.weather[0].icon;
  let temp = Math.round(data.main.temp - 273.15);
  let city = data.name;
  let country = data.sys.country;
  let wind = data.wind.speed;
  let humidity = data.main.humidity;
  let sunrise = data.sys.sunrise;
  let sunset = data.sys.sunset;
  let timezone = data.timezone;
  let description = data.weather[0].description;

  // set weather
  document.getElementById('weather').innerHTML = weather;
  document.getElementById('icon').innerHTML = icon;
  document.getElementById('temp').innerHTML = temp + '&deg;';
  document.getElementById('city').innerHTML = city;
  document.getElementById('country').innerHTML = country;
  document.getElementById('wind').innerHTML = wind + ' m/s';
  document.getElementById('humidity').innerHTML = humidity + '%';
  document.getElementById('sunrise').innerHTML = sunrise;
  document.getElementById('sunset').innerHTML = sunset;
  document.getElementById('timezone').innerHTML = timezone;
  document.getElementById('description').innerHTML = description;
}

// get weather
getWeather();

// set interval
setInterval(getWeather, 300000);

// set interval
setInterval(function() {
  // get time
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  // set time
  document.getElementById('time').innerHTML = hours + ':' + minutes + ':' + seconds;
}
, 1000);