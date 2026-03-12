import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '3 Buckets — The Contributor Framework',
  description: 'An operational framework for AI-enabled workplace transformation. Classify every task. Automate what you can. Elevate the humans who remain.',
  openGraph: {
    title: '3 Buckets — The Contributor Framework',
    description: 'An operational framework for AI-enabled workplace transformation. Classify every task. Automate what you can. Elevate the humans who remain.',
    type: 'website',
    url: 'https://3buckets.ai',
    siteName: '3 Buckets',
  },
  twitter: {
    card: 'summary_large_image',
    title: '3 Buckets — The Contributor Framework',
    description: 'An operational framework for AI-enabled workplace transformation. Classify every task. Automate what you can. Elevate the humans who remain.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full overflow-hidden">
      <body className="h-full overflow-hidden">{children}</body>
    </html>
  );
}
