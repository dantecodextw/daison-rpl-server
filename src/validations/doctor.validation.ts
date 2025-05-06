import Joi from 'joi';
import validationHelper from '../utils/validationHelper.utils';

const addPatientData = new validationHelper({
  bloodPressure: Joi.string().min(1).optional().allow('', null),
  heartRate: Joi.string().min(1).optional().allow('', null),
  oxygenLevel: Joi.string().min(1).optional().allow('', null),
  temperature: Joi.string().min(1).optional().allow('', null),
  weight: Joi.string().min(1).optional().allow('', null),
});

export default {
  addPatientData,
};
