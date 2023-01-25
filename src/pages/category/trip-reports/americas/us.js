import React from 'react';
import CategoryList from '../../../../components/CategoryList';
import PageWrapper from "../../../../components/PageWrapper";
import { usCategories } from '../../../../utils/usCategories';

const UnitedStates = () => {
  const heroImage = 'https://we3travel.com/wp-content/uploads/2017/01/GP-7-cam.jpg';
  return (
    <PageWrapper>
      <CategoryList 
        heading='United States'
        image={heroImage}
        categories={usCategories}
      />
    </PageWrapper>
  );
};

export default UnitedStates;