import styled from 'styled-components';

export const SocialMediaContainer = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
`;

export const SocialMediaIcon = styled.img`
  width: auto;
  height: 100%;
`;

export const HoverIcon = styled.img`
  position: absolute;
  opacity: 0;
  width: auto;
  height: 100%;
`;

export const SocialMediaLink = styled.a`
  display: inline-block;
  width: 36px;
  height: 36px;
  position: relative;
  z-index: 1;
  transition: opacity 0.5s ease-in-out;

  &:hover {
    ${SocialMediaIcon} {
      opacity: 0;
    }
    ${HoverIcon} {
      opacity: 1;
    }
  }
`;