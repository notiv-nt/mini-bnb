import React from 'react';
import styles from './ListingImage.module.scss';
import SaveListing from '../SaveListing/SaveListing';

interface ListingImageProps {
  image: string;
  listingId: number;
}

const ListingImage: React.FC<ListingImageProps> = ({ image, listingId }) => {
  return (
    <div className={styles.Header}>
      <img src={image} alt="" className={styles.Image} />

      <SaveListing id={listingId} mode="full" />
    </div>
  );
};

export default ListingImage;
