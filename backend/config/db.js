import { Sequelize } from 'sequelize';

// Passing parameters separately (other dialects)
const sequelize = new Sequelize('epassportdb', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});

export default sequelize;