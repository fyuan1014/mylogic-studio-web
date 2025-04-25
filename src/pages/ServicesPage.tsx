import React from 'react';
import styled from 'styled-components';
import Section from '../components/Section';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const ServiceHeader = styled.div`
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

const ServiceSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ServiceContent = styled.div`
  @media (max-width: 992px) {
    order: 2;
  }
`;

const ServiceImage = styled.div`
  @media (max-width: 992px) {
    order: 1;
  }
  
  img {
    width: 100%;
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
  }
`;

const ServiceTitle = styled.h2`
  font-size: 2.25rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 1.875rem;
  }
`;

const ServiceDescription = styled.p`
  font-size: 1.125rem;
  margin-bottom: 1.5rem;
  color: var(--gray-text);
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ServiceFeatures = styled.ul`
  margin: 1.5rem 0;
  padding-left: 1.5rem;
`;

const ServiceFeature = styled.li`
  margin-bottom: 0.75rem;
  font-size: 1.125rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ProcessSteps = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-top: 3rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const ProcessStep = styled.div`
  text-align: center;
  padding: 2rem;
  background-color: var(--background-color);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const StepNumber = styled.div`
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 auto 1rem;
  background-color: var(--primary-color);
  color: var(--light-text);
  border-radius: 50%;
`;

const StepTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 1rem;
`;

const StepDescription = styled.p`
  color: var(--gray-text);
`;

const ServicesPage: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <>
      <ServiceHeader>
        <div className="container">
          <HeaderTitle>Our Services</HeaderTitle>
          <HeaderDescription>
            We offer comprehensive technology services to help businesses thrive in the digital world. 
            Our expertise spans mobile apps and web development.
          </HeaderDescription>
        </div>
      </ServiceHeader>
      
      <Section id="mobile-app-development">
        <ServiceSection>
          <ServiceContent>
            <ServiceTitle>Mobile App Development</ServiceTitle>
            <ServiceDescription>
              We create cutting-edge mobile applications for iOS and Android platforms that deliver exceptional user experiences and drive business value.
            </ServiceDescription>
            <ServiceFeatures>
              <ServiceFeature>Custom iOS and Android development</ServiceFeature>
              <ServiceFeature>Cross-platform solutions using React Native and Flutter</ServiceFeature>
              <ServiceFeature>UI/UX design and prototyping</ServiceFeature>
              <ServiceFeature>API integration and backend development</ServiceFeature>
              <ServiceFeature>Ongoing maintenance and support</ServiceFeature>
              <ServiceFeature>Specialized apps like ColorCrafter for creative projects</ServiceFeature>
            </ServiceFeatures>
            <Button 
              variant="primary" 
              onClick={() => navigate('/contact')}
            >
              Get Started
            </Button>
          </ServiceContent>
          <ServiceImage>
            <img src={`${process.env.PUBLIC_URL}/images/services/mobile-app-development.jpg`} alt="Mobile App Development" />
          </ServiceImage>
        </ServiceSection>
      </Section>
      
      <Section id="web-app-development" background="primary">
        <ServiceSection>
          <ServiceImage>
            <img src={`${process.env.PUBLIC_URL}/images/services/web-app-development.jpg`} alt="Web App Development" />
          </ServiceImage>
          <ServiceContent>
            <ServiceTitle>Web App Development</ServiceTitle>
            <ServiceDescription>
              We build responsive, user-friendly web applications that work seamlessly across all devices and provide powerful functionality.
            </ServiceDescription>
            <ServiceFeatures>
              <ServiceFeature>Modern frontend development with React, Angular, or Vue</ServiceFeature>
              <ServiceFeature>Robust backend solutions with Node.js, Python, or other technologies</ServiceFeature>
              <ServiceFeature>Progressive Web Applications (PWAs)</ServiceFeature>
              <ServiceFeature>E-commerce and content management solutions</ServiceFeature>
              <ServiceFeature>Performance optimization and accessibility</ServiceFeature>
            </ServiceFeatures>
            <Button 
              variant="primary" 
              onClick={() => navigate('/contact')}
            >
              Get Started
            </Button>
          </ServiceContent>
        </ServiceSection>
      </Section>
      
      <Section
        title="Our Development Process"
        description="We follow a structured approach to ensure successful delivery of your project."
      >
        <ProcessSteps>
          <ProcessStep>
            <StepNumber>1</StepNumber>
            <StepTitle>Discovery</StepTitle>
            <StepDescription>
              We understand your business goals, target audience, and project requirements to define a clear vision.
            </StepDescription>
          </ProcessStep>
          
          <ProcessStep>
            <StepNumber>2</StepNumber>
            <StepTitle>Planning</StepTitle>
            <StepDescription>
              We create detailed project plans, architecture designs, and timelines for efficient execution.
            </StepDescription>
          </ProcessStep>
          
          <ProcessStep>
            <StepNumber>3</StepNumber>
            <StepTitle>Development</StepTitle>
            <StepDescription>
              Our experienced team builds your solution using agile methodologies with regular updates.
            </StepDescription>
          </ProcessStep>
          
          <ProcessStep>
            <StepNumber>4</StepNumber>
            <StepTitle>Launch & Support</StepTitle>
            <StepDescription>
              We ensure smooth deployment and provide ongoing maintenance and support for your product.
            </StepDescription>
          </ProcessStep>
        </ProcessSteps>
      </Section>
      
      <Section background="gradient">
        <div style={{ textAlign: 'center', color: 'var(--light-text)' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Ready to Start Your Project?</h2>
          <p style={{ fontSize: '1.25rem', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
            Contact us today to discuss your project requirements and how MyLogic Studio can help you achieve your goals.
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

export default ServicesPage; 