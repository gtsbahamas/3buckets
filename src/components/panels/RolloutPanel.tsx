'use client';

import type { PanelId } from '../AppShell';
import { Expandable } from '../Expandable';

export function RolloutPanel({ setActivePanel }: { setActivePanel: (id: PanelId) => void }) {
  return (
    <div className="flex h-full flex-col overflow-y-auto px-6 py-6 lg:py-8">
      <div className="mx-auto w-full max-w-3xl flex-1">
        <p className="text-xs font-semibold uppercase tracking-widest text-gold">Implementation</p>
        <h1 className="mt-3 text-3xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>
          The 90-Day Rollout
        </h1>
        <p className="mt-2 text-sm text-text-muted">
          Three phases. 90 days. From "we should use AI" to a fully operating Contributor Model.
        </p>

        {/* Phase summary — always visible, compact */}
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {([
            { phase: '1', label: 'Classify', days: 'Days 1-30', color: 'text-blue', bg: 'bg-blue/10', desc: 'Map every task into three buckets.' },
            { phase: '2', label: 'Automate', days: 'Days 31-60', color: 'text-gold', bg: 'bg-gold/10', desc: 'Execute Digital. Deploy co-pilots.' },
            { phase: '3', label: 'Contribute', days: 'Days 61-90', color: 'text-teal', bg: 'bg-teal/10', desc: 'Identity shift. Innovation time.' },
          ]).map(p => (
            <div key={p.phase} className="rounded-md border border-border bg-bg-card p-3">
              <div className="flex items-center gap-2">
                <div className={`flex h-6 w-6 items-center justify-center rounded-full ${p.bg} text-xs font-bold ${p.color}`}>{p.phase}</div>
                <span className={`text-xs font-bold ${p.color}`}>{p.label}</span>
              </div>
              <p className="mt-1 text-[11px] text-text-muted">{p.days}</p>
              <p className="mt-0.5 text-[11px] text-text-muted">{p.desc}</p>
            </div>
          ))}
        </div>

        <Expandable title="Phase 1: Classify (Days 1-30)" className="mt-4">
          <div className="space-y-2 text-sm text-text-muted">
            <p>Every department maps every recurring task into the three buckets. Not a technology project. A thinking exercise.</p>
            <div className="space-y-1">
              {[
                'Appoint a Classification Champion per department',
                'Run bucket workshops: classify top 20 tasks per team',
                'Challenge everything in Digital: "Does this REALLY need a human?"',
                'Identify quick wins already 80% Digital',
                'Build the master classification sheet',
              ].map(item => (
                <div key={item} className="flex items-start gap-2 text-xs">
                  <span className="mt-0.5 text-blue">-</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Expandable>

        <Expandable title="Phase 2: Automate (Days 31-60)" className="mt-3">
          <div className="space-y-2 text-sm text-text-muted">
            <p>Execute on the classification. Digital tasks get automated. Judgment tasks get co-pilots.</p>
            <div className="space-y-1">
              {[
                'Automate quick wins from Phase 1 (Digital Bucket)',
                'Deploy AI co-pilot tools for Judgment tasks',
                'Build the approval queue for Judgment items',
                'Launch Ideas system for Contributor tracking',
                'Measure: hours freed per department per week',
              ].map(item => (
                <div key={item} className="flex items-start gap-2 text-xs">
                  <span className="mt-0.5 text-gold">-</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Expandable>

        <Expandable title="Phase 3: Contribute (Days 61-90)" className="mt-3">
          <div className="space-y-2 text-sm text-text-muted">
            <p>The identity shift. People stop being task-doers and start being contributors. Freed time becomes innovation time.</p>
            <div className="space-y-1">
              {[
                'Launch Contributor standups: "What did you improve this week?"',
                'Track contributions: ideas, improvements, mentorship',
                'Adjust compensation to reward contribution',
                'Reclassify: Judgment tasks graduating to Digital',
                'Measure: contributions per person, retention, engagement',
              ].map(item => (
                <div key={item} className="flex items-start gap-2 text-xs">
                  <span className="mt-0.5 text-teal">-</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Expandable>

        <Expandable title="After 90 Days" className="mt-3">
          <p className="text-sm text-text-muted leading-relaxed">
            The system is self-sustaining. New tasks get classified automatically. The boundary between
            Digital and Judgment shifts as AI improves. Contributors generate ideas that create new tasks,
            new automations, new value. The flywheel spins.
          </p>
        </Expandable>

        <div className="mt-6 flex gap-3">
          <button onClick={() => setActivePanel('psychology')} className="rounded-md bg-gold px-4 py-2 text-sm font-semibold text-bg transition hover:bg-gold-light">
            The Psychology Behind It
          </button>
          <button onClick={() => setActivePanel('contributor')} className="rounded-md border border-border px-4 py-2 text-sm font-medium text-text-muted transition hover:bg-bg-elevated hover:text-text">
            Back
          </button>
        </div>
      </div>
    </div>
  );
}
