import { prisma } from '../../../../generated/prisma-client';

interface Args {
  id: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  sid: string;
  grade: string;
  college: string;
  major: string;
}

export default {
  Mutation: {
    updateVolunteer: async (_: any, args: Args) => {
      const {
        id,
        name,
        email,
        password,
        phone,
        sid,
        grade,
        college,
        major
      } = args;

      return await prisma.updateVolunteer({
        where: { id },
        data: {
          name,
          email,
          password,
          phone,
          sid,
          grade,
          college,
          major
        }
      });
    }
  }
};
