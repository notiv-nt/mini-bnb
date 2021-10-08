import connectRedis from 'connect-redis';
import session from 'express-session';
import redis from './redis';

export default () => {
  const RedisStore = connectRedis(session);

  return session({
    store: new RedisStore({
      host: process.env.REDIS_HOST,
      port: parseInt(process.env.REDIS_PORT as string, 10),
      client: redis,
      ttl: 86400,
    }),
    name: '_sid',
    resave: false,
    saveUninitialized: false,
    secret: process.env.SESSION_SECRET as string,
    cookie: {
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 30 * 12, // 1y
      sameSite: 'lax',
      // domain: 'localhost',
    },
  });
};
