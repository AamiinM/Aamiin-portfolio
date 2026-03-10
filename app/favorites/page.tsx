export default function FavoritesPage() {
  return (
    <div className="container section">
      <p className="kicker">Favorites</p>
      <h1>Creative references that shape my taste.</h1>
      <div className="grid-2" style={{ marginTop: 24 }}>
        <article className="card"><h3>Films</h3><p>Interstellar, The Social Network, Blade Runner 2049.</p></article>
        <article className="card"><h3>Football Inspirations</h3><p>Positional play, transition speed, and disciplined execution under pressure.</p></article>
        <article className="card"><h3>Tech</h3><p>Apple product storytelling, Stripe docs quality, Linear interaction standards.</p></article>
        <article className="card"><h3>Creators</h3><p>Builders who combine engineering depth with visual authorship.</p></article>
      </div>
    </div>
  );
}
