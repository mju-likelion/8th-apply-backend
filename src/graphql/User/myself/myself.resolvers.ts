import { prisma } from '../../../../generated/prisma-client';

interface Context {
  request: any;
  isUser: (request: any) => void;
  isStaff: (request: any) => void;
}

export default {
  Query: {
    myself: async function(_: any, __: any, { request, isUser }: Context) {
      isUser(request);

      return await prisma.user({ email: request.user.email });
    }
  }
};
