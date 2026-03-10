import Link from 'next/link';
import { posts } from '@/data/journal';
import { SectionTitle } from '@/components/section-title';

export default function JournalPage() {
  return (
    <div className="container section">
      <SectionTitle kicker="Journal" title="Thoughts on code, visuals, discipline, and process." />
      <div style={{ display: 'grid', gap: 14 }}>
        {posts.map((post) => (
          <article key={post.slug} className="card">
            <p className="kicker">{post.category} • {post.date} • {post.read}</p>
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <Link href={`/journal/${post.slug}`} className="button-ghost" style={{ width: 'fit-content' }}>Read note</Link>
          </article>
        ))}
      </div>
    </div>
  );
}
