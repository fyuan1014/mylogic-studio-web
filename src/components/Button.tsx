import React from 'react';
import styled, { css } from 'styled-components';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text';
type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
}

const getButtonStyles = (variant: ButtonVariant) => {
  switch (variant) {
    case 'primary':
      return css`
        background-color: var(--primary-color);
        color: var(--light-text);
        border: 2px solid var(--primary-color);
        
        &:hover {
          background-color: var(--secondary-color);
          border-color: var(--secondary-color);
        }
      `;
    case 'secondary':
      return css`
        background-color: var(--accent-color);
        color: var(--light-text);
        border: 2px solid var(--accent-color);
        
        &:hover {
          background-color: #ff6647;
          border-color: #ff6647;
        }
      `;
    case 'outline':
      return css`
        background-color: transparent;
        color: var(--primary-color);
        border: 2px solid var(--primary-color);
        
        &:hover {
          background-color: rgba(74, 107, 255, 0.1);
        }
      `;
    case 'text':
      return css`
        background-color: transparent;
        color: var(--primary-color);
        border: 2px solid transparent;
        padding: 0.5rem;
        
        &:hover {
          background-color: rgba(74, 107, 255, 0.1);
        }
      `;
    default:
      return '';
  }
};

const getButtonSize = (size: ButtonSize) => {
  switch (size) {
    case 'small':
      return css`
        padding: 0.25rem 0.75rem;
        font-size: 0.875rem;
      `;
    case 'medium':
      return css`
        padding: 0.5rem 1.25rem;
        font-size: 1rem;
      `;
    case 'large':
      return css`
        padding: 0.75rem 1.75rem;
        font-size: 1.125rem;
      `;
    default:
      return '';
  }
};

const StyledButton = styled.button<{
  variant: ButtonVariant;
  size: ButtonSize;
  fullWidth?: boolean;
  disabled?: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--border-radius);
  font-weight: 500;
  transition: var(--transition);
  cursor: pointer;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  ${({ variant }) => getButtonStyles(variant)}
  ${({ size }) => getButtonSize(size)}
`;

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  onClick,
  type = 'button',
  disabled = false,
  children,
  className,
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={className}
    >
      {children}
    </StyledButton>
  );
};

export default Button; 