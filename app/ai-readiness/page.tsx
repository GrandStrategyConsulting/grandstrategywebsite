import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '90-Day AI Fluency Pilot | Grand Strategy Consulting',
  description: 'A $9,997, 90-day AI fluency pilot for global teams, built on the method used in Fortune 100 Copilot training.',
  alternates: { canonical: 'https://www.grandstrategy.llc/ai-readiness' },
  openGraph: {
    title: 'Your people have AI licenses. Do they have AI judgment?',
    description: 'Move from AI access to workforce judgment with a $9,997 pilot and a pathway to business-unit and enterprise adoption.',
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
      title="90-Day AI Fluency Pilot | Grand Strategy Consulting"
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
