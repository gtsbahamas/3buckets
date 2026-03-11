'use client';

import type { PanelId } from '../AppShell';

export function PsychologyPanel({ setActivePanel }: { setActivePanel: (id: PanelId) => void }) {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12 lg:py-20">
      <div className="animate-fade-in">
        <p className="text-sm font-semibold uppercase tracking-widest text-gold">The Science</p>
        <h1 className="mt-4 text-4xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>
          The Psychology
        </h1>
        <p className="mt-4 text-lg text-text-muted">
          The Contributor Framework isn't just an operational model. It's built on two of the most
          validated frameworks in workplace psychology and neuroscience.
        </p>
      </div>

      {/* SCARF */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>
          SCARF Model <span className="text-base font-normal text-text-muted">(David Rock, 2008)</span>
        </h2>
        <p className="mt-3 text-text-muted leading-relaxed">
          The brain treats social threats the same as physical threats. When AI enters the workplace,
          it triggers threat responses across all five SCARF domains. The Contributor Framework is
          designed to convert every one of those threats into rewards.
        </p>

        <div className="mt-6 space-y-3">
          {[
            {
              letter: 'S',
              domain: 'Status',
              threat: 'AI makes me feel replaceable',
              reward: 'Contributor role elevates human value above task-doing',
            },
            {
              letter: 'C',
              domain: 'Certainty',
              threat: 'I don\'t know what my job will look like',
              reward: 'Three clear buckets define exactly what changes and what doesn\'t',
            },
            {
              letter: 'A',
              domain: 'Autonomy',
              threat: 'AI is deciding things for me',
              reward: 'Judgment queue keeps human approval in the loop',
            },
            {
              letter: 'R',
              domain: 'Relatedness',
              threat: 'Am I still part of the team?',
              reward: 'Contributor standups and shared goals strengthen belonging',
            },
            {
              letter: 'F',
              domain: 'Fairness',
              threat: 'Why automate MY work but not theirs?',
              reward: 'Every department classifies together. Same rules for everyone.',
            },
          ].map(item => (
            <div key={item.letter} className="rounded-lg border border-border bg-bg-card p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold/10 text-sm font-bold text-gold">
                  {item.letter}
                </div>
                <h3 className="font-bold text-text">{item.domain}</h3>
              </div>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                <div className="rounded-md bg-red/5 px-3 py-2">
                  <p className="text-[10px] font-semibold uppercase text-red">Threat</p>
                  <p className="mt-1 text-xs text-text-muted">{item.threat}</p>
                </div>
                <div className="rounded-md bg-teal/5 px-3 py-2">
                  <p className="text-[10px] font-semibold uppercase text-teal">Reward</p>
                  <p className="mt-1 text-xs text-text-muted">{item.reward}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SDT */}
      <div className="mt-14">
        <h2 className="text-2xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>
          Self-Determination Theory <span className="text-base font-normal text-text-muted">(Deci & Ryan, 1985)</span>
        </h2>
        <p className="mt-3 text-text-muted leading-relaxed">
          Intrinsic motivation requires three things. The Contributor Framework systematically provides all three.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            {
              need: 'Competence',
              desc: 'Feeling effective at what you do',
              how: 'Contributors develop expertise in improvement, innovation, and mentorship. Not just "doing tasks" but "making things better."',
            },
            {
              need: 'Autonomy',
              desc: 'Having choice in how you work',
              how: 'The Judgment queue preserves human decision-making. Contributors choose which ideas to pursue and how to contribute.',
            },
            {
              need: 'Relatedness',
              desc: 'Feeling connected to others',
              how: 'Contributor standups, cross-functional projects, and shared improvement goals create genuine team bonds.',
            },
          ].map(item => (
            <div key={item.need} className="rounded-lg border border-border bg-bg-card p-5">
              <h3 className="font-bold text-gold">{item.need}</h3>
              <p className="mt-1 text-xs text-text-muted">{item.desc}</p>
              <p className="mt-3 text-xs text-text-muted leading-relaxed">{item.how}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 rounded-lg border border-gold/20 bg-gold/5 p-6">
        <h3 className="font-bold text-gold">Why This Matters</h3>
        <p className="mt-2 text-sm text-text-muted leading-relaxed">
          Most AI rollouts fail not because the technology doesn't work, but because the humans resist.
          They resist because their brains perceive threat. SCARF tells you where the threats are.
          SDT tells you what to replace them with. The Contributor Framework operationalizes both.
        </p>
      </div>

      <div className="mt-10 flex gap-3">
        <button
          onClick={() => setActivePanel('playbook')}
          className="rounded-md bg-gold px-5 py-2.5 text-sm font-semibold text-bg transition hover:bg-gold-light"
        >
          The Daily Playbook
        </button>
        <button
          onClick={() => setActivePanel('rollout')}
          className="rounded-md border border-border px-5 py-2.5 text-sm font-medium text-text-muted transition hover:bg-bg-elevated hover:text-text"
        >
          Back: 90-Day Rollout
        </button>
      </div>
    </div>
  );
}
