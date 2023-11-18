// routes/products.js
const express = require('express');
const router = express.Router();
const Product = require('../models/product');

router.post('/add', async (req, res) => {
  try {
    const { name, version, description } = req.body;
    const product = new Product({ name, version, description });
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
