import { prisma } from '../../../../generated/prisma-client';

interface Args {
  id?: string;
}

interface Context {
  request: any;
  isUser: (request: any) => void;
  isStaff: (request: any) => void;
}

export default {
  Query: {
    volunteers: async function(
      _: any,
      { id }: Args,
      { request, isStaff }: Context
    ) {
      isStaff(request);

      if (id) return await prisma.volunteers({ where: { id } });
      else return await prisma.volunteers({ orderBy: 'createdAt_ASC' });
    }
  }
};
