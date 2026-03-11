'use client';

import type { PanelId } from '../AppShell';
import { Expandable } from '../Expandable';

export function CaseStudyPanel({ setActivePanel }: { setActivePanel: (id: PanelId) => void }) {
  return (
    <div className="flex h-full flex-col overflow-y-auto px-6 py-6 lg:py-8">
      <div className="mx-auto w-full max-w-3xl flex-1">
        <p className="text-xs font-semibold uppercase tracking-widest text-gold">Evidence</p>
        <h1 className="mt-3 text-3xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>
          Case Study: GTS Bahamas
        </h1>
        <p className="mt-2 text-sm text-text-muted">
          A 50-person professional services firm. First to implement the Contributor Framework end-to-end.
        </p>

        {/* Company context — compact, always visible */}
        <div className="mt-4 flex gap-4 rounded-md border border-border bg-bg-card p-3">
          {[
            { label: 'Industry', value: 'Professional Services' },
            { label: 'Team', value: '~50 employees' },
            { label: 'Location', value: 'Nassau, Bahamas' },
          ].map(item => (
            <div key={item.label}>
              <p className="text-[10px] font-semibold uppercase text-text-muted">{item.label}</p>
              <p className="mt-0.5 text-xs text-text">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Classification results — always visible */}
        <div className="mt-4 flex gap-3">
          {[
            { pct: '42%', label: 'Digital', color: 'text-blue', bg: 'bg-blue/10' },
            { pct: '35%', label: 'Judgment', color: 'text-gold', bg: 'bg-gold/10' },
            { pct: '23%', label: 'Contributor', color: 'text-teal', bg: 'bg-teal/10' },
          ].map(b => (
            <div key={b.label} className={`flex-1 rounded-md ${b.bg} px-3 py-2 text-center`}>
              <p className={`text-lg font-bold ${b.color}`}>{b.pct}</p>
              <p className="text-[10px] text-text-muted">{b.label}</p>
            </div>
          ))}
        </div>

        <Expandable title="The Challenge" className="mt-4">
          <p className="text-sm text-text-muted leading-relaxed">
            Talented people spending hours on repetitive tasks while strategic work piled up.
            AI tools were available but adoption was piecemeal, without a framework for what to
            automate, what to augment, and what to protect.
          </p>
        </Expandable>

        <Expandable title="The Implementation" className="mt-3">
          <div className="space-y-3 text-xs text-text-muted">
            <div>
              <p className="font-medium text-blue">Phase 1: Classification</p>
              <p>Every department ran bucket workshops. 200+ recurring tasks classified. 42% Digital, 35% Judgment, 23% Contributor.</p>
            </div>
            <div>
              <p className="font-medium text-gold">Phase 2: Automation</p>
              <p>Built GTS Contributor platform. Digitize module for process capture. Queue system for Judgment with AI co-pilot. Ideas board for Contributor tracking.</p>
            </div>
            <div>
              <p className="font-medium text-teal">Phase 3: Contribute</p>
              <p>Launched weekly standups. Team shifted from "I processed 50 invoices" to "I identified a workflow saving 10 hours per week."</p>
            </div>
          </div>
        </Expandable>

        <Expandable title="The Platform" className="mt-3">
          <div className="grid gap-2 sm:grid-cols-2">
            {[
              { module: 'Digitize', desc: 'Voice recording, transcription, auto-classification' },
              { module: 'Queue', desc: 'AI-processed judgment items with confidence scores' },
              { module: 'Ideas Board', desc: 'Contributor submissions by department and category' },
              { module: 'Pulse Dashboard', desc: 'Real-time bucket distribution and automation health' },
              { module: 'Champions Network', desc: 'Classification champions driving improvement' },
              { module: 'Owner Briefings', desc: 'Video updates connecting daily work to vision' },
            ].map(item => (
              <div key={item.module} className="rounded-md border border-border bg-bg-elevated p-2.5">
                <p className="text-xs font-medium text-text">{item.module}</p>
                <p className="mt-0.5 text-[11px] text-text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </Expandable>

        <Expandable title="What Made It Work" className="mt-3">
          <p className="text-sm text-text-muted leading-relaxed">
            The framework isn't a technology deployment. It's a thinking model that uses technology.
            GTS succeeded because they started with classification (thinking), not automation (doing).
            By the time tools were deployed, everyone understood why and what their role was.
          </p>
        </Expandable>

        <div className="mt-6 flex gap-3">
          <button onClick={() => setActivePanel('principle')} className="rounded-md bg-gold px-4 py-2 text-sm font-semibold text-bg transition hover:bg-gold-light">
            Start from the Beginning
          </button>
          <button onClick={() => setActivePanel('playbook')} className="rounded-md border border-border px-4 py-2 text-sm font-medium text-text-muted transition hover:bg-bg-elevated hover:text-text">
            Back
          </button>
        </div>
      </div>
    </div>
  );
}
