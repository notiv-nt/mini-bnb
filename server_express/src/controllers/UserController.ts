import { Request, Response } from 'express';
import { User } from '../models';

class UserController {
  static async me(req: Request, res: Response) {
    if (req.isAuthenticated()) {
      const user: Partial<Express.User> = {
        id: req.user?.id,
        name: req.user?.name,
        saved: req.user?.saved,
      };

      res.send({ status: 'ok', user });
    }

    //
    else {
      res.json(null);
    }
  }

  static async login(req: Request, res: Response): Promise<Response<any> | void> {
    const { email, password } = req.body;
    const user = await User.findOne({
      where: { email, password },
    });

    if (!user) {
      return res.send({ status: 'error', message: 'User not found' });
    }

    req.logIn(user, (err) => {
      if (err) {
        throw err;
      }

      res.send({
        status: 'ok',
        user: user.toJSON(),
      });
    });
  }

  static logout(req: Request, res: Response) {
    req.logOut();
    res.send({ status: 'ok' });
  }
}

export { UserController };
export default UserController;
