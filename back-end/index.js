const express = require('express');

const cors = require('cors');

const app = express();
app.use(cors());

const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use('/salary', require('./routes/salary'));
app.use('/countrycodes', require('./routes/countrycodes'));
app.use('/educationlength', require('./routes/educationlength'));

// data in root
app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>');
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
