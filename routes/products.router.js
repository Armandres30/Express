const express = require('express');
const { faker } = require("@faker-js/faker");

const ProductService = require('./../services/product.service');

const router = express.Router();
const service = new ProductService();

router.get('/', (req, res) => { // send json
  const products = service.find();
  res.json(products);
});

//avoid misinterpretation of filter as ":id" placing filter first
router.get('/filter', (req, res) => {
  res.send('I am a filter');
})
// use GET variables in url as ":id" with "req.params"
router.get('/:id', (req, res) => {
  const {id} = req.params;
  const product = service.findOne(id);
  res.json(product);
})

router.post('/', (req,res) => {
  const body = req.body;
    res.status(201).json({
      message: 'created',
      data: body
    })
})

router.patch('/:id', (req,res) => {
  const { id } = req.params
  const body = req.body;
    res.json({
      message: 'created',
      data: body,
      id
    })
})

router.delete('/:id', (req,res) => {
  const { id } = req.params
  const body = req.body;
    res.json({
      message: 'deleted',
      id,
    })
})

module.exports = router;
