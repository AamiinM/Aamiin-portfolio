import { ProjectCard } from '@/components/project-card';
import { SectionTitle } from '@/components/section-title';
import { projects } from '@/data/projects';

export default function ProjectsPage() {
  return (
    <div className="container section">
      <SectionTitle kicker="Projects Index" title="A scalable archive of software, experiments, and visual systems." body="Each card combines impact, craft, and context — built to help recruiters and collaborators understand depth quickly." />
      <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
        {['All', 'Software', 'AI', 'Experiment', 'Visual'].map((t) => <span key={t} className="button-ghost">{t}</span>)}
      </div>
      <div className="grid-2">
        {projects.map((project) => <ProjectCard key={project.slug} project={project} />)}
      </div>
    </div>
  );
}
