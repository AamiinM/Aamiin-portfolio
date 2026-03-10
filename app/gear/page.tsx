import { SectionTitle } from '@/components/section-title';

const gear = {
  cameras: ['Sony A7 IV', 'Fujifilm X-S20'],
  lenses: ['24-70mm f/2.8', '35mm f/1.8', '85mm f/1.8'],
  drone: ['DJI Air 3'],
  dev: ['MacBook Pro M3', 'VS Code', 'Raycast', 'Warp'],
  software: ['DaVinci Resolve', 'Figma', 'Notion', 'Linear']
};

export default function GearPage() {
  return (
    <div className="container section">
      <SectionTitle kicker="Photography / Gear / Drone" title="The tools behind my output." body="A clean, evolving index of devices, lenses, apps, and setup decisions." />
      <div className="grid-2">
        {Object.entries(gear).map(([key, list]) => (
          <article key={key} className="card">
            <h3 style={{ textTransform: 'capitalize' }}>{key}</h3>
            <ul>{list.map((item) => <li key={item}><p>{item}</p></li>)}</ul>
          </article>
        ))}
      </div>
    </div>
  );
}
