export function SectionTitle({ kicker, title, body }: { kicker: string; title: string; body?: string }) {
  return (
    <div style={{ maxWidth: 760, marginBottom: '2rem' }}>
      <p className="kicker">{kicker}</p>
      <h2 style={{ marginTop: 10 }}>{title}</h2>
      {body ? <p>{body}</p> : null}
    </div>
  );
}
