import { prisma } from '../generated/prismaClient';
import { Vitals } from '../types/doctor.type';
import CustomError from '../utils/customError.utils';

const patientList = async (doctorId: number) => {
  return await prisma.user.findMany({
    where: {
      role: 'patient',
      AND: {
        PatientDoctor: {
          none: {
            doctorId: doctorId,
          },
        },
      },
    },
  });
};

const addPatient = async (doctorID: number, patientID: string) => {
  const patient = await prisma.user.findUnique({
    where: { id: Number(patientID), role: 'patient' },
  });
  if (!patient) throw new CustomError('Invalid patient ID provided', 400);
  await prisma.doctorPatient.create({
    data: {
      doctorId: doctorID,
      patientId: Number(patientID),
    },
  });
};
const dashboardPatientList = async (doctorId: number) => {
  const userList = await prisma.doctorPatient.findMany({
    where: {
      doctorId,
    },
    include: {
      patient: true,
    },
  });

  const formattedData = userList.map((data) => {
    return data.patient;
  });

  return formattedData;
};

const addPatientData = async (validatedData: Vitals, patientId: string) => {
  const updatedVitals = await prisma.patientVitals.create({
    data: {
      ...validatedData,
      patientId: Number(patientId),
    },
  });

  return updatedVitals;
};

const fetchPatientData = async (patientId: string) => {
  return await prisma.patientVitals.findUnique({
    where: { patientId: Number(patientId) },
  });
};

export default {
  patientList,
  addPatient,
  dashboardPatientList,
  addPatientData,
  fetchPatientData,
};
