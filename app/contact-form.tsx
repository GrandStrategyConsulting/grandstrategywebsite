'use client';

import { useState, type FormEvent } from 'react';

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
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const topic = String(data.get('topic') || 'General Enquiry');
    setStatus('submitting');

    try {
      const response = await fetch('https://formsubmit.co/ajax/hello@grandstrategy.llc', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: String(data.get('name') || ''),
          email: String(data.get('email') || ''),
          organization: String(data.get('organization') || ''),
          role: String(data.get('role') || ''),
          topic,
          message: String(data.get('message') || ''),
          _subject: `Website enquiry: ${topic}`,
          _replyto: String(data.get('email') || ''),
          _template: 'table',
          _honey: String(data.get('_honey') || ''),
        }),
      });
      const result = await response.json().catch(() => null);

      if (!response.ok || result?.success === false) {
        throw new Error('Submission failed');
      }

      form.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} aria-busy={status === 'submitting'}>
      <label className="form-honeypot" aria-hidden="true">Leave this field empty<input name="_honey" type="text" tabIndex={-1} autoComplete="off" /></label>
      <div className="form-grid">
        <label><span>Name</span><input name="name" type="text" autoComplete="name" maxLength={120} required /></label>
        <label><span>Work email</span><input name="email" type="email" autoComplete="email" maxLength={160} required /></label>
        <label><span>Organization</span><input name="organization" type="text" autoComplete="organization" maxLength={160} required /></label>
        <label><span>Role <small>Optional</small></span><input name="role" type="text" autoComplete="organization-title" maxLength={160} /></label>
        <label className="full-field"><span>Topic of interest</span><select name="topic" defaultValue="" required><option value="" disabled>Select a topic</option>{topics.map(topic => <option value={topic} key={topic}>{topic}</option>)}</select></label>
        <label className="full-field"><span>Tell us about your workforce challenge</span><textarea name="message" rows={5} maxLength={4000} required /></label>
      </div>
      <div className="form-submit">
        <div className={`form-status ${status === 'success' ? 'is-success' : ''} ${status === 'error' ? 'is-error' : ''}`} aria-live="polite">
          {status === 'success' && 'Thank you. Your enquiry has been sent to hello@grandstrategy.llc.'}
          {status === 'error' && 'We could not send your enquiry. Please try again in a moment.'}
          {(status === 'idle' || status === 'submitting') && 'Your enquiry will be sent directly to hello@grandstrategy.llc.'}
        </div>
        <button className="button primary" type="submit" disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Sending enquiry...' : 'Send our enquiry'} <span aria-hidden="true">↗</span>
        </button>
      </div>
    </form>
  );
}
