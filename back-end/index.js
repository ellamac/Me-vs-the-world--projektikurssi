const express = require('express');
const app = express();
const Request = require('request');


// test data
const salaryData = [
  {
    avgSalary: 42000,
    country: 'fin'
  },
  {
    avgSalary: 40000,
    country: 'swe'
  },
  {
    avgSalary: 80000,
    country: 'nor'
  },
  {
    avgSalary: 39000,
    country: 'den'
  }
];

// api end point for fetching salary
// So far it know only finlands stats
app.get('/salary', (req, res) => {
  Request.get(
    'https://api.worldbank.org/v2/countries/fin/indicators/NY.ADJ.NNTY.PC.CD?format=json',
    (error, response, body) => {
      if (error) {
        return console.log(error);
      }
      // here data is parsed forom extra information
      let data = JSON.parse(body);
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

// data in root
app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>');
});

// data in root/salarytest
app.get('/salarytest', (req, res) => {
  res.json(salaryData);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
