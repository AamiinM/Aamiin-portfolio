import Link from 'next/link';
import { nav } from '@/data/site';

export function Footer() {
  return (
    <footer className="section" style={{ borderTop: '1px solid var(--line)', marginTop: 'var(--section)' }}>
      <div className="container" style={{ display: 'grid', gap: 24 }}>
        <p className="kicker">Built with precision, restraint, and ambition.</p>
        <div className="grid-2">
          <div>
            <h3>Let&apos;s build something with range.</h3>
            <p>Open to internships, collaborations, and multidisciplinary projects.</p>
          </div>
          <div style={{ display: 'grid', gap: 10, justifyContent: 'start' }}>
            {nav.map(([label, href]) => (
              <Link key={href} href={href} style={{ color: 'var(--muted)' }}>{label}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
