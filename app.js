const cors = require('cors');
const createError = require('http-errors');
const express = require('express');
const helmet = require('helmet');
const path = require('path');
const logger = require('morgan');
const fileUpload = require('express-fileupload');
const routes = require('./routes');
const app = express();
const multer = require('multer')
const AWS = require('aws-sdk')
const fs=require('fs')
app.use(fileUpload());
app.use(cors());
app.use(helmet({ hsts: false }));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'build')));

app.use(routes);

app.use(function(_req, _res, next) {
  next(createError(404));
});

app.use(function(err, _req, res, _next) {
  res.status(err.status || 500);
  if (err.status === 401) {
    res.set('WWW-Authenticate', 'Bearer');
  }
  res.json({
    message: err.message,
    error: JSON.parse(JSON.stringify(err)),
  });
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/public'));
  app.get('/', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'public', 'index.html'));
  });
}

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}




module.exports = app;
