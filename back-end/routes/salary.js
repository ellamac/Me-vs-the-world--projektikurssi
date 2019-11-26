const express = require('express');

const router = express.Router();
const axios = require('axios');

router.get('/', async (req, res) => {
  try {
    const address =
      'https://api.worldbank.org/v2/countries/wld/indicators/NY.ADJ.NNTY.PC.CD?format=json&mrnev=1';
    const resp = await axios.get(address);
    const [data] = resp.data[1];

    res.json({
      country: data.country,
      date: data.date,
      value: data.value,
      info: `World Bank: ${data.indicator.value}`
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
  const countrySalaryAddres = `https://api.worldbank.org/v2/countries/${code}/indicators/NY.ADJ.NNTY.PC.CD?format=json&mrnev=1`;
  try {
    const resp = await axios.get(countrySalaryAddres);
    const [data] = resp.data[1];

    return {
      country: data.country,
      date: data.date,
      value: data.value,
      info: `World Bank: ${data.indicator.value}`
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
