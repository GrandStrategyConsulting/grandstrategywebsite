import type { Metadata } from 'next';
import Image from 'next/image';
import styles from './page.module.css';

const documentUrl = '/grand-strategy-consulting-federal-capability-statement.pdf';

const navItems = [
  ['AI Readiness', '/ai-readiness'],
  ['AI Skills Workshops', '/#skills'],
  ['AI Learning Circles', '/#circles'],
  ['Emotional Intelligence', '/#emotional-intelligence'],
  ['Change & Transformation', '/#transformation'],
  ['Results', '/#results'],
  ['About', '/#about'],
  ['Capability Statement', '/capabilitystatement'],
];

export const metadata: Metadata = {
  title: 'Federal Capability Statement | Grand Strategy Consulting',
  description: 'View or download the Grand Strategy Consulting LLC Federal Capability Statement.',
};

function Brand() {
  return <span className="brand-mark" aria-hidden="true"><Image src="/grand-strategy-mark-white.png" width={48} height={48} alt="" /></span>;
}

export default function CapabilityStatementPage() {
  const navigationLinks = navItems.map(([label, href]) => {
    const isCurrentPage = href === '/capabilitystatement';

    return (
      <a
        key={href}
        href={href}
        className={isCurrentPage ? styles.activeNav : undefined}
        aria-current={isCurrentPage ? 'page' : undefined}
      >
        {label}
      </a>
    );
  });

  return (
    <main className={styles.statementPage}>
      <header className="site-header">
        <a className="brand" href="/" aria-label="Grand Strategy home"><Brand /><span>Grand Strategy</span></a>
        <nav aria-label="Primary navigation">{navigationLinks}</nav>
        <a className="nav-cta" href="/#contact">Assess our readiness</a>
        <details className="mobile-menu">
          <summary aria-label="Open navigation"><span /><span /><span /></summary>
          <div>{navigationLinks}<a href="/#contact">Assess our readiness</a></div>
        </details>
      </header>

      <section className={styles.hero} aria-labelledby="capability-statement-title">
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Federal contracting</p>
          <h1 id="capability-statement-title">Federal Capability Statement</h1>
          <p>Review Grand Strategy Consulting&apos;s core capabilities, relevant delivery experience, key personnel and federal company data in one concise document.</p>
          <div className={styles.actions}>
            <a className={styles.primaryAction} href={documentUrl} download>Download capability statement <span aria-hidden="true">↓</span></a>
            <a className={styles.secondaryAction} href="#document-preview-title">View document below <span aria-hidden="true">↓</span></a>
          </div>
          <p className={styles.fileNote}>PDF · 1 page · Last updated November 2026</p>
        </div>
        <div className={styles.heroMark} aria-hidden="true">
          <Image src="/grand-strategy-mark-white.png" width={350} height={350} alt="" />
        </div>
      </section>

      <section className={styles.previewSection} aria-labelledby="document-preview-title">
        <div className={styles.previewIntro}>
          <div>
            <p className={styles.sectionLabel}>Document preview</p>
            <h2 id="document-preview-title">Read it here or save a copy.</h2>
          </div>
        </div>
        <figure className={styles.preview}>
          <Image src="/grand-strategy-consulting-federal-capability-statement-preview.png" width={1275} height={1650} alt="Preview of the Grand Strategy Consulting Federal Capability Statement" />
          <figcaption>Full capability statement preview.</figcaption>
        </figure>
        <div className={styles.mobileDownload}>
          <p>To save a copy to your device:</p>
          <a href={documentUrl} download>Download the PDF</a>
        </div>
      </section>

      <section className={styles.contactBand}>
        <div>
          <p className={styles.sectionLabel}>Start a conversation</p>
          <h2>Need a capability partner for AI adoption and workforce transformation?</h2>
        </div>
        <a href="mailto:hello@grandstrategy.llc">Contact Grand Strategy <span aria-hidden="true">↗</span></a>
      </section>

      <footer>
        <a className="brand" href="/"><Brand /><span>Grand Strategy</span></a>
        <p>Human-centered transformation for the AI era.</p>
        <div><a href="/ai-readiness">AI readiness</a><a href="/#skills">AI skills</a><a href="/#about">About</a><a href="/capabilitystatement" aria-current="page">Capability statement</a></div>
        <p className="copyright">© {new Date().getFullYear()} Grand Strategy Consulting LLC</p>
      </footer>
    </main>
  );
}
