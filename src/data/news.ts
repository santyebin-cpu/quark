export type NewsItem = {
  date: string;
  title: string;
  summary: string;
  tag: 'Milestone' | 'Explainer' | 'Policy';
  /** Site page with the full story. */
  href: string;
};

// Only verifiable items: Qark Energy's own published work and public Indian policy.
export const news: NewsItem[] = [
  {
    date: '2026-10-03',
    title: 'Qark One general arrangement released',
    summary:
      'Drawing QE-GA-001 (rev A, concept status) sets out the Qark One reactor block, its 513-position core lattice and the principal data, based on published AHWR-300 LEU data.',
    tag: 'Milestone',
    href: '/qark-one#data',
  },
  {
    date: '2026-10-03',
    title: 'Why thorium, and why India',
    summary:
      'How thorium breeds its own fuel, why India holds so much of it, and where Qark One sits in the country’s three-stage nuclear programme.',
    tag: 'Explainer',
    href: '/thorium',
  },
  {
    date: '2025-02-01',
    title: 'India announces a Nuclear Energy Mission for small modular reactors',
    summary:
      'The Union Budget 2025–26 set aside ₹20,000 crore for research and development of small modular reactors, aiming for at least five indigenously developed SMRs in operation by 2033 and 100 GW of nuclear power by 2047.',
    tag: 'Policy',
    href: '/india',
  },
];

export function formatDate(iso: string) {
  return new Date(iso + 'T00:00:00').toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
