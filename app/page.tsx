import Link from 'next/link';
import { SectionTitle } from '@/components/section-title';
import { projects } from '@/data/projects';
import { site } from '@/data/site';
import { ProjectCard } from '@/components/project-card';
import { Reveal } from '@/components/reveal';

const interests = ['Cinematography', 'Drones', 'Football', 'Product Systems', 'AI Tooling'];

export default function HomePage() {
  return (
    <>
      <section className="section" style={{ paddingTop: '6rem' }}>
        <div className="container" style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', inset: '-20% auto auto 10%', width: 450, height: 450, borderRadius: '50%', background: 'radial-gradient(circle, rgba(130,160,255,.35), transparent 70%)', filter: 'blur(20px)', pointerEvents: 'none' }} />
          <p className="kicker">{site.location}</p>
          <h1>{site.heroHeadline}</h1>
          <p style={{ maxWidth: 760 }}>{site.heroSub}</p>
          <div style={{ display: 'flex', gap: 10, marginTop: 24, flexWrap: 'wrap' }}>
            <Link href="/projects" className="button">View selected projects</Link>
            <Link href="/cinematography" className="button-ghost">Explore visual work</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle kicker="Signature Direction" title="A premium digital identity built on five worlds." body="The system blends engineering precision, cinematic framing, athlete discipline, and a modern creator voice." />
          <div className="bento">
            {interests.map((item, i) => (
              <Reveal key={item}>
                <article className="card" style={{ gridColumn: i === 0 ? 'span 6' : i === 1 ? 'span 6' : 'span 4' }}>
                  <h3>{item}</h3>
                  <p>{i === 0 ? 'Frame-based storytelling translated into interface rhythm.' : i === 1 ? 'Aerial perspective, systems thinking, and spatial awareness.' : 'Intentional routines that convert ambition into execution.'}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle kicker="Selected Work" title="Projects designed as chapters, not thumbnails." />
          <div className="grid-2">
            {projects.map((project) => <ProjectCard key={project.slug} project={project} />)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div>
            <p className="kicker">Mindset Layer</p>
            <h2>Football sharpens how I build.</h2>
            <p>I care about transitions, pressure moments, and team rhythm. That mindset shows up in my code reviews, iteration cycles, and execution standards.</p>
          </div>
          <div className="card">
            <p className="kicker">Now</p>
            <p>Currently exploring computer vision for tactical analysis, cinematic UI transitions, and performant long-scroll storytelling in Next.js.</p>
            <Link href="/now" className="button-ghost" style={{ width: 'fit-content' }}>See what I&apos;m building now</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container card" style={{ textAlign: 'center' }}>
          <p className="kicker">Contact</p>
          <h2>Open to meaningful internships and collaborations.</h2>
          <p>Let&apos;s build products that feel clear, calm, and unforgettable.</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 10, flexWrap: 'wrap' }}>
            <Link href="/contact" className="button">Start a conversation</Link>
            <Link href="/journal" className="button-ghost">Read notes</Link>
          </div>
        </div>
      </section>
    </>
  );
}
