const express = require('express');

const router = express.Router();
const axios = require('axios');

// api end point for fetching salary

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
      info: `World Bank: ${data.indicator.value}: ${address}`
    });
    return res;
  } catch (error) {
    console.log(error);
    return error;
  }
});

// Fetches data from WB api and parses it from extra information
const getCountryData = async code => {
  const countrySalaryAddres = `https://api.worldbank.org/v2/countries/${code}/indicators/NY.ADJ.NNTY.PC.CD?format=json&mrnev=1`;
  console.log('Adress: ', countrySalaryAddres);
  try {
    const resp = await axios.get(countrySalaryAddres);
    const [data] = resp.data[1];
    console.log(data);

    return {
      country: data.country,
      date: data.date,
      value: data.value,
      info: `World Bank: ${data.indicator.value}: ${countrySalaryAddres}`
    };
  } catch (error) {
    console.log(error);
    return error;
  }
};

router.post('/', async (request, response) => {
  const code = request.body;
  const data = await getCountryData(code.code);
  console.log('Palautettava:', data);
  response.json(data);
});

module.exports = router;
