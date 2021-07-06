const { PrismaClient } = require('@prisma/client')
const userData = require('./fixtures/users')
const prisma = new PrismaClient()

async function main() {
  console.log(`Start seeding ...`)

  await prisma.user.create(userData[0])

  console.log(`Seeding finished.`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })