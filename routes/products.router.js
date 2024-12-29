const express = require('express');
const { faker } = require("@faker-js/faker");

const router = express.Router();

router.get('/', (req, res) => { // send json
  const products = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let index = 0; index < limit ; index++) {
    products.push({
      name: faker.commerce.productName(), //faker provides random productName
      price: parseInt(faker.commerce.price(), 10), //parse String to Int
      image: faker.image.url(), //provides random image Url
    });
  }
  res.json(products);
});

//avoid misinterpretation of filter as ":id" placing filter first
router.get('/filter', (req, res) => {
  res.send('I am a filter');
})
// use GET variables in url as ":id" with "req.params"
router.get('/:id', (req, res) => {
  const {id} = req.params;
  res.json({
	  id,
    name: 'Product 2',
    price: 2000
  });
})

module.exports = router;
