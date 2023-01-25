import React from 'react';
import { graphql } from 'gatsby';
import PageWrapper from "../../components/PageWrapper";
import {
  PageContainer
} from '../../components/GeneralStyles';

const PrivacyPolicy = ({ data }) => {
  const { content } = data.wpPage;

  return (
    <PageWrapper>
      <PageContainer>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </PageContainer>
    </PageWrapper>
  );
};

export default PrivacyPolicy;

export const PrivacyPolicyPageQuery = graphql`
  query PrivacyPolicyPageQuery {
    wpPage(slug: { eq: "privacy-policy" }) {
      content
    }
  }`;