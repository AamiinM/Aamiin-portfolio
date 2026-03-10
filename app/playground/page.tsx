import { SectionTitle } from '@/components/section-title';

export default function PlaygroundPage() {
  return (
    <div className="container section">
      <SectionTitle kicker="Playground" title="A controlled lab for interaction experiments." body="Where I test transitions, motion rhythms, and UI patterns before they enter production projects." />
      <div className="bento">
        <article className="card" style={{ gridColumn: 'span 8' }}><h3>Lens Focus Hero Study</h3><p>Pointer-reactive depth with reduced-motion fallback.</p></article>
        <article className="card" style={{ gridColumn: 'span 4' }}><h3>Dock Navigation</h3><p>Contextual magnification for quick route switching.</p></article>
        <article className="card" style={{ gridColumn: 'span 6' }}><h3>Chapter Scroll</h3><p>Story panels that pin and transition by narrative beats.</p></article>
        <article className="card" style={{ gridColumn: 'span 6' }}><h3>Grid Morph</h3><p>Drone-inspired aerial transition between section layouts.</p></article>
      </div>
    </div>
  );
}
