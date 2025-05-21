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

const ImportantText = styled.p`
  margin-bottom: 1.5rem;
  line-height: 1.7;
  font-weight: 500;
  color: var(--primary-color);
`;

const ContactInfo = styled.div`
  margin-top: 2rem;
  padding: 1.5rem;
  background-color: rgba(235, 240, 255, 0.5);
  border-radius: var(--border-radius);
  border-left: 4px solid var(--primary-color);
`;

const PrivacyPolicyPage: React.FC = () => {
  return (
    <>
      <PageHeader>
        <div className="container">
          <HeaderTitle>ColorCrafter App Privacy Policy</HeaderTitle>
          <HeaderDescription>
            Information on how we collect, use, and protect your data
          </HeaderDescription>
        </div>
      </PageHeader>

      <ContentContainer>
        <LastUpdated>Last updated: April 2025</LastUpdated>
        
        <PolicyText>
          MyLogix Studio LLC ("we", "our", or "us") operates the ColorCrafter mobile application (the "App"). 
          This Privacy Policy informs you of our policies regarding the collection, use, and disclosure of data 
          when you use our App and the choices you have associated with that data.
        </PolicyText>

        <PolicyTitle>1. Information We Collect</PolicyTitle>
        <PolicyText>We collect the following types of information:</PolicyText>
        <PolicyList>
          <PolicyListItem>Images you upload for processing</PolicyListItem>
          <PolicyListItem>Usage data (app features used, time spent in the app)</PolicyListItem>
          <PolicyListItem>Device information (device type, OS version)</PolicyListItem>
          <PolicyListItem>Subscription status through Apple's StoreKit</PolicyListItem>
          <PolicyListItem>App preferences and settings stored locally on your device</PolicyListItem>
        </PolicyList>
        <ImportantText>
          We do not collect personal information such as names, email addresses, or maintain user accounts.
        </ImportantText>

        <PolicyTitle>2. How We Use Your Information</PolicyTitle>
        <PolicyText>We use your information to:</PolicyText>
        <PolicyList>
          <PolicyListItem>Process your images and create paint-by-numbers templates</PolicyListItem>
          <PolicyListItem>Verify your subscription status via Apple's StoreKit</PolicyListItem>
          <PolicyListItem>Personalize your experience and store preferences on your device</PolicyListItem>
          <PolicyListItem>Improve our App through anonymous usage analytics</PolicyListItem>
          <PolicyListItem>Protect against fraudulent activity</PolicyListItem>
        </PolicyList>

        <PolicyTitle>3. Data Storage and Security</PolicyTitle>
        <PolicyList>
          <PolicyListItem>Images are processed on our secure servers and are not permanently stored after processing is complete</PolicyListItem>
          <PolicyListItem>We implement appropriate technical measures to protect your data during processing</PolicyListItem>
          <PolicyListItem>We use industry-standard encryption for data transmission</PolicyListItem>
          <PolicyListItem>Your subscription data is handled entirely by Apple through StoreKit</PolicyListItem>
          <PolicyListItem>No user account database is maintained</PolicyListItem>
          <PolicyListItem>App preferences are stored locally on your device</PolicyListItem>
        </PolicyList>

        <PolicyTitle>4. Third-Party Services</PolicyTitle>
        <PolicyText>We use the following third-party services:</PolicyText>
        <PolicyList>
          <PolicyListItem>Apple App Store for distribution and payments</PolicyListItem>
          <PolicyListItem>Apple StoreKit for subscription management</PolicyListItem>
          <PolicyListItem>Heroku for server hosting and image processing</PolicyListItem>
        </PolicyList>
        <PolicyText>
          Each third-party service has its own Privacy Policy governing how they handle data. 
          We recommend reviewing their policies as well.
        </PolicyText>

        <PolicyTitle>5. Your Legal Rights</PolicyTitle>
        <PolicyText>
          Since we don't collect or store personal information, most data privacy rights regarding data access, 
          modification, or deletion don't apply directly. However, you still have the right to:
        </PolicyText>
        <PolicyList>
          <PolicyListItem>Delete the app and all locally stored preferences</PolicyListItem>
          <PolicyListItem>Manage your subscription through your Apple ID account settings</PolicyListItem>
          <PolicyListItem>Request that any of your images in processing be deleted</PolicyListItem>
        </PolicyList>

        <PolicyTitle>6. Children's Privacy</PolicyTitle>
        <PolicyText>
          Our App is not intended for use by children under the age of 17. We do not knowingly collect information 
          from children under 17. The app is accessible without creating accounts, and Apple's family controls can 
          be used to manage access to the app and prevent in-app purchases.
        </PolicyText>

        <PolicyTitle>7. Changes to This Privacy Policy</PolicyTitle>
        <PolicyText>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting 
          the new Privacy Policy on this page and updating the "Last updated" date. You are advised to 
          review this Privacy Policy periodically for any changes.
        </PolicyText>

        <PolicyTitle>8. Contact Us</PolicyTitle>
        <PolicyText>
          If you have any questions about this Privacy Policy or our data practices, please contact us at:
        </PolicyText>
        <ContactInfo>
          <strong>MyLogix Studio LLC</strong><br />
          Email: mls@mylogicstudio.com
        </ContactInfo>
      </ContentContainer>
    </>
  );
};

export default PrivacyPolicyPage; 