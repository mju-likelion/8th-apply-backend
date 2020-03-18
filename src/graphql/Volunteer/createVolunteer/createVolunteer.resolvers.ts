import { prisma } from '../../../../generated/prisma-client';

interface Args {
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
    createVolunteer: async (_: any, args: Args) => {
      const { name, email, password, phone, sid, grade, college, major } = args;

      return await prisma.createVolunteer({
        name,
        email,
        password,
        phone,
        sid,
        grade,
        college,
        major
      });
    }
  }
};
