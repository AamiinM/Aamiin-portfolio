export default function StackPage() {
  return (
    <div className="container section">
      <p className="kicker">Stack / Uses</p>
      <h1>My working stack across code and image-making.</h1>
      <div className="grid-2" style={{ marginTop: 24 }}>
        <article className="card"><h3>Frontend</h3><p>Next.js, TypeScript, Tailwind-ready architecture, Framer Motion, accessibility-first components.</p></article>
        <article className="card"><h3>Workflow</h3><p>Figma, Linear, Notion, GitHub, Vercel previews, deliberate review loops.</p></article>
        <article className="card"><h3>Camera + Drone</h3><p>Sony/Fuji hybrid setup, DJI Air 3, and a practical lens pair for documentary and sport movement.</p></article>
        <article className="card"><h3>Focus Rules</h3><p>Performance budgets, keyboard-first QA, visual consistency, and restraint in motion design.</p></article>
      </div>
    </div>
  );
}
