'use client';

import type { PanelId } from '../AppShell';
import { Expandable } from '../Expandable';

export function PsychologyPanel({ setActivePanel }: { setActivePanel: (id: PanelId) => void }) {
  return (
    <div className="flex h-full flex-col overflow-y-auto px-6 py-6 lg:py-8">
      <div className="mx-auto w-full max-w-3xl flex-1">
        <p className="text-xs font-semibold uppercase tracking-widest text-gold">The Science</p>
        <h1 className="mt-3 text-3xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>
          The Psychology
        </h1>
        <p className="mt-2 text-sm text-text-muted">
          Built on two validated frameworks in workplace psychology and neuroscience.
        </p>

        {/* SCARF summary — compact, always visible */}
        <div className="mt-4 rounded-lg border border-border bg-bg-card p-3">
          <p className="text-xs font-bold text-text" style={{ fontFamily: 'var(--font-serif)' }}>SCARF Model <span className="font-normal text-text-muted">(David Rock, 2008)</span></p>
          <p className="mt-1 text-[11px] text-text-muted">The brain treats social threats like physical threats. AI triggers all five domains.</p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {['Status', 'Certainty', 'Autonomy', 'Relatedness', 'Fairness'].map(d => (
              <span key={d} className="rounded bg-gold/10 px-2 py-0.5 text-[11px] font-medium text-gold">{d}</span>
            ))}
          </div>
        </div>

        <Expandable title="SCARF: Threat → Reward Mapping" className="mt-3">
          <div className="space-y-2">
            {[
              { letter: 'S', domain: 'Status', threat: 'AI makes me feel replaceable', reward: 'Contributor role elevates human value' },
              { letter: 'C', domain: 'Certainty', threat: 'I don\'t know what my job will look like', reward: 'Three clear buckets define what changes' },
              { letter: 'A', domain: 'Autonomy', threat: 'AI is deciding things for me', reward: 'Judgment queue keeps human approval' },
              { letter: 'R', domain: 'Relatedness', threat: 'Am I still part of the team?', reward: 'Contributor standups strengthen belonging' },
              { letter: 'F', domain: 'Fairness', threat: 'Why automate MY work but not theirs?', reward: 'Every department classifies together' },
            ].map(item => (
              <div key={item.letter} className="flex items-start gap-2 text-xs">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/10 text-[10px] font-bold text-gold">{item.letter}</span>
                <div>
                  <span className="font-medium text-text">{item.domain}</span>
                  <span className="text-text-muted"> — Threat: {item.threat}. Reward: {item.reward}.</span>
                </div>
              </div>
            ))}
          </div>
        </Expandable>

        {/* SDT summary — compact */}
        <div className="mt-4 rounded-lg border border-border bg-bg-card p-3">
          <p className="text-xs font-bold text-text" style={{ fontFamily: 'var(--font-serif)' }}>Self-Determination Theory <span className="font-normal text-text-muted">(Deci & Ryan, 1985)</span></p>
          <p className="mt-1 text-[11px] text-text-muted">Intrinsic motivation requires three things. The Contributor Framework provides all three.</p>
          <div className="mt-2 flex gap-3">
            {[
              { need: 'Competence', desc: 'Feeling effective' },
              { need: 'Autonomy', desc: 'Having choice' },
              { need: 'Relatedness', desc: 'Feeling connected' },
            ].map(n => (
              <div key={n.need}>
                <p className="text-[11px] font-medium text-gold">{n.need}</p>
                <p className="text-[10px] text-text-muted">{n.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <Expandable title="SDT: How the Framework Delivers" className="mt-3">
          <div className="space-y-2 text-xs text-text-muted">
            <p><span className="font-medium text-text">Competence:</span> Contributors develop expertise in improvement and innovation. Not just "doing tasks" but "making things better."</p>
            <p><span className="font-medium text-text">Autonomy:</span> The Judgment queue preserves human decision-making. Contributors choose which ideas to pursue.</p>
            <p><span className="font-medium text-text">Relatedness:</span> Contributor standups, cross-functional projects, and shared improvement goals create genuine team bonds.</p>
          </div>
        </Expandable>

        <Expandable title="Why This Matters" className="mt-3">
          <p className="text-sm text-text-muted leading-relaxed">
            Most AI rollouts fail not because the technology doesn't work, but because humans resist.
            They resist because their brains perceive threat. SCARF tells you where the threats are.
            SDT tells you what to replace them with. The Contributor Framework operationalizes both.
          </p>
        </Expandable>

        <div className="mt-6 flex gap-3">
          <button onClick={() => setActivePanel('playbook')} className="rounded-md bg-gold px-4 py-2 text-sm font-semibold text-bg transition hover:bg-gold-light">
            The Daily Playbook
          </button>
          <button onClick={() => setActivePanel('rollout')} className="rounded-md border border-border px-4 py-2 text-sm font-medium text-text-muted transition hover:bg-bg-elevated hover:text-text">
            Back
          </button>
        </div>
      </div>
    </div>
  );
}
