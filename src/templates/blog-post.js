import React from 'react';
import PageWrapper from "../components/PageWrapper";
import { PageContainer } from '../components/GeneralStyles';

const SinglePost = ({ pageContext }) => {
  const { 
    title, 
    content, 
    date
  } = pageContext;

  const editedContent = content
    .replaceAll("http://we3travel.test", "https://we3travel.com")
    .replaceAll(/style=\".*\"/g, '');

  return (
    <PageWrapper>
      <PageContainer>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: editedContent }} />
        <div>Publish Date: {date}</div>
      </PageContainer>
    </PageWrapper>
  );
};

export default SinglePost;