import styled from 'styled-components';

export const RenderBlogListWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px 15px;

  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    row-gap: 50px;
  }
`;

export const RenderBlogListItem = styled.div`
  @media (min-width: 768px) {
    width: 30%;
    margin-right: 5%;

    &:nth-of-type(3n) {
      margin-right: 0;
    }
  }

  @media (max-width: 767px) {
    margin-bottom: 0px;
  }
`;

export const RenderBlogListItemImg = styled.img`
  width: 100%;
  height: auto;
`;

export const RenderBlogListItemLink = styled.a`
  color: #007b94;
  display: block;
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
  padding: 24px 10px 10px 10px;
  text-decoration: none;
  text-transform: uppercase;
`;