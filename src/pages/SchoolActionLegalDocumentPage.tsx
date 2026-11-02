import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  legalLocale,
  privacyDocuments,
  supportEmail,
  termsDocuments,
  type LegalLocale,
} from './schoolactionLegalContent';

export type SchoolActionLegalKind = 'privacy' | 'terms';

const languageNames: Record<LegalLocale, string> = {
  en: 'English',
  zh: '简体中文',
  es: 'Español',
};

const pathFor = (locale: LegalLocale, kind: SchoolActionLegalKind) =>
  '/schoolaction/' + locale + '/' + (kind === 'privacy' ? 'privacy-policy' : 'terms-of-service');

const SchoolActionLegalDocumentPage: React.FC<{ kind: SchoolActionLegalKind }> = ({ kind }) => {
  const params = useParams<{ locale?: string }>();
  const locale = legalLocale(params.locale);
  const page = kind === 'privacy' ? privacyDocuments[locale] : termsDocuments[locale];
  const otherKind: SchoolActionLegalKind = kind === 'privacy' ? 'terms' : 'privacy';
  const otherPage = otherKind === 'privacy' ? privacyDocuments[locale] : termsDocuments[locale];

  useEffect(() => {
    document.title = page.title + ' | MyLogix Studio';
    document.documentElement.lang = locale === 'zh' ? 'zh-Hans' : locale;
  }, [locale, page.title]);

  return (
    <div className="legal-page schoolaction-legal-document">
      <section className="legal-document-header">
        <div className="legal-shell">
          <p className="eyebrow">SchoolAction · MyLogix Studio LLC</p>
          <h1>{page.title}</h1>
          <p>{page.summary}</p>
          <p className="legal-updated">{page.updated}</p>
        </div>
      </section>

      <nav className="legal-language-bar" aria-label="Document language">
        <div className="legal-shell">
          {(Object.keys(languageNames) as LegalLocale[]).map((language) => (
            <Link
              key={language}
              className={language === locale ? 'active' : undefined}
              aria-current={language === locale ? 'page' : undefined}
              to={pathFor(language, kind)}
            >
              {languageNames[language]}
            </Link>
          ))}
        </div>
      </nav>

      <article className="legal-shell legal-copy">
        <aside className="legal-callout"><p>{page.notice}</p></aside>
        {page.sections.map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            {section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
          </section>
        ))}

        {kind === 'privacy' && (
          <section className="legal-third-parties">
            <h2>{locale === 'zh' ? '第三方隐私信息' : locale === 'es' ? 'Información de privacidad de terceros' : 'Third-party privacy information'}</h2>
            <p><a href="https://www.apple.com/legal/privacy/">Apple Privacy Policy</a></p>
            <p><a href="https://supabase.com/privacy">Supabase Privacy Policy</a></p>
            <p><a href="https://vercel.com/legal/privacy-policy">Vercel Privacy Policy</a></p>
            <p><a href="https://openai.com/policies/privacy-policy/">OpenAI Privacy Policy</a></p>
          </section>
        )}

        <address>
          <strong>MyLogix Studio LLC</strong><br />
          Email: <a href={'mailto:' + supportEmail}>{supportEmail}</a>
        </address>

        <nav className="legal-related-document" aria-label="Related legal document">
          <span>SchoolAction</span>
          <Link to={pathFor(locale, otherKind)}>{otherPage.title} →</Link>
        </nav>
      </article>
    </div>
  );
};

export default SchoolActionLegalDocumentPage;
