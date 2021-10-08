import { Request, Response } from 'express';
import { Listing, User } from '../models';

class ListingController {
  static async getListSummary(req: Request, res: Response) {
    const list = await Listing.findAll({
      attributes: ['id', 'address', 'price_per_night', 'title', 'thumbnail'],
    });

    res.send(list);
  }

  static async getSaved(req: Request, res: Response) {
    const saved = req.user?.saved as number[];
    const list = await Listing.findAll({
      where: {
        id: saved,
      },
      attributes: ['id', 'address', 'price_per_night', 'title', 'thumbnail'],
    });

    res.send(list);
  }

  static async getOne(req: Request, res: Response) {
    const id = req.params.id;
    const item = await Listing.findOne({ where: { id } });

    res.send(item);
  }

  static async toggleSaved(req: Request, res: Response) {
    const user = req.user as User;
    const id = parseInt(req.params.id, 10);
    const saved = user.saved;

    if (saved.includes(id)) {
      user.update({
        saved: saved.filter((i) => i !== id),
      });
      res.send({ status: 'REMOVE' });
    }

    //
    else {
      user.update({
        saved: [...user.saved, id],
      });
      res.send({ status: 'SET' });
    }
  }
}

export { ListingController };
export default ListingController;
