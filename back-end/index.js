const express = require('express');
var cors = require('cors');
const app = express();

app.use(cors());

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

app.use('/salary', require('./routes/salary'));

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
