import Sequelize from 'sequelize';
import db from '../lib/db';

const bool = (defaultValue = false) => ({
  type: Sequelize.BOOLEAN,
  allowNull: false,
  defaultValue,
});

class Listing extends Sequelize.Model {
  id!: number;
  title!: string;
  address!: string;
  about!: string;

  amenity_wifi!: boolean;
  amenity_pets_allowed!: boolean;
  amenity_tv!: boolean;
  amenity_kitchen!: boolean;
  amenity_breakfast!: boolean;
  amenity_laptop!: boolean;

  price_per_night!: boolean;
  price_extra_people!: boolean;

  price_weekly_discount!: boolean;
  price_monthly_discount!: boolean;

  thumbnail!: string;
}
Listing.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },

    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    address: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    about: {
      type: Sequelize.TEXT,
      allowNull: false,
    },

    amenity_wifi: bool(),
    amenity_pets_allowed: bool(),
    amenity_tv: bool(),
    amenity_kitchen: bool(),
    amenity_breakfast: bool(),
    amenity_laptop: bool(),

    price_per_night: Sequelize.STRING,
    price_extra_people: Sequelize.STRING,

    // %
    price_weekly_discount: Sequelize.DECIMAL,
    // %
    price_monthly_discount: Sequelize.DECIMAL,

    thumbnail: {
      type: Sequelize.VIRTUAL,
      get() {
        const id = this.getDataValue('id');

        return `${process.env.SERVER_ADDRESS}/images/${id}/Image_1_thumb.jpg`;
      },
    },

    images: {
      type: Sequelize.VIRTUAL,
      get() {
        const id = this.getDataValue('id');
        const images = [];

        for (let i = 1; i <= 4; i++) {
          images.push(`${process.env.SERVER_ADDRESS}/images/${id}/Image_${i}.jpg`);
        }

        return images;
      },
    },
  },

  {
    sequelize: db,
    modelName: 'listing',
    tableName: 'listings',
    timestamps: true,
  }
);

export { Listing };
export default Listing;
