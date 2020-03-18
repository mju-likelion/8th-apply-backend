import {
  prisma,
  Volunteer,
  Application
} from '../../../../generated/prisma-client';

interface Args {
  motive: string;
  spec: string;
  activity: string;
  experience: string;
  wannaMakeDesc: string;
  wannaMakeImageUrl: string;
  volunteerEmail: string;
  volunteerPassword: string;
}

export default {
  Mutation: {
    createApplication: async (_: any, args: Args) => {
      const {
        motive,
        spec,
        activity,
        experience,
        wannaMakeDesc,
        wannaMakeImageUrl,
        volunteerEmail,
        volunteerPassword
      } = args;

      const volunteer: Volunteer = await prisma.volunteer({
        email: volunteerEmail
      });
      if (volunteer === null) throw Error('Email not exist!');
      else if (volunteer.password !== volunteerPassword)
        throw Error('Password is not same!');

      const application: Application = await prisma
        .volunteer({ email: volunteerEmail })
        .application();

      if (application) {
        return await prisma.updateApplication({
          where: { id: application.id },
          data: {
            motive,
            spec,
            activity,
            experience,
            wannaMakeDesc,
            wannaMakeImageUrl
          }
        });
      } else {
        return await prisma.createApplication({
          motive,
          spec,
          activity,
          experience,
          wannaMakeDesc,
          wannaMakeImageUrl,
          volunteer: {
            connect: {
              email: volunteerEmail
            }
          }
        });
      }
    }
  }
};
