const express = require('express');

const router = express.Router();
const axios = require('axios');

// Fetches data from WB api and parses it from extra information
const getEducationData = async code => {
  const address = `https://api.worldbank.org/v2/countries/${code}/indicators/SE.SCH.LIFE?format=json&mrnev=1`;
  console.log('Adress: ', address);
  try {
    const axiosdata = await axios.get(address);
    const [data] = axiosdata.data[1];
    return {
      country: data.country,
      date: data.date,
      value: data.value,
      info: `World Bank: ${data.indicator.value}`
    };
  } catch (error) {
    console.log(error);
    return error;
  }
};

// api end point for fetching salary
router.get('/', async (req, res) => {
  const address =
    'https://api.worldbank.org/v2/countries/wld/indicators/SE.SCH.LIFE?format=json&mrnev=1';
  try {
    const axiosdata = await axios.get(address);
    const [data] = axiosdata.data[1];
    res.json({
      country: data.country,
      date: data.date,
      value: data.value,
      info: `World Bank: ${data.indicator.value}`
    });
    return {
      country: data.country,
      date: data.date,
      value: data.value,
      info: `World Bank: ${data.indicator.value}`
    };
  } catch (error) {
    console.log(error);
    return error;
  }
});

router.post('/', async (request, response) => {
  const code = request.body;
  const data = await getEducationData(code.code);
  response.json(data);
});

module.exports = router;
