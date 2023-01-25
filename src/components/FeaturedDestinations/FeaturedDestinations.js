import React from 'react';
import { featuredDestinations } from '../../utils/featuredDestinations';
import {
  FeaturedDestinationsContainer,
  FeaturedDestinationsWrapper,
  FeaturedDestinationsItem,
  FeaturedDestinationsHeading,
  FeaturedDestinationsCTA
} from './FeaturedDestinationsStyles';

const FeaturedDestinations = () => {
  return (
    <FeaturedDestinationsContainer>
      <FeaturedDestinationsHeading>Featured Destinations</FeaturedDestinationsHeading>
      <FeaturedDestinationsWrapper>
      {
        featuredDestinations.map(item => {
          const { name, URL, image } = item;
          return (
            <FeaturedDestinationsItem key={name}>
              <a href={URL}><img src={image} alt={name} /></a>
            </FeaturedDestinationsItem>
          );
        })
      }
      </FeaturedDestinationsWrapper>
      <FeaturedDestinationsCTA href="/category/trip-reports/">ALL DESTINATIONS</FeaturedDestinationsCTA>
    </FeaturedDestinationsContainer>
  );
};

export default FeaturedDestinations;