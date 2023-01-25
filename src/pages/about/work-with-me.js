import React from 'react';
import { graphql } from 'gatsby';
import PageWrapper from "../../components/PageWrapper";
import {
  PageContainer
} from '../../components/GeneralStyles';

const WorkWithMe = ({ data }) => {
  const { title, content } = data.wpPage;

  return (
    <PageWrapper>
      <PageContainer>
        <img src="https://we3travel.com/wp-content/uploads/2009/11/grubers-colosseum-header-1024x410.jpg" alt="Work with me" />
        <h1 dangerouslySetInnerHTML={{ __html: title }} />
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </PageContainer>
    </PageWrapper>
  );
};

export default WorkWithMe;

export const WorkWithMePageQuery = graphql`
  query WorkWithMePageQuery {
    wpPage(slug: { eq: "work-with-me" }) {
      title
      content
    }
  }`;