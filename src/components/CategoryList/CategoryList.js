import React from 'react';
import PropTypes from 'prop-types';
import {
  CategoryHero,
  CategoryHeading,
  CategoryListWrapper,
  CategoryListItem,
  CategoryListItemHeadingWrapper,
  CategoryListItemLink,
  CategoryListItemHeading,
  CategoryListImg
} from './CategoryListStyles';

const CategoryList = ({ heading, image, categories }) => {
  return (
    <>
      <CategoryHero image={image}>
        <CategoryHeading>{heading}</CategoryHeading>
      </CategoryHero>
      <CategoryListWrapper>
        {
          categories.map(item => {
            return (
              <CategoryListItem key={item.URL}>
                <CategoryListItemLink href={item.URL}>
                  <CategoryListItemHeadingWrapper>
                    <CategoryListItemHeading>{item.name}</CategoryListItemHeading>
                  </CategoryListItemHeadingWrapper>
                  <CategoryListImg src={item.image} alt={item.name} />    
                </CategoryListItemLink>
              </CategoryListItem>
            );
          })
        }
      </CategoryListWrapper>
    </>
  );
};

export default CategoryList;

CategoryList.propTypes = {
  heading: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  categories: PropTypes.array.isRequired
}