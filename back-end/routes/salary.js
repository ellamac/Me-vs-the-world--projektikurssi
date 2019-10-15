const express = require('express');
const app = express();
const request = require('request');
const router = express.Router();

const address =
  'https://api.worldbank.org/v2/countries/fin/indicators/NY.ADJ.NNTY.PC.CD?format=json';

// fetching of data info
router.get('/salaryinfo', (req, res) => {
  request.get(address, (error, response, body) => {
    if (error) {
      return console.log(error);
    }
    // here data is parsed from extra information
    let data = JSON.parse(body);
    // prints all the data into console
    data = data[1];
    let resp = data;
    res.json(resp[0].indicator);
  });
});

// api end point for fetching salary
// So far it know only finlands stats
router.get('/', (req, res) => {
  request.get(address, (error, response, body) => {
    if (error) {
      return console.log(error);
    }
    // here data is parsed from extra information
    let data = JSON.parse(body);
    // prints all the data into console

    data = data[1];
    let resp = data.map(year => {
      return {
        country: year.country,
        year: year.date,
        value: year.value
      };
    });
    res.json(resp);
  });
});

const getCountryData = code => {
  let address = `https://api.worldbank.org/v2/countries/${code}/indicators/NY.ADJ.NNTY.PC.CD?format=json`;

  request.get(address, (error, response, body) => {
    if (error) {
      return console.log(error);
    }

    // here data is parsed from extra information
    let data = JSON.parse(body);
    // prints all the data into console
    data = data[1];
    let resp = data.map(year => {
      return {
        country: year.country,
        year: year.date,
        value: year.value
      };
    });
    return resp;
  });
};

router.post('/', (request, response) => {
  const code = request.body;
  const data = getCountryData(code.code);
  response.json(data);
});

module.exports = router;
