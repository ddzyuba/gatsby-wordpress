import styled from 'styled-components';

export const HomeHeroImg = styled.img`
  width: 100%;
  height: auto;
`;

export const HomeDescription = styled.div`
  background-color: #007b94;
  color: #ffffff;
  margin-top: -4px;
  padding: 40px 15px;
  text-align: center;
`;

export const HomeDescriptionContainer = styled.div`
  max-width: 1370px;
  margin: 0 auto;
`;

export const HomeDescriptionHeading = styled.h1`
  font-size 42px;
  font-weight: 600;
  font-family: Barlow Semi Condensed SemiBold,Helvetica,Arial,sans-serif;
  text-transform: uppercase;
  margin-top: 40px;
  margin-bottom: 40px;

  @media (max-width: 767px) {
    font-size 30px;
  }
`;

export const HomeDescriptionP = styled.p`
  font-size: 21px;
  font-weight: 400;
  line-height: 39px;

  @media (max-width: 767px) {
    font-size: 16px;
    line-height: 29px;
  }
`;

export const HomeRecentPosts = styled.div`
  padding: 70px 15px;
  text-align: center;
`;

export const HomeRecentPostsHeading = styled.h2`
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

export const HomeSignUp = styled.div`
  background-color: #007b94;
  color: #ffffff;
  padding: 40px 15px;
`;

export const HomeSignUpContainer = styled.div`
  max-width: 885px;
  margin: 0 auto;
  text-align: center;
`;

export const HomeSignUpHeading = styled.h2`
  font-size: 36px;
  line-height: 46px;
  margin-top: 0;
  margin-bottom: 20px;
`;

export const HomeSignUpText = styled.p`
  font-size: 16px;
  line-height: 29px;
  margin: 30px 0;
`;

export const HomeSignUpForm = styled.form`
  max-width: 500px;
  margin: 0 auto;
  position: relative;
`;

export const HomeSignUpLabel = styled.label`
  border: 0;
  clip: rect(1px,1px,1px,1px);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;

export const HomeSignUpInputEmail = styled.input`
  border: 1px solid #ccc;
  box-sizing: border-box;
  display: block;
  color: #333333;
  font: normal 24px/18px 'Open Sans';
  padding: 20px 10px 20px 10px;
  width: 100%;
`;

export const HomeSignUpInputSubmit = styled.input`
  background-color: #ffffff;
  border: 1px solid rgb(24,211,189);
  color: #18d3bd;
  cursor: pointer;
  display: block;
  font: bold 24px/32px 'Open Sans';
  letter-spacing: 0.5px;
  padding: 2px 10px 2px 10px;
  text-align: center;
  text-transform: uppercase;
  transition: .2s ease;
  width: 100%;

  &:hover {
    color: #ffffff;
    background-color: #18d3bd;
  }
`;