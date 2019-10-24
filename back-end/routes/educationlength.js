const express = require('express');
const app = express();
const request = require('request');
const router = express.Router();
const axios = require('axios');

// Fetches data from WB api and parses it from extra information
const getCountryData = async code => {
  let address = `https://api.worldbank.org/v2/countries/${code}/indicators/SE.SCH.LIFE?format=json`;
  console.log('Adress: ', address);
  try {
    let axiosdata = await axios.get(address);
    axiosdata = axiosdata.data[1];
    let educationData = axiosdata.map(year => {
      return {
        country: year.country,
        year: year.date,
        value: year.value
      };
    });
    let educationvalue = {};
    for (let arrayItem of educationData) {
      if (arrayItem.value) {
        educationvalue = arrayItem;
        break;
      }
    }
    let resp = {
      educationvalue,
      info: `World Bank: ${axiosdata[0].indicator.value}: ${address}`
    };
    return resp;
  } catch (error) {
    console.log(error);
  }
};

// api end point for fetching salary
router.get('/', (req, res) => {
  const address =
    'https://api.worldbank.org/v2/countries/wld/indicators/SE.SCH.LIFE?format=json&per_page=10000';
  request.get(address, (error, response, body) => {
    if (error) {
      return console.log(error);
    }
    // here data is parsed from extra information
    let data = JSON.parse(body);
    data = data[1];
    let resp = data.map(year => {
      return {
        country: year.country,
        year: year.date,
        value: year.value
      };
    });
    for (let arrayItem of resp) {
      if (arrayItem.value) {
        worldEduAvg = arrayItem;
        break;
      }
    }
    resp = {
      worldEduAvg,
      info: `World Bank: ${data[0].indicator.value}: ${address}`
    };
    console.log(resp);
    res.json(resp);
  });
});

router.post('/', async (request, response) => {
  const code = request.body;
  const data = await getCountryData(code.code);
  response.json(data);
});

module.exports = router;
