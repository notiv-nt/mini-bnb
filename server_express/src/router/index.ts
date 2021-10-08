import { NextFunction, Request, Response, Router } from 'express';
import { UserController, ListingController } from '../controllers';

const onlyAuthorized = (req: Request, res: Response, next: NextFunction): Response<any> | void => {
  if (!req.isAuthenticated()) {
    return res.status(401).send('Not authorized');
  }

  next();
};

export default () => {
  const router = Router();

  router.get('/listing-summary', ListingController.getListSummary);
  router.get('/listing/:id', ListingController.getOne);
  router.get('/saved-listing', onlyAuthorized, ListingController.getSaved);
  router.post('/listing/:id/toggle-saved', onlyAuthorized, ListingController.toggleSaved);

  router.get('/me', UserController.me);
  router.post('/login', UserController.login);
  router.post('/logout', UserController.logout);

  return router;
};
