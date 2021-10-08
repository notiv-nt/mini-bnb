import Sequelize from 'sequelize';
import db from '../lib/db';

declare global {
  namespace Express {
    interface User {
      id: number;
      name: string;
      email: string;
      password: string;
      saved: number[];
    }

    interface Request {
      user?: User;
    }
  }
}

class User extends Sequelize.Model {
  id!: number;
  name!: string;
  email!: string;
  password!: string;
  saved!: number[];
}
User.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },

    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },

    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    saved: {
      type: Sequelize.ARRAY(Sequelize.INTEGER),
    },
  },

  {
    sequelize: db,
    modelName: 'user',
    tableName: 'users',
    timestamps: true,
  }
);

export { User };
export default User;
