import styled from 'styled-components';

export const FeaturedDestinationsContainer = styled.div`
  padding: 70px 15px;
  text-align: center;
`;

export const FeaturedDestinationsWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto 30px;
  @media (min-width: 922px) {
    display: flex;
    flex-wrap: wrap;
    row-gap: 50px;
  }
`;

export const FeaturedDestinationsItem = styled.div`
  @media (min-width: 922px) {
    width: 30%;
    margin-right: 5%;

    &:nth-of-type(3),
    &:nth-of-type(6) {
      margin-right: 0;
    }
  }

  @media (max-width: 921px) {
    margin-bottom: 30px;
  }
`;

export const FeaturedDestinationsHeading = styled.h2`
  border-bottom: 4px solid #f9745f;
  color: #007b94;
  display: inline-block;
  font-size: 48px;
  font-family: Barlow Semi Condensed SemiBold,Helvetica,Arial,sans-serif;
  padding-bottom: 5px;
  margin-top: 0;
  margin-bottom: 30px;
  text-transform: uppercase;
`;

export const FeaturedDestinationsCTA = styled.a`
  border: 3px solid #18d3bd;
  color: #007b94;
  display: inline-block;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 2px;
  padding: 12px 16px;
  text-decoration: none;
  text-transform: uppercase;
`;