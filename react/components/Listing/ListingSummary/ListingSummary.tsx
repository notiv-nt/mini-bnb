import React from 'react';
import Card from '~/components/Card/Card';
import { H1 } from '~/components/Global.elements';
import { Listing } from '~/interfaces/Listing';
import { RowGroup } from './ListingSummary.elements';

interface ListingSummaryProps {
  country: string;
  listings: Listing[];
}

const ListingSummary: React.FC<ListingSummaryProps> = ({ country, listings }) => {
  return (
    <>
      <H1>Places in {country}</H1>

      <RowGroup>
        {listings.map((listing) => (
          <Card key={listing.id} listing={listing} />
        ))}
      </RowGroup>
    </>
  );
};

export default ListingSummary;
