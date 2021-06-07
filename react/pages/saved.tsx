import { GetServerSidePropsResult } from 'next';
import Head from 'next/head';
import React from 'react';
import Card from '~/components/Card/Card';
import { Container, H1 } from '~/components/Global.elements';
import { Listing } from '~/interfaces/Listing';
import ListingService from '~/services/ListingService';
import { StoreWrapper } from '~/store';

interface SavedProps {
  listings: Listing[];
}

const Saved: React.FC<SavedProps> = ({ listings }) => {
  return (
    <Container>
      <Head>
        <title>Saved listings</title>
      </Head>

      <H1>Saved listings</H1>

      {!listings.length && <p>No saved listings.</p>}

      <div className="row">
        {listings.map((listing) => (
          <Card key={listing.id} listing={listing} />
        ))}
      </div>

      <style jsx>{`
        .row {
          display: grid;
          grid-gap: 3rem 1.5rem;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        }
      `}</style>
    </Container>
  );
};

export const getServerSideProps = StoreWrapper.getServerSideProps<
  Promise<GetServerSidePropsResult<SavedProps>>
>(async ({ store, req }) => {
  const { user } = store.getState();

  if (!user) {
    return {
      redirect: {
        statusCode: 301,
        destination: '/',
      },
    };
  }

  return {
    props: {
      listings: await ListingService.getSaved(req),
    },
  };
});

export default Saved;
