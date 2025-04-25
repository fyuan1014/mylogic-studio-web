import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: var(--background-color);
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const LogoImage = styled.img`
  height: 40px;
  width: auto;
  margin-right: 10px;
`;

const LogoText = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-color);
  
  .accent {
    color: var(--accent-color);
  }
  
  @media (max-width: 576px) {
    display: none;
  }
`;

const MenuButton = styled.button`
  display: none;
  font-size: 1.5rem;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const Nav = styled.nav<{ isOpen: boolean }>`
  @media (max-width: 768px) {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: var(--background-color);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    padding: 1rem 0;
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  }
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const NavItem = styled.li`
  margin: 0 0.5rem;
  
  @media (max-width: 768px) {
    margin: 0;
  }
`;

const NavLinkStyled = styled(NavLink)`
  padding: 0.5rem 1rem;
  color: var(--text-color);
  font-weight: 500;
  transition: var(--transition);
  display: block;
  
  &:hover, &.active {
    color: var(--primary-color);
  }
  
  @media (max-width: 768px) {
    padding: 0.75rem 1.5rem;
    
    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
    }
  }
`;

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderContainer>
      <NavContainer>
        <Logo to="/">
          <LogoImage src={`${process.env.PUBLIC_URL}/logo192.png`} alt="MyLogic Studio Logo" />
          <LogoText>MyLogic<span className="accent">Studio</span></LogoText>
        </Logo>
        
        <MenuButton onClick={toggleMenu}>
          {isMenuOpen ? '✕' : '☰'}
        </MenuButton>
        
        <Nav isOpen={isMenuOpen}>
          <NavList>
            <NavItem>
              <NavLinkStyled to="/">Home</NavLinkStyled>
            </NavItem>
            <NavItem>
              <NavLinkStyled to="/services">Services</NavLinkStyled>
            </NavItem>
            <NavItem>
              <NavLinkStyled to="/products">Products</NavLinkStyled>
            </NavItem>
            <NavItem>
              <NavLinkStyled to="/about">About</NavLinkStyled>
            </NavItem>
          </NavList>
        </Nav>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header; 