import express from 'express';
import router from './router';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import session from './lib/session';
import cors from 'cors';
import path from 'path';
import * as db from './lib/db';
import seeds from './seeds';
import passport from './lib/passport';

export async function main() {
  const app = express();

  app.set('trust proxy', 1);

  await db.connect();
  await db.reset();

  await seeds();

  app.use(express.static(path.resolve(__dirname, '../../static')));

  app.use(cors({ origin: process.env.CORS_ORIGINS?.split(/\,\s*/), credentials: true }));

  app.use(cookieParser());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(session());

  passport(app);

  app.use(router());

  app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server started ${process.env.SERVER_ADDRESS}`);
  });
}

main();
