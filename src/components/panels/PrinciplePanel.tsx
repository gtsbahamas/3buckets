'use client';

import type { PanelId } from '../AppShell';

export function PrinciplePanel({ setActivePanel }: { setActivePanel: (id: PanelId) => void }) {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12 lg:py-20">
      <div className="animate-fade-in">
        <p className="text-sm font-semibold uppercase tracking-widest text-gold">The Contributor Framework</p>
        <h1 className="mt-4 text-4xl font-bold leading-tight lg:text-5xl" style={{ fontFamily: 'var(--font-serif)' }}>
          Three Buckets.<br />One Principle.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-text-muted">
          Every task in your organization falls into one of three buckets. Know which bucket it belongs to, and you know exactly what to do with it.
        </p>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-3">
        {[
          {
            label: 'Digital',
            color: 'text-blue',
            border: 'border-blue/20 hover:border-blue/40',
            desc: 'Automate it. 100%. No human in the loop.',
            panel: 'digital' as PanelId,
          },
          {
            label: 'Judgment',
            color: 'text-gold',
            border: 'border-gold/20 hover:border-gold/40',
            desc: 'AI drafts. Human decides. Quality stays high.',
            panel: 'judgment' as PanelId,
          },
          {
            label: 'Contributor',
            color: 'text-teal',
            border: 'border-teal/20 hover:border-teal/40',
            desc: 'Pure human value. Ideas, relationships, leadership.',
            panel: 'contributor' as PanelId,
          },
        ].map((bucket, i) => (
          <button
            key={bucket.label}
            onClick={() => setActivePanel(bucket.panel)}
            className={`animate-stagger-in rounded-lg border ${bucket.border} bg-bg-card p-6 text-left transition`}
            style={{ animationDelay: `${i * 0.1 + 0.3}s`, animationFillMode: 'both' }}
          >
            <h3 className={`text-lg font-bold ${bucket.color}`} style={{ fontFamily: 'var(--font-serif)' }}>
              {bucket.label}
            </h3>
            <p className="mt-2 text-sm text-text-muted">{bucket.desc}</p>
          </button>
        ))}
      </div>

      <div className="mt-16 animate-stagger-in" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
        <h2 className="text-2xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>The Principle</h2>
        <div className="mt-6 space-y-4 text-text-muted leading-relaxed">
          <p>
            AI is not replacing workers. It is reclassifying work. The organizations that understand this
            distinction will thrive. The ones that don't will hemorrhage talent chasing automation theater.
          </p>
          <p>
            The Contributor Framework gives you a simple, repeatable system: classify every task your
            organization performs into three buckets based on the cognitive demand required.
            Then apply the right strategy to each bucket.
          </p>
          <p>
            Digital tasks get fully automated. Judgment tasks get AI co-pilots with human approval.
            Contributor tasks get protected, elevated, and compensated as the irreplaceable value they are.
          </p>
          <p>
            The result: your people stop doing robot work. Your AI stops pretending to think.
            And your organization gets something neither can deliver alone.
          </p>
        </div>
      </div>

      <div className="mt-12 flex gap-3">
        <button
          onClick={() => setActivePanel('digital')}
          className="rounded-md bg-gold px-5 py-2.5 text-sm font-semibold text-bg transition hover:bg-gold-light"
        >
          Explore the Buckets
        </button>
        <button
          onClick={() => setActivePanel('rollout')}
          className="rounded-md border border-border px-5 py-2.5 text-sm font-medium text-text-muted transition hover:bg-bg-elevated hover:text-text"
        >
          See the 90-Day Rollout
        </button>
      </div>
    </div>
  );
}
