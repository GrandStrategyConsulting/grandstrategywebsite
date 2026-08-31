'use client';

import { useState } from 'react';

const testimonials = [
  {
    name: 'Emily Garven',
    role: 'Performing Arts Teacher',
    image: 'https://images.squarespace-cdn.com/content/v1/65ae9e110998384606218e10/2661fe3b-03d1-4e6f-bbcd-eec65bb041bb/Screenshot+2025-05-21+222053.png?format=1000w',
    alt: 'Emily Garven smiling outdoors, wearing a pink top and navy jacket.',
    quote: "My session with Zena was a truly supportive experience. We reviewed my MSCEIT test results together in a way that felt insightful, collaborative and completely judgment-free. I walked away feeling seen, supported and inspired to continue developing my emotional awareness.",
  },
  {
    name: 'Hannah Shihdanian',
    role: 'Founder/Director, HDC LLC',
    image: 'https://images.squarespace-cdn.com/content/v1/65ae9e110998384606218e10/be70a60f-c38b-443a-9d2d-a5f395d8862a/Hannah_Shihdanian.jpg?format=1000w',
    alt: 'Hannah Shihdanian smiling, with long brown hair, wearing a black shirt and pearl earrings.',
    quote: 'I found it extremely enlightening and affirming to take the MSCEIT Assessment. My experience with Zena was incredibly positive. She was a great listener, understood me and had insightful feedback.',
  },
  {
    name: 'Felicia Rickards',
    role: 'Strategic Consulting Partner, CEO & Board Advisory',
    initials: 'FR',
    quote: 'The MSCEIT | Emotional Maths sessions have been extremely insightful for understanding my strengths and highlighting potential bias in my interpretations of others. The feedback has relevant application for both personal and professional interactions and has re-shaped my emotional intelligence awareness.',
  },
  {
    name: 'Lisa Anderson',
    role: 'Associate Director, Messums',
    initials: 'LA',
    quote: 'Through the innovative Emotional Maths approach, I was able to clarify my direction, fortify my foundations and confidently step into this next chapter of my work. I wholeheartedly recommend her to anyone seeking transformative strategic guidance.',
  },
  {
    name: 'Inclusive Stages Cohort Participant',
    role: 'Cohort member',
    initials: 'IS',
    quote: 'This was a super helpful experience. I feel validated that the self-reflection work I have done over the years has helped me become more self-aware and upped my emotional intelligence. This session helped me better understand how I can apply the skills I have developed for myself with others.',
  },
  {
    name: 'Johana Riquier',
    role: 'Founder, Gamerging Solutions',
    initials: 'JR',
    quote: 'I had a session on January 4th. On July 1st, I had overachieved my net new and annual target with the attainment of 126%, mainly using emotional intelligence.',
  },
  {
    name: 'Kira Troilo',
    role: 'CEO, Art & Soul Consulting',
    initials: 'KT',
    quote: 'The assessment and feedback session gave me language to distinguish the difference between my personality traits and my emotional intelligence skills. Zena’s insightful and thoughtful navigation of my feedback session was truly valuable in helping me process my results and articulate my discoveries.',
  },
  {
    name: 'Bill Crocker',
    role: 'L&D Manager, Fair Haven Community Healthcare Center',
    initials: 'BC',
    quote: 'Zena’s use of MSCEIT in her work gave our teams a shared language and a science-backed structure to understand and work with emotions more effectively. The assessment helped leaders and staff see emotional intelligence as a core workplace competency linked to communication, resilience and collaboration.',
  },
];

export default function TestimonialCarousel() {
  const [active, setActive] = useState(0);
  const testimonial = testimonials[active];
  const goTo = (index: number) => setActive((index + testimonials.length) % testimonials.length);

  return (
    <section className="testimonial-carousel" aria-labelledby="testimonial-title">
      <div className="testimonial-heading">
        <p className="testimonial-kicker">Cohort member experience</p>
        <h4 id="testimonial-title">Assessment insight that becomes practical leadership value.</h4>
        <p>Every cohort member receives an MSCEIT® 2 assessment and individual feedback session.</p>
      </div>
      <div className="testimonial-stage" aria-live="polite">
        <div className={`testimonial-portrait${testimonial.image ? '' : ' testimonial-monogram'}`}>
          {testimonial.image ? <img src={testimonial.image} alt={testimonial.alt} /> : <span aria-hidden="true">{testimonial.initials}</span>}
        </div>
        <figure className="testimonial-quote">
          <blockquote>“{testimonial.quote}”</blockquote>
          <figcaption><strong>{testimonial.name}</strong><span>{testimonial.role}</span></figcaption>
        </figure>
      </div>
      <div className="testimonial-controls" aria-label="Testimonial carousel controls">
        <button type="button" onClick={() => goTo(active - 1)} aria-label="Show previous testimonial">←</button>
        <div className="testimonial-dots" role="tablist" aria-label="Choose testimonial">
          {testimonials.map((item, index) => <button key={item.name} type="button" role="tab" aria-selected={active === index} aria-label={`Show testimonial from ${item.name}`} className={active === index ? 'is-active' : ''} onClick={() => goTo(index)} />)}
        </div>
        <span>{String(active + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}</span>
        <button type="button" onClick={() => goTo(active + 1)} aria-label="Show next testimonial">→</button>
      </div>
    </section>
  );
}
