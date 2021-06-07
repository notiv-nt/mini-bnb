import { Injectable } from '@nestjs/common';
import { UserNotFoundException } from '../exceptions/user-not-found.exception';
import { User } from '../user/user.entity';
import { In } from 'typeorm';
import { Listing } from './listing.entity';

export interface ListingSummary {
  [key: string]: Partial<Listing>[];
}

@Injectable()
export class ListingService {
  async getSummary(): Promise<ListingSummary> {
    const listings = await Listing.find({ select: ['id', 'address', 'price_per_night', 'title'] });

    return listings.reduce((rv: ListingSummary, listing: Listing) => {
      const key = ['Taiwan', 'Poland', 'Cuba'].find((country) => listing.address.indexOf(country) > -1);

      if (!key) {
        return rv;
      }

      if (!rv[key]) {
        rv[key] = [];
      }

      rv[key].push(listing);

      return rv;
    }, {});
  }

  // TODO any better way ?
  async getSavedForUser(userId: number) {
    const user = await User.findOne(userId, { relations: ['listings'] });

    if (!user) {
      throw new UserNotFoundException();
    }

    const listingsIds = user.listings.map((i) => i.id);

    return Listing.find({
      select: ['id', 'address', 'price_per_night', 'title'],
      where: { id: In(listingsIds) },
    });
  }

  async toggleSaved(userId: number, listingId: number): Promise<'REMOVE' | 'SET'> {
    const user = await User.findOne(userId, { relations: ['listings'] });

    if (!user) {
      throw new UserNotFoundException();
    }

    const listings = user.listings.map((i) => i.id);

    if (listings.includes(listingId)) {
      user.listings = user.listings.filter((i) => i.id !== listingId);
      user.save();
      return 'REMOVE';
    } else {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore // yes, im sure
      user.listings = [...user.listings, { id: listingId }];
      user.save();
      return 'SET';
    }
  }
}
