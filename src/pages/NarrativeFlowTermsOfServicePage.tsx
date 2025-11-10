import React from 'react';
import styled from 'styled-components';

const PageHeader = styled.div`
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

const ContentContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 3rem 1.5rem;
`;

const LastUpdated = styled.p`
  color: var(--gray-text);
  margin-bottom: 2rem;
  font-style: italic;
`;

const TermsTitle = styled.h2`
  font-size: 1.75rem;
  margin: 2rem 0 1rem;
  color: var(--primary-color);
`;

const TermsText = styled.p`
  margin-bottom: 1.5rem;
  line-height: 1.7;
`;

const TermsList = styled.ul`
  margin-bottom: 1.5rem;
  padding-left: 1.5rem;
`;

const TermsListItem = styled.li`
  margin-bottom: 0.75rem;
  line-height: 1.6;
`;


const Disclaimer = styled.div`
  margin: 1.5rem 0;
  padding: 1.5rem;
  background-color: rgba(255, 247, 237, 0.5);
  border-radius: var(--border-radius);
  border-left: 4px solid var(--accent-color);
  font-size: 0.9rem;
`;

const ContactInfo = styled.div`
  margin-top: 2rem;
  padding: 1.5rem;
  background-color: rgba(235, 240, 255, 0.5);
  border-radius: var(--border-radius);
  border-left: 4px solid var(--primary-color);
`;

const NarrativeFlowTermsOfServicePage: React.FC = () => {
  return (
    <>
      <PageHeader>
        <div className="container">
          <HeaderTitle>NarrativeFlow App Terms of Service</HeaderTitle>
          <HeaderDescription>
            Please read these terms carefully before using our app
          </HeaderDescription>
        </div>
      </PageHeader>

      <ContentContainer>
        <LastUpdated>Last updated: November 2024</LastUpdated>

        <TermsTitle>1. Acceptance of Terms</TermsTitle>
        <TermsText>
          By using NarrativeFlow, you agree to these Terms of Service. If you do not agree, please do not use the app.
        </TermsText>

        <TermsTitle>2. Service Description</TermsTitle>
        <TermsText>
          NarrativeFlow provides AI-powered tools for image generation, editing, and video creation. The service is provided by MyLogix Studio LLC.
        </TermsText>

        <TermsTitle>3. Subscriptions</TermsTitle>
        <TermsList>
          <TermsListItem>Subscriptions are billed through Apple In-App Purchase</TermsListItem>
          <TermsListItem>Auto-renews unless cancelled 24 hours before period ends</TermsListItem>
          <TermsListItem>Manage or cancel via iOS Settings → [Your Name] → Subscriptions</TermsListItem>
          <TermsListItem>No refunds for unused portions</TermsListItem>
          <TermsListItem>Prices may vary by region</TermsListItem>
        </TermsList>

        <TermsTitle>4. Acceptable Use</TermsTitle>
        <TermsText>You agree NOT to:</TermsText>
        <TermsList>
          <TermsListItem>Generate illegal, harmful, or offensive content</TermsListItem>
          <TermsListItem>Violate intellectual property rights</TermsListItem>
          <TermsListItem>Use the service for unauthorized commercial purposes</TermsListItem>
          <TermsListItem>Attempt to reverse engineer or abuse the service</TermsListItem>
        </TermsList>

        <TermsTitle>5. Content Ownership</TermsTitle>
        <TermsList>
          <TermsListItem>You retain rights to content you create</TermsListItem>
          <TermsListItem>We do not claim ownership of your generated content</TermsListItem>
          <TermsListItem>Content is automatically deleted after 2 hours</TermsListItem>
          <TermsListItem>You are responsible for backing up your creations</TermsListItem>
        </TermsList>

        <TermsTitle>6. Service Availability</TermsTitle>
        <TermsList>
          <TermsListItem>We strive for 99% uptime but do not guarantee uninterrupted service</TermsListItem>
          <TermsListItem>Features may be modified or discontinued</TermsListItem>
          <TermsListItem>Processing times may vary based on server load</TermsListItem>
        </TermsList>

        <TermsTitle>7. Limitation of Liability</TermsTitle>
        <Disclaimer>
          MyLogix Studio LLC is not liable for:
          <br /><br />
          • Loss of content or data<br />
          • Service interruptions<br />
          • Third-party AI model outputs<br />
          • Any indirect or consequential damages
        </Disclaimer>

        <TermsTitle>8. Termination</TermsTitle>
        <TermsText>
          We reserve the right to suspend or terminate accounts that violate these terms.
        </TermsText>

        <TermsTitle>9. Changes to Terms</TermsTitle>
        <TermsText>
          We may modify these terms at any time. Continued use constitutes acceptance of changes.
        </TermsText>

        <TermsTitle>10. Governing Law</TermsTitle>
        <TermsText>
          These terms are governed by the laws of the United States. Disputes will be resolved through arbitration.
        </TermsText>

        <TermsTitle>11. Contact</TermsTitle>
        <TermsText>
          For support or questions, contact us at:
        </TermsText>
        <ContactInfo>
          <strong>MyLogix Studio LLC</strong><br />
          Email: mls@mylogicstudio.com
        </ContactInfo>
      </ContentContainer>
    </>
  );
};

export default NarrativeFlowTermsOfServicePage;
