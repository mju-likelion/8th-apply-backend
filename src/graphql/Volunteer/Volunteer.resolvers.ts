import { prisma } from '../../../generated/prisma-client';

interface Args {
  id: string;
}

export default {
  Volunteer: {
    application: async ({ id }: Args) =>
      await prisma.volunteer({ id }).application()
  }
};
