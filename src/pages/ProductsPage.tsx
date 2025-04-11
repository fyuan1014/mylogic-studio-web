import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Section from '../components/Section';
import Button from '../components/Button';

const ProductHeader = styled.div`
  text-align: center;
  padding: 8rem 0 4rem;
  background-color: var(--dark-background);
  color: var(--light-text);
`;

const HeaderTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeaderDescription = styled.p`
  font-size: 1.25rem;
  max-width: 800px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    font-size: 1.125rem;
  }
`;

const ProductContent = styled.div`
  padding: 1.5rem;
  
  @media (max-width: 992px) {
    order: 2;
  }
`;

const ProductImage = styled.div`
  @media (max-width: 992px) {
    order: 1;
  }
  
  img {
    width: 100%;
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
  }
`;

const ProductTitle = styled.h2`
  font-size: 2.25rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 1.875rem;
  }
`;

const ProductDescription = styled.p`
  font-size: 1.125rem;
  margin-bottom: 1.5rem;
  color: var(--gray-text);
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ProductFeatures = styled.ul`
  margin: 1.5rem 0;
  padding-left: 1.5rem;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 3rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const ProductCard = styled.div`
  background-color: var(--background-color);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  overflow: hidden;
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }
`;

const FeatureItem = styled.li`
  margin-bottom: 0.75rem;
  font-size: 1.125rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const FeatureIcon = styled.span`
  margin-right: 0.5rem;
`;

const ProductsPage: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <>
      <ProductHeader>
        <div className="container">
          <HeaderTitle>Our Products</HeaderTitle>
          <HeaderDescription>
            Explore our innovative digital products and solutions designed to help businesses transform their operations,
            enhance customer experiences, and drive growth in the digital age.
          </HeaderDescription>
        </div>
      </ProductHeader>
      
      <Section
        title="Our Products"
        description="Discover our innovative digital solutions that help businesses thrive in the digital world."
      >
        <ProductGrid>
          <ProductCard id="MyPBN">
            <ProductImage>
              <img src="https://via.placeholder.com/600x400" alt="MyPBN" />
            </ProductImage>
            <ProductContent>
              <ProductTitle>MyPBN APP</ProductTitle>
              <ProductDescription>
                An iOS based APP allows users to create their own paint by number art work with their own images, which allows you to create an art work for your loved ones, pets, or even yourself.
              </ProductDescription>
              <ProductFeatures>
                <FeatureItem>
                  <FeatureIcon>🎨</FeatureIcon>
                  <span>Create custom paint by number artwork</span>
                </FeatureItem>
                <FeatureItem>
                  <FeatureIcon>📱</FeatureIcon>
                  <span>iOS native application</span>
                </FeatureItem>
                <FeatureItem>
                  <FeatureIcon>🖼️</FeatureIcon>
                  <span>Use your own images</span>
                </FeatureItem>
                <FeatureItem>
                  <FeatureIcon>🎯</FeatureIcon>
                  <span>Perfect for gifts and personal projects</span>
                </FeatureItem>
              </ProductFeatures>
              <Button 
                variant="primary"
                onClick={() => window.open('https://apps.apple.com', '_blank')}
              >
                Download on App Store
              </Button>
            </ProductContent>
          </ProductCard>

          <ProductCard>
            <ProductImage>
              <img src="https://via.placeholder.com/600x400" alt="More to Come" />
            </ProductImage>
            <ProductContent>
              <ProductTitle>More to Come</ProductTitle>
              <ProductDescription>
                We're constantly developing new innovative solutions to help businesses thrive in the digital world. Stay tuned for more exciting products!
              </ProductDescription>
              <ProductFeatures>
                <FeatureItem>
                  <FeatureIcon>🚀</FeatureIcon>
                  <span>Innovative solutions</span>
                </FeatureItem>
                <FeatureItem>
                  <FeatureIcon>💡</FeatureIcon>
                  <span>Cutting-edge technology</span>
                </FeatureItem>
                <FeatureItem>
                  <FeatureIcon>🎯</FeatureIcon>
                  <span>Business-focused</span>
                </FeatureItem>
                <FeatureItem>
                  <FeatureIcon>🌟</FeatureIcon>
                  <span>User-friendly design</span>
                </FeatureItem>
              </ProductFeatures>
              <Button 
                variant="outline"
                onClick={() => navigate('/contact')}
              >
                Stay Updated
              </Button>
            </ProductContent>
          </ProductCard>
        </ProductGrid>
      </Section>
      
      <Section background="gradient">
        <div style={{ textAlign: 'center', color: 'var(--light-text)' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Ready to Transform Your Business?</h2>
          <p style={{ fontSize: '1.25rem', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
            Contact us today to learn more about our products and how they can benefit your business.
          </p>
          <Button 
            variant="outline" 
            size="large" 
            onClick={() => navigate('/contact')}
          >
            Contact Us
          </Button>
        </div>
      </Section>
    </>
  );
};

export default ProductsPage; 