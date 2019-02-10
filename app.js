const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODBURI, { useNewUrlParser: true, });

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
