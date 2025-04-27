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
          MyLogic Studio LLC ("we", "our", or "us") operates the ColorCrafter mobile application (the "App"). 
          This Privacy Policy informs you of our policies regarding the collection, use, and disclosure of personal data 
          when you use our App and the choices you have associated with that data.
        </PolicyText>

        <PolicyTitle>1. Information We Collect</PolicyTitle>
        <PolicyText>We collect the following types of information:</PolicyText>
        <PolicyList>
          <PolicyListItem>Images you upload for processing</PolicyListItem>
          <PolicyListItem>Account information (email address for registered users)</PolicyListItem>
          <PolicyListItem>Usage data (features used, time spent in the app)</PolicyListItem>
          <PolicyListItem>Device information (device type, OS version)</PolicyListItem>
          <PolicyListItem>Subscription status and purchase history</PolicyListItem>
          <PolicyListItem>User preferences and settings</PolicyListItem>
        </PolicyList>

        <PolicyTitle>2. How We Use Your Information</PolicyTitle>
        <PolicyText>We use your information to:</PolicyText>
        <PolicyList>
          <PolicyListItem>Process your images and create paint-by-numbers templates</PolicyListItem>
          <PolicyListItem>Authenticate your identity and manage your account</PolicyListItem>
          <PolicyListItem>Process transactions and manage subscriptions</PolicyListItem>
          <PolicyListItem>Personalize your experience and remember preferences</PolicyListItem>
          <PolicyListItem>Improve our App through analytics and user feedback</PolicyListItem>
          <PolicyListItem>Communicate with you regarding service updates</PolicyListItem>
          <PolicyListItem>Protect against fraudulent or unauthorized activity</PolicyListItem>
        </PolicyList>

        <PolicyTitle>3. Data Storage and Security</PolicyTitle>
        <PolicyList>
          <PolicyListItem>Images are processed on our secure servers and are not permanently stored after processing is complete</PolicyListItem>
          <PolicyListItem>We implement appropriate technical and organizational measures to protect your personal data</PolicyListItem>
          <PolicyListItem>We use industry-standard encryption for data transmission</PolicyListItem>
          <PolicyListItem>Your subscription data is handled securely through Apple's StoreKit</PolicyListItem>
          <PolicyListItem>We retain your data only as long as necessary to provide services to you</PolicyListItem>
        </PolicyList>

        <PolicyTitle>4. Third-Party Services</PolicyTitle>
        <PolicyText>We use the following third-party services:</PolicyText>
        <PolicyList>
          <PolicyListItem>Apple App Store for distribution and payments</PolicyListItem>
          <PolicyListItem>Apple StoreKit for subscription management</PolicyListItem>
          <PolicyListItem>Heroku for server hosting and image processing</PolicyListItem>
          <PolicyListItem>PostgreSQL for database storage</PolicyListItem>
        </PolicyList>
        <PolicyText>
          Each third-party service has its own Privacy Policy governing how they handle your data. 
          We recommend reviewing their policies as well.
        </PolicyText>

        <PolicyTitle>5. Your Legal Rights</PolicyTitle>
        <PolicyText>Depending on your location, you may have certain rights regarding your personal information:</PolicyText>
        <PolicyList>
          <PolicyListItem>Right to Access: You can request copies of your personal data.</PolicyListItem>
          <PolicyListItem>Right to Rectification: You can request that we correct inaccurate information.</PolicyListItem>
          <PolicyListItem>Right to Erasure: You can request that we delete your personal data.</PolicyListItem>
          <PolicyListItem>Right to Restrict Processing: You can request that we restrict processing of your data.</PolicyListItem>
          <PolicyListItem>Right to Data Portability: You can request transfer of your data.</PolicyListItem>
          <PolicyListItem>Right to Object: You can object to our processing of your personal data.</PolicyListItem>
        </PolicyList>
        <PolicyText>
          California Residents: Under the California Consumer Privacy Act (CCPA), California residents have specific 
          rights regarding personal information. You have the right to know what personal information we collect, 
          disclose, or sell, and the right to request deletion of personal information.
        </PolicyText>

        <PolicyTitle>6. Children's Privacy</PolicyTitle>
        <PolicyText>
          Our App is not intended for use by children under the age of 13. We do not knowingly collect 
          personally identifiable information from children under 13. If you are a parent or guardian 
          and you are aware that your child has provided us with personal data, please contact us.
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
          <strong>MyLogic Studio LLC</strong><br />
          Email: mls@mylogicstudio.com
        </ContactInfo>
      </ContentContainer>
    </>
  );
};

export default PrivacyPolicyPage; 