import bcrypt from 'bcrypt';
import { prisma } from '../../../../generated/prisma-client';
import { generateToken } from '../../../jsonwebtoken';

interface Args {
  email: string;
  password: string;
}

export default {
  Query: {
    signIn: async function(_: any, { email, password }: Args) {
      const user = await prisma.user({ email });
      if (!user) throw Error('There is no such user.');

      const match = await bcrypt.compare(password, user.password);
      if (match) {
        return generateToken(user.id);
      } else {
        throw Error('Wrong password.');
      }
    }
  }
};
