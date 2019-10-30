const express = require('express');

const request = require('request');

const router = express.Router();

const address = 'https://api.worldbank.org/v2/sources/2/country/data?format=json&per_page=300';

router.get('/', (req, res) => {
  request.get(address, (error, response, body) => {
    if (error) {
      return console.log(error);
    }

    // here data is parsed from extra information
    let data = JSON.parse(body);

    data = data.source[0].concept[0].variable;

    return res.json(data);
  });
});
module.exports = router;
