const express = require('express');

const router = express.Router();
const axios = require('axios');

// api end point for fetching elecricity
router.get('/', async (req, res) => {
  try {
    const address =
      'https://api.worldbank.org/v2/countries/wld/indicators/EG.USE.ELEC.KH.PC?format=json&mrnev=1';
    const resp = await axios.get(address);
    const [data] = resp.data[1];

    res.json({
      country: data.country,
      date: data.date,
      value: data.value,
      info: `World Bank: ${data.indicator.value}: ${address}`
    });
    return res;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    return error;
  }
});

// Fetches data from WB api and parses it from extra information
const getCountryData = async code => {
  const countryElectricityUse = `https://api.worldbank.org/v2/countries/${code}/indicators/EG.USE.ELEC.KH.PC?format=json&per_page=30000&mrnev=1`;
  try {
    const resp = await axios.get(countryElectricityUse);
    const [data] = resp.data[1];
    return {
      country: data.country,
      date: data.date,
      value: data.value,
      info: `World Bank: ${data.indicator.value}: ${countryElectricityUse}`
    };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    return error;
  }
};

router.post('/', async (request, response) => {
  const code = request.body;
  const data = await getCountryData(code.code);
  response.json(data);
});

module.exports = router;
