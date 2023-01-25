import React from 'react';
import SocialMedia from '../SocialMedia';
import {
  FooterTag,
  FooterContainer,
  FooterCopyright,
  FooterLink
} from './FooterStyles';

const Footer = () => {
  return (
    <FooterTag>
      <FooterContainer>
        <SocialMedia className="footer-social-media" section="footer" />
        <FooterCopyright>Copyright © 2013 - 2022 Red Giant Media, LLC. All rights reserved. We3Travel is a registered trademark of Red Giant Media LLC.</FooterCopyright>
        <FooterLink href="/about/disclosure/">Disclosure</FooterLink>
        <FooterLink href="/about/privacy-policy/">Privacy Policy</FooterLink>
      </FooterContainer>
    </FooterTag>
  );
};

export default Footer;