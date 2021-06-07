import React from 'react';
import { FooterSection, FooterContainer, FooterText } from './Footer.elements';
import LogoImage from '~/assets/logo.svg';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <FooterSection>
      <FooterContainer>
        <FooterText>
          <LogoImage />
          <p>
            <strong>Reactbnb</strong>. A full-stack React.js and Nest.js demo app.
          </p>
        </FooterText>
      </FooterContainer>
    </FooterSection>
  );
};

export default Footer;
