import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import en from '../locales/colorcrafter/en.json';
import zhHans from '../locales/colorcrafter/zh-hans.json';
import zhHant from '../locales/colorcrafter/zh-hant.json';
import de from '../locales/colorcrafter/de.json';
import es from '../locales/colorcrafter/es.json';
import fr from '../locales/colorcrafter/fr.json';

export type ColorCrafterLegalKind = 'privacy' | 'terms';
type LocaleCode = 'en' | 'zh-hans' | 'zh-hant' | 'de' | 'es' | 'fr';
type TranslationTable = Record<string, string>;
type LegalSection = { title: string; paragraphs: string[] };

const translations: Record<LocaleCode, TranslationTable> = {
  en,
  'zh-hans': zhHans,
  'zh-hant': zhHant,
  de,
  es,
  fr,
};

const languages: Array<{ code: LocaleCode; label: string; htmlLang: string }> = [
  { code: 'en', label: 'English', htmlLang: 'en' },
  { code: 'zh-hans', label: '简体中文', htmlLang: 'zh-Hans' },
  { code: 'zh-hant', label: '繁體中文', htmlLang: 'zh-Hant' },
  { code: 'de', label: 'Deutsch', htmlLang: 'de' },
  { code: 'es', label: 'Español', htmlLang: 'es' },
  { code: 'fr', label: 'Français', htmlLang: 'fr' },
];

