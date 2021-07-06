# mpen-api

### Things to note
Whenever you make changes to `schema.prisma`, you will need to run `npx prisma generate` to keep the Prisma Client up to date with the database.
For simplicity, you can run `yarn prisma:migrate` which will run the updated schema file AND it will run generate.