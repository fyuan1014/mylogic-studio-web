import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export type ToolProofLegalKind = 'privacy' | 'terms';
type LegalSection = { title: string; paragraphs: string[] };

const privacySections: LegalSection[] = [
  {
    title: '1. Scope',
    paragraphs: [
      'This Privacy Policy explains how MyLogix Studio LLC handles information when you use the ToolProof iOS application, website, support channels, and related services (collectively, “ToolProof”).',
      'ToolProof is a seller-focused assistant for documenting used tools, identifying supported models, reviewing market evidence, estimating pricing, and preparing editable listing content.',
    ],
  },
  {
    title: '2. Information we process',
    paragraphs: [
      'Account information includes the Sign in with Apple account identifier and any account information Apple makes available based on your choices, such as a relay email address or name.',
      'User content includes tool photos you deliberately capture or select, on-device optical-character-recognition (OCR) text, model corrections, component confirmations, inspection details, condition information, and listing drafts or edits.',
      'Product interaction information includes analysis state, supported-model candidates, confidence and reason codes, requested evidence, feature use, allowance and credit balances, and records needed to maintain private inspection history.',
      'Purchase information includes Apple product and transaction identifiers, an account-binding token, subscription or entitlement status, renewal, expiration, refund, and revocation events. MyLogix Studio LLC does not receive or store your full payment-card number.',
      'Technical and diagnostic information may include request identifiers, app and operating-system version, timestamps, response time, model and prompt version, token use, bounded error codes, and security or rate-limit events. Network providers may process an IP address to deliver and protect the service.',
    ],
  },
  {
    title: '3. Photos, camera access, and location metadata',
    paragraphs: [
      'ToolProof accesses only the photos you choose or capture for an inspection. It does not scan your photo library in the background.',
      'Before upload, the App resizes and re-encodes evidence images. This removes GPS and other source EXIF metadata from the uploaded JPEG. ToolProof does not request precise location for inspection analysis.',
      'Photos are stored in a private, access-controlled evidence bucket and are made available through short-lived authorization rather than permanent public URLs.',
    ],
  },
  {
    title: '4. How we use information',
    paragraphs: [
      'We use information to authenticate your account, keep inspections private, analyze submitted evidence, identify supported tools, request clearer evidence, estimate pricing, generate and preserve editable listing content, verify purchases, maintain allowances, prevent fraud and abuse, provide support, monitor reliability and cost, and comply with legal obligations.',
      'We do not sell personal information. ToolProof does not display third-party advertising and does not track you across apps or websites owned by other companies for advertising.',
    ],
  },
  {
    title: '5. Artificial-intelligence processing',
    paragraphs: [
      'ToolProof sends selected tool photos and limited OCR context to the OpenAI API to perform evidence-based image understanding. Requests are sent with storage disabled by ToolProof. API content is not used to train OpenAI models by default, although OpenAI may temporarily retain limited content or logs for abuse monitoring under its applicable data controls.',
      'ToolProof does not use your photos, OCR, corrections, or analysis results to train its own general-purpose AI model. We may use privacy-limited aggregate outcomes, such as controlled reason codes and normalized model demand, to measure feature performance and prioritize catalogue coverage.',
      'AI output can be incomplete or incorrect. ToolProof separates machine observations from seller-confirmed facts and requires the seller to review results before publishing or relying on them.',
    ],
  },
  {
    title: '6. Retention and deletion',
    paragraphs: [
      'Original evidence photos are automatically deleted from private storage within 24 hours of upload. Raw OCR is removed immediately from a completed analysis and no later than the evidence-retention window for an unfinished analysis.',
      'Structured identification, pricing, component, correction, listing, and inspection-history records remain in your private account until you delete the inspection or your account. Deleting an inspection removes it from history and deletes its associated private evidence objects and records.',
      'Deleting your ToolProof account deletes your profile, inspections, private photos, drafts, remaining credits, and current ToolProof entitlements. Apple independently retains App Store purchase, billing, and subscription records under Apple’s policies. MyLogix Studio LLC may retain the minimum de-identified transaction or security record required for fraud prevention, refunds, accounting, legal compliance, or dispute resolution.',
      'Limited provider logs and encrypted backups may persist for a bounded period before rotation. We configure production providers for limited access and the shortest practical retention compatible with security and recovery.',
    ],
  },
  {
    title: '7. Service providers and disclosures',
    paragraphs: [
      'Supabase provides authentication, the private evidence store, and the ToolProof database. Vercel hosts server-side API execution and operational logs. OpenAI provides image and language-model processing. Apple provides Sign in with Apple, App Store distribution, StoreKit purchases, and subscription management.',
      'These providers process information to perform services for ToolProof and maintain their own privacy and security obligations. We may also disclose information when required by law, to investigate fraud or security incidents, to protect users or the service, or as part of a merger, financing, acquisition, or sale of assets subject to appropriate safeguards.',
    ],
  },
  {
    title: '8. Your choices and rights',
    paragraphs: [
      'You can choose which photos to submit, decline camera or photo-library access, correct model information, delete individual inspections, sign out, restore purchases, manage an Apple subscription, and permanently delete your ToolProof account from the Account screen.',
      'Depending on where you live, you may have rights to request access, correction, deletion, portability, restriction, or objection concerning personal information. Contact us to make a request. We may need to verify the request before acting on it, and some records may be retained when legally required.',
      'We will not discriminate against you for exercising an applicable privacy right.',
    ],
  },
  {
    title: '9. Security',
    paragraphs: [
      'We use safeguards designed to protect information, including encrypted network transport, private object storage, short-lived upload authorization, account-scoped access controls, server-only credentials, and bounded structured logging. No storage or transmission system can guarantee absolute security.',
    ],
  },
  {
    title: '10. Children',
    paragraphs: [
      'ToolProof is intended for adults and is not directed to children under 13. We do not knowingly solicit personal information from children under 13. If you believe a child has provided information, contact us so we can investigate and delete information that remains available.',
    ],
  },
  {
    title: '11. International processing',
    paragraphs: [
      'MyLogix Studio LLC and its service providers may process information in the United States and other countries. Privacy protections may differ from those in your location. Where required, we use appropriate safeguards for international transfers.',
    ],
  },
  {
    title: '12. Changes and contact',
    paragraphs: [
      'We may update this Policy when ToolProof, our providers, or legal requirements change. We will post the revised effective date and provide additional notice when required.',
      'Privacy questions or requests: MyLogix Studio LLC, mls@mylogicstudio.com.',
    ],
  },
];

