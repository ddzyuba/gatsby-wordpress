import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  MobileMenuWrapper,
  MobileMenuCloseIconContainer,
  MobileMenuCloseIconWrapper,
  MobileMenuCloseIconImg,
  MobileMenuContainer,
  MobileMenuNav,
  MobileMenuItem,
  MobileMenuItemWraper,
  MobileMenuItemLink,
  MobileMenuItemButton,
  MobileMenuItemButtonIcon,
  MobileSubMenu,

  MobileSearchWrapper,
  MobileSearchForm,
  MobileSearchLabel,
  MobileSearchInput,
  MobileSearchSubmitButton,
  MobileSearchSubmitButtonImg
} from './MobileMenuStyles';

import mobileMenuCloseIcon from '../../images/mobileMenuClose.svg';
import searchIcon from '../../images/search.png';
import { menuLinks } from '../../utils/menuLinks';

const MobileMenu = (props) => {

  const { 
    isMenuOpen, 
    toggleIsMenuOpen, 
    handleOnSearchMobileSubmit, 
    searchTextMobile, 
    handleOnSearchInputMobileChange 
  } = props;

  const [activeSubMenuItem, setActiveSubMenuItem] = useState(null);

  return (
    <MobileMenuWrapper isMenuOpen={isMenuOpen}>
      <MobileMenuCloseIconContainer>
        <MobileMenuCloseIconWrapper onClick={toggleIsMenuOpen}>
          <MobileMenuCloseIconImg src={mobileMenuCloseIcon} />
        </MobileMenuCloseIconWrapper>
      </MobileMenuCloseIconContainer>  
      <MobileMenuContainer>
        <MobileMenuNav>
          {
            menuLinks.map(item => {
              return(
                <MobileMenuItem 
                  key={item.name}
                  isActive={activeSubMenuItem === item}
                >
                  <MobileMenuItemWraper>
                    <MobileMenuItemLink href={item.URL}>{item.name}</MobileMenuItemLink>
                    {
                      item.children && (
                        <MobileMenuItemButton
                          onClick={() => {
                            setActiveSubMenuItem(prev =>
                              item === prev ? null : item
                            );
                          }}
                        >
                          <MobileMenuItemButtonIcon />
                        </MobileMenuItemButton>
                      )
                    }
                  </MobileMenuItemWraper>
                  {item.children && (
                    <MobileSubMenu>
                      {
                        item.children.map(child => {
                          return(
                            <MobileMenuItem key={child.name}>
                              <MobileMenuItemLink href={child.URL}>{child.name}</MobileMenuItemLink>
                            </MobileMenuItem>
                          )
                        })
                      }
                    </MobileSubMenu>
                  )}
                </MobileMenuItem>
              )
            })
          }
        </MobileMenuNav>
      </MobileMenuContainer>

      <MobileSearchWrapper>
        <MobileSearchForm onSubmit={e => handleOnSearchMobileSubmit(e)}>
          <MobileSearchLabel htmlFor="mobile_s">Search...</MobileSearchLabel>
          <MobileSearchInput 
            type="text" 
            placeholder="Search..." 
            value={searchTextMobile} 
            onChange={e => handleOnSearchInputMobileChange(e)} 
            id="mobile_s"
          />
          <MobileSearchSubmitButton type="submit">
            <MobileSearchSubmitButtonImg src={searchIcon} />
          </MobileSearchSubmitButton>
        </MobileSearchForm>
      </MobileSearchWrapper>

    </MobileMenuWrapper>
  );
};

export default MobileMenu;

MobileMenu.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired, 
  toggleIsMenuOpen: PropTypes.func.isRequired, 
  handleOnSearchMobileSubmit: PropTypes.func.isRequired, 
  searchTextMobile: PropTypes.string.isRequired, 
  handleOnSearchInputMobileChange: PropTypes.func.isRequired
};