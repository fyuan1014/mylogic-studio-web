import React from 'react';
import styled from 'styled-components';
import Section from '../components/Section';
import ContactForm from '../components/ContactForm';

const ContactHeader = styled.div`
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

const ContactLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const ContactInfo = styled.div`
  @media (max-width: 992px) {
    order: 2;
  }
`;

const InfoTitle = styled.h2`
  font-size: 1.75rem;
  margin-bottom: 1.5rem;
`;

const InfoBlock = styled.div`
  margin-bottom: 2rem;
`;

const InfoSubtitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: var(--primary-color);
`;

const InfoText = styled.p`
  margin-bottom: 0.5rem;
  font-size: 1.125rem;
  color: var(--gray-text);
`;

const InfoLink = styled.a`
  color: var(--primary-color);
  text-decoration: none;
  transition: var(--transition);
  
  &:hover {
    color: var(--secondary-color);
  }
`;

const Map = styled.div`
  margin-top: 2rem;
  height: 300px;
  border-radius: var(--border-radius);
  overflow: hidden;
  
  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background-color: rgba(74, 107, 255, 0.1);
  color: var(--primary-color);
  border-radius: 50%;
  font-size: 1.25rem;
  transition: var(--transition);
  
  &:hover {
    background-color: var(--primary-color);
    color: var(--light-text);
    transform: translateY(-3px);
  }
`;

const ContactFormContainer = styled.div`
  background-color: var(--dark-background);
  border-radius: var(--border-radius);
  padding: 2rem;
  box-shadow: var(--box-shadow);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const ContactFormTitle = styled.h2`
  font-size: 1.75rem;
  margin-bottom: 1.5rem;
  text-align: center;
  color: var(--light-text);
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
            
            <InfoBlock>
              <InfoSubtitle>Contact</InfoSubtitle>
              <InfoText>Email: <InfoLink href="mailto:contact.mylogicstudio@gmail.com">contact.mylogicstudio@gmail.com</InfoLink></InfoText>
              <InfoText>Phone: <InfoLink href="tel:+13522160122">(352) 216-0122</InfoLink></InfoText>
            </InfoBlock>
            
            <InfoBlock>
              <InfoSubtitle>Business Hours</InfoSubtitle>
              <InfoText>Monday - Friday: 9:00 AM - 6:00 PM EST</InfoText>
              <InfoText>Saturday - Sunday: Closed</InfoText>
            </InfoBlock>
            
            <InfoBlock>
              <InfoSubtitle>Follow Us</InfoSubtitle>
              <SocialLinks>
                <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i>
                </SocialLink>
                <SocialLink href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-f"></i>
                </SocialLink>
                <SocialLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin-in"></i>
                </SocialLink>
                <SocialLink href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </SocialLink>
              </SocialLinks>
            </InfoBlock>
          
          </ContactInfo>
        </ContactLayout>
      </Section>
    </>
  );
};

export default ContactPage; 