import 'dotenv/config';
import './config/validateEnv';

import express, { Application } from 'express';
import appConfig from './config/app.config';
import apiRouter from './routes/index.router';
import globalErrorHandler from './middlewares/globalErrorHandler.middleware';

const app: Application = express();

app.use(express.json());

app.use(appConfig.API_PREFIX, apiRouter);

app.use(globalErrorHandler);

app.listen(appConfig.PORT, () => {
  console.log(`Server has been started on ${appConfig.PORT} in ${appConfig.NODE_ENV} mode`);
});
