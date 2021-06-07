import React from 'react';
import Head from 'next/head';
import { Listing } from '~/interfaces/Listing';
import { populatePrices, populateAmenities } from '~/lib/helpers';
import FeatureList from '../FeatureList/FeatureList';
import ListingImage from '../ListingImage/ListingImage';

import styles from './ListingSingle.module.scss';

interface ListingSingleProps {
  listing: Listing;
}

const ListingSingle: React.FC<ListingSingleProps> = ({ listing }) => {
  const prices = populatePrices(listing);
  const amenities = populateAmenities(listing);

  return (
    <>
      <Head>
        <title>{listing.title}</title>
      </Head>

      <ListingImage image={listing.images?.[0] as string} listingId={listing.id} />

      <div className={styles.ListingContainer}>
        <div className={styles.Heading}>
          <h1>{listing.title}</h1>
          <p>{listing.address}</p>
        </div>

        <hr className={styles.Hr} />

        <div className={styles.About}>
          <h3>About this listing</h3>
          <p>{listing.about}</p>
        </div>

        <div className="lists">
          <FeatureList title="Amenities" items={amenities}>
            {(item: { title: string; icon: string }) => (
              <>
                <i className={`fa fa-lg ${item.icon}`}></i>
                <span>{item.title}</span>
              </>
            )}
          </FeatureList>

          <FeatureList title="Prices" items={prices}>
            {(item: { title: string; value: string }) => (
              <span>
                {item.title}: <strong>{item.value}</strong>
              </span>
            )}
          </FeatureList>
        </div>
      </div>
    </>
  );
};

export default ListingSingle;
