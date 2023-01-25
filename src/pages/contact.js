import React from 'react';
import { graphql } from 'gatsby';
import PageWrapper from "../components/PageWrapper";
import {
  PageContainer
} from '../components/GeneralStyles';

const Contact = ({ data }) => {
  const { title, content } = data.wpPage;

  return (
    <PageWrapper>
      <PageContainer>
        <img src="https://we3travel.com/wp-content/uploads/2013/05/Zahara-de-la-Sierra-perfect-view-1024x410.png" alt="Contact us" />
        <h1 dangerouslySetInnerHTML={{ __html: title }} />
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </PageContainer>
    </PageWrapper>
  );
};

export default Contact;

export const ContactUsPageQuery = graphql`
  query ContactUsPageQuery {
    wpPage(slug: {eq: "contact"}) {
      title
      content
    } 
  }`;