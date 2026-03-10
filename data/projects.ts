export type Project = {
  slug: string;
  title: string;
  impact: string;
  type: 'Software' | 'Experiment' | 'AI' | 'Visual';
  stack: string[];
  year: string;
  confidence: 'Polished' | 'Shipping' | 'In Progress';
  overview: string;
  challenge: string;
  process: string;
  outcome: string;
};

export const projects: Project[] = [
  {
    slug: 'flightline-ops',
    title: 'Flightline Ops',
    impact: 'Reduced drone mission prep time by 42% with a route planning dashboard.',
    type: 'Software',
    stack: ['Next.js', 'TypeScript', 'Mapbox', 'PostgreSQL'],
    year: '2026',
    confidence: 'Polished',
    overview: 'A mission-control interface for drone pre-flight planning and safety checks.',
    challenge: 'Pilots were switching across tools, causing briefing delays and missed constraints.',
    process: 'Mapped pilot workflow, prototyped the checklist logic, and implemented geo-aware constraints.',
    outcome: 'One workspace unified planning, compliance, and shareable mission reports.'
  },
  {
    slug: 'touchline-intel',
    title: 'Touchline Intel',
    impact: 'Built a football analysis tool surfacing pressing patterns from match clips.',
    type: 'AI',
    stack: ['Python', 'OpenCV', 'FastAPI', 'React'],
    year: '2025',
    confidence: 'Shipping',
    overview: 'Computer-vision assisted analytics for identifying defensive line triggers.',
    challenge: 'Manual tagging of phases was slow and inconsistent for student analysts.',
    process: 'Designed assisted tagging with confidence thresholds and timeline-based correction.',
    outcome: 'Analysts cut annotation time and gained repeatable tactical snapshots.'
  },
  {
    slug: 'frame-lab',
    title: 'Frame Lab',
    impact: 'A micro-site experiment translating film language into interface transitions.',
    type: 'Experiment',
    stack: ['Framer Motion', 'GSAP', 'WebGL'],
    year: '2025',
    confidence: 'In Progress',
    overview: 'A set of interaction studies inspired by rack focus, dolly zoom, and cut pacing.',
    challenge: 'Most web interactions feel decorative rather than narrative.',
    process: 'Converted cinematography principles into timing tokens and reusable transition components.',
    outcome: 'A tested interaction framework now used across portfolio sections.'
  }
];
