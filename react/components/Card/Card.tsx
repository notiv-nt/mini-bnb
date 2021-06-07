import React from 'react';
import { Listing } from '~/interfaces/Listing';
import { Thumbnail, CardWrapper, Title, Address } from './Card.elements';
import Link from 'next/link';
import SaveListing from '../SaveListing/SaveListing';

interface CardProps {
  listing: Listing;
}

const Card: React.FC<CardProps> = ({ listing }) => {
  const item = listing;

  return (
    <CardWrapper>
      <Link href={`/listing/${listing.id}`}>
        <a style={{ display: 'block' }}>
          <Thumbnail>
            <img src={item.thumbnail} alt={item.title} />
          </Thumbnail>

          <Title as="h2">
            <span>{item.price_per_night}</span> <span>{item.title}</span>
          </Title>

          <Address as="p">{listing.address}</Address>
        </a>
      </Link>

      <SaveListing id={listing.id} />
    </CardWrapper>
  );
};

export default Card;
