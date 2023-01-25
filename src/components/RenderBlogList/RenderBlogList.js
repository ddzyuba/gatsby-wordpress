import React from 'react';
import PropTypes from 'prop-types';
import RenderBlogListItemImage from './RenderBlogListItemImage';
import {
  RenderBlogListWrapper,
  RenderBlogListItem,
  RenderBlogListItemLink
} from './RenderBlogListStyles';

const RenderBlogList = ({ edges }) => {
  return (
    <RenderBlogListWrapper>
      { edges.map(edge => {
        const { slug, title, databaseId } = edge.node;

        return (
          <RenderBlogListItem key={slug}>
            <RenderBlogListItemImage databaseId={databaseId} />
            <RenderBlogListItemLink 
              href={`/${slug}`} 
            >{title}</RenderBlogListItemLink>
          </RenderBlogListItem>
        )
      }) }
    </RenderBlogListWrapper>
  );
};

export default RenderBlogList;

RenderBlogList.propTypes = {
  edges: PropTypes.array.isRequired
};