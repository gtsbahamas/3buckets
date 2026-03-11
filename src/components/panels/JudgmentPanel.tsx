'use client';

import type { PanelId } from '../AppShell';

export function JudgmentPanel({ setActivePanel }: { setActivePanel: (id: PanelId) => void }) {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12 lg:py-20">
      <div className="animate-fade-in">
        <p className="text-sm font-semibold uppercase tracking-widest text-gold">Bucket 2</p>
        <h1 className="mt-4 text-4xl font-bold text-gold" style={{ fontFamily: 'var(--font-serif)' }}>
          The Judgment Bucket
        </h1>
        <p className="mt-4 text-lg text-text-muted">
          AI drafts. Human decides. The co-pilot model where machines handle preparation
          and humans provide the critical thinking.
        </p>
      </div>

      <div className="mt-10 rounded-lg border border-gold/20 bg-bg-card p-6">
        <h3 className="font-bold text-text">The Test</h3>
        <p className="mt-2 text-sm text-text-muted">
          Does this task require subjective assessment, contextual understanding, or professional judgment?
          If yes, but the preparation work is routine, it belongs in the Judgment Bucket.
        </p>
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>How It Works</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {[
            { step: '1', label: 'AI Prepares', desc: 'Gathers data, drafts response, identifies options.' },
            { step: '2', label: 'Queue Review', desc: 'Human reviews AI output with confidence scores.' },
            { step: '3', label: 'Human Decides', desc: 'Approve, modify, or reject. The judgment stays human.' },
          ].map(s => (
            <div key={s.step} className="rounded-md border border-border bg-bg-card p-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gold/10 text-sm font-bold text-gold">
                {s.step}
              </div>
              <p className="mt-3 text-sm font-medium text-text">{s.label}</p>
              <p className="mt-1 text-xs text-text-muted">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>Examples</h2>
        <div className="mt-4 space-y-3">
          {[
            { task: 'Customer complaint responses', detail: 'AI drafts empathetic reply. Human reviews tone and approves.' },
            { task: 'Loan pre-qualification', detail: 'AI scores application. Human reviews edge cases and approves.' },
            { task: 'Content editing', detail: 'AI suggests edits. Human accepts, rejects, or refines.' },
            { task: 'Hiring screening', detail: 'AI ranks candidates. Human evaluates cultural fit and decides.' },
            { task: 'Medical triage', detail: 'AI flags urgency levels. Clinician makes the call.' },
          ].map(ex => (
            <div key={ex.task} className="rounded-md border border-border bg-bg-elevated px-4 py-3">
              <p className="text-sm font-medium text-text">{ex.task}</p>
              <p className="mt-1 text-xs text-text-muted">{ex.detail}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>The Queue System</h2>
        <p className="mt-3 text-text-muted leading-relaxed">
          Judgment Bucket tasks flow through a queue. Each item arrives pre-processed by AI,
          with a confidence score and draft output. High-confidence items can be auto-approved
          (moving them toward Digital). Low-confidence items get human attention first.
        </p>
        <p className="mt-3 text-text-muted leading-relaxed">
          Over time, the queue teaches the system. Patterns the human consistently approves
          can graduate to Digital. Patterns that always need human modification stay in Judgment.
          The boundary between buckets is not fixed. It evolves with the organization.
        </p>
      </div>

      <div className="mt-10 flex gap-3">
        <button
          onClick={() => setActivePanel('contributor')}
          className="rounded-md bg-gold px-5 py-2.5 text-sm font-semibold text-bg transition hover:bg-gold-light"
        >
          Next: Contributor Bucket
        </button>
        <button
          onClick={() => setActivePanel('digital')}
          className="rounded-md border border-border px-5 py-2.5 text-sm font-medium text-text-muted transition hover:bg-bg-elevated hover:text-text"
        >
          Back: Digital Bucket
        </button>
      </div>
    </div>
  );
}
