import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

const documentUrl = '/grand-strategy-consulting-federal-capability-statement.pdf';

const navItems = [
  ['AI Readiness', '/#readiness'],
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
  return (
    <main className={styles.statementPage}>
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Grand Strategy home"><Brand /><span>Grand Strategy</span></Link>
        <nav aria-label="Primary navigation">
          {navItems.map(([label, href]) => <Link className={href === '/capabilitystatement' ? styles.activeNav : undefined} href={href} key={href}>{label}</Link>)}
        </nav>
        <Link className="nav-cta" href="/#contact">Assess our readiness</Link>
        <details className="mobile-menu">
          <summary aria-label="Open navigation"><span /><span /><span /></summary>
          <div>{navItems.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}<Link href="/#contact">Assess our readiness</Link></div>
        </details>
      </header>

      <section className={styles.hero} aria-labelledby="capability-statement-title">
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Federal contracting</p>
          <h1 id="capability-statement-title">Federal Capability Statement</h1>
          <p>Review Grand Strategy Consulting&apos;s core capabilities, relevant delivery experience, key personnel and federal company data in one concise document.</p>
          <div className={styles.actions}>
            <a className={styles.primaryAction} href={documentUrl} download>Download capability statement <span aria-hidden="true">↓</span></a>
            <a className={styles.secondaryAction} href={documentUrl} target="_blank" rel="noreferrer">View PDF in browser <span aria-hidden="true">↗</span></a>
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
          <p>The page URL stays the same for your QR code, while the downloadable PDF can be updated when your capability statement changes.</p>
        </div>
        <figure className={styles.preview}>
          <a href={documentUrl} target="_blank" rel="noreferrer" aria-label="Open the Grand Strategy Consulting Federal Capability Statement PDF">
            <Image src="/grand-strategy-consulting-federal-capability-statement-preview.png" width={1275} height={1650} alt="Preview of the Grand Strategy Consulting Federal Capability Statement" />
          </a>
          <figcaption>Select the preview to open the full PDF.</figcaption>
        </figure>
        <div className={styles.mobileDownload}>
          <p>PDF previews may not display on every mobile device.</p>
          <a href={documentUrl} download>Download the PDF</a>
        </div>
      </section>

      <section className={styles.contactBand}>
        <div>
          <p className={styles.sectionLabel}>Start a conversation</p>
          <h2>Need a capability partner for AI adoption and workforce transformation?</h2>
        </div>
        <Link href="/#contact">Contact Grand Strategy <span aria-hidden="true">↗</span></Link>
      </section>

      <footer>
        <Link className="brand" href="/"><Brand /><span>Grand Strategy</span></Link>
        <p>Human-centered transformation for the AI era.</p>
        <div><Link href="/#readiness">AI readiness</Link><Link href="/#skills">AI skills</Link><Link href="/#about">About</Link><Link href="/capabilitystatement">Capability statement</Link></div>
        <p className="copyright">© {new Date().getFullYear()} Grand Strategy Consulting LLC</p>
      </footer>
    </main>
  );
}
