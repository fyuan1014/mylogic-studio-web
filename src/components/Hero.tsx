import React from 'react';
import styled from 'styled-components';
import Button from './Button';

interface HeroProps {
  title: string;
  subtitle: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  backgroundImage?: string;
  className?: string;
}

const HeroContainer = styled.div<{ backgroundImage?: string }>`
  height: 85vh;
  min-height: 600px;
  max-height: 900px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--dark-background);
  overflow: hidden;
  
  ${({ backgroundImage }) => backgroundImage && `
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: url(${backgroundImage});
      background-size: cover;
      background-position: center;
      opacity: 0.5;
      z-index: 1;
    }
  `}
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(10, 25, 41, 0.9), rgba(74, 107, 255, 0.4));
  z-index: 2;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 3;
  text-align: center;
  max-width: 900px;
  padding: 0 1.5rem;
  color: var(--light-text);
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  
  span {
    color: var(--accent-color);
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2.5rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  
  @media (max-width: 768px) {
    font-size: 1.125rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  
  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
  }
`;

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  primaryButtonText,
  secondaryButtonText,
  onPrimaryClick,
  onSecondaryClick,
  backgroundImage,
  className,
}) => {
  return (
    <HeroContainer backgroundImage={backgroundImage} className={className}>
      <HeroOverlay />
      <HeroContent>
        <HeroTitle dangerouslySetInnerHTML={{ __html: title }} />
        <HeroSubtitle>{subtitle}</HeroSubtitle>
        
        {(primaryButtonText || secondaryButtonText) && (
          <ButtonGroup>
            {primaryButtonText && (
              <Button 
                variant="primary" 
                size="large" 
                onClick={onPrimaryClick}
              >
                {primaryButtonText}
              </Button>
            )}
            
            {secondaryButtonText && (
              <Button 
                variant="outline" 
                size="large" 
                onClick={onSecondaryClick}
              >
                {secondaryButtonText}
              </Button>
            )}
          </ButtonGroup>
        )}
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero; 