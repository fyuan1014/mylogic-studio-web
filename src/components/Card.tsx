import React from 'react';
import styled from 'styled-components';

interface CardProps {
  title?: string;
  image?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const CardContainer = styled.div`
  background-color: var(--background-color);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  overflow: hidden;
  transition: var(--transition);
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }
`;

const CardImage = styled.div<{ src: string }>`
  width: 100%;
  height: 200px;
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-position: center;
`;

const CardContent = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const CardIcon = styled.div`
  margin-bottom: 1rem;
  font-size: 2rem;
  color: var(--primary-color);
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const Card: React.FC<CardProps> = ({
  title,
  image,
  icon,
  children,
  className,
  onClick,
}) => {
  return (
    <CardContainer className={className} onClick={onClick}>
      {image && <CardImage src={image} />}
      <CardContent>
        {icon && <CardIcon>{icon}</CardIcon>}
        {title && <CardTitle>{title}</CardTitle>}
        {children}
      </CardContent>
    </CardContainer>
  );
};

export default Card; 