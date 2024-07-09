import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
// NOTE: 初期データ投入ロジック
async function seed() {
  const todos = [{title: 'Learn Next.js'}, {title: 'Learn React 19'}, {title: "Learn Typescript"}]
  for (let todo of todos) {
    await prisma.todo.create({
      data: todo
    })
  }
}

seed()
    .catch(e => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })