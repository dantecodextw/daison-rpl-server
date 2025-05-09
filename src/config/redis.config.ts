import { validatedEnv } from './validateEnv';

const redisConfig = {
  username: validatedEnv.REDIS_USERNAME,
  password: validatedEnv.REDIS_PASSWORD,
  host: validatedEnv.REDIS_HOST,
  port: validatedEnv.REDIS_PORT,
};

export default redisConfig;
