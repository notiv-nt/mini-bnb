import styled from 'styled-components';
import { Container } from '../Global.elements';

export const HeaderSection = styled.header`
  border-bottom: 1px solid #e4e4e4;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
`;

export const HeaderContainer = styled(Container)`
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoContainer = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #61dafb;
  font-size: 2.8rem;
  font-weight: bold;

  svg {
    height: 3.4rem;
    width: 3.4rem;
    color: currentColor;
    fill: currentColor;
    display: inline-block;
  }
`;

export const LogoText = styled.span`
  margin-left: 1rem;
  line-height: 1;

  @media (max-width: 500px) {
    display: none;
  }
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 1.4rem;
  line-height: 1;
  letter-spacing: 0.5px;

  a {
    display: inline-block;
    padding: 1rem;
  }

  li:not(:last-child) {
    margin-right: 2rem;

    @media (max-width: 500px) {
      margin-right: 1rem;
    }
  }

  a:hover {
    color: #09f;
    text-decoration: underline;
  }
`;
