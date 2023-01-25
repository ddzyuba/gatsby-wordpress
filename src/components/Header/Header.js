import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SocialMedia from '../SocialMedia';

import { 
  HeaderDesktop,
  HeaderContainer,
  HeaderWrapper,
  HeaderColumnLeft,
  HeaderColumnRight,
  HeaderLogoLink,
  HeaderLogoImg,
  HeaderBar,
  HeaderMenuDesktopContainer,
  HeaderMenuDesktop,
  HeaderMenuDesktopItem,
  HeaderMenuDesktopItemLink,
  HeaderSubMenuDesktop,

  HeaderDesktopSearchCTAWrapper,
  HeaderDesktopSearchCTALink,
  HeaderDesktopSearchCTAImage,
  HeaderDesktopSearchWrapper,
  HeaderDesktopSearchContainer,
  HeaderDesktopSearchForm,
  HeaderDesktopSearchInput,
  HeaderDesktopSearchLabel,
  HeaderDesktopSearchCloseWrapper,
  HeaderDesktopSearchCloseLink,
  HeaderDesktopSearchCloseImg,

  HeaderMobile,
  HeaderMobileLogo,
  HeaderMobileLogoLink,
  HeaderMobileLogoImg,
  HeaderBarMobile,
  MobileMenuToogle,
  MobileMenuToogleIcon,
  MobileMenuToogleText
} from './HeaderStyles';

import mobileMenuIcon from '../../images/hamburgerMenu.svg';
import desktopSearchCloseIcon from '../../images/searchFormClose.svg';
import searchIcon from '../../images/search.png';
import { menuLinks } from '../../utils/menuLinks';

const Header = (props) => {

  const { 
    toggleIsMenuOpen, 
    handleOnSearchSubmit, 
    handleOnSearchInputChange, 
    searchText 
  } = props;

  const [isSearchFormOpen, setIsSearchFormOpen] = useState(false);

  const toggleIsSearchFormOpen = (event) => {
    event.preventDefault();
    setIsSearchFormOpen(prev => !prev);
  };

  const searchInputRef = React.createRef();

  useEffect(() => {
    if (isSearchFormOpen) {
      searchInputRef.current.focus();
    }
  });

  return (
    <>
      <HeaderDesktop>
        <HeaderDesktopSearchWrapper isSearchFormOpen={isSearchFormOpen}>
          <HeaderDesktopSearchContainer>
            <HeaderDesktopSearchForm onSubmit={e => handleOnSearchSubmit(e)}>
              <HeaderDesktopSearchLabel htmlFor="s">Search...</HeaderDesktopSearchLabel>
              <HeaderDesktopSearchInput 
                type="text" 
                placeholder="Search..." 
                value={searchText} 
                onChange={e => handleOnSearchInputChange(e)} 
                id="s"
                ref={searchInputRef}
              />
            </HeaderDesktopSearchForm>

            <HeaderDesktopSearchCloseWrapper>
              <HeaderDesktopSearchCloseLink href="#" onClick={e => toggleIsSearchFormOpen(e)}>
                <HeaderDesktopSearchCloseImg src={desktopSearchCloseIcon} />
              </HeaderDesktopSearchCloseLink>
            </HeaderDesktopSearchCloseWrapper>
          </HeaderDesktopSearchContainer>
        </HeaderDesktopSearchWrapper>

        <HeaderContainer>
          <HeaderWrapper>
            <HeaderColumnLeft>
              <HeaderLogoLink href="/">
                <HeaderLogoImg src="https://we3travel.com/wp-content/uploads/2021/03/we3travel-1.png" />
              </HeaderLogoLink>
            </HeaderColumnLeft>
            <HeaderColumnRight>
              <SocialMedia className="header-social-media" section="header" />
            </HeaderColumnRight>
          </HeaderWrapper>
        </HeaderContainer>

        <HeaderBar>
          <HeaderMenuDesktopContainer>
            <HeaderMenuDesktop>
              {
                menuLinks.map(item => {
                  const hasChildren = item.children ? true : false;
                  return (
                    <HeaderMenuDesktopItem hasChildren={hasChildren} key={item.name}>
                      <HeaderMenuDesktopItemLink href={item.URL}>{item.name}</HeaderMenuDesktopItemLink>
                      {hasChildren && (
                        <HeaderSubMenuDesktop>
                          {
                            item.children.map(child => {
                              return (
                                <HeaderMenuDesktopItem key={child.name}>
                                  <HeaderMenuDesktopItemLink href={child.URL}>{child.name}</HeaderMenuDesktopItemLink>
                                </HeaderMenuDesktopItem>
                              )
                            })
                          }
                        </HeaderSubMenuDesktop>
                      )}
                    </HeaderMenuDesktopItem>
                  )
                })
              }
            </HeaderMenuDesktop>

            <HeaderDesktopSearchCTAWrapper>
              <HeaderDesktopSearchCTALink href="#" onClick={e => toggleIsSearchFormOpen(e)}>
                <HeaderDesktopSearchCTAImage src={searchIcon} />
              </HeaderDesktopSearchCTALink>
            </HeaderDesktopSearchCTAWrapper>
          </HeaderMenuDesktopContainer>
        </HeaderBar>
      </HeaderDesktop>

      <HeaderMobile>
        <HeaderMobileLogo>
          <HeaderMobileLogoLink href="/" rel="home">
            <HeaderMobileLogoImg src="https://we3travel.com/wp-content/uploads/2021/03/we3travel-1.png" />
          </HeaderMobileLogoLink>
        </HeaderMobileLogo>
        <HeaderBarMobile>
          <MobileMenuToogle onClick={toggleIsMenuOpen}>
            <MobileMenuToogleIcon src={mobileMenuIcon} />
            <MobileMenuToogleText>MENU</MobileMenuToogleText>
          </MobileMenuToogle>
        </HeaderBarMobile>
      </HeaderMobile>
    </>
  );
  
};

export default Header;

Header.propTypes = {
  toggleIsMenuOpen: PropTypes.func.isRequired,
  handleOnSearchSubmit: PropTypes.func.isRequired,
  handleOnSearchInputChange: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired
};