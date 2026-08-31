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
        <div className="testimonial-portrait"><img src={testimonial.image} alt={testimonial.alt} /></div>
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
