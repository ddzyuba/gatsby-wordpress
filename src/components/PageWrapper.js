import React, { useState } from 'react';
import Header from './Header';
import MobileMenu from './MobileMenu/MobileMenu';
import Footer from './Footer';
import '../css/main.css';

const PageWrapper = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [searchTextMobile, setSearchTextMobile] = useState('');

  const toggleIsMenuOpen = () => {
    setIsMenuOpen(prev => !prev);
  };

  const handleOnSearchSubmit = (e) => {
    e.preventDefault();
    window.location.href= "/search/?s=" + searchText;
  };

  const handleOnSearchInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleOnSearchInputMobileChange = (e) => {
    setSearchTextMobile(e.target.value);
  };

  const handleOnSearchMobileSubmit = (e) => {
    e.preventDefault();
    window.location.href= "/search/?s=" + searchTextMobile;
  };

  return (
    <>
      <Header 
        toggleIsMenuOpen={toggleIsMenuOpen} 
        handleOnSearchSubmit={handleOnSearchSubmit} 
        handleOnSearchInputChange={handleOnSearchInputChange} 
        searchText={searchText}
      />
      {children}
      <MobileMenu 
        isMenuOpen={isMenuOpen} 
        toggleIsMenuOpen={toggleIsMenuOpen} 
        handleOnSearchMobileSubmit={handleOnSearchMobileSubmit}
        searchTextMobile={searchTextMobile}
        handleOnSearchInputMobileChange={handleOnSearchInputMobileChange} 
      />
      <Footer />
    </>
  );
};

export default PageWrapper;