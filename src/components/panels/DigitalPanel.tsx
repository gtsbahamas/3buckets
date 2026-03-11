'use client';

import type { PanelId } from '../AppShell';

export function DigitalPanel({ setActivePanel }: { setActivePanel: (id: PanelId) => void }) {
  return (
    <div className="mx-auto h-full max-w-3xl overflow-y-auto px-6 py-8 lg:py-12">
      <div className="animate-fade-in">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue">Bucket 1</p>
        <h1 className="mt-4 text-4xl font-bold text-blue" style={{ fontFamily: 'var(--font-serif)' }}>
          The Digital Bucket
        </h1>
        <p className="mt-4 text-lg text-text-muted">
          Automate it. 100%. No human in the loop. If a task can be described in rules, a machine should do it.
        </p>
      </div>

      <div className="mt-10 rounded-lg border border-blue/20 bg-bg-card p-6">
        <h3 className="font-bold text-text">The Test</h3>
        <p className="mt-2 text-sm text-text-muted">
          Can this task be completed by following a set of rules with no subjective judgment?
          If yes, it belongs in the Digital Bucket.
        </p>
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>Examples</h2>
        <div className="mt-4 space-y-3">
          {[
            { task: 'Invoice generation', detail: 'Template + data = PDF. No decisions.' },
            { task: 'Appointment reminders', detail: 'Time trigger + contact info = message sent.' },
            { task: 'Data entry from forms', detail: 'Structured input → database record.' },
            { task: 'Report compilation', detail: 'Query data, format, distribute.' },
            { task: 'Inventory reorder alerts', detail: 'Threshold crossed → notification sent.' },
            { task: 'Email routing', detail: 'Keywords + rules = correct inbox.' },
          ].map(ex => (
            <div key={ex.task} className="rounded-md border border-border bg-bg-elevated px-4 py-3">
              <p className="text-sm font-medium text-text">{ex.task}</p>
              <p className="mt-1 text-xs text-text-muted">{ex.detail}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>The Goal</h2>
        <p className="mt-3 text-text-muted leading-relaxed">
          Every Digital Bucket task that a human still performs is waste. Not because the human is bad at it,
          but because the human is too valuable for it. Your best people are spending hours on work that
          doesn't require a single creative thought. That's not employment. That's misallocation.
        </p>
        <p className="mt-3 text-text-muted leading-relaxed">
          The target is zero humans on Digital Bucket tasks. Not 50%. Not "mostly automated." Zero.
          Every hour freed from the Digital Bucket is an hour that can move to the Contributor Bucket,
          where it generates real value.
        </p>
      </div>

      <div className="mt-10 flex gap-3">
        <button
          onClick={() => setActivePanel('judgment')}
          className="rounded-md bg-gold px-5 py-2.5 text-sm font-semibold text-bg transition hover:bg-gold-light"
        >
          Next: Judgment Bucket
        </button>
        <button
          onClick={() => setActivePanel('principle')}
          className="rounded-md border border-border px-5 py-2.5 text-sm font-medium text-text-muted transition hover:bg-bg-elevated hover:text-text"
        >
          Back to Overview
        </button>
      </div>
    </div>
  );
}
