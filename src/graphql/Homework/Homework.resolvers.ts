import { prisma } from '../../../generated/prisma-client'

interface Args {
  id: string
}

export default {
  Homework: {
    owner: async ({ id }: Args) => await prisma.homework({ id }).owner(),
    week: async ({ id }: Args) => await prisma.homework({ id }).week(),
  },
}
