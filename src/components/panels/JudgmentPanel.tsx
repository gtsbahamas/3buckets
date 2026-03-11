'use client';

import type { PanelId } from '../AppShell';
import { Expandable } from '../Expandable';

export function JudgmentPanel({ setActivePanel }: { setActivePanel: (id: PanelId) => void }) {
  return (
    <div className="flex h-full flex-col overflow-y-auto px-6 py-6 lg:py-8">
      <div className="mx-auto w-full max-w-3xl flex-1">
        <p className="text-xs font-semibold uppercase tracking-widest text-gold">Bucket 2</p>
        <h1 className="mt-3 text-3xl font-bold text-gold" style={{ fontFamily: 'var(--font-serif)' }}>
          The Judgment Bucket
        </h1>
        <p className="mt-2 text-sm text-text-muted">
          AI drafts. Human decides. The co-pilot model.
        </p>

        {/* How it works — always visible, compact */}
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {[
            { step: '1', label: 'AI Prepares', desc: 'Gathers data, drafts output.' },
            { step: '2', label: 'Queue Review', desc: 'Human reviews with confidence scores.' },
            { step: '3', label: 'Human Decides', desc: 'Approve, modify, or reject.' },
          ].map(s => (
            <div key={s.step} className="rounded-md border border-border bg-bg-card p-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gold/10 text-xs font-bold text-gold">{s.step}</div>
              <p className="mt-2 text-xs font-medium text-text">{s.label}</p>
              <p className="mt-0.5 text-[11px] text-text-muted">{s.desc}</p>
            </div>
          ))}
        </div>

        <Expandable title="Examples" className="mt-4">
          <div className="space-y-2">
            {[
              { task: 'Customer complaints', detail: 'AI drafts reply. Human reviews tone.' },
              { task: 'Loan pre-qualification', detail: 'AI scores. Human reviews edge cases.' },
              { task: 'Content editing', detail: 'AI suggests edits. Human refines.' },
              { task: 'Hiring screening', detail: 'AI ranks candidates. Human evaluates fit.' },
            ].map(ex => (
              <div key={ex.task} className="flex items-baseline gap-2 text-xs">
                <span className="font-medium text-text">{ex.task}</span>
                <span className="text-text-muted">— {ex.detail}</span>
              </div>
            ))}
          </div>
        </Expandable>

        <Expandable title="The Queue System" className="mt-3">
          <p className="text-sm text-text-muted leading-relaxed">
            Each item arrives pre-processed with a confidence score. High-confidence items can auto-approve
            (graduating to Digital). Low-confidence items get human attention first. The boundary between
            buckets evolves with the organization.
          </p>
        </Expandable>

        <div className="mt-6 flex gap-3">
          <button onClick={() => setActivePanel('contributor')} className="rounded-md bg-gold px-4 py-2 text-sm font-semibold text-bg transition hover:bg-gold-light">
            Next: Contributor Bucket
          </button>
          <button onClick={() => setActivePanel('digital')} className="rounded-md border border-border px-4 py-2 text-sm font-medium text-text-muted transition hover:bg-bg-elevated hover:text-text">
            Back
          </button>
        </div>
      </div>
    </div>
  );
}