const termsSections: LegalSection[] = [
  {
    title: '1. Agreement and eligibility',
    paragraphs: [
      'These Terms of Service govern your use of ToolProof. By creating an account, purchasing a ToolProof product, or using the service, you agree to these Terms and acknowledge the Privacy Policy. If you do not agree, do not use ToolProof.',
      'You must be legally able to enter a binding agreement where you live. If you use ToolProof for a business, you represent that you have authority to bind that business.',
    ],
  },
  {
    title: '2. What ToolProof provides',
    paragraphs: [
      'ToolProof is seller-focused decision-support software. It helps document used tools, identify supported models from submitted evidence, distinguish included components, review market evidence, estimate pricing, and prepare editable listing content.',
      'ToolProof is not a marketplace, auctioneer, dealer, broker, appraiser, authentication service, repair service, safety inspector, insurer, lender, or legal or tax adviser. ToolProof does not purchase, sell, take possession of, or guarantee any item.',
    ],
  },
  {
    title: '3. Accounts and security',
    paragraphs: [
      'ToolProof uses Sign in with Apple. You are responsible for maintaining control of your Apple account and device, promptly reporting suspected unauthorized access, and providing accurate seller confirmations.',
      'You may not share access in a way that bypasses plan or credit limits, create accounts to evade restrictions, or attempt to access another user’s inspections or data.',
    ],
  },
  {
    title: '4. Evidence, identification, and seller responsibility',
    paragraphs: [
      'You are responsible for providing clear, lawful, and accurate evidence. You must independently verify the manufacturer, exact model, serial or date information, configuration, included components, ownership, condition, functionality, defects, recalls, and safety before listing, shipping, operating, repairing, or transferring a tool.',
      'ToolProof may abstain, return an unsupported result, request more evidence, or present multiple candidates. A confidence score or confirmed catalogue match is not a guarantee of authenticity, ownership, safety, condition, merchantability, or fitness for use.',
      'Do not energize, charge, test, disassemble, or operate a tool when doing so may be unsafe. Follow manufacturer instructions, applicable recalls, battery-transport rules, marketplace policies, and applicable law.',
    ],
  },
  {
    title: '5. Pricing and market evidence',
    paragraphs: [
      'Pricing guidance is an estimate based on available, filtered market evidence and the configuration known to ToolProof. Asking prices are not completed sales. Completed-sale information may be delayed, incomplete, affected by accepted offers, or unavailable.',
      'ToolProof does not guarantee that an item will sell, the timing or final price of a sale, shipping cost, marketplace fees, taxes, returns, chargebacks, or net proceeds. You are responsible for selecting a price and reviewing all marketplace and transaction costs.',
    ],
  },
  {
    title: '6. Listing drafts and third-party marketplaces',
    paragraphs: [
      'Listing titles, descriptions, item specifics, photo order, and disclosures are editable drafts. You must review every field before publishing and must not omit a known material defect or make an unsupported claim.',
      'ToolProof may prepare content for use on services such as eBay, Facebook Marketplace, or Craigslist, but ToolProof is not affiliated with or endorsed by those services. You are responsible for complying with each marketplace’s terms, prohibited-items rules, fees, shipping requirements, and seller obligations.',
    ],
  },
  {
    title: '7. Your content',
    paragraphs: [
      'You retain ownership of photos, corrections, and listing content you submit. You represent that you own the content or have permission to use it and that processing it does not violate another person’s intellectual-property, privacy, publicity, contractual, or other rights.',
      'You grant MyLogix Studio LLC a limited, non-exclusive license to host, copy, resize, transmit, analyze, and transform submitted content only as needed to operate, secure, troubleshoot, and improve the ToolProof service as described in the Privacy Policy.',
      'Do not submit unlawful, stolen, fraudulent, harmful, privacy-invasive, or infringing content, or content unrelated to the supported purpose of documenting items you are authorized to inspect or sell.',
    ],
  },
  {
    title: '8. Subscriptions and inspection credits',
    paragraphs: [
      'ToolProof may offer auto-renewing subscriptions and one-time consumable inspection-credit packages through Apple In-App Purchase. The product name, included allowance, billing period, and localized price are shown in the App before you confirm a purchase.',
      'An auto-renewing subscription renews unless you cancel it through your Apple account at least 24 hours before the end of the current billing period. Apple charges your Apple account and handles billing, taxes, refunds, renewals, and revocations under Apple’s terms. Deleting ToolProof or deleting your ToolProof account does not by itself cancel an Apple subscription.',
      'Consumable inspection credits are one-time purchases, do not renew automatically, have no cash value, and cannot be transferred between ToolProof accounts. A credit is consumed according to the allowance rules shown in the App and service. Remaining credits and ToolProof entitlements are deleted when you permanently delete your ToolProof account.',
      'You can restore eligible purchases and manage or cancel a subscription from the Account screen. Except where required by law or Apple’s policies, purchases are final and refund requests are handled by Apple.',
    ],
  },
  {
    title: '9. Acceptable use',
    paragraphs: [
      'You may not interfere with ToolProof, bypass usage limits, automate abusive requests, probe or defeat security, introduce malicious code, scrape or extract the service or catalogue except as expressly permitted, reverse engineer the App except where applicable law permits, impersonate another person, submit false purchase evidence, or use ToolProof for unlawful, deceptive, or harmful activity.',
      'We may apply reasonable rate limits, evidence bounds, feature flags, catalogue restrictions, or spending controls to protect users and the service.',
    ],
  },
  {
    title: '10. ToolProof intellectual property',
    paragraphs: [
      'ToolProof, its software, interface, branding, catalogue structure, prompts, documentation, and service-generated materials supplied by MyLogix Studio LLC are protected by intellectual-property laws. Except for the limited right to use the App under these Terms and Apple’s applicable usage rules, no rights are transferred to you.',
    ],
  },
  {
    title: '11. Availability, changes, and suspension',
    paragraphs: [
      'ToolProof depends on network access and third-party services. We may update, limit, suspend, or discontinue features to maintain security, control cost, improve accuracy, comply with law, or respond to provider or marketplace changes.',
      'We may suspend or terminate access for a material violation of these Terms, fraud, unlawful use, security risk, abusive automation, or conduct that threatens ToolProof or other users. You may stop using ToolProof and delete your account at any time.',
    ],
  },
  {
    title: '12. Disclaimers',
    paragraphs: [
      'TO THE MAXIMUM EXTENT PERMITTED BY LAW, TOOLPROOF IS PROVIDED “AS IS” AND “AS AVAILABLE,” WITHOUT EXPRESS OR IMPLIED WARRANTIES, INCLUDING WARRANTIES OF ACCURACY, AUTHENTICITY, SAFETY, MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.',
      'AI analysis, OCR, catalogue matches, comparable records, estimates, and generated listing content may be incomplete, outdated, or incorrect. Nothing in these Terms excludes warranties or consumer rights that cannot lawfully be excluded where you live.',
    ],
  },
  {
    title: '13. Limitation of liability',
    paragraphs: [
      'TO THE MAXIMUM EXTENT PERMITTED BY LAW, MYLOGIX STUDIO LLC WILL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR FOR LOSS OF DATA, PROFITS, GOODWILL, BUSINESS OPPORTUNITY, ITEM VALUE, OR USE ARISING FROM TOOLPROOF, A LISTING, A TRANSACTION, OR OPERATION OF A TOOL.',
      'TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE TOTAL LIABILITY OF MYLOGIX STUDIO LLC FOR CLAIMS ARISING FROM TOOLPROOF WILL NOT EXCEED THE GREATER OF ONE HUNDRED U.S. DOLLARS OR THE AMOUNT YOU PAID FOR TOOLPROOF DURING THE TWELVE MONTHS BEFORE THE EVENT GIVING RISE TO THE CLAIM.',
    ],
  },
  {
    title: '14. Apple terms',
    paragraphs: [
      'Your use of the iOS App is also subject to Apple’s applicable App Store terms and Standard End User License Agreement. These Terms supplement those terms. Apple is not responsible for ToolProof or its support, maintenance, warranties, or claims except as required by Apple’s terms or applicable law.',
    ],
  },
  {
    title: '15. Governing law and changes',
    paragraphs: [
      'These Terms are governed by the laws of the Commonwealth of Massachusetts and applicable United States law, without regard to conflict-of-law principles, except where mandatory consumer law in your location applies.',
      'We may revise these Terms when ToolProof or applicable law changes. We will post the new effective date and provide additional notice when required. If a provision is unenforceable, the remaining provisions remain in effect.',
    ],
  },
  {
    title: '16. Contact',
    paragraphs: ['Questions about these Terms: MyLogix Studio LLC, mls@mylogicstudio.com.'],
  },
];

