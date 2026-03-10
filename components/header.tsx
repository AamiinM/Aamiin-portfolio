'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { nav } from '@/data/site';

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 30, backdropFilter: 'blur(10px)', background: 'rgba(9,10,15,0.55)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', minHeight: 70 }}>
        <Link href="/" style={{ fontWeight: 700, letterSpacing: '-0.02em' }}>Aamiin Wanis</Link>
        <button aria-label="Open menu" onClick={() => setOpen((v) => !v)} style={{ display: 'none', background: 'transparent', border: 'none', color: 'white' }} className="mobile-menu-btn">
          <Menu size={20} />
        </button>
        <nav className="desktop-nav" style={{ display: 'flex', gap: 16 }}>
          {nav.map(([label, href]) => (
            <Link key={href} href={href} style={{ color: pathname === href ? 'var(--text)' : 'var(--muted)', fontSize: '.92rem' }}>{label}</Link>
          ))}
        </nav>
      </div>
      {open && (
        <nav className="container" style={{ display: 'grid', gap: 10, padding: '0 0 1rem' }}>
          {nav.map(([label, href]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>
          ))}
        </nav>
      )}
      <style jsx>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
}
