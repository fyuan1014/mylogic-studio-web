import React from 'react';
import styled from 'styled-components';
import Section from '../components/Section';
import ContactForm from '../components/ContactForm';

const ContactHeader = styled.div`
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

const ContactLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  max-width: 800px;
  margin: 0 auto;
  background-color: var(--background-color);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  padding: 3rem;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const ContactInfo = styled.div``;

const InfoTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  color: var(--primary-color);
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -0.75rem;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background-color: var(--accent-color);
    border-radius: 3px;
  }
`;

const InfoBlocks = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const InfoBlock = styled.div`
  margin-bottom: 1rem;
  padding: 1.5rem;
  border-radius: var(--border-radius);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: rgba(255, 255, 255, 0.03);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
`;

const InfoSubtitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: var(--primary-color);
  display: flex;
  align-items: center;
  
  svg, i {
    margin-right: 0.75rem;
    font-size: 1.5rem;
  }
`;

const InfoText = styled.p`
  margin-bottom: 0.5rem;
  font-size: 1.125rem;
  color: var(--gray-text);
  line-height: 1.6;
`;

const InfoLink = styled.a`
  color: var(--primary-color);
  text-decoration: none;
  transition: var(--transition);
  font-weight: 500;
  
  &:hover {
    color: var(--accent-color);
    text-decoration: underline;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
  justify-content: center;
`;

const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  background-color: rgba(74, 107, 255, 0.1);
  color: var(--primary-color);
  border-radius: 50%;
  font-size: 1.25rem;
  transition: var(--transition);
  
  &:hover {
    background-color: var(--primary-color);
    color: var(--light-text);
    transform: translateY(-5px);
    box-shadow: 0 10px 15px rgba(74, 107, 255, 0.2);
  }
`;

const FormSection = styled.div`
  margin-top: 2rem;
`;

const FormTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  color: var(--primary-color);
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -0.75rem;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background-color: var(--accent-color);
    border-radius: 3px;
  }
`;

const ContactPage: React.FC = () => {
  return (
    <>
      <ContactHeader>
        <div className="container">
          <HeaderTitle>Contact Us</HeaderTitle>
          <HeaderDescription>
            Get in touch with our team to discuss your project requirements or learn more about our services.
            We're here to help you bring your ideas to life.
          </HeaderDescription>
        </div>
      </ContactHeader>
      
      <Section>
        <ContactLayout>
          <ContactInfo>
            <InfoTitle>Get In Touch</InfoTitle>
            
            <InfoBlocks>
              <InfoBlock>
                <InfoSubtitle>
                  <i className="fas fa-map-marker-alt"></i>
                  Visit Us
                </InfoSubtitle>
                <InfoText>5 Bufton Farm RD</InfoText>
                <InfoText>Clinton, MA 01510</InfoText>
              </InfoBlock>
              
              <InfoBlock>
                <InfoSubtitle>
                  <i className="fas fa-envelope"></i>
                  Contact
                </InfoSubtitle>
                <InfoText>Email: <InfoLink href="mailto:info@mylogicstudio.com">info@mylogicstudio.com</InfoLink></InfoText>
                <InfoText>Phone: <InfoLink href="tel:+13522160122">(352) 216-0122</InfoLink></InfoText>
              </InfoBlock>
              
              <InfoBlock>
                <InfoSubtitle>
                  <i className="fas fa-clock"></i>
                  Business Hours
                </InfoSubtitle>
                <InfoText>Monday - Friday: 9:00 AM - 6:00 PM EST</InfoText>
                <InfoText>Saturday - Sunday: Closed</InfoText>
              </InfoBlock>
              
              <InfoBlock>
                <InfoSubtitle>
                  <i className="fas fa-share-alt"></i>
                  Follow Us
                </InfoSubtitle>
                <SocialLinks>
                  <SocialLink href="https://x.com/MylogicStudio" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <i className="fab fa-twitter"></i>
                  </SocialLink>
                  <SocialLink href="https://www.instagram.com/mylogicstudio/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <i className="fab fa-instagram"></i>
                  </SocialLink>
                </SocialLinks>
              </InfoBlock>
            </InfoBlocks>
          </ContactInfo>
          
          <FormSection>
            <FormTitle>Send Us a Message</FormTitle>
            <ContactForm />
          </FormSection>
        </ContactLayout>
      </Section>
    </>
  );
};

export default ContactPage; 