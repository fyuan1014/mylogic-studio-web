import React from 'react';
import styled from 'styled-components';

interface SectionProps {
  id?: string;
  title?: string;
  description?: string;
  background?: 'light' | 'dark' | 'primary' | 'accent' | 'gradient';
  children: React.ReactNode;
  className?: string;
}

const SectionContainer = styled.section<{ background: string }>`
  padding: 5rem 0;
  transition: var(--transition);
  
  ${({ background }) => {
    switch (background) {
      case 'dark':
        return `
          background-color: var(--dark-background);
          color: var(--light-text);
        `;
      case 'primary':
        return `
          background-color: rgba(74, 107, 255, 0.1);
        `;
      case 'accent':
        return `
          background-color: rgba(255, 123, 92, 0.1);
        `;
      case 'gradient':
        return `
          background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
          color: var(--light-text);
        `;
      default:
        return `
          background-color: var(--background-color);
        `;
    }
  }}
  
  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`;

const SectionInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const SectionHeader = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 3rem;
  
  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  position: relative;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionDescription = styled.p`
  font-size: 1.1rem;
  color: var(--gray-text);
  line-height: 1.7;
`;

const Section: React.FC<SectionProps> = ({
  id,
  title,
  description,
  background = 'light',
  children,
  className,
}) => {
  return (
    <SectionContainer id={id} background={background} className={className}>
      <SectionInner>
        {(title || description) && (
          <SectionHeader>
            {title && <SectionTitle>{title}</SectionTitle>}
            {description && <SectionDescription>{description}</SectionDescription>}
          </SectionHeader>
        )}
        {children}
      </SectionInner>
    </SectionContainer>
  );
};

export default Section; 