import styled, { css } from 'styled-components';

export const MobileMenuWrapper = styled.div`
  background-color: #ffffff;
  position: fixed;
  top: 0;
  bottom: 0;
  left: ${props => (props.isMenuOpen ? '0' : '-99999rem')};
  right: ${props => (props.isMenuOpen ? '0' : '99999rem')};
  transition: opacity 0.25s ease-in,left 0s 0.25s,right 0s 0.25s;
  opacity: ${props => (props.isMenuOpen ? '1' : '0')};
  visibility: ${props => (props.isMenuOpen ? 'visible' : 'invisible')};
  z-index: 100000;



  @media (min-width: 922px) {
    display: none;
  }
`;

export const MobileMenuCloseIconContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  justify-content: flex-end;
  min-height: 44px;
`;

export const MobileMenuCloseIconWrapper = styled.button`
  background: transparent;
  border: 0;
  color: #3a3a3a;
  padding: 14px;
`;

export const MobileMenuCloseIconImg = styled.img`
  width: 17px;
  height: 17px;
`;

export const MobileMenuContainer = styled.nav`
  background-color: #007b94;
`;

export const MobileMenuNav = styled.ul`
  border-top-width: 1px;
  border-style: solid;
  border-color: #eaeaea;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const MobileMenuItemLink = styled.a`
  
  color: #ffffff;
  display: block;
  font-size: 17px;
  font-weight: 500;
  padding: 0 20px;
  text-decoration: none;
  text-transform: uppercase;
  transition: all .2s linear;
`;

export const MobileSubMenu = styled.ul`
  display: none;
  list-style: none;
  margin: 0;
  padding: 0;

  ${MobileMenuItemLink} {
    padding-left: 50px;
  }
`;

export const MobileMenuItem = styled.li`
  letter-spacing: 2px;
  line-height: 3;

  ${props => props.isActive && css`
    & > ${MobileSubMenu} {
      display: block;
    }
  `}
`;

export const MobileMenuItemWraper = styled.div`
  border-bottom: 1px solid #eaeaea;
  display: flex;
  justify-content: space-between;
`;

export const MobileMenuItemButton = styled.button`
  background-color: #007b94;
  border: none;
  display: flex;
  align-items: center;
  width: 30px;
`;

export const MobileMenuItemButtonIcon = styled.span`
  display: inline-block;
  width: 6px;
  height: 6px;
  content: '';
  border-top: 1px solid #ffffff;
  border-right: 1px solid #ffffff;
  transform: rotate(135deg);
`;

export const MobileSearchWrapper = styled.div`
  padding: 15px;
`;

export const MobileSearchForm = styled.form`
  display: flex;
`;

export const MobileSearchLabel = styled.label`
  border: 0;
  clip: rect(1px,1px,1px,1px);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;

export const MobileSearchInput  = styled.input`
  padding: 0.6em;
  width: 85%;
`;

export const MobileSearchSubmitButton = styled.button`
  background-color: #007b94;
  border: 0;
  width: 15%;
`;

export const MobileSearchSubmitButtonImg = styled.img`
  width: 17px;
  height: 17px;
`;
