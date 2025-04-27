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

const TermsOfServicePage: React.FC = () => {
  return (
    <>
      <PageHeader>
        <div className="container">
          <HeaderTitle>ColorCrafter App Terms of Service</HeaderTitle>
          <HeaderDescription>
            Please read these terms carefully before using our app
          </HeaderDescription>
        </div>
      </PageHeader>

      <ContentContainer>
        <LastUpdated>Last updated: April 2025</LastUpdated>
        
        <TermsText>
          Please read these Terms of Service ("Terms") carefully before using the ColorCrafter mobile 
          application (the "App") operated by MyLogic Studio LLC ("us", "we", or "our").
        </TermsText>
        
        <TermsText>
          By accessing or using the App, you agree to be bound by these Terms. If you disagree 
          with any part of the Terms, you do not have permission to access the App.
        </TermsText>

        <TermsTitle>1. Acceptance of Terms</TermsTitle>
        <TermsText>
          By accessing and using ColorCrafter, you acknowledge that you have read, understood, 
          and agree to be bound by these Terms of Service. We reserve the right to update or modify 
          these Terms at any time without prior notice. Your continued use of the App following any 
          changes constitutes your acceptance of the revised Terms.
        </TermsText>

        <TermsTitle>2. License and Usage</TermsTitle>
        <TermsList>
          <TermsListItem>
            We grant you a limited, non-exclusive, non-transferable, revocable license to use 
            the App for your personal, non-commercial purposes.
          </TermsListItem>
          <TermsListItem>
            You may not modify, adapt, reverse engineer, decompile, or disassemble the App 
            or any part thereof.
          </TermsListItem>
          <TermsListItem>
            You may not create derivative works based on the App or its content.
          </TermsListItem>
          <TermsListItem>
            You may not use the App for any illegal or unauthorized purpose.
          </TermsListItem>
          <TermsListItem>
            You may not use the App in any manner that could damage, disable, overburden, 
            or impair our servers or networks.
          </TermsListItem>
        </TermsList>

        <TermsTitle>3. User Content</TermsTitle>
        <TermsList>
          <TermsListItem>
            You retain all rights to the images you upload to the App.
          </TermsListItem>
          <TermsListItem>
            You grant us a non-exclusive, worldwide, royalty-free license to use, process, 
            modify, and store your uploaded images solely for the purpose of providing our 
            services to you.
          </TermsListItem>
          <TermsListItem>
            You are solely responsible for the content of images you upload and must ensure 
            you have all necessary rights and permissions to use such content.
          </TermsListItem>
          <TermsListItem>
            You agree not to upload any content that is unlawful, harmful, threatening, abusive, 
            harassing, defamatory, vulgar, obscene, invasive of another's privacy, or otherwise 
            objectionable.
          </TermsListItem>
        </TermsList>

        <TermsTitle>4. Subscription Terms</TermsTitle>
        <TermsList>
          <TermsListItem>
            Some features of the App are available only with a paid subscription.
          </TermsListItem>
          <TermsListItem>
            Subscriptions automatically renew unless auto-renew is turned off at least 24 hours 
            before the end of the current period.
          </TermsListItem>
          <TermsListItem>
            You can manage and cancel your subscription through your Apple ID account settings.
          </TermsListItem>
          <TermsListItem>
            Payment will be charged to your Apple ID account at confirmation of purchase and upon renewal.
          </TermsListItem>
          <TermsListItem>
            Any unused portion of a free trial period will be forfeited when you purchase a subscription.
          </TermsListItem>
          <TermsListItem>
            Refunds are subject to Apple's App Store policies.
          </TermsListItem>
        </TermsList>

        <TermsTitle>5. Service Limitations</TermsTitle>
        <TermsList>
          <TermsListItem>
            Free tier has limited features and processing capabilities.
          </TermsListItem>
          <TermsListItem>
            We reserve the right to modify, suspend, or discontinue the App or any part 
            thereof at any time with or without notice.
          </TermsListItem>
          <TermsListItem>
            We are not responsible for delays or failures in performance resulting from 
            causes beyond our control.
          </TermsListItem>
          <TermsListItem>
            We may impose usage limits, reduce functionality, or terminate your access to 
            the App at our sole discretion.
          </TermsListItem>
        </TermsList>

        <TermsTitle>6. Intellectual Property</TermsTitle>
        <TermsList>
          <TermsListItem>
            The App, including all content, features, and functionality, is owned by MyLogic 
            Studio LLC and is protected by United States and international copyright, trademark, 
            patent, trade secret, and other intellectual property laws.
          </TermsListItem>
          <TermsListItem>
            ColorCrafter is a trademark of MyLogic Studio LLC.
          </TermsListItem>
          <TermsListItem>
            Paint-by-numbers templates generated by the App are for personal use only. Commercial 
            use of generated templates is prohibited without explicit written permission.
          </TermsListItem>
        </TermsList>

        <TermsTitle>7. Disclaimer of Warranties</TermsTitle>
        <Disclaimer>
          THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER 
          EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, 
          FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT OR COURSE OF PERFORMANCE.
          <br /><br />
          MyLogic Studio LLC DOES NOT WARRANT THAT: (A) THE APP WILL FUNCTION UNINTERRUPTED, 
          SECURE OR AVAILABLE AT ANY PARTICULAR TIME OR LOCATION; (B) ANY ERRORS OR DEFECTS WILL 
          BE CORRECTED; (C) THE APP IS FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS; OR (D) THE 
          RESULTS OF USING THE APP WILL MEET YOUR REQUIREMENTS.
        </Disclaimer>

        <TermsTitle>8. Limitation of Liability</TermsTitle>
        <Disclaimer>
          IN NO EVENT SHALL MyLogic Studio LLC BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, 
          CONSEQUENTIAL OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, 
          USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR ACCESS TO OR USE OF OR 
          INABILITY TO ACCESS OR USE THE APP.
        </Disclaimer>

        <TermsTitle>9. Governing Law</TermsTitle>
        <TermsText>
          These Terms shall be governed by and construed in accordance with the laws of the United 
          States and the State of California, without regard to its conflict of law provisions. Any 
          dispute arising from or relating to these Terms or your use of the App shall be subject to 
          the exclusive jurisdiction of the state and federal courts located in California.
        </TermsText>

        <TermsTitle>10. Severability</TermsTitle>
        <TermsText>
          If any provision of these Terms is held to be unenforceable or invalid, such provision will 
          be changed and interpreted to accomplish the objectives of such provision to the greatest 
          extent possible under applicable law and the remaining provisions will continue in full 
          force and effect.
        </TermsText>

        <TermsTitle>11. Contact Us</TermsTitle>
        <TermsText>
          If you have any questions about these Terms of Service, please contact us at:
        </TermsText>
        <ContactInfo>
          <strong>MyLogic Studio LLC</strong><br />
          Email: mls@mylogicstudio.com
        </ContactInfo>
      </ContentContainer>
    </>
  );
};

export default TermsOfServicePage; 