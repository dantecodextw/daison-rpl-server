import express, { Router } from 'express';
import authRouter from './auth.router';
import patientController from '../controllers/patient.controller';
import authorization from '../middlewares/authorization.middleware';
import authGuard from '../middlewares/authGuard.middleware';

const apiRouter: Router = express.Router();

apiRouter.use('/auth', authRouter);

apiRouter.use(authGuard);
apiRouter.route('/patient/list').get(authorization('doctor'), patientController.patientList);

export default apiRouter;
