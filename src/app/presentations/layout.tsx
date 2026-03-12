import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Presentations — 3 Buckets',
  description: 'See the 3 Buckets Contributor Framework from three perspectives: Team Member, Champion, and Manager.',
  openGraph: {
    title: 'Presentations — 3 Buckets',
    description: 'See the 3 Buckets Contributor Framework from three perspectives: Team Member, Champion, and Manager.',
    url: 'https://3buckets.ai/presentations',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Presentations — 3 Buckets',
    description: 'See the 3 Buckets Contributor Framework from three perspectives: Team Member, Champion, and Manager.',
  },
};

export default function PresentationsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
