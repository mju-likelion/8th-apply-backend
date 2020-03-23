import { prisma, Volunteer } from '../../../../generated/prisma-client';

interface Args {
  sid: string;
  password: string;
}

export default {
  Query: {
    volunteer: async (_: any, { sid, password }: Args) => {
      const volunteer: Volunteer = await prisma.volunteer({ sid });

      if (volunteer === null) throw Error('Student ID not exist!');
      else if (volunteer.password !== password)
        throw Error('Password is not same!');

      return volunteer;
    }
  }
};
