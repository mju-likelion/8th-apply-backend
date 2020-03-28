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
      const { name, email, password, gender, phone, sid, major, github } = args;

      const passwordHash = await bcrypt.hash(password, 10);

      return await prisma.createUser({
        name,
        email,
        password: passwordHash,
        gender,
        phone,
        sid,
        major,
        github,
        isConfirmed: false,
        isStaff: false
      });
    }
  }
};
