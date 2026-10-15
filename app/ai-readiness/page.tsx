import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Workforce Readiness Training | Grand Strategy Consulting',
  description: 'AI Access Is Not AI Readiness. Explore the $10,000 AI-Ready Workforce Accelerator: 50 books, a masterclass, two facilitated learning circles and an outcomes brief.',
  alternates: { canonical: 'https://www.grandstrategy.llc/ai-readiness' },
  openGraph: {
    title: 'AI Access Is Not AI Readiness | Grand Strategy Consulting',
    description: 'Turn AI access into workforce readiness with practical training, learning circles and the Stop Wasting Time With AI book.',
    url: 'https://www.grandstrategy.llc/ai-readiness',
    type: 'website',
  },
};

/**
 * Display the exact, approved standalone HTML, with its own embedded CSS,
 * typography, graphics and responsive breakpoints. Do not re-create the page
 * in JSX: doing so changed the approved visual design.
 *
 * The iframe uses the entire browser viewport, and its document scrolls
 * normally. The outer page does not add its own navigation or margins.
 */
export default function AIReadinessPage() {
  return (
    <iframe
      src="/ai-readiness-original.html"
      title="AI Access Is Not AI Readiness — Grand Strategy Consulting"
      style={{
        position: 'fixed',
        inset: 0,
        display: 'block',
        width: '100%',
        height: '100dvh',
        border: 0,
        background: '#fff',
        zIndex: 1000,
      }}
    />
  );
}
