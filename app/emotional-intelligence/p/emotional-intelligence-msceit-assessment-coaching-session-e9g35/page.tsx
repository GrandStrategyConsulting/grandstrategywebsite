import type { Metadata } from 'next';
import styles from './page.module.css';

const pagePath = '/emotional-intelligence/p/emotional-intelligence-msceit-assessment-coaching-session-e9g35';

const gallery = [
  ['/msceit2/certification-overview.png', 'Get certified as an MSCEIT 2 practitioner with Grand Strategy Consulting'],
  ['/msceit2/perceiving-emotions.png', 'MSCEIT 2 perceiving emotions domain'],
  ['/msceit2/connecting-emotions.png', 'MSCEIT 2 connecting emotions domain'],
  ['/msceit2/understanding-emotions.png', 'MSCEIT 2 understanding emotions domain'],
  ['/msceit2/managing-emotions.png', 'MSCEIT 2 managing emotions domain'],
  ['/msceit2/msceit2-framework.png', 'MSCEIT 2 emotional intelligence framework'],
  ['/msceit2/certification-benefits.png', 'MSCEIT 2 certification benefits'],
  ['/msceit2/program-details.png', 'MSCEIT 2 program details'],
];

const credentialAwards = [
  ['SHRM-CP / SHRM-SCP', '11 Professional Development Credits (PDCs)'],
  ['ATD CPTD / APTD', '11 Recertification Points'],
  ['APA', '11 Continuing Education Credits'],
  ['ICF', '7 Core Competency + 4 Resource Development hours'],
];

const programStructure = [
  ['01', 'Complete the MSCEIT® 2 assessment online', 'Approximately 60 minutes'],
  ['02', 'Complete 10 e-learning modules', 'Build your understanding of the model and reports, approximately 4 hours'],
  ['03', 'Receive individual report feedback', 'A 60-minute session with one of our consultants by Zoom or telephone'],
  ['04', 'Attend the live certification course', 'Two interactive online days, 4 hours each day'],
  ['05', 'Complete the post-course exam', 'Demonstrate your readiness to administer and interpret the assessment'],
];

const benefits = [
  'Gain a qualification in a renowned, scientifically validated emotional intelligence assessment.',
  'Develop insight into your own emotional intelligence through assessment and personal feedback.',
  'Receive resources and ongoing support that build confidence with the tool after the course.',
  'Become qualified in an ability-based measure suited to recruitment, development and research settings.',
  'Earn approved professional development and continuing education credits across SHRM, ATD, APA and ICF.',
];

