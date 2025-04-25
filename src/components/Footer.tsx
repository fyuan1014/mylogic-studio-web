import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: var(--dark-background);
  color: var(--light-text);
  padding: 3rem 0 1.5rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
  font-weight: 600;
  color: var(--light-text);
`;

const FooterLink = styled(Link)`
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 0.5rem;
  transition: var(--transition);
  
  &:hover {
    color: var(--accent-color);
    transform: translateX(5px);
  }
`;

const FooterText = styled.p`
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1rem;
  font-size: 0.9rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.5rem;
  transition: var(--transition);
  
  &:hover {
    color: var(--accent-color);
    transform: translateY(-3px);
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 2rem;
  margin-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>Navigation</FooterTitle>
          <FooterLink to="/">Home</FooterLink>
          <FooterLink to="/services">Services</FooterLink>
          <FooterLink to="/products">Products</FooterLink>
          <FooterLink to="/about">About</FooterLink>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Contact</FooterTitle>
          <FooterText>All Inquiries - mls@mylogicstudio.com</FooterText>
          <FooterText>General Inquiries/Support - (352) 216-0122</FooterText>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Socials</FooterTitle>
          <SocialLinks>
            <SocialLink href="https://x.com/MylogicStudio" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i>
            </SocialLink>
            <SocialLink href="https://www.instagram.com/mylogicstudio/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
            </SocialLink>
          </SocialLinks>
        </FooterSection>
      </FooterContent>
      
      <Copyright>
        <div className="container">
          © {new Date().getFullYear()} MyLogic Studio. All rights reserved.
        </div>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer; 