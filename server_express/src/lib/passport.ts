import passport from 'passport';
import { Express } from 'express';
import { User } from '../models';

export default (app: Express) => {
  app.use(passport.initialize());
  app.use(passport.session());

  // From session to req
  passport.deserializeUser(async ({ id }: User, done) => {
    const user = await User.findByPk(id);

    if (!user) {
      return done(null, null);
    }

    done(null, user);
  });

  // Write to session
  passport.serializeUser(({ id }: User, done) => done(null, { id }));
};
