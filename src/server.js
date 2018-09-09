const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// const personRoute = require('./routes/person');
// const customerRoute = require('./routes/customer');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log(`${new Date().toString()} => ${req.originalUrl}`, req.body);
  next();
});

// Handler for 404 - Resource not found
app.use((req, res, next) => {
  res.status(404).send('We think you are lost.');
});

// Handler for Error 500
app.use((err, req, res, next) => {
  console.log(err.stack);
  // res.sendFile(path.join(__dirname, '../public/500.html'));
});

app.listen(PORT, () => console.info(`Server has started on ${PORT}.`));