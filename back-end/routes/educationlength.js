const express = require('express');
const app = express();
const request = require('request');
const router = express.Router();
const axios = require('axios');

const address =
  'https://api.worldbank.org/v2/countries/all/indicators/SE.SCH.LIFE?format=json&per_page=10000';

// Fetches data from WB api and parses it from extra information
const getCountryData = async code => {
  let address = `https://api.worldbank.org/v2/countries/${code}/indicators/SE.SCH.LIFE?format=json`;
  console.log('Adress: ', address);
  try {
    let axiosdata = await axios.get(address);
    axiosdata = axiosdata.data[1];
    console.log(axiosdata);
    let salaryData = axiosdata.map(year => {
      return {
        country: year.country,
        year: year.date,
        value: year.value
      };
    });
    let educationvalue = {};
    for (let arrayItem of salaryData) {
      if (arrayItem.value) {
        educationvalue = arrayItem;
        break;
      }
    }
    //console.log('educationvalue: ' + educationvalue.year);
    let resp = {
      educationvalue,
      info: `World Bank: ${axiosdata[0].indicator.value}: ${address}`
    };
    console.log(resp);
    return resp;
  } catch (error) {
    console.log(error);
  }
};

router.post('/', async (request, response) => {
  const code = request.body;
  const data = await getCountryData(code.code);
  //console.log('Palautettava:', data);
  response.json(data);
});

module.exports = router;
