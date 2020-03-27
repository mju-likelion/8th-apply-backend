import dotenv from 'dotenv';
import passport from 'passport';
import {
  Strategy as JwtStrategy,
  ExtractJwt,
  VerifiedCallback
} from 'passport-jwt';
import { prisma } from '../generated/prisma-client';

dotenv.config();

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
  exp: Date.now() + 86400000
};

async function verifyUser(payload: any, done: VerifiedCallback) {
  try {
    const user = await prisma.user({ id: payload.id });
    if (user) return done(null, user);
    else return done(null, false);
  } catch (e) {
    return done(e, false);
  }
}

passport.use(new JwtStrategy(opts, verifyUser));
passport.initialize();

export function authenticateJwt(req: any, res: any, next: any) {
  return passport.authenticate('jwt', { session: false }, (error, user) => {
    if (user) {
      req.user = user;
    }
    next();
  })(req, res, next);
}
