const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hi my server in express');
})

app.get('/new-route', (req, res) => {
  res.send('Hi, I am a new route');
})

app.get('/products', (req, res) => {
  res.json({
    name: 'Product 1',
    price: 1000
  },
  {
    name: 'Product 2',
    price: 2000
  });
})

app.get('/products', (req, res) => { // send json
  res.json({
    name: 'Product 1',
    price: 1000
  });
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

app.listen(port, () => {
  console.log('My port' + port);
})
