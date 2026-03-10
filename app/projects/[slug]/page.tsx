import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectDetailPage({ params }: Params) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <div className="container section" style={{ display: 'grid', gap: 24 }}>
      <p className="kicker">{project.type} • {project.year}</p>
      <h1>{project.title}</h1>
      <p style={{ maxWidth: 780 }}>{project.impact}</p>
      <div className="grid-2">
        <article className="card"><h3>Overview</h3><p>{project.overview}</p></article>
        <article className="card"><h3>Problem / Context</h3><p>{project.challenge}</p></article>
        <article className="card"><h3>Role + Stack</h3><p>Product design, frontend architecture, and interaction direction. Stack: {project.stack.join(', ')}.</p></article>
        <article className="card"><h3>Process + Decisions</h3><p>{project.process}</p></article>
        <article className="card"><h3>Outcome</h3><p>{project.outcome}</p></article>
        <article className="card"><h3>Next Steps</h3><p>Expand instrumentation, document case-study visuals, and ship public demo mode.</p></article>
      </div>
      <div style={{ display: 'flex', gap: 10 }}>
        <Link href="/projects" className="button-ghost">Back to projects</Link>
        <Link href="/contact" className="button">Discuss this work</Link>
      </div>
    </div>
  );
}
