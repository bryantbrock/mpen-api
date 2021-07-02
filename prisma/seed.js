import { PrismaClient } from '@prisma/client'
import userData from './fixtures/users'
import plodactivityData from './fixtures/plodactivities'

const prisma = new PrismaClient()

const seedUsers = () => {
  console.log(userData)
}

const seedPlodactivities = () => {
  console.log(plodactivityData)
}

async function main() {
  console.log(`Start seeding ...`)
  seedUsers()
  seedPlodactivities()
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