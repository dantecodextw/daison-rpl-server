import Joi from 'joi';

const envSchemas = Joi.object({
  PORT: Joi.string().required(),
  NODE_ENV: Joi.string().valid('dev', 'prod'),
  API_PREFIX: Joi.string().required(),
  JWT_SECRET: Joi.string().required(),
  REDIS_USERNAME: Joi.string().required(),
  REDIS_PASSWORD: Joi.string().required(),
  REDIS_HOST: Joi.string().required(),
  REDIS_PORT: Joi.string().required(),
}).unknown();

const { value: envVars, error } = envSchemas.validate(process.env, { abortEarly: false });
if (error) {
  console.error(
    'Invalid environment configuration:\n',
    error.details.map((d) => d.message).join('\n'),
  );
  process.exit(1);
}

type EnvVars = {
  PORT: string;
  NODE_ENV: 'dev' | 'prod';
  API_PREFIX: string;
  JWT_SECRET: string;
  REDIS_USERNAME: string;
  REDIS_PASSWORD: string;
  REDIS_HOST: string;
  REDIS_PORT: string;
};

export const validatedEnv = envVars as EnvVars;
