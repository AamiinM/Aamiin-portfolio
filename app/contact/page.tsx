import { CSSProperties } from 'react';

export default function ContactPage() {
  return (
    <div className="container section" style={{ maxWidth: 760 }}>
      <p className="kicker">Contact</p>
      <h1>Let&apos;s build something memorable.</h1>
      <p>I&apos;m currently open to internships, product collaborations, and thoughtful technical work.</p>
      <form className="card" style={{ display: 'grid', gap: 12 }}>
        <label>Name<input style={input} type="text" placeholder="Your name" /></label>
        <label>Email<input style={input} type="email" placeholder="you@company.com" /></label>
        <label>Message<textarea style={{ ...input, minHeight: 140 }} placeholder="Project, role, or idea..." /></label>
        <button className="button" type="submit" style={{ width: 'fit-content' }}>Send message</button>
      </form>
    </div>
  );
}

const input: CSSProperties = {
  width: '100%',
  marginTop: 8,
  borderRadius: 12,
  border: '1px solid var(--line)',
  background: 'rgba(255,255,255,0.02)',
  color: 'var(--text)',
  padding: '.75rem .85rem'
};
