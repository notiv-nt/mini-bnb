import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { PublicUser } from './user.interfaces';

@Injectable()
export class UserService {
  async getUserAsMe(id: number): Promise<PublicUser | null> {
    const user = await User.findOne(id, { relations: ['listings'] });

    if (!user) {
      return null;
    }

    return {
      id: user.id,
      name: user.name,
      listings: user.listings.map((i) => i.id),
    };
  }
}
