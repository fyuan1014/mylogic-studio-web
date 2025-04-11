import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Hero from '../components/Hero';
import Section from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ProductList = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Feature = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

const FeatureIcon = styled.div`
  font-size: 2rem;
  color: var(--primary-color);
`;

const FeatureContent = styled.div`
  flex: 1;
`;

const FeatureTitle = styled.h3`
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
  font-weight: 600;
`;

const FeatureDescription = styled.p`
  color: var(--gray-text);
`;

const CTASection = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`;

const CTATitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const CTADescription = styled.p`
  font-size: 1.125rem;
  margin-bottom: 2rem;
  color: var(--gray-text);
`;

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <>
      <Hero
        title="Innovative <span>Technology</span> Solutions for Your Business"
        subtitle="MyLogic Studio delivers cutting-edge mobile and web applications, digital platforms, and subscription-based services to help businesses thrive in the digital world."
        primaryButtonText="Our Services"
        secondaryButtonText="Contact Us"
        onPrimaryClick={() => navigate('/services')}
        onSecondaryClick={() => navigate('/contact')}
      />
      
      <Section
        title="Our Services"
        description="We offer a comprehensive range of technology services to help your business grow and succeed in the digital landscape."
      >
        <ServiceGrid>
          <Card 
            title="Mobile App Development"
            icon={<span>📱</span>}
          >
            <p>Custom iOS and Android applications with intuitive user interfaces and powerful functionality.</p>
          </Card>
          
          <Card 
            title="Web App Development"
            icon={<span>💻</span>}
          >
            <p>Responsive and performant web applications built with modern technologies and frameworks.</p>
          </Card>
        </ServiceGrid>
      </Section>
      
      <Section
        background="primary"
        title="Why Choose Us"
        description="At MyLogic Studio, we blend innovative technology with strategic thinking to create solutions that drive business growth."
      >
        <FeatureGrid>
          <Feature>
            <FeatureIcon>🚀</FeatureIcon>
            <FeatureContent>
              <FeatureTitle>Innovative Solutions</FeatureTitle>
              <FeatureDescription>
                We leverage cutting-edge technologies to build innovative solutions that solve real business problems.
              </FeatureDescription>
            </FeatureContent>
          </Feature>
          
          <Feature>
            <FeatureIcon>👥</FeatureIcon>
            <FeatureContent>
              <FeatureTitle>Experienced Team</FeatureTitle>
              <FeatureDescription>
                Our team of talented developers, designers, and strategists brings years of industry experience.
              </FeatureDescription>
            </FeatureContent>
          </Feature>
          
          <Feature>
            <FeatureIcon>⚡</FeatureIcon>
            <FeatureContent>
              <FeatureTitle>Rapid Development</FeatureTitle>
              <FeatureDescription>
                We employ agile methodologies to ensure fast development cycles and timely delivery.
              </FeatureDescription>
            </FeatureContent>
          </Feature>
          
          <Feature>
            <FeatureIcon>🔒</FeatureIcon>
            <FeatureContent>
              <FeatureTitle>Secure & Reliable</FeatureTitle>
              <FeatureDescription>
                Security is built into every solution we develop, ensuring your data and users are protected.
              </FeatureDescription>
            </FeatureContent>
          </Feature>
        </FeatureGrid>
      </Section>
      
      <Section
        title="Our Products"
        description="Explore our portfolio of innovative digital products and solutions."
      >
        <ProductList>
          <Card
            title="MyPBN APP"
            image="https://via.placeholder.com/600x400"
          >
            <p>An iOS based APP allows users to create their own paint by number art work with their own images, which allows you to create an art work for your loved ones, pets, or even yourself.</p>
            <Button 
              variant="text" 
              onClick={() => navigate('/products#MyPBN')}
            >
              Learn More →
            </Button>
          </Card>
          
          <Card
            title="More to Come"
            image="https://via.placeholder.com/600x400"
          >
            <p>We're constantly developing new innovative solutions to help businesses thrive in the digital world. Stay tuned for more exciting products!</p>
            <Button 
              variant="text" 
              onClick={() => navigate('/products')}
            >
              Learn More →
            </Button>
          </Card>
        </ProductList>
      </Section>
      
      <Section>
        <CTASection>
          <CTATitle>Ready to Transform Your Business?</CTATitle>
          <CTADescription>
            Get in touch with our team to discuss how MyLogic Studio can help your business thrive in the digital world.
          </CTADescription>
          <Button 
            variant="primary" 
            size="large" 
            onClick={() => navigate('/contact')}
          >
            Contact Us Today
          </Button>
        </CTASection>
      </Section>
    </>
  );
};

export default HomePage; 