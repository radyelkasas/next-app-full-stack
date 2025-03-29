import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

async function main() {
  // await prisma.todo.create({
  //   data: Array.from({ length: 25 }, () => ({
  //     title: faker.lorem.words({ min: 1, max: 5 }),
  //     body: faker.lorem.paragraphs({ min: 1, max: 3 }),
  //     user_id:"1"
  //   })),
  // });
}

main()
  .catch(async (e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
