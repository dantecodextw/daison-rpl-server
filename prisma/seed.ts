import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({
    data: [
      {
        first: 'John',
        last: 'Doe',
        email: 'doctor@example.com',
        password: 'password',
        role: 'doctor',
      },
      {
        first: 'Jane',
        last: 'Smith',
        email: 'patient1@example.com',
        password: 'hashedpassword2',
        role: 'patient',
      },
      {
        first: 'Mark',
        last: 'Brown',
        email: 'patient2@example.com',
        password: 'hashedpassword3',
        role: 'patient',
      },
    ],
    skipDuplicates: true,
  });

  console.log('Seeded 1 doctor and 2 patients');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
