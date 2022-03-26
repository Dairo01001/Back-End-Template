const app = require('./src/app');
const logger = require('./src/utils/logger');
const sequelize = require('./src/database');

const { Product } = sequelize.models;

sequelize.sync({ force: true }).then(() => {
  app.listen(app.get('port'), async () => {
    logger.log(`Server is running on port ${app.get('port')}`);
    await Product.bulkCreate([{ name: 'Product 1' }, { name: 'Product 2' }]);
  });
});
