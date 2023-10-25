window.addEventListener('load', init);

//global variables
let altitude = 0;
let pressure = 0;
let temperature = 0;
let humidity = 0;
let windspeed = 0;

const el_alt = document.querySelector('#el_alt');
const el_pres = document.querySelector('#el_pres');
const el_temp = document.querySelector('#el_temp');
const el_hum = document.querySelector('#el_hum');
const el_wind = document.querySelector('#el_wind');

function init() {
  fetchData();
}

function addHTML(e) {
  el_alt.innerHTML = altitude;
  el_pres.innerHTML = pressure;
  el_temp.innerHTML = temperature;
  el_hum.innerHTML = humidity;
  el_wind.innerHTML = windspeed;
}

function fetchData() {
  fetch(
    'https://whub.duckdns.org/api/weather/?id=&user=17&weather_station=&time=&time__gte=&time__lte='
  )
    .then(response => {
      // Check if the response status code indicates success (e.g., 200)
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Parse the response body as JSON
      return response.json();
    })
    .then(data => {
      // You can work with the JSON data here
      //   console.log(data.results[data.results.length - 1].data);
      altitude = data.results[data.results.length - 1].data.altitude;
      pressure = data.results[data.results.length - 1].data.pressure;
      temperature = data.results[data.results.length - 1].data.temperature;
      humidity = data.results[data.results.length - 1].data.humidity;
      windspeed = data.results[data.results.length - 1].data.wind_speed;
      //console.log(altitude, pressure, temperature, humidity);
      addHTML();
    })
    .catch(error => {
      console.error('Fetch error:', error);
    });
}
