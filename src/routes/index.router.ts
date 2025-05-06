import express, { Router } from 'express';
import authRouter from './auth.router';
import doctorController from '../controllers/doctor.controller';
// import authorization from '../middlewares/authorization.middleware';
import authGuard from '../middlewares/authGuard.middleware';

const apiRouter: Router = express.Router();

apiRouter.use('/auth', authRouter);

apiRouter.use(authGuard);
apiRouter.route('/doctor/patient-list').get(doctorController.patientList);
apiRouter.route('/doctor/add-patient/:patientId').get(doctorController.addPatient);

export default apiRouter;
