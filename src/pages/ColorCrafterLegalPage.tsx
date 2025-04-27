import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Section from '../components/Section';

const PageHeader = styled.div`
  text-align: center;
  padding: 8rem 0 4rem;
  background-color: var(--dark-background);
  color: var(--light-text);
  background-image: linear-gradient(135deg, rgba(10, 25, 41, 0.95), rgba(74, 107, 255, 0.7));
  background-size: cover;
  background-position: center;
`;

const HeaderTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeaderDescription = styled.p`
  font-size: 1.25rem;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.8;
  
  @media (max-width: 768px) {
    font-size: 1.125rem;
  }
`;

const ContentContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 3rem 1.5rem;
`;

const AppInfo = styled.div`
  margin-bottom: 3rem;
`;

const AppTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--primary-color);
`;

const AppDescription = styled.p`
  line-height: 1.7;
  margin-bottom: 1.5rem;
`;

const AppImage = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
  border-radius: var(--border-radius);
  margin: 1.5rem 0;
  display: block;
`;

const DocumentsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const DocumentCard = styled(Link)`
  display: block;
  padding: 2rem;
  background-color: white;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-decoration: none;
  color: var(--text-color);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
`;

const DocumentIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: var(--primary-color);
`;

const DocumentTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
  color: var(--primary-color);
`;

const DocumentDescription = styled.p`
  color: var(--gray-text);
  line-height: 1.6;
`;

const ColorCrafterLegalPage: React.FC = () => {
  return (
    <>
      <PageHeader>
        <div className="container">
          <HeaderTitle>ColorCrafter App Legal Documents</HeaderTitle>
          <HeaderDescription>
            Access important legal information about our paint-by-number app
          </HeaderDescription>
        </div>
      </PageHeader>

      <ContentContainer>
        <AppInfo>
          <AppTitle>About ColorCrafter</AppTitle>
          <AppDescription>
            ColorCrafter is an iOS application that allows users to create their own paint-by-number 
            artwork using their own images. With ColorCrafter, you can create beautiful custom 
            paint-by-number projects featuring your loved ones, pets, or memorable places.
          </AppDescription>
          <AppDescription>
            Our app provides an intuitive interface for transforming your photos into paint-by-number 
            templates that you can print and color by hand or use digitally on your device.
          </AppDescription>
          <AppImage 
            src={`${process.env.PUBLIC_URL}/images/products/colorcrafter.jpg`} 
            alt="ColorCrafter App" 
          />
          <AppDescription>
            Please review our legal documents below to understand how we handle your data and 
            the terms governing your use of the ColorCrafter app.
          </AppDescription>
        </AppInfo>

        <DocumentsGrid>
          <DocumentCard to="/colorcrafter/privacy-policy">
            <DocumentIcon>
              <i className="fas fa-shield-alt"></i>
            </DocumentIcon>
            <DocumentTitle>Privacy Policy</DocumentTitle>
            <DocumentDescription>
              Information about how we collect, use, and protect your data when you use the 
              ColorCrafter app.
            </DocumentDescription>
          </DocumentCard>

          <DocumentCard to="/colorcrafter/terms-of-service">
            <DocumentIcon>
              <i className="fas fa-file-contract"></i>
            </DocumentIcon>
            <DocumentTitle>Terms of Service</DocumentTitle>
            <DocumentDescription>
              Legal terms and conditions governing your use of the ColorCrafter app and services.
            </DocumentDescription>
          </DocumentCard>
        </DocumentsGrid>
      </ContentContainer>
    </>
  );
};

export default ColorCrafterLegalPage; 