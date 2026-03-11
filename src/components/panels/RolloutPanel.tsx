'use client';

import type { PanelId } from '../AppShell';

export function RolloutPanel({ setActivePanel }: { setActivePanel: (id: PanelId) => void }) {
  return (
    <div className="mx-auto h-full max-w-3xl overflow-y-auto px-6 py-8 lg:py-12">
      <div className="animate-fade-in">
        <p className="text-sm font-semibold uppercase tracking-widest text-gold">Implementation</p>
        <h1 className="mt-4 text-4xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>
          The 90-Day Rollout
        </h1>
        <p className="mt-4 text-lg text-text-muted">
          Three phases. 90 days. From "we should use AI" to a fully operating Contributor Model.
        </p>
      </div>

      {/* Phase 1 */}
      <div className="mt-12">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue/10 text-lg font-bold text-blue">1</div>
          <div>
            <h2 className="text-xl font-bold text-blue" style={{ fontFamily: 'var(--font-serif)' }}>Phase 1: Classify</h2>
            <p className="text-sm text-text-muted">Days 1-30</p>
          </div>
        </div>
        <div className="ml-5 mt-4 border-l-2 border-blue/20 pl-8">
          <p className="text-text-muted leading-relaxed">
            Every department maps every recurring task into the three buckets.
            This is not a technology project. It's a thinking exercise.
          </p>
          <div className="mt-4 space-y-2">
            {[
              'Appoint a Classification Champion per department',
              'Run bucket workshops: each team classifies their top 20 tasks',
              'Challenge everything in Digital: "Does this REALLY need a human?"',
              'Identify quick wins: tasks already 80% Digital that just need the last push',
              'Build the master classification sheet',
            ].map(item => (
              <div key={item} className="flex items-start gap-2 text-sm text-text-muted">
                <span className="mt-0.5 text-blue">-</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Phase 2 */}
      <div className="mt-10">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/10 text-lg font-bold text-gold">2</div>
          <div>
            <h2 className="text-xl font-bold text-gold" style={{ fontFamily: 'var(--font-serif)' }}>Phase 2: Automate</h2>
            <p className="text-sm text-text-muted">Days 31-60</p>
          </div>
        </div>
        <div className="ml-5 mt-4 border-l-2 border-gold/20 pl-8">
          <p className="text-text-muted leading-relaxed">
            Execute on the classification. Digital tasks get automated. Judgment tasks get co-pilots.
            Contributor tasks get structure.
          </p>
          <div className="mt-4 space-y-2">
            {[
              'Automate the quick wins from Phase 1 (Digital Bucket)',
              'Deploy AI co-pilot tools for Judgment Bucket tasks',
              'Build the approval queue for Judgment items',
              'Launch the Ideas system for Contributor Bucket tracking',
              'Measure: hours freed per department per week',
            ].map(item => (
              <div key={item} className="flex items-start gap-2 text-sm text-text-muted">
                <span className="mt-0.5 text-gold">-</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Phase 3 */}
      <div className="mt-10">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal/10 text-lg font-bold text-teal">3</div>
          <div>
            <h2 className="text-xl font-bold text-teal" style={{ fontFamily: 'var(--font-serif)' }}>Phase 3: Contribute</h2>
            <p className="text-sm text-text-muted">Days 61-90</p>
          </div>
        </div>
        <div className="ml-5 mt-4 border-l-2 border-teal/20 pl-8">
          <p className="text-text-muted leading-relaxed">
            The identity shift. People stop being task-doers and start being contributors.
            The freed time becomes innovation time.
          </p>
          <div className="mt-4 space-y-2">
            {[
              'Launch Contributor standups: "What did you improve this week?"',
              'Track and celebrate contributions: ideas, improvements, mentorship',
              'Adjust compensation models to reward contribution',
              'Reclassify: some Judgment tasks will have graduated to Digital',
              'Measure: contributions per person, retention, engagement scores',
            ].map(item => (
              <div key={item} className="flex items-start gap-2 text-sm text-text-muted">
                <span className="mt-0.5 text-teal">-</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 rounded-lg border border-border bg-bg-card p-6">
        <h3 className="font-bold text-text">After 90 Days</h3>
        <p className="mt-2 text-sm text-text-muted leading-relaxed">
          The system is self-sustaining. New tasks get classified automatically.
          The boundary between Digital and Judgment shifts as AI improves.
          Contributors generate ideas that create new tasks, new automations, new value.
          The flywheel spins.
        </p>
      </div>

      <div className="mt-10 flex gap-3">
        <button
          onClick={() => setActivePanel('psychology')}
          className="rounded-md bg-gold px-5 py-2.5 text-sm font-semibold text-bg transition hover:bg-gold-light"
        >
          The Psychology Behind It
        </button>
        <button
          onClick={() => setActivePanel('contributor')}
          className="rounded-md border border-border px-5 py-2.5 text-sm font-medium text-text-muted transition hover:bg-bg-elevated hover:text-text"
        >
          Back: Contributor Bucket
        </button>
      </div>
    </div>
  );
}
