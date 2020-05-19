import React from 'react';
import styled from 'styled-components';

import { FacebookSquare } from "@styled-icons/fa-brands/FacebookSquare";
import { Twitter } from "@styled-icons/fa-brands/Twitter";
import { Instagram } from "@styled-icons/fa-brands/Instagram";
import { Linkedin } from "@styled-icons/fa-brands/Linkedin";
import { Github } from "@styled-icons/fa-brands/Github";
import { Mail } from "@styled-icons/feather/Mail";

export const FacebookIcon = styled(FacebookSquare)`
color: #dcddde;
width: 25px;
height: 25px;
padding: 10px;
`
export const TwitterIcon = styled(Twitter)`
color: #dcddde;
width: 25px;
height: 25px;
padding: 10px;
`

export const InstagramIcon = styled(Instagram)`
color: #dcddde;
width: 25px;
height: 25px;
padding: 10px;
`

export const LinkedinIcon = styled(Linkedin)`
color: #dcddde;
width: 25px;
height: 25px;
padding: 10px;
`

export const GithubIcon = styled(Github)`
color: #dcddde;
width: 25px;
height: 25px;
padding: 10px;
`

export const MailIcon = styled(Mail)`
color: #dcddde;
width: 25px;
height: 25px;
padding: 10px;
`

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
      color: #dcddde87;
      font-size: 16px;
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
          <FacebookIcon />
          <TwitterIcon />
          <InstagramIcon />
          <LinkedinIcon />
          <GithubIcon />
          <MailIcon />
        </div>
    </FooterContainer>
  );
}

export default Footer;
