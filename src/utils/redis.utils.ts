import Redis from 'ioredis';
import redisConfig from '../config/redis.config';
// console.log(redisConfig);
const redis = new Redis({
  username: redisConfig.username,
  password: redisConfig.password,
  host: redisConfig.host,
  port: Number(redisConfig.port),
});

redis
  .ping()
  .then((result) => console.log('Redis is connected Ping ->', result))
  .catch((err) => {
    console.error('Error connecting Redis', err);
    process.exit(1);
  });

redis.on('error', (err) => {
  console.error('Redis error', err);
});

export default redis;
