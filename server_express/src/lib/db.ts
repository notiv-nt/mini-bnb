import { Sequelize } from 'sequelize';

const db = new Sequelize(process.env.DB_URL as string, {
  logging: false,
  define: {
    timestamps: false,
  },
});

export async function reset() {
  await db.sync({ force: true });
}

export async function connect() {
  return db
    .authenticate()
    .then(() => console.log('Sequelize | Connection has been established successfully'))
    .catch((err) => {
      console.error('Sequelize | Unable to connect to the database:', err);
      throw err;
    });
}

export default db;
