const express = require('express');
const app = express();
const Request = require('request');
const router = express.Router();

// api end point for fetching salary
// So far it know only finlands stats
router.get('/', (req, res) => {
    Request.get(
      'https://api.worldbank.org/v2/countries/fin/indicators/NY.ADJ.NNTY.PC.CD?format=json',
      (error, response, body) => {
        if (error) {
          return console.log(error);
        }
        // here data is parsed forom extra information
        let data = JSON.parse(body);
        // prints all the data into console
        // console.log(data)
        data = data[1];
        let resp = data.map(year => {
          return {
            country: year.country,
            year: year.date,
            value: year.value
          };
        });
        res.json(resp);
      }
    );
  });

  module.exports = router;