const express = require('express');
const request = require('request');

const router = express.Router();
const axios = require('axios');

const address =
  'https://api.worldbank.org/v2/countries/wld/indicators/NY.ADJ.NNTY.PC.CD?format=json';

// fetching of data info
router.get('/salaryinfo', (req, res) => {
  request.get(address, (error, response, body) => {
    if (error) {
      return console.log(error);
    }
    // here data is parsed from extra information
    const data = JSON.parse(body);
    // prints all the data into console
    const arrayData = data[1];
    const resp = arrayData;
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
    console.log(data);
    let resp = data.map(year => {
      return {
        country: year.country,
        year: year.date,
        value: year.value
      };
    });
    let worldSalaryAvg = {};
    for (const arrayItem of resp) {
      if (arrayItem.value) {
        worldSalaryAvg = arrayItem;
        break;
      }
    }
    resp = {
      worldSalaryAvg,
      info: `World Bank: ${data[0].indicator.value}: ${address}`
    };
    res.json(resp);
  });
});

// Fetches data from WB api and parses it from extra information
const getCountryData = async code => {
  const address = `https://api.worldbank.org/v2/countries/${code}/indicators/NY.ADJ.NNTY.PC.CD?format=json&mrnev=1`;
  console.log('Adress: ', address);
  try {
    const axiosdata = await axios.get(address);
    let salaryData = axiosdata.data[1];
    salaryData = axiosdata.map(year => {
      return {
        country: year.country,
        year: year.date,
        value: year.value
      };
    });
    let salaryValue = {};

    for (const arrayItem of salaryData) {
      if (arrayItem.value) {
        salaryValue = arrayItem;
        break;
      }
    }

    const resp = {
      salaryValue,
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