export const metadata: Metadata = {
  title: 'MSCEIT2 Certification - 2026 Cohort | Grand Strategy Consulting',
  description: 'Become certified to administer and interpret the MSCEIT 2 ability-based emotional intelligence assessment with Grand Strategy Consulting.',
  alternates: { canonical: pagePath },
  openGraph: {
    title: 'MSCEIT2 Certification - 2026 Cohort',
    description: 'Live online MSCEIT 2 certification, assessment feedback, practical learning and approved credential credits.',
    url: pagePath,
    type: 'website',
    images: [{ url: '/msceit2/certification-overview.png', width: 1080, height: 1080, alt: 'Get certified as an MSCEIT 2 practitioner' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MSCEIT2 Certification - 2026 Cohort',
    description: 'Become qualified to administer and interpret the MSCEIT 2 assessment.',
    images: ['/msceit2/certification-overview.png'],
  },
};

function BrandMark() {
  return <span className={styles.brandMark} aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /></span>;
}

export default function MsceitCertificationPage() {
  const registrationEmail = 'mailto:hello@grandstrategy.llc?subject=MSCEIT2%20Certification%20-%202026%20Cohort';

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <a className={styles.brand} href="/" aria-label="Grand Strategy home"><BrandMark /><span>Grand Strategy</span></a>
        <nav aria-label="Course page navigation">
          <a href="#overview">Overview</a>
          <a href="#program">Program</a>
          <a href="#credentials">Credentials</a>
          <a href="/#emotional-intelligence">Emotional Intelligence</a>
        </nav>
        <a className={styles.headerCta} href={registrationEmail}>Request a place</a>
      </header>

      <section className={styles.hero} id="overview">
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Ability-based emotional intelligence certification</p>
          <h1>MSCEIT2 Certification <span>2026 Cohort</span></h1>
          <p className={styles.price}>$2,995.00 <span>USD</span></p>
          <p className={styles.intro}>Become qualified to administer, interpret and provide feedback on the MSCEIT® 2, a scientifically validated ability measure of emotional intelligence.</p>
          <div className={styles.facts}>
            <div><span>Format</span><strong>Online and classroom options</strong></div>
            <div><span>Live course</span><strong>2 days, 4 hours each day</strong></div>
            <div><span>Public sessions</span><strong>Last Tuesday and Thursday monthly</strong></div>
          </div>
          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href={registrationEmail}>Request registration <span aria-hidden="true">↗</span></a>
            <a className={styles.secondaryButton} href="/msceit2/MSCEIT2_Brochure_Grand-Strategy_EM_WEBSITE.pdf" target="_blank">Download the brochure <span aria-hidden="true">↓</span></a>
          </div>
          <p className={styles.scheduleNote}>There is intentionally a day between live training sessions, giving participants time to integrate and practice the learning.</p>
        </div>

        <div className={styles.gallery} aria-label="MSCEIT 2 certification gallery">
          <figure className={styles.mainImage}><img src={gallery[0][0]} alt={gallery[0][1]} /></figure>
          <div className={styles.thumbnails}>
            {gallery.slice(1).map(([src, alt]) => <figure key={src}><img src={src} alt={alt} loading="lazy" /></figure>)}
          </div>
        </div>
      </section>

      <section className={styles.statement}>
        <p>Emotional intelligence is not a self-rating.</p>
        <h2>Measure the abilities that shape how people read situations, use emotion in thinking and respond under pressure.</h2>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.sectionIntro}>
          <p className={styles.sectionLabel}>Become certified</p>
          <h2>A rigorous pathway to confident MSCEIT® 2 practice.</h2>
        </div>
        <div className={styles.prose}>
          <p><em>MSCEIT® 2 is an ability measure of emotional intelligence.</em></p>
          <p>It is an objective measure, which matters because many people overestimate their emotional intelligence. Grand Strategy Consulting certifies MSCEIT practitioners in live online and classroom settings.</p>
          <p><strong>Complete our certification training and become qualified to use and interpret MSCEIT® 2 reports and provide effective feedback to clients and colleagues.</strong></p>
          <p>The assessment uses 12 interactive question types to measure emotional intelligence ability in four domains: perceiving, connecting, understanding and managing emotions.</p>
          <aside>Private courses can be scheduled for groups of four or more participants. We offer both company-based and public certification sessions.</aside>
        </div>
      </section>

      <section className={styles.lightSection} id="program">
        <div className={styles.sectionIntro}>
          <p className={styles.sectionLabel}>Program structure</p>
          <h2>Independent learning, personal insight and live practice.</h2>
          <p>Public certification courses combine flexible preparation with interactive group sessions.</p>
        </div>
        <div className={styles.programList}>
          {programStructure.map(([number, title, detail]) => (
            <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{detail}</p></div></article>
          ))}
        </div>
      </section>

      <section className={styles.benefitsSection}>
        <div className={styles.sectionIntro}>
          <p className={styles.sectionLabel}>Certification benefits</p>
          <h2>Build a credible, practical capability you can use with others.</h2>
        </div>
        <ul className={styles.benefits}>
          {benefits.map((benefit, index) => <li key={benefit}><span>{String(index + 1).padStart(2, '0')}</span><p>{benefit}</p></li>)}
        </ul>
      </section>

      <section className={styles.credentialsSection} id="credentials">
        <div className={styles.sectionIntro}>
          <p className={styles.sectionLabel}>Credential awards</p>
          <h2>Approved professional development and continuing education credits.</h2>
        </div>
        <div className={styles.credentialTable}>
          <table>
            <thead><tr><th>Credential</th><th>Credits awarded</th><th>Status</th></tr></thead>
            <tbody>
              {credentialAwards.map(([credential, credits]) => (
                <tr key={credential}>
                  <td data-label="Credential"><strong>{credential}</strong></td>
                  <td data-label="Credits awarded">{credits}</td>
                  <td data-label="Status"><span>Approved</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className={styles.receiveSection}>
        <div>
          <p className={styles.sectionLabel}>What you will receive</p>
          <h2>Everything needed to begin practicing with confidence.</h2>
        </div>
        <ul>
          <li>Course workbook and handouts</li>
          <li>Individual MSCEIT® 2 report and feedback</li>
          <li>Certification slides and sample reports</li>
          <li>Post-course resources and ongoing support</li>
          <li>An MHS testing portal account after successful certification</li>
        </ul>
      </section>

      <section className={styles.groupsSection}>
        <div className={styles.groupCard}>
          <p className={styles.sectionLabel}>Training for groups</p>
          <h2>Bring MSCEIT® 2 certification into your organization.</h2>
          <p>We deliver tailored in-house certification courses online or at your organization&apos;s site, scheduled around your team&apos;s needs.</p>
          <a className={styles.secondaryButton} href={registrationEmail}>Discuss a group course <span aria-hidden="true">↗</span></a>
        </div>
        <div className={styles.examCard}>
          <h3>After successful completion</h3>
          <p>You will be certified to administer and interpret the MSCEIT® 2. Qualified practitioners receive access to the MHS testing portal and pay for reports as they are generated.</p>
        </div>
      </section>

      <section className={styles.finalCta}>
        <p className={styles.eyebrow}>2026 cohort</p>
        <h2>Become a qualified MSCEIT® 2 practitioner.</h2>
        <p>Request a place in an upcoming public session or ask us about a private cohort for your organization.</p>
        <div>
          <a className={styles.primaryButton} href={registrationEmail}>Request registration <span aria-hidden="true">↗</span></a>
          <a className={styles.secondaryButton} href="https://calendar.app.google/p8DynbYQdBA4Kxs56" target="_blank" rel="noreferrer">Book a discovery call</a>
        </div>
      </section>

      <footer className={styles.footer}>
        <a className={styles.brand} href="/"><BrandMark /><span>Grand Strategy</span></a>
        <p>Human-centered transformation for the AI era.</p>
        <div><a href="/">Home</a><a href="/#emotional-intelligence">Emotional Intelligence</a><a href="mailto:hello@grandstrategy.llc">hello@grandstrategy.llc</a></div>
        <p className={styles.copyright}>© {new Date().getFullYear()} Grand Strategy Consulting LLC</p>
      </footer>
    </main>
  );
}
