import styled, { css } from 'styled-components';

export const HeaderDesktop = styled.div`
  @media (max-width: 921px) {
    display: none;
  }
`;

export const HeaderContainer = styled.div`
  box-sizing: border-box;
  max-height: 130px;
  max-width: 1200px;
  margin: 20px auto 20px;
  padding-right: 35px;
  padding-left: 35px;
`;

export const HeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  grid-column-gap: 20px;
  overflow-wrap: anywhere;
`;

export const HeaderColumnLeft = styled.div``;

export const HeaderColumnRight = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const HeaderLogoLink = styled.a`
  display: inline-block;
  padding: 18px 18px 18px 0;
`;

export const HeaderLogoImg = styled.img``;

export const HeaderBar = styled.div`
  background-color: #007b94;
`;

export const HeaderMenuDesktopContainer = styled.nav`
  box-sizing: border-box;
  display: flex;
  max-width: 1200px;
  min-height: 70px;
  margin: 0 auto;
  padding-right: 35px;
  padding-left: 135px;
`;

export const HeaderMenuDesktop = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const HeaderMenuDesktopItemLink = styled.a`
  color: #ffffff;
  display: block;
  font-size: 19px;
  font-weight: 500;
  height: 100%;
  padding: 0 18px;
  text-decoration: none;
  text-transform: uppercase;
  transition: all .2s linear;
`;

export const HeaderSubMenuDesktop = styled.ul`
  background: #007b94;
  box-shadow: 0 4px 10px -2px rgb(0, 0, 0, 0.10);
  list-style: none;
  margin: 0;
  padding: 0;
  transition: opacity ease-in-out .3s;
  width: 240px;
  opacity: 0;
  visibility: hidden;
  position: absolute;
  top: 100%;
  left: -999em;
  z-index: 99999;

  ${HeaderMenuDesktopItemLink} {
    line-height: 1.45;
    padding: 17px 19px; 
  }
`;

export const HeaderMenuDesktopItem = styled.li`
  line-height: 70px;
  letter-spacing: 2px;
  position: relative;

  &:hover > ${HeaderMenuDesktopItemLink} {
    background: #18d3bd;
  }

  &:hover > ${HeaderSubMenuDesktop} {
    opacity: 1;
    visibility: visible;
    right: auto;
    left: 0;
  }

  ${props => props.hasChildren && css`
    & > ${HeaderMenuDesktopItemLink} {
      padding-right: 48px;
    }

    & > ${HeaderMenuDesktopItemLink}::after {
      position: absolute;
      top: 29px;
      right: 30px;
      display: inline-block;
      width: 6px;
      height: 6px;
      content: '';
      border-top: 1px solid #ffffff;
      border-right: 1px solid #ffffff;
      transform: rotate(135deg);
    }
  `}
`;

export const HeaderDesktopSearchCTAWrapper = styled.span`
  display: flex;
  align-items: center;
  margin-left: 25px;
`;

export const HeaderDesktopSearchCTALink = styled.a``;

export const HeaderDesktopSearchCTAImage = styled.img`
  width: 20px;
  height: 20px;
`;

export const HeaderDesktopSearchWrapper = styled.div`
  background: #007b94;
  display: none;
  width: 100%;
  height: 237px;
  position: absolute;
  top: 0;
  z-index: 10;
  opacity: 0;
  transition: opacity .2s;

  ${props => props.isSearchFormOpen && css`
    display: block;
    opacity: 1;
  `}
`;

export const HeaderDesktopSearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin: 0 auto;
  max-width: 1200px;
  padding-right: 35px;
  padding-left: 35px;
`;

export const HeaderDesktopSearchForm = styled.form`
  width: 90%;
`;

export const HeaderDesktopSearchInput = styled.input`
  font-size: 2em;
  line-height: 2;
  background: 0 0;
  border: 0;
  color: #fafafa;
  outline: none;
  padding: 0;
  width: 100%;

  &::placeholder {
    color: #fafafa;
  }
`;

export const HeaderDesktopSearchLabel = styled.label`
  border: 0;
  clip: rect(1px,1px,1px,1px);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;

export const HeaderDesktopSearchCloseWrapper = styled.div`
  width: 10%;
`;

export const HeaderDesktopSearchCloseLink = styled.a`
  display: inline-block;  
`;

export const HeaderDesktopSearchCloseImg = styled.img`
  width: 36px;
  height: 36px;
`;

export const HeaderMobile = styled.div`
  @media (min-width: 922px) {
    display: none;
  }
`;

export const HeaderMobileLogo = styled.div`
  max-height: 170px;
  padding: 40px 20px;
  text-align: center;
`;

export const HeaderMobileLogoLink = styled.a`
  display: inline-block;
  margin: 0 auto;
`;

export const HeaderMobileLogoImg = styled.img`
  width: 250px;
  height: 76px;
`;

export const HeaderBarMobile = styled.div`
  background-color: #007b94;
  padding: 20px;
  text-align: center;
`;

export const MobileMenuToogle = styled.button`
  color: #ffffff;
  border: none;
  background: #007b94;
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0 auto;
  width: 114px;
`;

export const MobileMenuToogleIcon = styled.img`
  width: 50px;
  height: 50px;
`;

export const MobileMenuToogleText = styled.span`
  color: #ffffff;
  display: inline-block;
  font-size: 18px;
  font-weight: 600;
  margin-left: 10px;
`;