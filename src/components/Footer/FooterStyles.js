import styled from 'styled-components';

export const FooterTag = styled.footer`
  background-color: #007b94;
  color: #ffffff;
  padding: 20px;
`;

export const FooterContainer = styled.div`
  font-size 14px;
  line-height: 26px;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

export const FooterCopyright = styled.p`
  margin: 20px 0;
`;

export const FooterLink = styled.a`
  color: #ffffff;
  display: inline-block;
  text-decoration: none;

  &:first-of-type {
    margin-right: 15px;
  }
`;