const privacySections: LegalSection[] = [
  {
    title: '1. Information we process',
    paragraphs: [
      'Photos you choose are sent to our image-processing service together with the number of colors, detail level, and resolution you select. We do not access other photos in your library.',
      'Our service receives limited technical information needed to fulfill and protect a request, such as IP address, iOS version, app version, request time, and error information.',
      'Apple provides subscription products and entitlement status through StoreKit. We do not receive or store your full payment-card information.',
      'Language, creation limits, subscription status, privacy choices, and app preferences are stored locally on your device. If you email support, we receive the email address and information you voluntarily include.',
      'If you enable advertising measurement, the Meta SDK may process limited device and app information and the app events described below. It does not receive your selected photos or generated artwork.',
    ],
  },
  {
    title: '2. How photos are handled',
    paragraphs: [
      'Your selected photo is used only to generate the paint-by-numbers canvas, color palette, and interactive preview you request.',
      'Temporary image files are deleted when processing finishes. To support interactive coloring, processed canvas data, region labels, palette information, and a random session identifier may remain in short-lived server memory or cache. The App requests deletion when you start a new creation or it moves to the background; a server-side expiration removes the session within approximately five minutes if that request cannot be completed.',
      'We do not use your photos to train advertising systems, build advertising profiles, recognize faces, or send photo contents, filenames, thumbnails, or artwork previews to advertising providers.',
    ],
  },
  {
    title: '3. How we use information',
    paragraphs: [
      'We use information to create and return your artwork, enable interactive coloring, provide subscriptions and free-use limits, remember your preferences, troubleshoot failures, secure the service, measure advertising performance when you consent, and comply with legal obligations.',
      'We do not sell personal information. We do not use your information for cross-app behavioral advertising.',
    ],
  },
  {
    title: '4. Advertising measurement and tracking',
    paragraphs: [
      'ColorCrafter includes Meta App Events for advertising attribution and campaign measurement. It is disabled until you choose to enable measurement in the App. We send only a limited set of events: app activation, successful artwork creation, saving artwork, and subscription activation. We do not send photos, filenames, palettes, canvas contents, or artwork previews to Meta.',
      'If you enable measurement, ColorCrafter asks for Apple’s App Tracking Transparency permission. The advertising identifier (IDFA) is available to Meta only if you grant that system permission. If you decline ATT, the SDK is configured for limited data use without IDFA. You can decline measurement entirely and still use the App.',
      'Meta may process app and device information, event timestamps, IP or network information, and SDK identifiers to provide attribution and analytics under Meta’s privacy terms. Depending on your ATT choice, Meta may use information to measure activity across apps and websites owned by other companies.',
      'ColorCrafter also uses Apple technologies such as AdAttributionKit and SKAdNetwork for privacy-preserving attribution. Apple may send delayed or aggregated postbacks to an eligible advertising network. Attribution events never contain your photos.',
      'You can stop future Meta event logging in Settings > Privacy Choices and manage ATT permission in iOS Settings. Changing these choices does not automatically delete data Meta previously received; requests concerning that data are governed by Meta’s privacy policy.',
    ],
  },
  {
    title: '5. Service providers and disclosures',
    paragraphs: [
      'Apple provides App Store distribution, in-app purchases, StoreKit subscriptions, photo-library permissions, and privacy-preserving attribution services.',
      'Meta provides consent-controlled advertising attribution and app-event measurement. Meta processes information under its own privacy terms.',
      'Our image-processing service is hosted using Heroku, a Salesforce service. These providers process information on our behalf under their own privacy and security terms.',
      'We may disclose information when required by law, to protect users or the service, or as part of a business transfer. We do not disclose uploaded photo content to data brokers or advertising networks.',
    ],
  },
  {
    title: '6. Retention and security',
    paragraphs: [
      'Original uploaded photos are not kept as a permanent library. Temporary processing files are removed when the request completes. Interactive session data is deleted when the App starts a new creation or moves to the background, with an approximately five-minute server expiration as a fallback.',
      'Local preferences remain until you change them, reset the app, or delete the app. Apple retains purchase records under Apple’s policies. Support emails are retained only as reasonably necessary to respond and maintain business records.',
      'We use reasonable safeguards, including encrypted network transport for production services and restricted service access. No system can guarantee absolute security.',
    ],
  },
  {
    title: '7. Your choices and rights',
    paragraphs: [
      'You choose which photo to submit. You can change Photos access in iOS Settings, manage or cancel subscriptions in your Apple ID settings, and remove locally stored preferences by deleting the App.',
      'You may contact us to ask about access, correction, deletion, or other privacy rights available where you live. Because ColorCrafter does not require an account and server image sessions are short-lived, we may have no persistent record that can be linked back to you.',
      'California, EEA, UK, and other users may have additional rights. We will not discriminate against you for exercising a privacy right.',
    ],
  },
  {
    title: '8. Children and the 4+ age rating',
    paragraphs: [
      'ColorCrafter is a general-audience creative tool rated 4+ on the App Store. The 4+ label describes the App’s content rating; it does not mean that the online image-processing service is directed to children under 13.',
      'A child under 13 should use the online image-processing features only through a parent or legal guardian, who must choose and submit the photo on the child’s behalf and approve any purchase. We do not knowingly ask children for a name, email address, precise location, advertising identifier, or account profile, and we do not serve personalized advertising.',
      'A photo can itself contain personal information, including a child’s image. A parent or guardian who believes a child submitted information without appropriate involvement may contact us so we can investigate and delete any information that remains available.',
    ],
  },
  {
    title: '9. International processing',
    paragraphs: [
      'Our company and service providers may process information in the United States and other countries. Privacy protections may differ from those in your country; where required, we use appropriate safeguards for international transfers.',
    ],
  },
  {
    title: '10. Changes and contact',
    paragraphs: [
      'We may update this Policy when the App, service providers, or legal requirements change. We will post the revised date in the App and provide additional notice when required.',
      'Privacy questions or requests: MyLogix Studio LLC, mls@mylogicstudio.com',
    ],
  },
];

