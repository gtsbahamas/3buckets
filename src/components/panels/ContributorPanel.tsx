'use client';

import type { PanelId } from '../AppShell';
import { Expandable } from '../Expandable';

export function ContributorPanel({ setActivePanel }: { setActivePanel: (id: PanelId) => void }) {
  return (
    <div className="flex h-full flex-col overflow-y-auto px-6 py-6 lg:py-8">
      <div className="mx-auto w-full max-w-3xl flex-1">
        <p className="text-xs font-semibold uppercase tracking-widest text-teal">Bucket 3</p>
        <h1 className="mt-3 text-3xl font-bold text-teal" style={{ fontFamily: 'var(--font-serif)' }}>
          The Contributor Bucket
        </h1>
        <p className="mt-2 text-sm text-text-muted">
          Pure human value. Ideas, relationships, strategy, culture. Your real competitive advantage.
        </p>

        {/* What lives here — compact grid, always visible */}
        <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
          {[
            { label: 'Ideas', desc: 'Process improvements, innovations' },
            { label: 'Relationships', desc: 'Client trust, mentorship' },
            { label: 'Strategy', desc: 'Positioning, long-term planning' },
            { label: 'Culture', desc: 'Onboarding, conflict resolution' },
            { label: 'Cross-Functional', desc: 'Connecting dots across silos' },
            { label: 'Ethics', desc: 'When "correct" isn\'t enough' },
          ].map(item => (
            <div key={item.label} className="rounded-md border border-border bg-bg-elevated p-2.5">
              <p className="text-xs font-medium text-teal">{item.label}</p>
              <p className="mt-0.5 text-[11px] text-text-muted">{item.desc}</p>
            </div>
          ))}
        </div>

        <Expandable title="The Identity Shift" className="mt-4">
          <div className="space-y-2 text-sm text-text-muted leading-relaxed">
            <p>
              Most employees define themselves by tasks. "I process invoices." When AI takes those tasks,
              it removes identity. The Contributor Bucket gives a new one: not a task-doer, but a value-creator.
            </p>
            <p>
              Contributors who generate ideas, build relationships, and identify improvements are doing
              the most economically valuable work. The framework makes that visible and compensable.
            </p>
          </div>
        </Expandable>

        <Expandable title="Compensation Model" className="mt-3">
          <p className="text-sm text-text-muted leading-relaxed">
            Ideas submitted, improvements implemented, mentorship hours, cross-functional projects.
            This creates a visible record of human value. When automation saves $200K and contributors
            generate $500K in improvements, the ROI story writes itself.
          </p>
        </Expandable>

        <div className="mt-6 flex gap-3">
          <button onClick={() => setActivePanel('rollout')} className="rounded-md bg-gold px-4 py-2 text-sm font-semibold text-bg transition hover:bg-gold-light">
            How to Implement
          </button>
          <button onClick={() => setActivePanel('judgment')} className="rounded-md border border-border px-4 py-2 text-sm font-medium text-text-muted transition hover:bg-bg-elevated hover:text-text">
            Back
          </button>
        </div>
      </div>
    </div>
  );
}
