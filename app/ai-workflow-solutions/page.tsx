import type { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'AI Workflow Solutions | Grand Strategy Consulting',
  description: 'Human-led AI workflow redesign that improves capacity, clarity and performance without losing judgment, trust or care.',
};

const workflowSteps = [
  ['01', 'Discovery call', 'Clarify where work is getting stuck, what people are carrying manually and where AI could create useful capacity.'],
  ['02', 'Emotional Maths® mapping', 'Identify the work that requires human judgment, context, trust, care, creativity and strategic decision-making.'],
  ['03', 'Build and configure', 'Design practical AI-supported workflows for repetitive, draining or inconsistent work while keeping people in control.'],
  ['04', 'Walkthrough and support', 'Embed the new ways of working with clear guidance, responsible-use practices and support for real adoption.'],
];

function Brand() { return <span className={styles.brandMark} aria-hidden="true"><img src="/grand-strategy-mark-white.png" alt="" /></span>; }

export default function AiWorkflowSolutionsPage() {
  return <main className={styles.page}>
    <header className={styles.header}>
      <a className={styles.brand} href="/" aria-label="Grand Strategy home"><Brand /><span>Grand Strategy</span></a>
      <a className={styles.headerCta} href="/#contact">Book a discovery call</a>
    </header>

    <section className={styles.hero}>
      <div><p className={styles.eyebrow}>AI workflow solutions</p><h1>AI is changing the way we work. <span>Doing more, faster is the wrong strategy.</span></h1></div>
      <p className={styles.heroLead}>We help organizations decide what AI should handle, what humans must continue to lead and how to build smarter systems that improve productivity and wellbeing.</p>
    </section>

    <section className={styles.intro}>
      <div><p className={styles.sectionLabel}>Human in the lead</p><h2>Build capacity without losing the human value inside your work.</h2></div>
      <div className={styles.prose}><p>We do not believe AI should replace the human value inside your organization. We believe it should give people more time, clarity and capacity for the work that requires judgment, trust, creativity, empathy and leadership.</p><p>That is where emotional intelligence comes in.</p></div>
    </section>

    <section className={styles.challenge}>
      <p className={styles.sectionLabel}>The real question</p><h2>Most businesses are using AI ineffectively.</h2>
      <p>Most AI advice tells people to automate more tasks, use more tools and move faster. The better question is:</p>
      <blockquote>Where does human judgment matter most, and where is it being wasted on work AI could safely support?</blockquote>
      <p>When businesses get that wrong, AI creates more noise. When they get it right, AI becomes a capacity builder: reducing unnecessary repetition, strengthening processes and protecting human attention.</p>
    </section>

    <section className={styles.approach}>
      <div className={styles.approachIntro}><p className={styles.sectionLabel}>Our approach</p><h2>Do the emotional maths before you build the AI system.</h2><p>Grand Strategy Consulting combines emotional intelligence, process improvement, business development and AI implementation to help organizations make better decisions about technology.</p></div>
      <div className={styles.focusGrid}><article><span>01</span><h3>Protect what people do best</h3><p>Judgment. Context. Trust. Care. Creativity. Emotional awareness. Strategic decision-making.</p></article><article><span>02</span><h3>Improve the work around it</h3><p>Identify work that is repetitive, draining, inconsistent or trapped inside someone’s head.</p></article><article><span>03</span><h3>Build only what helps</h3><p>Connect people, process, performance, EI and AI so the organization becomes more effective without becoming less human.</p></article></div>
    </section>

    <section className={styles.process}>
      <div className={styles.processHead}><p className={styles.sectionLabel}>How it works</p><h2>From a clearer problem to a practical workflow.</h2><a href="https://grandstrategy.squarespace.com/s/Grand_Strategy_Consulting-EI-AI-Workflow-Solutions-Brochure-2026.pdf" target="_blank" rel="noreferrer">Download the brochure <span aria-hidden="true">↗</span></a></div>
      <div className={styles.steps}>{workflowSteps.map(([number,title,text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>

    <section className={styles.cta}>
      <p className={styles.sectionLabel}>Book your discovery call</p><h2>30 minutes. No pressure. No generic AI pitch.</h2><p>You will leave with a clearer sense of where AI belongs in your work, where it does not and what kind of system could help you save time without losing the human value your business depends on.</p><div><a className={styles.primary} href="https://calendar.app.google/p8DynbYQdBA4Kxs56" target="_blank" rel="noreferrer">Book a discovery call <span aria-hidden="true">↗</span></a><a className={styles.secondary} href="/#contact">Send an enquiry</a></div>
    </section>
  </main>;
}
