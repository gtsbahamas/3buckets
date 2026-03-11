'use client';

import { useState } from 'react';
import type { PanelId } from '../AppShell';
import { Expandable } from '../Expandable';

export function PrinciplePanel({ setActivePanel }: { setActivePanel: (id: PanelId) => void }) {
  return (
    <div className="flex h-full flex-col overflow-y-auto px-6 py-6 lg:py-8">
      <div className="mx-auto w-full max-w-3xl flex-1">
        {/* Hero — always visible */}
        <p className="text-xs font-semibold uppercase tracking-widest text-gold">The Contributor Framework</p>
        <h1 className="mt-3 text-3xl font-bold leading-tight lg:text-4xl" style={{ fontFamily: 'var(--font-serif)' }}>
          Three Buckets. One Principle.
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-text-muted">
          Every task in your organization falls into one of three buckets.
          Know which bucket, and you know what to do with it.
        </p>

        {/* Three bucket cards */}
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {([
            { label: 'Digital', color: 'text-blue', border: 'border-blue/20 hover:border-blue/40', desc: 'Automate it. 100%.', panel: 'digital' as PanelId },
            { label: 'Judgment', color: 'text-gold', border: 'border-gold/20 hover:border-gold/40', desc: 'AI drafts. Human decides.', panel: 'judgment' as PanelId },
            { label: 'Contributor', color: 'text-teal', border: 'border-teal/20 hover:border-teal/40', desc: 'Pure human value.', panel: 'contributor' as PanelId },
          ]).map(b => (
            <button
              key={b.label}
              onClick={() => setActivePanel(b.panel)}
              className={`rounded-lg border ${b.border} bg-bg-card p-4 text-left transition`}
            >
              <h3 className={`text-sm font-bold ${b.color}`} style={{ fontFamily: 'var(--font-serif)' }}>{b.label}</h3>
              <p className="mt-1 text-xs text-text-muted">{b.desc}</p>
            </button>
          ))}
        </div>

        {/* The Principle — expandable */}
        <Expandable title="The Principle" className="mt-6">
          <div className="space-y-3 text-sm text-text-muted leading-relaxed">
            <p>
              AI is not replacing workers. It is reclassifying work. The organizations that understand
              this distinction will thrive.
            </p>
            <p>
              Digital tasks get fully automated. Judgment tasks get AI co-pilots with human approval.
              Contributor tasks get protected, elevated, and compensated as the irreplaceable value they are.
            </p>
            <p>
              Your people stop doing robot work. Your AI stops pretending to think.
              And your organization gets something neither can deliver alone.
            </p>
          </div>
        </Expandable>

        {/* Navigation */}
        <div className="mt-6 flex gap-3">
          <button
            onClick={() => setActivePanel('digital')}
            className="rounded-md bg-gold px-4 py-2 text-sm font-semibold text-bg transition hover:bg-gold-light"
          >
            Explore the Buckets
          </button>
          <button
            onClick={() => setActivePanel('rollout')}
            className="rounded-md border border-border px-4 py-2 text-sm font-medium text-text-muted transition hover:bg-bg-elevated hover:text-text"
          >
            90-Day Rollout
          </button>
        </div>
      </div>
    </div>
  );
}
