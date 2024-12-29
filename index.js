const express = require('express');
const { faker } = require("@faker-js/faker");

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hi my server in express');
})

app.get('/new-route', (req, res) => {
  res.send('Hi, I am a new route');
})

app.get('/products', (req, res) => { // send json
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
app.get('/products/filter', (req, res) => {
  res.send('I am a filter'));
})
// use GET variables in url as ":id" with "req.params"
app.get('/products/:id', (req, res) => {
  const {id} = req.params;
  res.json({
	  id,
    name: 'Product 2',
    price: 2000
  });
})

app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const {categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
  })
})

app.get('/users', (req,res) => {
  const { limit, offset } = req.query;
  if (limit && offset ) {
    res.json({
      limit,
      offset
    });
  } else {
    res.send('There are no params')
  }
})

app.listen(port, () => {
  console.log('My port' + port);
})
