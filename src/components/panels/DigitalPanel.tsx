'use client';

import type { PanelId } from '../AppShell';
import { Expandable } from '../Expandable';

export function DigitalPanel({ setActivePanel }: { setActivePanel: (id: PanelId) => void }) {
  return (
    <div className="flex h-full flex-col overflow-y-auto px-6 py-6 lg:py-8">
      <div className="mx-auto w-full max-w-3xl flex-1">
        <p className="text-xs font-semibold uppercase tracking-widest text-blue">Bucket 1</p>
        <h1 className="mt-3 text-3xl font-bold text-blue" style={{ fontFamily: 'var(--font-serif)' }}>
          The Digital Bucket
        </h1>
        <p className="mt-2 text-sm text-text-muted">
          If a task can be described in rules, a machine should do it. No human in the loop.
        </p>

        <div className="mt-4 rounded-lg border border-blue/20 bg-bg-card px-4 py-3">
          <p className="text-xs font-bold text-text">The Test</p>
          <p className="mt-1 text-xs text-text-muted">
            Can this be completed by following rules with no subjective judgment? If yes, Digital Bucket.
          </p>
        </div>

        <Expandable title="Examples" className="mt-4">
          <div className="space-y-2">
            {[
              { task: 'Invoice generation', detail: 'Template + data = PDF.' },
              { task: 'Appointment reminders', detail: 'Time trigger + contact = message.' },
              { task: 'Data entry from forms', detail: 'Structured input to database.' },
              { task: 'Report compilation', detail: 'Query, format, distribute.' },
              { task: 'Email routing', detail: 'Keywords + rules = correct inbox.' },
            ].map(ex => (
              <div key={ex.task} className="flex items-baseline gap-2 text-xs">
                <span className="font-medium text-text">{ex.task}</span>
                <span className="text-text-muted">— {ex.detail}</span>
              </div>
            ))}
          </div>
        </Expandable>

        <Expandable title="The Goal" className="mt-3">
          <p className="text-sm text-text-muted leading-relaxed">
            Zero humans on Digital Bucket tasks. Every hour freed moves to the Contributor Bucket
            where it generates real value. Not 50%. Not "mostly automated." Zero.
          </p>
        </Expandable>

        <div className="mt-6 flex gap-3">
          <button onClick={() => setActivePanel('judgment')} className="rounded-md bg-gold px-4 py-2 text-sm font-semibold text-bg transition hover:bg-gold-light">
            Next: Judgment Bucket
          </button>
          <button onClick={() => setActivePanel('principle')} className="rounded-md border border-border px-4 py-2 text-sm font-medium text-text-muted transition hover:bg-bg-elevated hover:text-text">
            Back
          </button>
        </div>
      </div>
    </div>
  );
}
