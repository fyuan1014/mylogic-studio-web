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

const PolicyTitle = styled.h2`
  font-size: 1.75rem;
  margin: 2rem 0 1rem;
  color: var(--primary-color);
`;

const PolicyText = styled.p`
  margin-bottom: 1.5rem;
  line-height: 1.7;
`;

const PolicyList = styled.ul`
  margin-bottom: 1.5rem;
  padding-left: 1.5rem;
`;

const PolicyListItem = styled.li`
  margin-bottom: 0.75rem;
  line-height: 1.6;
`;


const ContactInfo = styled.div`
  margin-top: 2rem;
  padding: 1.5rem;
  background-color: rgba(235, 240, 255, 0.5);
  border-radius: var(--border-radius);
  border-left: 4px solid var(--primary-color);
`;

const NarrativeFlowPrivacyPolicyPage: React.FC = () => {
  return (
    <>
      <PageHeader>
        <div className="container">
          <HeaderTitle>NarrativeFlow App Privacy Policy</HeaderTitle>
          <HeaderDescription>
            Information on how we collect, use, and protect your data
          </HeaderDescription>
        </div>
      </PageHeader>

      <ContentContainer>
        <LastUpdated>Last updated: November 2024</LastUpdated>

        <PolicyTitle>1. Information We Collect</PolicyTitle>
        <PolicyText>
          NarrativeFlow does NOT collect, store, or transmit any personal information. We respect your privacy and operate on a no-data-collection basis.
        </PolicyText>

        <PolicyTitle>2. Data Storage</PolicyTitle>
        <PolicyList>
          <PolicyListItem>All images and content are processed on our servers temporarily</PolicyListItem>
          <PolicyListItem>Files are automatically deleted after 2 hours</PolicyListItem>
          <PolicyListItem>We do not retain any user-generated content</PolicyListItem>
          <PolicyListItem>No personal information is stored</PolicyListItem>
        </PolicyList>

        <PolicyTitle>3. Third-Party Services</PolicyTitle>
        <PolicyText>
          We use the following third-party services for app functionality:
        </PolicyText>
        <PolicyList>
          <PolicyListItem>Apple In-App Purchase (subscription management)</PolicyListItem>
          <PolicyListItem>Hugging Face API (for all AI image generation, editing, and text processing)</PolicyListItem>
          <PolicyListItem>Google Cloud Text-to-Speech API (for audio generation)</PolicyListItem>
          <PolicyListItem>MoviePy (for video compilation and processing)</PolicyListItem>
        </PolicyList>
        <PolicyText>
          All AI processing is done temporarily on our servers and files are automatically deleted after 2 hours.
          These third-party services have their own privacy policies that you can review on their respective websites.
        </PolicyText>

        <PolicyTitle>4. Children's Privacy</PolicyTitle>
        <PolicyText>
          Our app does not knowingly collect information from children under 13. The app is intended for general audiences.
        </PolicyText>

        <PolicyTitle>5. Your Rights</PolicyTitle>
        <PolicyText>
          Since we don't collect personal data, there is no data to access, modify, or delete. Your content is automatically removed after processing.
        </PolicyText>

        <PolicyTitle>6. Changes to This Policy</PolicyTitle>
        <PolicyText>
          We may update this policy occasionally. Continued use of the app constitutes acceptance of any changes.
        </PolicyText>

        <PolicyTitle>7. Contact Us</PolicyTitle>
        <PolicyText>
          For questions about this privacy policy, please contact us at:
        </PolicyText>
        <ContactInfo>
          <strong>MyLogix Studio LLC</strong><br />
          Email: mls@mylogicstudio.com
        </ContactInfo>
      </ContentContainer>
    </>
  );
};

export default NarrativeFlowPrivacyPolicyPage;
