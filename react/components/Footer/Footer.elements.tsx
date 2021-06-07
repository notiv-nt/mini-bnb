import styled from 'styled-components';
import { Container } from '../Global.elements';

export const FooterSection = styled.footer`
  border-top: 1px solid #dbdbdb;
  margin-top: 4rem;
`;

export const FooterContainer = styled(Container)`
  padding: 4rem 1.5rem;
  font-size: 15px;
  color: #767676;
`;

export const FooterText = styled.div`
  display: flex;

  svg {
    height: 2.4rem;
    width: 2.2rem;
    color: currentColor;
    fill: currentColor;
    display: inline-block;
    margin-right: 0.7rem;
  }
`;
