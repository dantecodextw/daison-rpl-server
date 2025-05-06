import asyncErrorHandler from '../middlewares/asyncErrorHandler.middleware';
import patientService from '../services/patient.service';
import apiResponse from '../utils/apiResponse.utils';

const patientList = asyncErrorHandler(async (req, res) => {
  const list = await patientService.patientList();
  res.status(200).json(apiResponse('Patient list has been fetched', list));
});

export default {
  patientList,
};
