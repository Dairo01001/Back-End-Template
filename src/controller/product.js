const { Product } = require('../database').models;

module.exports = {
  getProducts: async (req, res) => {
    res.json(await Product.findAll());
  },
};
