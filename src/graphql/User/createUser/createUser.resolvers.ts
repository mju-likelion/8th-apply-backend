import bcrypt from 'bcrypt';
import { prisma, Gender } from '../../../../generated/prisma-client';

interface Args {
  name: string;
  email: string;
  gender: Gender;
  phone: string;
  sid: string;
  major: string;
  github: string;
  username: string;
  password: string;
}

export default {
  Mutation: {
    createUser: async function(_: any, args: Args) {
      const {
        name,
        email,
        gender,
        phone,
        sid,
        major,
        github,
        username,
        password
      } = args;

      const passwordHash = await bcrypt.hash(password, 10);

      return await prisma.createUser({
        name,
        email,
        gender,
        phone,
        sid,
        major,
        github,
        username,
        password: passwordHash,
        isConfirmed: false,
        isStaff: false
      });
    }
  }
};
