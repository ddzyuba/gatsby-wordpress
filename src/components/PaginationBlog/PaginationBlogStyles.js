import styled, { css } from 'styled-components';

export const PaginationContainer = styled.div`
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
`;

export const PageNumber = styled.a`
color: #000000;
  display: ${props => (props.show ? 'none' : 'flex')};
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 41px;
  height: 41px;
  border-radius: 2px;
  font-size: 12px;
  border: 1px solid #e6e6e6;
  margin: 0 5px;
  transition: background-color 0.5s, color 0.5s;
  text-decoration: none;

  ${props =>
    props.active
      ? css`
          background-color: #eeeeee;
        `
      : css`
          background-color: #ffffff;
        `};

  @media (min-width: 992px) {
    &:hover {
      background-color: #ffffff;
    }
  }
`;

export const PageNumberDots = styled(PageNumber)`
  cursor: context-menu;

  &:hover {
    border: 0;
    background-color: #e9ecf5;
    color: #b2b9c4;
  }
`;

export const DesktopContainer = styled.div`
  display: none;

  @media (min-width: 992px) {
    display: flex;
  }
`;
