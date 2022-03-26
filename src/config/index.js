require('dotenv').config();

const PORT = process.env.PORT || 3001;
const urlFrontend = process.env.FRONTEND_URL || 'http://localhost:3000';
const { DATABASE_URL } = process.env;

module.exports = {
  PORT,
  urlFrontend,
  DATABASE_URL,
};
