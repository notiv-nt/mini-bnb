/* eslint-disable */

const amenities = new Map();
amenities.set('amenity_wifi', { title: 'Wireless Internet', icon: 'fa-wifi' });
amenities.set('amenity_pets_allowed', { title: 'Pets Allowed', icon: 'fa-paw' });
amenities.set('amenity_tv', { title: 'TV', icon: 'fa-television' });
amenities.set('amenity_kitchen', { title: 'Kitchen', icon: 'fa-cutlery' });
amenities.set('amenity_breakfast', { title: 'Breakfast', icon: 'fa-coffee' });
amenities.set('amenity_laptop', { title: 'Laptop friendly workspace', icon: 'fa-laptop' });

const prices = new Map();
prices.set('price_per_night', 'Per night');
prices.set('price_extra_people', 'Extra people');
prices.set('price_weekly_discount', 'Weekly discount');
prices.set('price_monthly_discount', 'Monthly discount');

interface ListingPrices {
  price_per_night: boolean;
  price_extra_people: boolean;
  price_weekly_discount: boolean;
  price_monthly_discount: boolean;
}

interface ListingAmenities {
  amenity_wifi: boolean;
  amenity_pets_allowed: boolean;
  amenity_tv: boolean;
  amenity_kitchen: boolean;
  amenity_breakfast: boolean;
  amenity_laptop: boolean;
}

export function populatePrices(listing: ListingPrices) {
  const arr: { title: string; value: string }[] = [];

  Object.entries(listing).forEach(([key, value]) => {
    if (key.split('_')[0] === 'price') {
      arr.push({
        title: prices.get(key),
        value,
      });
    }
  });

  return arr;
}

export function populateAmenities(listing: ListingAmenities) {
  const arr: { title: string; icon: string }[] = [];

  Object.keys(listing).forEach((key) => {
    if (key.split('_')[0] === 'amenity') {
      arr.push(amenities.get(key));
    }
  });

  return arr;
}
