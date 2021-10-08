import { User, Listing } from './models';
import fs from 'fs';
import path from 'path';

const users = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../seeds/users.json'), 'utf-8'));
const listings = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../seeds/listings.json'), 'utf-8'));

export default async () => {
  await User.bulkCreate(users);
  await Listing.bulkCreate(listings);
};
