import { prisma } from '../../../../generated/prisma-client'

interface Args {
  github: string
  week: number
}

interface Context {
  request: any
  isUser: (request: any) => void
  isStaff: (request: any) => void
}

export default {
  Mutation: {
    submitHomework: async (
      _: any,
      args: Args,
      { request, isUser }: Context
    ) => {
      isUser(request)

      return await prisma.createHomework({
        owner: {
          connect: {
            email: request.user.email,
          },
        },
        github: args.github,
        week: {
          connect: {
            week: args.week,
          },
        },
      })
    },
  },
}
