import React from 'react';
import { graphql } from 'gatsby';
import PageWrapper from "../components/PageWrapper";
import RenderBlogList from '../components/RenderBlogList';
import PaginationBlog from '../components/PaginationBlog';

import {
  CategoryHero,
  CategoryHeading
} from '../components/CategoryList/CategoryListStyles';

const BlogList = ({ data, pageContext }) => {

  const { 
    numPages, 
    currentPage,
    categoryName,
    categoryImage,
    categoryURL
  } = pageContext;

  let heading = categoryName ? categoryName : 'Blog';
  let image = categoryImage 
    ? categoryImage 
    : 'https://we3travel.com/wp-content/uploads/2020/04/Virtual-tour-of-Paris.jpg';

  return (
    <PageWrapper>
      <CategoryHero image={image}>
        <CategoryHeading>{heading}</CategoryHeading>
      </CategoryHero>
      <RenderBlogList edges={data.posts.edges} />
      <PaginationBlog 
        currentPage={currentPage} 
        numPages={numPages} 
        categoryURL={categoryURL} 
      />
    </PageWrapper>
  );
};

export default BlogList;

export const pageQuery = graphql`
  query BlogListQuery(
    $skip: Int!
    $limit: Int!
    $categorySlug: String
  ) {
    posts: allWpPost(
      sort: { fields: date, order: DESC }
      skip: $skip
      limit: $limit
      filter: { categories: { nodes: { elemMatch: { slug: { eq: $categorySlug } } } } }
    ) {
      edges {
        node {
          databaseId
          title
          slug
        }
      }
    }
  }
`;