const { commerce } = require('faker');
const { Photo } = require('./models');

function random100() {
  return Math.floor(Math.random() * 100) + 1;
}