const termsSections: LegalSection[] = [
  {
    title: '1. Agreement and eligibility',
    paragraphs: [
      'By downloading or using ColorCrafter, you agree to these Terms. If you do not agree, do not use the App.',
      'ColorCrafter is rated 4+ on the App Store; this is a content rating and does not mean that its online service is directed to children under 13. If you are under 13, a parent or legal guardian must select and submit photos on your behalf. If you are otherwise under the age at which you may enter a binding agreement where you live, your parent or legal guardian must review and accept these Terms for you and supervise your use of the App.',
    ],
  },
  {
    title: '2. License and acceptable use',
    paragraphs: [
      'MyLogix Studio LLC grants you a limited, personal, non-exclusive, non-transferable, and revocable license to use the App in accordance with these Terms and Apple’s applicable usage rules.',
      'You may not interfere with the service, bypass usage or subscription limits, probe its security, automate abusive requests, reverse engineer the App except where applicable law permits, or use the App for unlawful or harmful purposes.',
    ],
  },
  {
    title: '3. Your photos and generated artwork',
    paragraphs: [
      'You retain ownership of photos you submit. You represent that you own them or have permission to use them and that submitting them does not violate another person’s copyright, privacy, publicity, or other rights.',
      'You grant us a limited, non-exclusive license to transmit, reproduce, resize, analyze, and transform a selected photo only as needed to provide the requested canvas, palette, and interactive coloring features. This processing license ends when the short-lived processing session expires, except for temporary technical copies required to complete the request.',
      'You are responsible for reviewing generated artwork before using or sharing it. Do not submit unlawful, exploitative, abusive, sexually explicit, privacy-invasive, or otherwise harmful content, particularly content that endangers a child.',
    ],
  },
  {
    title: '4. Subscriptions and purchases',
    paragraphs: [
      'Some features require an auto-renewing subscription. Prices and billing periods are shown in the App before purchase. Payment is charged to your Apple ID account after confirmation.',
      'Subscriptions renew automatically unless canceled at least 24 hours before the end of the current billing period. You can manage or cancel a subscription in your Apple ID subscription settings. Apple handles billing information, refunds, and transaction records under its policies.',
      'Free uses, trials, introductory offers, features, and prices may vary by eligibility, region, or release. Any unused portion of a promotional period may be lost when a paid subscription begins where permitted by Apple’s rules.',
    ],
  },
  {
    title: '5. Privacy',
    paragraphs: [
      'Our Privacy Policy explains how selected photos, short-lived processing sessions, device and app information, local preferences, support communications, and StoreKit subscription status are handled.',
      'ColorCrafter uses Apple attribution services and, only when you enable advertising measurement, Meta App Events. We send limited app events for attribution and analytics but never send your selected photos or generated artwork to Meta.',
      'If you enable Meta measurement, the App may request Apple’s App Tracking Transparency permission. You may decline or later disable future Meta event logging without losing access to the App, subject to the Privacy Policy and Apple’s settings.',
    ],
  },
  {
    title: '6. Availability and changes',
    paragraphs: [
      'Image generation requires network access and depends on Apple and cloud service providers. Processing time and output quality vary with photo content, connection quality, selected settings, device, and service capacity.',
      'We may update, limit, suspend, or discontinue features to maintain security, comply with law, prevent abuse, or improve the service. We do not guarantee that every photo will produce a usable result or that the service will always be uninterrupted or error-free.',
    ],
  },
  {
    title: '7. Intellectual property',
    paragraphs: [
      'The App, brand, interface, software, and materials supplied by MyLogix Studio LLC are protected by intellectual-property laws. These Terms do not transfer ownership of those materials to you.',
      'Unless we expressly agree otherwise in writing, generated paint-by-numbers templates are licensed for personal, non-commercial use. Rights in the source photo and third-party subjects or works remain with their respective owners.',
    ],
  },
  {
    title: '8. Disclaimer',
    paragraphs: [
      'TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE APP AND SERVICES ARE PROVIDED “AS IS” AND “AS AVAILABLE,” WITHOUT EXPRESS OR IMPLIED WARRANTIES, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.',
      'Nothing in these Terms excludes warranties or consumer rights that cannot lawfully be excluded where you live.',
    ],
  },
  {
    title: '9. Limitation of liability',
    paragraphs: [
      'TO THE MAXIMUM EXTENT PERMITTED BY LAW, MYLOGIX STUDIO LLC WILL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR FOR LOSS OF DATA, PROFITS, GOODWILL, OR USE ARISING FROM THE APP.',
      'Where liability cannot be excluded, it is limited only to the extent permitted by applicable law.',
    ],
  },
  {
    title: '10. Termination',
    paragraphs: [
      'You may stop using the App at any time. We may suspend access for a material violation of these Terms, unlawful use, security risk, or abuse of the service. Provisions that by their nature should survive termination will remain in effect.',
    ],
  },
  {
    title: '11. Governing law and changes',
    paragraphs: [
      'These Terms are governed by the laws of the State of California and applicable United States law, without regard to conflict-of-law principles, except where mandatory consumer law in your location applies.',
      'We may revise these Terms when the App or law changes. We will post the updated effective date and provide additional notice when required. Continued use after the effective date means you accept the revised Terms. If any provision is unenforceable, the remaining provisions continue in effect.',
    ],
  },
  {
    title: '12. Contact',
    paragraphs: ['Questions about these Terms: MyLogix Studio LLC, mls@mylogicstudio.com'],
  },
];

