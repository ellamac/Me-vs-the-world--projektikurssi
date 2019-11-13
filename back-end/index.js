require('dotenv').config();

const express = require('express');

const cors = require('cors');

const bodyParser = require('body-parser');

const app = express();
app.use(cors());

app.use(express.static('build'));
app.use(bodyParser.json());

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.use('/api/salary', require('./routes/salary'));
app.use('/api/countrycodes', require('./routes/countrycodes'));
app.use('/api/educationlength', require('./routes/educationlength'));
app.use('/api/electricity', require('./routes/electricity'));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
