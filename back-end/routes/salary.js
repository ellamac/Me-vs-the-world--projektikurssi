const express = require('express');
const app = express();
const request = require('request');
const router = express.Router();

const address =
  'https://api.worldbank.org/v2/countries/fin/indicators/NY.ADJ.NNTY.PC.CD?format=json';

// Info that must be given about World Bank's salary data:
const salaryInfo =
  'World Bank: Adjusted net national income per capita (current US$): api.worldbank.org/v2/countries/COUNTRYCODE/indicators/NY.ADJ.NNTY.PC.CD';

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
    let salaryData = data.map(year => {
      return {
        country: year.country,
        year: year.date,
        value: year.value
      };
    });
    let resp = {
      salaryData,
      info: `World Bank: ${data[0].indicator.value}: ${address}`
    };
    console.log(resp);
    return resp;
  });
};

router.post('/', (request, response) => {
  const code = request.body;
  const data = getCountryData(code.code);
  response.json(data);
});

module.exports = router;
