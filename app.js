const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');
require('dotenv').config();

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(require('./routes'));
app.use((req, res, next) => next(createError(404)));

app.use((err, req, res, next) => {
  const error = process.env.NODE_ENV === 'development' ? err : {};

  res.status(err.status || 500);
  res.send(error);
});

module.exports = app;
