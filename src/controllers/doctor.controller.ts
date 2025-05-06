import asyncErrorHandler from '../middlewares/asyncErrorHandler.middleware';
import patientService from '../services/doctor.service';
import apiResponse from '../utils/apiResponse.utils';

const patientList = asyncErrorHandler(async (req, res) => {
  const list = await patientService.patientList(req.user!.id);
  res.status(200).json(apiResponse('Patient list has been fetched', list));
});
const addPatient = asyncErrorHandler(async (req, res) => {
  // await
});

export default {
  patientList,
  addPatient,
};
