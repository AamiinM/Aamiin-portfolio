import Link from 'next/link';
import { Project } from '@/data/projects';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card" style={{ display: 'grid', gap: 14 }}>
      <p className="kicker">{project.type} • {project.year}</p>
      <h3>{project.title}</h3>
      <p>{project.impact}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {project.stack.map((s) => <span key={s} style={{ border: '1px solid var(--line)', borderRadius: 999, padding: '0.3rem 0.6rem', fontSize: '.75rem', color: 'var(--muted)' }}>{s}</span>)}
      </div>
      <Link href={`/projects/${project.slug}`} className="button-ghost" style={{ width: 'fit-content' }}>View case study</Link>
    </article>
  );
}
