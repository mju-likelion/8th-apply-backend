import { prisma } from '../../../../generated/prisma-client';

interface Context {
  request: any;
  isUser: (request: any) => void;
  isStaff: (request: any) => void;
}

export default {
  Query: {
    volunteers: async function(_: any, __: any, { request, isStaff }: Context) {
      isStaff(request);

      return await prisma.volunteers({ orderBy: 'createdAt_ASC' });
    }
  }
};
