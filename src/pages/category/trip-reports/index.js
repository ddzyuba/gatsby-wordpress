import React from 'react';
import CategoryList from '../../../components/CategoryList';
import PageWrapper from "../../../components/PageWrapper";
import { destinations } from '../../../utils/destinations';

const Destinations = () => {
  const heroImage = 'https://we3travel.com/wp-content/uploads/2021/02/horseshoe-bay-beach-2.jpg';
  return (
    <PageWrapper>
      <CategoryList 
        heading='Destinations'
        image={heroImage}
        categories={destinations}
      />
    </PageWrapper>
  );
};

export default Destinations;