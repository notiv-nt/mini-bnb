import Redis from 'ioredis';

const redis = new Redis(parseInt(process.env.REDIS_PORT as string, 10));

redis.on('connect', () => console.log('Redis | connected'));
redis.on('error', console.error);

export default redis;
