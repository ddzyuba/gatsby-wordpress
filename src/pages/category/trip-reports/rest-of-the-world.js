import React from 'react';
import CategoryList from '../../../components/CategoryList';
import { restOfTheWorldCategories } from '../../../utils/restOfTheWorldCategories';
import PageWrapper from "../../../components/PageWrapper";

const RestOfTheWorld = () => {
  const heroImage = 'https://we3travel.com/wp-content/uploads/2021/02/guide-dunes-2-2.jpg';
  return (
    <PageWrapper>
      <CategoryList 
        heading='Rest Of The World'
        image={heroImage}
        categories={restOfTheWorldCategories}
      />
    </PageWrapper>
  );
};

export default RestOfTheWorld;