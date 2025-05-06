import { prisma } from '../generated/prismaClient';

const patientList = async () => {
  return await prisma.user.findMany({
    where: {
      role: 'patient',
    },
  });
};

export default {
  patientList,
};
