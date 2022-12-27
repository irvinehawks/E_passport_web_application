import {Sequelize} from 'sequelize';
import sequelize from '../config/db.js';
import asyncHandler from 'express-async-handler';

const User = sequelize.define('Users', {
    username: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
        unique:true
      },
      cellphone: {
        type: Sequelize.INTEGER,
      },
      password: {
        type: Sequelize.STRING,
      }
  });

  (async () => {
    await sequelize.sync({ force: true });
    // Code here
  })();

  export default User;