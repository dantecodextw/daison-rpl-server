import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import bcrypt from 'bcrypt';

async function main() {
  const hashedPassword = await bcrypt.hash('password', 8);
  await prisma.user.createMany({
    data: [
      {
        first: 'John',
        last: 'Doe',
        email: 'doctor@example.com',
        password: hashedPassword,
        role: 'doctor',
      },
      {
        first: 'Jane',
        last: 'Smith',
        email: 'patient1@example.com',
        password: hashedPassword,
        role: 'patient',
      },
      {
        first: 'Mark',
        last: 'Brown',
        email: 'patient2@example.com',
        password: hashedPassword,
        role: 'patient',
      },
    ],
    skipDuplicates: true,
  });

  await prisma.doctorPatient.create({
    data: {
      doctorId: 1,
      patientId: 2,
    },
  });

  await prisma.patientVitals.create({
    data: {
      heartRate: '72',
      patientId: 2,
    },
  });

  console.log('Seeder has been completed');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
