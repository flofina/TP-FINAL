import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .footer-data {
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      margin: 5px;
    }
  }
  .rrss {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
        <div className='footer-data'>
          <p>© 2020 - All rights reserved</p>
          <p>Designed and built by me - Data provided by TMDb.</p>
        </div>
        <div className='rrss'>
          <p>ICONO</p>
          <p>ICONO</p>
          <p>ICONO</p>
          <p>ICONO</p>
        </div>
    </FooterContainer>
  );
}

export default Footer;
