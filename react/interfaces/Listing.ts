export interface Listing {
  id: number;
  title: string;
  address: string;
  about: string;

  amenity_wifi: boolean;
  amenity_pets_allowed: boolean;
  amenity_tv: boolean;
  amenity_kitchen: boolean;
  amenity_breakfast: boolean;
  amenity_laptop: boolean;

  price_per_night: boolean;
  price_extra_people: boolean;

  price_weekly_discount: boolean;
  price_monthly_discount: boolean;

  thumbnail: string;
  images?: string[];
}
