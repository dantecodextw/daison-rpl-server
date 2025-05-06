import asyncErrorHandler from '../middlewares/asyncErrorHandler.middleware';
import doctorService from '../services/doctor.service';
import apiResponse from '../utils/apiResponse.utils';

const patientList = asyncErrorHandler(async (req, res) => {
  const list = await doctorService.patientList(req.user!?.id);
  res.status(200).json(apiResponse('Patient list has been fetched', list));
});
const addPatient = asyncErrorHandler(async (req, res) => {
  await doctorService.addPatient(req.user!.id, req.params.patientId);
  res
    .status(201)
    .json(apiResponse('Patient has been added in monitoring list', { patientAdded: true }));
});

const dashboardPatientList = asyncErrorHandler(async (req, res) => {
  const list = await doctorService.dashboardPatientList(req.user!?.id);
  res.status(200).json(apiResponse('Dashboard patient list has been fetched', list));
});

export default {
  patientList,
  addPatient,
  dashboardPatientList,
};
