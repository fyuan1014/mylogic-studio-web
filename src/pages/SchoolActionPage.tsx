import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const outcomes = [
  ['Clear actions', 'Required tasks stay separate from optional or unclear items.'],
  ['Dates that move', 'Add a confirmed event to Calendar or set a reminder from the action card.'],
  ['A reply you control', 'Edit the English draft, then open it in Mail or Gmail with the subject and message filled in.'],
];

const SchoolActionPage: React.FC = () => {
  useEffect(() => { document.title = 'SchoolAction | School notices made actionable'; }, []);

  return (
    <div className="schoolaction-page">
      <section className="schoolaction-hero" aria-labelledby="schoolaction-title">
        <div className="site-shell schoolaction-hero-grid">
          <div className="schoolaction-hero-copy">
            <p className="schoolaction-kicker">SchoolAction · iPhone family workspace</p>
            <h1 id="schoolaction-title">A school notice should not become a family puzzle.</h1>
            <p className="schoolaction-lede">Scan a notice and get the steps, dates, and questions that matter. Chinese and Spanish explanations sit beside the English source. When a reply helps, SchoolAction drafts one you can edit and open in Mail or Gmail.</p>
            <div className="button-row">
              <a className="button schoolaction-primary" href="mailto:mls@mylogicstudio.com?subject=SchoolAction%20review">Request review access</a>
              <a className="text-link" href="#schoolaction-flow">See what families receive</a>
            </div>
            <p className="schoolaction-scope">SchoolAction helps families organize a notice. It does not replace the original notice, school staff, or professional advice.</p>
          </div>

          <div className="schoolaction-notice-demo" aria-label="Representative SchoolAction result">
            <div className="schoolaction-demo-rail"><span>From notice</span><strong>Action needed</strong></div>
            <p className="schoolaction-demo-label">Field trip · November 18</p>
            <h2>Return the form and $12 by November 10.</h2>
            <div className="schoolaction-demo-actions">
              <div><span>✓</span><p><strong>Sign permission form</strong><small>Required · Parent</small></p></div>
              <div><span>✓</span><p><strong>Send $12 trip fee</strong><small>Required · Parent</small></p></div>
            </div>
            <blockquote>“Please return the signed permission slip to Ms. Rivera by Tuesday, November 10.”</blockquote>
            <div className="schoolaction-demo-reply"><span>Reply ready</span><strong>Review and open email →</strong></div>
          </div>
        </div>
      </section>

      <section className="schoolaction-proofbar" aria-label="SchoolAction product principles">
        <div className="site-shell"><span>Actions link to notice text</span><span>Chinese and Spanish support</span><span>You review before sending</span></div>
      </section>

      <section className="schoolaction-section" id="schoolaction-flow" aria-labelledby="schoolaction-flow-title">
        <div className="site-shell">
          <div className="schoolaction-section-heading">
            <p className="schoolaction-kicker">One notice becomes a usable plan</p>
            <h2 id="schoolaction-flow-title">Translation is only the first step.</h2>
            <p>Families need to know what the school expects, what is due, and what still needs a question.</p>
          </div>
          <div className="schoolaction-outcome-grid">
            {outcomes.map(([title, description], index) => (
              <article key={title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="schoolaction-section schoolaction-reply-section" aria-labelledby="schoolaction-reply-title">
        <div className="site-shell schoolaction-reply-grid">
          <div>
            <p className="schoolaction-kicker">Draft, review, hand off</p>
            <h2 id="schoolaction-reply-title">The parent stays in the sender’s seat.</h2>
            <p>SchoolAction writes a short English draft only when a response would help. It copies a recipient address only when the notice includes one. The parent can change every field before opening a draft in an email app.</p>
          </div>
          <div className="schoolaction-email-card">
            <span>To</span><p>mrivera@lincolnelementary.org</p>
            <span>Subject</span><p><strong>Question about the November 18 field trip</strong></p>
            <span>Message</span><p>Hello Ms. Rivera,<br /><br />Could you please confirm whether families who need help with the $12 fee should contact you or the school office?<br /><br />Thank you,</p>
            <div><span>Open Mail</span><span>Open Gmail</span></div>
          </div>
        </div>
      </section>

      <section className="schoolaction-section schoolaction-trust-section" aria-labelledby="schoolaction-trust-title">
        <div className="site-shell schoolaction-trust-grid">
          <div><p className="schoolaction-kicker">Designed for checking</p><h2 id="schoolaction-trust-title">Useful answers with the source still visible.</h2></div>
          <div className="schoolaction-trust-list">
            <article><h3>Evidence beside actions</h3><p>Each factual action includes a short quote from the notice and its location when available.</p></article>
            <article><h3>Uncertainty stays visible</h3><p>Missing dates, unclear requirements, and unanswered questions are shown instead of guessed.</p></article>
            <article><h3>Original notices are not retained</h3><p>The analysis service processes the notice to create the plan. The app states its limits and asks families to check the original before acting.</p></article>
          </div>
        </div>
      </section>

      <section className="schoolaction-review-section" aria-labelledby="schoolaction-review-title">
        <div className="site-shell schoolaction-review-card">
          <div><p className="schoolaction-kicker">Review and support</p><h2 id="schoolaction-review-title">Review the family flow before release.</h2><p>Reviewers can request a build and a short walkthrough from MyLogix Studio LLC.</p></div>
          <div className="schoolaction-review-links">
            <a className="button schoolaction-primary" href="mailto:mls@mylogicstudio.com?subject=SchoolAction%20review">mls@mylogicstudio.com</a>
            <Link to="/schoolaction/en/privacy-policy">Privacy Policy</Link>
            <Link to="/schoolaction/en/terms-of-service">Terms of Service</Link>
            <Link to="/schoolaction/legal">Legal overview</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SchoolActionPage;