const content = {
  privacy: {
    title: 'Privacy Policy',
    introduction: 'This Policy explains how MyLogix Studio LLC handles information when you use ToolProof.',
    highlights: [
      'Original evidence photos are deleted within 24 hours',
      'No sale of personal information or advertising tracking',
      'Inspection and account deletion controls are built into the App',
    ],
    sections: privacySections,
  },
  terms: {
    title: 'Terms of Service',
    introduction: 'These Terms govern the ToolProof seller identification, pricing, listing, and purchase services.',
    highlights: [
      'ToolProof assists sellers; it does not buy or sell tools',
      'Seller review is required before relying on or publishing results',
      'Apple manages subscription billing and refunds',
    ],
    sections: termsSections,
  },
};

const ToolProofLegalDocumentPage: React.FC<{ kind: ToolProofLegalKind }> = ({ kind }) => {
  const page = content[kind];
  const otherKind: ToolProofLegalKind = kind === 'privacy' ? 'terms' : 'privacy';
  const otherTitle = otherKind === 'privacy' ? 'Privacy Policy' : 'Terms of Service';
  const otherSlug = otherKind === 'privacy' ? 'privacy-policy' : 'terms-of-service';

  useEffect(() => {
    document.title = `${page.title} | ToolProof`;
    document.documentElement.lang = 'en';
  }, [page.title]);

  return (
    <div className="legal-page toolproof-legal-document">
      <section className="legal-document-header">
        <div className="legal-shell">
          <p className="eyebrow">ToolProof</p>
          <h1>{page.title}</h1>
          <p>{page.introduction}</p>
          <p className="legal-updated">Effective October 15, 2026</p>
        </div>
      </section>

      <article className="legal-shell legal-copy">
        <aside className="legal-highlights" aria-label="Document highlights">
          {page.highlights.map((highlight) => <p key={highlight}>{highlight}</p>)}
        </aside>

        {page.sections.map((section) => (
          <section key={section.title}>
            <h2>{section.title}</h2>
            {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </section>
        ))}

        {kind === 'privacy' && (
          <section className="legal-third-parties">
            <h2>Third-party privacy information</h2>
            <p><a href="https://www.apple.com/legal/privacy/">Apple Privacy Policy</a></p>
            <p><a href="https://supabase.com/privacy">Supabase Privacy Policy</a></p>
            <p><a href="https://vercel.com/legal/privacy-policy">Vercel Privacy Policy</a></p>
            <p><a href="https://openai.com/policies/privacy-policy/">OpenAI Privacy Policy</a></p>
          </section>
        )}

        <address>
          <strong>MyLogix Studio LLC</strong><br />
          Email: <a href="mailto:mls@mylogicstudio.com">mls@mylogicstudio.com</a>
        </address>

        <nav className="legal-related-document" aria-label="Related legal document">
          <span>ToolProof</span>
          <Link to={`/toolproof/${otherSlug}`}>{otherTitle} →</Link>
        </nav>
      </article>
    </div>
  );
};

export default ToolProofLegalDocumentPage;
