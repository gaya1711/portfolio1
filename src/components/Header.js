import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3px 20px;
  background-color: #181818;
  color: white;
  position: sticky;
  top: 0;
  z-index: 1000;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
  }
`;

const Nav = styled.nav`
  a {
    margin: 0 15px;
    text-decoration: none;
    color: white;
    font-weight: bold;
    font-family: 'Poppins', sans-serif;
    font-size: 20px;

    &:hover {
      text-decoration: underline;
    }

    @media (max-width: 768px) {
      font-size: 14px;
      margin: 5px;
    }
  }
`;

const Header = () => {
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    const headerOffset = document.querySelector('header').offsetHeight;
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  };

  return (
    <HeaderContainer>
      <h1 style={{ fontFamily: 'Poppins', fontSize: '36px' }}>Gayathri Reddy</h1>
      <Nav>
        <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>ABOUT</a>
        <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>PROJECTS</a>
        <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>CONTACT</a>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
