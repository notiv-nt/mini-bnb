import { GetServerSideProps } from 'next';
import React from 'react';
import Head from 'next/head';
import { Container } from '~/components/Global.elements';
import ListingSummary from '~/components/Listing/ListingSummary/ListingSummary';
import { Listing } from '~/interfaces/Listing';
import ListingService from '~/services/ListingService';

interface Place {
  place: string;
  listings: Listing[];
}

interface IndexProps {
  places: Place[];
}

const Index: React.FC<IndexProps> = ({ places }) => {
  return (
    <Container>
      <Head>
        <title>Reactbnb</title>
      </Head>

      {places.map((i) => (
        <ListingSummary country={i.place} listings={i.listings} key={i.place} />
      ))}
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async () => ({
  props: {
    places: await ListingService.getSummary(),
  },
});

export default Index;
