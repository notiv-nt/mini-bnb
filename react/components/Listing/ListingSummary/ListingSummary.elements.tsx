import styled from 'styled-components';
import { CardWrapper } from '~/components/Card/Card.elements';

export const RowGroup = styled.div`
  margin-bottom: 2rem;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;

  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }

  > ${CardWrapper} {
    scroll-snap-align: start;
    flex: 0 0 calc(100% / 3 - 1rem);
    margin-right: 1.5rem;

    @media (max-width: 959px) {
      flex: 0 0 calc(100% / 2 - 0.75rem);
    }

    @media (max-width: 643px) {
      flex: 0 0 calc(80%);
    }
  }
`;
