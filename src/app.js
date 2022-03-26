const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const config = require('./config');

const middleware = require('./utils/middleware');

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(middleware.allowOrigin);
app.set('port', config.PORT);

app.use('/api', require('./routes'));

app.use(middleware.unkanownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
