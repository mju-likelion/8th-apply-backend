import { prisma, Volunteer } from '../../../../generated/prisma-client';

interface Args {
  email: string;
  password: string;
}

export default {
  Query: {
    volunteer: async (_: any, { email, password }: Args) => {
      const volunteer: Volunteer = await prisma.volunteer({ email });

      if (volunteer === null) throw Error('Email not exist!');
      else if (volunteer.password !== password)
        throw Error('Password is not same!');

      return volunteer;
    }
  }
};
