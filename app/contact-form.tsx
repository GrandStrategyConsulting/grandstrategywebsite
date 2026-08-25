'use client';

import type { FormEvent } from 'react';

const topics = [
  'AI Readiness Assessment',
  'Six Dimensions Employee Engagement Survey',
  'AI Skills Workshops',
  'AI Learning Circles',
  'Emotional Intelligence and MSCEIT® 2',
  'Change and Transformation Support',
  'Speaking, Partnership or General Enquiry',
];

export default function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const topic = String(data.get('topic') || 'General Enquiry');
    const body = [
      `Name: ${data.get('name') || ''}`,
      `Work email: ${data.get('email') || ''}`,
      `Organization: ${data.get('organization') || ''}`,
      `Role: ${data.get('role') || ''}`,
      `Topic of interest: ${topic}`,
      '',
      'Workforce challenge:',
      String(data.get('message') || ''),
    ].join('\n');

    window.location.href = `mailto:hello@grandstrategy.llc?subject=${encodeURIComponent(topic)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label><span>Name</span><input name="name" type="text" autoComplete="name" required /></label>
        <label><span>Work email</span><input name="email" type="email" autoComplete="email" required /></label>
        <label><span>Organization</span><input name="organization" type="text" autoComplete="organization" required /></label>
        <label><span>Role <small>Optional</small></span><input name="role" type="text" autoComplete="organization-title" /></label>
        <label className="full-field"><span>Topic of interest</span><select name="topic" defaultValue="" required><option value="" disabled>Select a topic</option>{topics.map(topic => <option value={topic} key={topic}>{topic}</option>)}</select></label>
        <label className="full-field"><span>Tell us about your workforce challenge</span><textarea name="message" rows={5} required /></label>
      </div>
      <div className="form-submit"><p>Your enquiry will be addressed to hello@grandstrategy.llc.</p><button className="button primary" type="submit">Prepare our enquiry <span aria-hidden="true">↗</span></button></div>
    </form>
  );
}
