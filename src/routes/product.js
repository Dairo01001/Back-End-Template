const productRouter = require('express').Router();
const { getProducts } = require('../controller/product');

productRouter.get('/', getProducts);

module.exports = productRouter;
