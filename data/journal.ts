export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  read: string;
  category: string;
  content: string[];
};

export const posts: Post[] = [
  {
    slug: 'discipline-is-a-design-tool',
    title: 'Discipline Is a Design Tool',
    excerpt: 'What football taught me about shipping better interfaces.',
    date: 'March 2026',
    read: '6 min read',
    category: 'Mindset',
    content: [
      'In football, transition moments decide outcomes. Product work is similar: handoff, launch, and iteration windows are where quality compounds.',
      'I stopped treating discipline as motivation and started treating it as systems design. Checklists, review rituals, and session blocks became my creative enablers.',
      'Great interfaces feel effortless because the process behind them was not.'
    ]
  },
  {
    slug: 'seeing-like-a-camera',
    title: 'Seeing Like a Camera',
    excerpt: 'How cinematography changed the way I compose interfaces.',
    date: 'February 2026',
    read: '5 min read',
    category: 'Cinematography',
    content: [
      'Every frame has hierarchy. Light, depth, and motion direct attention before text does.',
      'UI can borrow from this: controlled contrast, intentional negative space, and pacing between dense and quiet sections.',
      'When a page feels cinematic, it does not mean it is noisy. It means each moment has purpose.'
    ]
  }
];
