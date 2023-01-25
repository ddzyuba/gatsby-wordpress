import React from 'react';
import CategoryList from '../../../components/CategoryList';
import PageWrapper from "../../../components/PageWrapper";
import { europeCategories } from '../../../utils/europeCategories';

const Europe = () => {
  const heroImage = 'https://we3travel.com/wp-content/uploads/2022/04/Gondolas_horz.jpg';
  return (
    <PageWrapper>
      <CategoryList 
        heading='Europe'
        image={heroImage}
        categories={europeCategories}
      />
    </PageWrapper>
  );
};

export default Europe;