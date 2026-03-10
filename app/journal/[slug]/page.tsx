import { notFound } from 'next/navigation';
import { posts } from '@/data/journal';

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default function JournalDetailPage({ params }: Params) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <article className="container section" style={{ maxWidth: 800 }}>
      <p className="kicker">{post.category} • {post.date}</p>
      <h1>{post.title}</h1>
      <p>{post.excerpt}</p>
      {post.content.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
    </article>
  );
}
