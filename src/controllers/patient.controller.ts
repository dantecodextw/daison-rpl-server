import asyncErrorHandler from '../middlewares/asyncErrorHandler.middleware';

const patientList = asyncErrorHandler(async (req, res) => {});

export default {
  patientList,
};
