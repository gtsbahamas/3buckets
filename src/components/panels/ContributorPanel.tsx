'use client';

import type { PanelId } from '../AppShell';

export function ContributorPanel({ setActivePanel }: { setActivePanel: (id: PanelId) => void }) {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12 lg:py-20">
      <div className="animate-fade-in">
        <p className="text-sm font-semibold uppercase tracking-widest text-teal">Bucket 3</p>
        <h1 className="mt-4 text-4xl font-bold text-teal" style={{ fontFamily: 'var(--font-serif)' }}>
          The Contributor Bucket
        </h1>
        <p className="mt-4 text-lg text-text-muted">
          Pure human value. The work that only people can do. This is where your organization's
          real competitive advantage lives.
        </p>
      </div>

      <div className="mt-10 rounded-lg border border-teal/20 bg-bg-card p-6">
        <h3 className="font-bold text-text">The Test</h3>
        <p className="mt-2 text-sm text-text-muted">
          Does this task require creativity, relationship-building, strategic thinking, mentorship,
          or cross-functional insight that no algorithm can replicate? That's the Contributor Bucket.
        </p>
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>What Lives Here</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {[
            { label: 'Ideas', desc: 'Process improvements, product innovations, "what if we tried..."' },
            { label: 'Relationships', desc: 'Client trust, team morale, vendor partnerships, mentorship.' },
            { label: 'Strategy', desc: 'Market positioning, organizational design, long-term planning.' },
            { label: 'Culture', desc: 'Onboarding quality, conflict resolution, institutional knowledge.' },
            { label: 'Cross-Functional Insight', desc: 'Connecting dots between departments that siloed AI cannot see.' },
            { label: 'Ethical Judgment', desc: 'Decisions where "technically correct" isn\'t enough.' },
          ].map(item => (
            <div key={item.label} className="rounded-md border border-border bg-bg-elevated p-4">
              <p className="text-sm font-medium text-teal">{item.label}</p>
              <p className="mt-1 text-xs text-text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>The Identity Shift</h2>
        <p className="mt-3 text-text-muted leading-relaxed">
          Most employees define themselves by their tasks. "I process invoices." "I answer phones."
          "I enter data." When AI takes those tasks, it doesn't just remove work. It removes identity.
        </p>
        <p className="mt-3 text-text-muted leading-relaxed">
          The Contributor Bucket gives people a new identity: not a task-doer, but a value-creator.
          Not someone who processes things, but someone who improves things. The shift from
          "I do my job" to "I make this place better" is the psychological foundation of the entire framework.
        </p>
        <p className="mt-3 text-text-muted leading-relaxed">
          This isn't soft. Contributors who generate ideas that save the company money, build
          relationships that retain clients, or identify process improvements that compound over time
          are doing the most economically valuable work in the organization. The framework makes
          that visible, trackable, and compensable.
        </p>
      </div>

      <div className="mt-10 rounded-lg border border-teal/20 bg-teal/5 p-6">
        <h3 className="font-bold text-teal">The Compensation Model</h3>
        <p className="mt-2 text-sm text-text-muted leading-relaxed">
          Contributor Bucket work gets tracked: ideas submitted, improvements implemented,
          mentorship hours, cross-functional projects led. This creates a visible record of
          human value that justifies investment in people. When automation saves $200K
          and contributors generate $500K in improvements, the ROI story writes itself.
        </p>
      </div>

      <div className="mt-10 flex gap-3">
        <button
          onClick={() => setActivePanel('rollout')}
          className="rounded-md bg-gold px-5 py-2.5 text-sm font-semibold text-bg transition hover:bg-gold-light"
        >
          How to Implement: 90-Day Rollout
        </button>
        <button
          onClick={() => setActivePanel('judgment')}
          className="rounded-md border border-border px-5 py-2.5 text-sm font-medium text-text-muted transition hover:bg-bg-elevated hover:text-text"
        >
          Back: Judgment Bucket
        </button>
      </div>
    </div>
  );
}
