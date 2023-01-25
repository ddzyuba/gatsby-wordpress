import React from 'react';
import { graphql } from 'gatsby';
import PageWrapper from "../../components/PageWrapper";
import {
  PageContainer
} from '../../components/GeneralStyles';

const About = ({ data }) => {
  const { title, content } = data.wpPage;

  return (
    <PageWrapper>
      <PageContainer>
        <img src="https://we3travel.com/wp-content/uploads/2017/09/grubers-in-vienna-1024x398.jpg" alt="About us" />
        <h1 dangerouslySetInnerHTML={{ __html: title }} />
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </PageContainer>
    </PageWrapper>
  );
};

export default About;

export const AboutUsPageQuery = graphql`
  query AboutUsPageQuery {
    wpPage(slug: { eq: "about" }) {
      title
      content
    }
  }`;