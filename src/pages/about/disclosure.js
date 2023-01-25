import React from 'react';
import { graphql } from 'gatsby';
import PageWrapper from "../../components/PageWrapper";
import {
  PageContainer
} from '../../components/GeneralStyles';

const Disclosure = ({ data }) => {
  const { title, content } = data.wpPage;

  return (
    <PageWrapper>
      <PageContainer>
        <h1 dangerouslySetInnerHTML={{ __html: title }} />
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </PageContainer>
    </PageWrapper>
  );
};

export default Disclosure;

export const DisclosurePageQuery = graphql`
  query DisclosurePageQuery {
    wpPage(slug: { eq: "disclosure" }) {
      title
      content
    }
  }`;