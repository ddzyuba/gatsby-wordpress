import styled from 'styled-components';

export const PageContainer = styled.div`
  padding: 50px 15px;
  max-width: 1200px;
  margin: 0 auto;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #007b94;
  }

  a {
    color: #007b94;
    text-decoration: none;
  }

  & > img {
    width: 100%;
    height: auto;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  figure {
    text-align: center;
  }

  .aligncenter {
    display: block;
    margin: 0 auto;
  }
`;