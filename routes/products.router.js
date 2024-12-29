const express = require('express');
const { faker } = require("@faker-js/faker");

const ProductService = require('./../services/product.service');

const router = express.Router();
const service = new ProductService();

router.get('/', async (req, res) => { // send json
  const products = await service.find();
  res.json(products);
});

//avoid misinterpretation of filter as ":id" placing filter first
router.get('/filter', (req, res) => {
  res.send('I am a filter');
})
// use GET variables in url as ":id" with "req.params"
router.get('/:id', async (req, res, next) => {
  try{
    const {id} = req.params;
  const product = await service.findOne(id);
  res.json(product);
  } catch (error){
    next(error);
  }
})

router.post('/', async (req,res) => {
  const body = req.body;
  const newProduct = await service.create(body);
    res.status(201).json({
      message: 'created',
      data: body
    })
})

router.patch('/:id', async (req,res) => {
  try {
    const { id } = req.params
    const body = req.body;
    const product = await service.update(id,body)
    res.json(product)
  } catch(error) {
    res.status(404).json({
      message: error.message
    })
  }
})

router.delete('/:id', async (req,res) => {
  const { id } = req.params
  const body = req.body;
  const rta = await service.delete(id)
    res.json(rta)
})

module.exports = router;