const pageContent = {
  privacy: {
    title: 'Privacy Policy',
    updated: 'Effective September 12, 2026',
    introduction: 'This Policy explains how MyLogix Studio LLC handles information when you use the ColorCrafter mobile app.',
    highlights: [
      'App Store age rating: 4+',
      'Photos are processed for your requested artwork, not advertising',
      'Consent-controlled Meta App Events and Apple attribution',
    ],
    sections: privacySections,
  },
  terms: {
    title: 'Terms of Service',
    updated: 'Effective September 12, 2026',
    introduction: 'These Terms govern your use of the ColorCrafter mobile app and its image-processing and subscription features.',
    highlights: [
      'Rated 4+; minors use ColorCrafter with a parent or guardian',
      'You retain ownership of the photos you submit',
      'Apple manages subscription billing and refunds',
    ],
    sections: termsSections,
  },
};

const routeFor = (locale: LocaleCode, kind: ColorCrafterLegalKind) => {
  const slug = kind === 'privacy' ? 'privacy-policy' : 'terms-of-service';
  return locale === 'en' ? `/colorcrafter/${slug}` : `/colorcrafter/${locale}/${slug}`;
};

const ColorCrafterLegalDocumentPage: React.FC<{ kind: ColorCrafterLegalKind }> = ({ kind }) => {
  const { locale: localeParam } = useParams();
  const locale = languages.some(({ code }) => code === localeParam)
    ? localeParam as LocaleCode
    : 'en';
  const language = languages.find(({ code }) => code === locale)!;
  const table = translations[locale];
  const translate = (key: string) => table[key] || translations.en[key] || key;
  const content = pageContent[kind];
  const otherKind: ColorCrafterLegalKind = kind === 'privacy' ? 'terms' : 'privacy';
  const otherTitle = otherKind === 'privacy' ? 'Privacy Policy' : 'Terms of Service';
  const translatedTitle = translate(content.title);

  useEffect(() => {
    document.title = `${translatedTitle} | ColorCrafter`;
    document.documentElement.lang = language.htmlLang;
    return () => { document.documentElement.lang = 'en'; };
  }, [language.htmlLang, translatedTitle]);

  return (
    <div className="legal-page colorcrafter-legal-document">
      <section className="legal-document-header">
        <div className="legal-shell">
          <p className="eyebrow">ColorCrafter</p>
          <h1>{translatedTitle}</h1>
          <p>{translate(content.introduction)}</p>
          <p className="legal-updated">{translate(content.updated)}</p>
        </div>
      </section>

      <div className="legal-language-bar" aria-label="Language selection">
        <div className="legal-shell">
          {languages.map(({ code, label }) => (
            <Link
              key={code}
              className={code === locale ? 'active' : undefined}
              aria-current={code === locale ? 'page' : undefined}
              lang={languages.find((item) => item.code === code)?.htmlLang}
              to={routeFor(code, kind)}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>

      <article className="legal-shell legal-copy">
        <aside className="legal-highlights" aria-label="Policy highlights">
          {content.highlights.map((highlight) => <p key={highlight}>{translate(highlight)}</p>)}
        </aside>

        {content.sections.map((section) => (
          <section key={section.title}>
            <h2>{translate(section.title)}</h2>
            {section.paragraphs.map((paragraph) => <p key={paragraph}>{translate(paragraph)}</p>)}
          </section>
        ))}

        {kind === 'privacy' && (
          <section className="legal-third-parties">
            <h2>{translate('Third-party privacy information')}</h2>
            <p><a href="https://www.apple.com/legal/privacy/">{translate('Apple Privacy Policy')}</a></p>
            <p><a href="https://www.facebook.com/privacy/policy/">{translate('Meta Privacy Policy')}</a></p>
            <p><a href="https://www.salesforce.com/company/privacy/">{translate('Salesforce Privacy Statement (Heroku)')}</a></p>
          </section>
        )}

        <nav className="legal-related-document" aria-label="Related legal document">
          <span>ColorCrafter</span>
          <Link to={routeFor(locale, otherKind)}>{translate(otherTitle)} →</Link>
        </nav>
      </article>
    </div>
  );
};

export default ColorCrafterLegalDocumentPage;
