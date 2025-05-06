import { prisma } from '../generated/prismaClient';

const patientList = async (doctorId: number) => {
  console.log(doctorId);
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

const addPatient = async (doctorID: number) => {};

export default {
  patientList,
};
