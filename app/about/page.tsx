import { SectionTitle } from '@/components/section-title';

export default function AboutPage() {
  return (
    <div className="container section">
      <SectionTitle kicker="About" title="I build with technical rigor and cinematic taste." body="I am Aamiin Wanis, a computer science student developing at the intersection of software systems, visual storytelling, and disciplined execution." />
      <div className="grid-2">
        <article className="card"><h3>Origin story</h3><p>I started by building small web tools, then became obsessed with visual rhythm through cameras and drone footage. The overlap became obvious: both coding and cinematography are about composition, constraints, and timing.</p></article>
        <article className="card"><h3>Values</h3><p>Clarity over noise. Craft over speed theatre. Systems over hacks. Team trust over ego. Long-term taste over short-term trends.</p></article>
        <article className="card"><h3>Football mindset</h3><p>Football shaped my discipline: consistency, tactical awareness, and staying calm under pressure. I carry that into design reviews, debugging, and product decisions.</p></article>
        <article className="card"><h3>Current focus</h3><p>Human-centered AI tools, responsive storytelling interfaces, and case-study driven project narratives that communicate both process and outcomes.</p></article>
      </div>
    </div>
  );
}
