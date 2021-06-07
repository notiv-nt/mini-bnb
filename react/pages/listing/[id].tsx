import { GetServerSideProps } from 'next';
import ListingSingle from '~/components/ListingSingle/ListingSingle';
import ListingService from '~/services/ListingService';

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (!params?.id) {
    return { redirect: '/', notFound: true };
  }

  const listing = await ListingService.getSingle(params.id as string);

  if (!listing) {
    return { redirect: '/', notFound: true };
  }

  return {
    props: {
      listing,
    },
  };
};

export default ListingSingle;
