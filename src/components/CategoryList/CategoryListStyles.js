import styled, { css } from 'styled-components';

export const CategoryHero = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  background-size: cover;
  background-position: center center;
  ${props => props.image && css`
    background-image: url(${props.image});
  `}
  padding: 20px;

  @media (max-width: 767px) {
    height: 120px;
  }
`;

export const CategoryHeading = styled.h1`
  color: #ffffff;
  font-size: 48px;
  font-family: 'Barlow Semi Condensed SemiBold',Helvetica,Arial,sans-serif;
  line-height: 57px;
  text-transform: uppercase;
`;

export const CategoryListWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px 15px;

  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    row-gap: 20px;
  }
`;

export const CategoryListItem = styled.div`
  @media (min-width: 768px) {
    width: 32%;
    margin-right: 2%;

    &:nth-of-type(3n) {
      margin-right: 0;
    }
  }

  @media (max-width: 767px) {
    margin-bottom: 20px;
  }
`;

export const CategoryListItemHeadingWrapper = styled.div`
  background-color: #007b94;
  color: #ffffff;
  padding: 10px;
  text-align: center;
  transition: all 0.3s ease-in-out;
`;

export const CategoryListItemLink = styled.a`
  display: block;
  text-decoration: none;

  &:hover > ${CategoryListItemHeadingWrapper} {
    background-color: #707070;
  }
`;

export const CategoryListItemHeading = styled.h3`
  font-size: 28px;
  font-weight: 400;
  line-height: 39px;
  margin: 0;
  text-transform: uppercase;
`;

export const CategoryListImg = styled.img`
  width: 100%;
  height: 300px;
`;