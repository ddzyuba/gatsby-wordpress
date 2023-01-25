import React from "react";
import PageWrapper from "../components/PageWrapper";
import { PageContainer } from '../components/GeneralStyles';
import SearchPosts from "../components/SearchPosts";

const SearchTemplate = props => {
  const { pageContext } = props;
  const { options, postsArray } = pageContext;

  const isBrowser = typeof window !== "undefined";
  if (!isBrowser) {
    return (
      <PageWrapper>
        <PageContainer>
          <div>Search</div>
        </PageContainer>
      </PageWrapper>
    );
  }

  const receivedGetParam = window.location.search.replace('?s=', '');
  const searchText = receivedGetParam ? receivedGetParam : '';

  return (
    <PageWrapper>
      <PageContainer>
        <SearchPosts posts={postsArray} engine={options} searchText={searchText} />
      </PageContainer>
    </PageWrapper>
  )
}

export default SearchTemplate