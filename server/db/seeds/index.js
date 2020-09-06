if (process.env.NODE_ENV !== 'production') require('dotenv').config();

require('./index');

const bill = require('../models/bill'),
  faker = require('faker'),
  mongoose = require('mongoose');

faker.commerce.price(1, 100);
let receipt = [];
const food = [
  'ribs',
  'pork n beans',
  'spaghetti alfredo',
  'pizza',
  'french fries',
  'rice',
  'salad',
  'avacado',
  'beer',
  'martini',
  'flan'
];
function fakeMenu() {
  for (let i = 0; i < food.length; i++) {
    receipt.push({
      price: faker.commerce.price(4, 20)
    });
  }
  return receipt.map((menu, i) => {
    const foodItem = `${food[i]}`;
    return receipt.push({
      ...menu,
      dish: `${food[i]}`
    });
  });
}
fakeMenu();
console.log(receipt);
