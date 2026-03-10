import { SectionTitle } from '@/components/section-title';

const frames = ['City dawn tracking shot', 'Touchline slow-motion study', 'Aerial coastal grid', 'Night street b-roll'];

export default function CinematographyPage() {
  return (
    <div className="container section">
      <SectionTitle kicker="Cinematography" title="How I see frames, motion, and meaning." body="A mini exhibition of composition studies, drone perspectives, and visual notes that shape my product taste." />
      <div className="grid-2">
        {frames.map((frame) => (
          <article key={frame} className="card" style={{ minHeight: 220, display: 'grid', alignContent: 'end', background: 'linear-gradient(120deg, rgba(111,160,255,.2), rgba(255,255,255,.05))' }}>
            <p className="kicker">Scene study</p>
            <h3>{frame}</h3>
          </article>
        ))}
      </div>
    </div>
  );
}
