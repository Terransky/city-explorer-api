// <Boiler plate>
'use strict';

const express = require('express');
const cors = require('cors');
// const { request } = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

require('dotenv').config();

app.use(cors());

app.get('/', (req, res) => {res.send('Greetings from the server.'); });
app.get('/', (req, res) => res.status(200).send('This is the root.'));
app.get('*', (req, res) => {res.status(404).send('404 Page not found.')});

app.listen(PORT, () => console.log('Listening on port -->:', PORT));

// </Boiler plate>

const weather = require('./data/weather.json');
const { response } = require('express');

// app.get('/weather', (req, res) => res.status(200).send('weather route functional')); ===

function handleWeather(req, res) {
  //console.log('query params:', req.query);
  //let lat = req.query.lat;
  //let lon = req.query.lon;
  //let searchQuery = req.query.searchQuery ===

  let { lat, lon, searchQuery } = req.query;

  let foundCity = weather.find(city => city.city_name.toLowerCase() === searchQuery.toLowerCase());

  try {
    let weatherArr = foundCity.data.map(day => {
      //return day.weather.description
      return new Forecast(day)
    });
    response.status(200).send(weatherArr);
  }
  
  catch(error) {
    console.log('catch(error)');
    response.status(404).send('City not found');
  }

  //res.status(200).send('weather route functional');
}

app.get('/weather', handleWeather);

class Forecast {
  constructor(day) {
    this.date = day.valid.date;
    this.description = `Low of ${day.low_temp}, high of ${day.max_temp} with ${day.weather.description}.`;
  }
}
