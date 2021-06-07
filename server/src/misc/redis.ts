import { Logger } from '@nestjs/common';
import Redis from 'ioredis';

const redisLogger = new Logger('Redis');
const redis: Redis.Redis = new Redis(process.env.REDIS_URL);

redis.on('connect', () => redisLogger.log('Connected'));
redis.on('error', (e) => redisLogger.error(e));

export default redis;
