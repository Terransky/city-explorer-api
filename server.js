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

app.get('/weather', (req, res) => { 
  res.json(weather.)
});

