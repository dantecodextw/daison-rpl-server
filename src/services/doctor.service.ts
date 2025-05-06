import { prisma } from '../generated/prismaClient';
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
export default {
  patientList,
  addPatient,
  dashboardPatientList,
};
