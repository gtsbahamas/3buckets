'use client';

import { useState } from 'react';
import Link from 'next/link';
import { TeamMemberSlides } from './TeamMemberSlides';
import { ChampionSlides } from './ChampionSlides';
import { ManagerSlides } from './ManagerSlides';

type Perspective = 'team' | 'champion' | 'manager';

const TABS: { id: Perspective; label: string }[] = [
  { id: 'team', label: 'Team Member' },
  { id: 'champion', label: 'Champion' },
  { id: 'manager', label: 'Manager' },
];

export default function PresentationsPage() {
  const [active, setActive] = useState<Perspective>('team');

  return (
    <div className="h-screen overflow-hidden flex flex-col" style={{ background: 'var(--color-bg)' }}>
      {/* Header */}
      <header className="pres-header flex items-center justify-between px-4 py-3 border-b border-border shrink-0 z-50 relative">
        <Link href="/" className="text-sm text-text-muted hover:text-gold transition">
          ← Back to 3 Buckets
        </Link>
        <span className="text-lg font-bold text-gold" style={{ fontFamily: 'var(--font-serif)' }}>
          3 Buckets
        </span>
      </header>

      {/* Tab bar */}
      <nav className="pres-tab-bar flex justify-center gap-1 px-4 py-2 border-b border-border shrink-0 z-50 relative">
        {TABS.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition ${
              active === tab.id
                ? 'bg-gold/15 text-gold border border-gold/30'
                : 'text-text-muted hover:text-text hover:bg-bg-elevated'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      {/* Presentation area */}
      <div className="flex-1 overflow-hidden relative">
        {active === 'team' && <TeamMemberSlides />}
        {active === 'champion' && <ChampionSlides />}
        {active === 'manager' && <ManagerSlides />}
      </div>
    </div>
  );
}
