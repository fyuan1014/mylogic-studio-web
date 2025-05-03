import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Section from '../components/Section';
import Button from '../components/Button';

const AboutHeader = styled.div`
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

const AboutSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const AboutContent = styled.div`
  @media (max-width: 992px) {
    order: 2;
  }
`;

const AboutImage = styled.div`
  @media (max-width: 992px) {
    order: 1;
  }
  
  img {
    width: 100%;
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
  }
`;

const AboutTitle = styled.h2`
  font-size: 2.25rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 1.875rem;
  }
`;

const AboutDescription = styled.p`
  font-size: 1.125rem;
  margin-bottom: 1.5rem;
  color: var(--gray-text);
  line-height: 1.7;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ValuesGrid = styled.div`
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

const ValueCard = styled.div`
  background-color: var(--background-color);
  border-radius: var(--border-radius);
  padding: 2rem;
  box-shadow: var(--box-shadow);
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }
`;

const ValueIcon = styled.div`
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
`;

const ValueTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const ValueDescription = styled.p`
  color: var(--gray-text);
  line-height: 1.6;
`;

const AboutPage: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <>
      <AboutHeader>
        <div className="container">
          <HeaderTitle>About MyLogix Studio</HeaderTitle>
          <HeaderDescription>
            We are an AI driven technology company dedicated to creating innovative digital solutions that transform how people interact with AI and technology.
            From our flagship ColorCrafter app to comprehensive business solutions, we're committed to delivering exceptional value to our clients.
          </HeaderDescription>
        </div>
      </AboutHeader>
      
      <Section>
        <AboutSection>
          <AboutContent>
            <AboutTitle>Our Story</AboutTitle>
            <AboutDescription>
              MyLogix Studio was founded with a clear vision: to help businesses thrive in the digital world through innovative AI driven solutions. 
              We started as a small team of tech enthusiasts who believed that AI technology, when properly implemented, could transform businesses and create exceptional experiences for users.
            </AboutDescription>
            <AboutDescription>
              Since our inception, we've grown into a dynamic company of talented developers, designers, and strategists who are passionate about creating digital solutions that drive real business value. We are looking for partnering with companies across various industries, from startups to enterprises, helping them leverage AI technology to achieve their goals.
            </AboutDescription>
            <AboutDescription>
              Today, MyLogix Studio continues to push the boundaries of what's possible in mobile and web app development with agentic AI, digital platforms, and subscription-based services, always with a focus on quality, innovation, and client success.
            </AboutDescription>
          </AboutContent>
          <AboutImage>
            <img src={`${process.env.PUBLIC_URL}/images/about/team.jpg`} alt="About MyLogix Studio" />
          </AboutImage>
        </AboutSection>
      </Section>
      
      <Section
        title="Our Mission & Vision"
        background="primary"
      >
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Mission</h3>
          <p style={{ fontSize: '1.25rem', marginBottom: '3rem', lineHeight: '1.7' }}>
            To empower businesses with innovative technology solutions that drive growth, enhance customer experiences, and create lasting value in the digital world.
          </p>
          
          <h3 style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Vision</h3>
          <p style={{ fontSize: '1.25rem', lineHeight: '1.7' }}>
            To be a global leader in digital innovation, recognized for our transformative technology solutions and commitment to excellence, making a positive impact on businesses and users worldwide.
          </p>
        </div>
      </Section>
      
      <Section
        title="Our Values"
        description="The core principles that guide everything we do at MyLogix Studio."
      >
        <ValuesGrid>
          <ValueCard>
            <ValueIcon>🚀</ValueIcon>
            <ValueTitle>Innovation</ValueTitle>
            <ValueDescription>
              We constantly push the boundaries of what's possible, embracing new technologies and creative approaches to solve complex problems.
            </ValueDescription>
          </ValueCard>
          
          <ValueCard>
            <ValueIcon>👥</ValueIcon>
            <ValueTitle>Collaboration</ValueTitle>
            <ValueDescription>
              We believe in the power of teamwork, fostering an environment where diverse perspectives come together to create exceptional results.
            </ValueDescription>
          </ValueCard>
          
          <ValueCard>
            <ValueIcon>⭐</ValueIcon>
            <ValueTitle>Excellence</ValueTitle>
            <ValueDescription>
              We are committed to delivering the highest quality in everything we do, exceeding expectations and setting new standards of excellence.
            </ValueDescription>
          </ValueCard>
          
          <ValueCard>
            <ValueIcon>🤝</ValueIcon>
            <ValueTitle>Integrity</ValueTitle>
            <ValueDescription>
              We operate with honesty, transparency, and ethical conduct in all our interactions with clients, partners, and each other.
            </ValueDescription>
          </ValueCard>
          
          <ValueCard>
            <ValueIcon>🎯</ValueIcon>
            <ValueTitle>Client-Focus</ValueTitle>
            <ValueDescription>
              We prioritize understanding our clients' needs and goals, building long-term relationships based on trust and mutual success.
            </ValueDescription>
          </ValueCard>
          
          <ValueCard>
            <ValueIcon>🌱</ValueIcon>
            <ValueTitle>Growth</ValueTitle>
            <ValueDescription>
              We embrace continuous learning and personal development, always seeking to improve our skills and grow as individuals and as a company.
            </ValueDescription>
          </ValueCard>
        </ValuesGrid>
      </Section>
      
      <Section background="gradient">
        <div style={{ textAlign: 'center', color: 'var(--light-text)' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Join Our Journey</h2>
          <p style={{ fontSize: '1.25rem', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
            Whether you're looking to partner with us or join our team, we'd love to hear from you.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button 
              variant="outline" 
              size="large" 
              onClick={() => navigate('/contact')}
            >
              Contact Us
            </Button>
            <Button 
              variant="outline" 
              size="large" 
              onClick={() => navigate('/careers')}
            >
              View Careers
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
};

export default AboutPage; 