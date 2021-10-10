// Boiler plate
'use strict';

const express = require('express');
const cors = require('cors');
const { request } = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

require('dotenv').config();

app.use(cors());
app.listen(PORT, () => console.log('Listening on port -->:', PORT));
app.get('/', (request, response) => {response.send('Greetings from server'); });

// Boiler plate

const weatherData = require('./data/weather.json');
console.log(weather);

app.get('/weather', (request, response) => response.json({
  lat: 
})
