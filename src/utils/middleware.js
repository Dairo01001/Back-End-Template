const logger = require('./logger');
const config = require('../config');

module.exports = {
  unkanownEndpoint: (req, res) => {
    res.status(404).json({ error: 'unknown endpoint' });
  },
  errorHandler: (err, req, res, next) => {
    logger.err(err.message);

    if (err.name === 'CastError') {
      return res.status(400).json({ error: 'malformatted id' });
    }

    if (err.name === 'ValidationError') {
      return res.status(400).json({ error: err.message });
    }

    if (err.name === 'JsonWebTokenError') {
      return res.status(401).json({ error: 'invalid token' });
    }

    return next(err);
  },
  allowOrigin: (req, res, next) => {
    res.header('Access-Control-Allow-Origin', config.urlFrontend);
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
    next();
  },
};
