import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';

const FormContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
  font-weight: 500;
  font-size: 0.9rem;
  color: var(--text-color);
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  font-family: inherit;
  font-size: 0.9rem;
  background-color: white;
  color: var(--text-color);
  transition: var(--transition);
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px rgba(74, 107, 255, 0.2);
  }
  
  &::placeholder {
    color: #aaa;
  }
`;

const Textarea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  font-family: inherit;
  font-size: 0.9rem;
  resize: vertical;
  min-height: 100px;
  background-color: white;
  color: var(--text-color);
  transition: var(--transition);
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px rgba(74, 107, 255, 0.2);
  }
  
  &::placeholder {
    color: #aaa;
  }
`;

const ErrorMessage = styled.div`
  color: #ff3b30;
  font-size: 0.75rem;
  margin-top: 0.25rem;
`;

const SuccessMessage = styled.div`
  background-color: rgba(76, 217, 100, 0.15);
  color: #2e7c39;
  padding: 0.75rem;
  border-radius: var(--border-radius);
  margin-bottom: 1rem;
  font-weight: 500;
  font-size: 0.9rem;
  text-align: center;
  border: 1px solid rgba(76, 217, 100, 0.3);
`;

const SubmitButton = styled(Button)`
  margin-top: 0.5rem;
  width: 100%;
`;

interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
  interestArea: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const ContactForm: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    name: '',
    email: '',
    subject: '',
    message: '',
    interestArea: '',
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const errors: FormErrors = {};

    if (!formValues.name.trim()) {
      errors.name = 'Name is required';
    }

    if (!formValues.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formValues.email)) {
      errors.email = 'Invalid email address';
    }

    if (!formValues.subject.trim()) {
      errors.subject = 'Subject is required';
    }

    if (!formValues.message.trim()) {
      errors.message = 'Message is required';
    }

    return errors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const errors = validateForm();
    setFormErrors(errors);
    
    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormValues({
          name: '',
          email: '',
          subject: '',
          message: '',
          interestArea: '',
        });
      }, 1500);
    }
  };

  return (
    <FormContainer>
      {isSubmitted && (
        <SuccessMessage>
          Thank you for your message! We'll get back to you as soon as possible.
        </SuccessMessage>
      )}
      
      <Form onSubmit={handleSubmit}>
        <FormRow>
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formValues.name}
              onChange={handleChange}
              placeholder="Your name"
            />
            {formErrors.name && <ErrorMessage>{formErrors.name}</ErrorMessage>}
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              placeholder="Your email"
            />
            {formErrors.email && <ErrorMessage>{formErrors.email}</ErrorMessage>}
          </FormGroup>
        </FormRow>
        
        <FormGroup>
          <Label htmlFor="subject">Subject</Label>
          <Input
            type="text"
            id="subject"
            name="subject"
            value={formValues.subject}
            onChange={handleChange}
            placeholder="Subject"
          />
          {formErrors.subject && <ErrorMessage>{formErrors.subject}</ErrorMessage>}
        </FormGroup>
        
        <FormGroup>
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            value={formValues.message}
            onChange={handleChange}
            placeholder="Your message"
          />
          {formErrors.message && <ErrorMessage>{formErrors.message}</ErrorMessage>}
        </FormGroup>
        
        <SubmitButton 
          type="submit" 
          variant="primary" 
          size="medium" 
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </SubmitButton>
      </Form>
    </FormContainer>
  );
};

export default ContactForm; 