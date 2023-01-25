import React from 'react';
import { graphql } from 'gatsby';
import PageWrapper from "../components/PageWrapper";
import {
  PageContainer
} from '../components/GeneralStyles';

const Podcast = ({ data }) => {
  const { title, content } = data.wpPage;
  const editedContent = content.replaceAll("http://we3travel.test", "https://we3travel.com");

  return (
    <PageWrapper>
      <PageContainer>
        <h1 dangerouslySetInnerHTML={{ __html: title }} />
        <div dangerouslySetInnerHTML={{ __html: editedContent }} />
      </PageContainer>
    </PageWrapper>
  );
};

export default Podcast;

export const PodcastPageQuery = graphql`
  query PodcastPageQuery {
    wpPage(slug: {eq: "family-travel-podcast"}) {
      title
      content
    }
  }`;