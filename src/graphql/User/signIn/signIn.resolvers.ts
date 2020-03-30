import bcrypt from 'bcrypt';
import { prisma } from '../../../../generated/prisma-client';
import { generateToken } from '../../../jsonwebtoken';

interface Args {
  email: string;
  password: string;
}

export default {
  Mutation: {
    signIn: async function(_: any, { email, password }: Args) {
      const user = await prisma.user({ email });
      if (!user) throw Error('There is no such user.');
      if (!user.isConfirmed) throw Error('Not confirmed yet.');

      const match = await bcrypt.compare(password, user.password);
      if (match) {
        await prisma.updateUser({
          where: { email },
          data: { lastSignedIn: new Date().toISOString() }
        });
        return generateToken(user.id);
      } else {
        throw Error('Wrong password.');
      }
    }
  }
};
