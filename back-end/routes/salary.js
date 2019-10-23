const express = require('express');
const app = express();
const request = require('request');
const router = express.Router();
const axios = require('axios');

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

// Fetches data from WB api and parses it from extra information
const getCountryData = async code => {
  let address = `https://api.worldbank.org/v2/countries/${code}/indicators/NY.ADJ.NNTY.PC.CD?format=json`;
  console.log('Adress: ', address);
  try {
    let axiosdata = await axios.get(address);
    axiosdata = axiosdata.data[1];
    let salaryData = axiosdata.map(year => {
      return {
        country: year.country,
        year: year.date,
        value: year.value
      };
    });

    let resp = {
      salaryData,
      info: `World Bank: ${axiosdata[0].indicator.value}: ${address}`
    };
    return resp;
  } catch (error) {
    console.log(error);
  }
};

router.post('/', async (request, response) => {
  console.log(request.body);
  const code = request.body;
  const data = await getCountryData(code.code);
  console.log('Palautettava:', data);
  response.json(data);
});

module.exports = router;
