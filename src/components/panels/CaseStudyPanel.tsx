'use client';

import type { PanelId } from '../AppShell';

export function CaseStudyPanel({ setActivePanel }: { setActivePanel: (id: PanelId) => void }) {
  return (
    <div className="mx-auto h-full max-w-3xl overflow-y-auto px-6 py-8 lg:py-12">
      <div className="animate-fade-in">
        <p className="text-sm font-semibold uppercase tracking-widest text-gold">Evidence</p>
        <h1 className="mt-4 text-4xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>
          Case Study: GTS Bahamas
        </h1>
        <p className="mt-4 text-lg text-text-muted">
          A 50-person professional services firm in Nassau, Bahamas.
          First organization to implement the Contributor Framework end-to-end.
        </p>
      </div>

      {/* Company Context */}
      <div className="mt-10 rounded-lg border border-border bg-bg-card p-6">
        <h3 className="font-bold text-text">The Organization</h3>
        <div className="mt-3 grid gap-4 sm:grid-cols-3">
          <div>
            <p className="text-xs font-semibold uppercase text-text-muted">Industry</p>
            <p className="mt-1 text-sm text-text">Professional Services</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase text-text-muted">Team Size</p>
            <p className="mt-1 text-sm text-text">~50 employees</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase text-text-muted">Location</p>
            <p className="mt-1 text-sm text-text">Nassau, Bahamas</p>
          </div>
        </div>
      </div>

      {/* The Challenge */}
      <div className="mt-10">
        <h2 className="text-xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>The Challenge</h2>
        <p className="mt-3 text-text-muted leading-relaxed">
          GTS faced the same problem as every mid-size firm: talented people spending hours on
          repetitive tasks while strategic work piled up. AI tools were available but adoption
          was piecemeal, without a framework for what to automate, what to augment, and what
          to protect.
        </p>
      </div>

      {/* Implementation */}
      <div className="mt-10">
        <h2 className="text-xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>The Implementation</h2>

        <div className="mt-6 space-y-6">
          <div className="border-l-2 border-blue/30 pl-6">
            <h3 className="font-bold text-blue">Phase 1: Classification</h3>
            <p className="mt-2 text-sm text-text-muted leading-relaxed">
              Every department ran bucket workshops. The result: a master classification of 200+ recurring tasks.
              42% fell into Digital. 35% into Judgment. 23% into Contributor.
            </p>
            <div className="mt-3 flex gap-4">
              <div className="rounded-md bg-blue/10 px-3 py-2">
                <p className="text-lg font-bold text-blue">42%</p>
                <p className="text-[10px] text-text-muted">Digital</p>
              </div>
              <div className="rounded-md bg-gold/10 px-3 py-2">
                <p className="text-lg font-bold text-gold">35%</p>
                <p className="text-[10px] text-text-muted">Judgment</p>
              </div>
              <div className="rounded-md bg-teal/10 px-3 py-2">
                <p className="text-lg font-bold text-teal">23%</p>
                <p className="text-[10px] text-text-muted">Contributor</p>
              </div>
            </div>
          </div>

          <div className="border-l-2 border-gold/30 pl-6">
            <h3 className="font-bold text-gold">Phase 2: Automation</h3>
            <p className="mt-2 text-sm text-text-muted leading-relaxed">
              Built a custom platform (GTS Contributor) to manage the three-bucket workflow.
              Digitize module for process capture. Queue system for Judgment items with AI co-pilot.
              Ideas board for Contributor tracking.
            </p>
          </div>

          <div className="border-l-2 border-teal/30 pl-6">
            <h3 className="font-bold text-teal">Phase 3: Contribute</h3>
            <p className="mt-2 text-sm text-text-muted leading-relaxed">
              Launched weekly Contributor standups. Team members shifted from "I processed 50 invoices"
              to "I identified a workflow that saves 10 hours per week." The identity shift
              happened faster than expected.
            </p>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="mt-12">
        <h2 className="text-xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>The Platform</h2>
        <p className="mt-3 text-text-muted leading-relaxed">
          GTS built a purpose-built platform to run the Contributor Model. Key modules:
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {[
            { module: 'Digitize', desc: 'Process capture with voice recording, transcription, and automatic task classification.' },
            { module: 'Queue', desc: 'AI-processed judgment items with confidence scores and human approval workflow.' },
            { module: 'Ideas Board', desc: 'Contributor submissions tracked by department, category, and implementation status.' },
            { module: 'Pulse Dashboard', desc: 'Real-time visibility into bucket distribution, contributions, and automation health.' },
            { module: 'Champions Network', desc: 'Classification champions per department driving continuous improvement.' },
            { module: 'Owner Briefings', desc: 'Video updates from leadership connecting daily work to organizational vision.' },
          ].map(item => (
            <div key={item.module} className="rounded-md border border-border bg-bg-elevated p-4">
              <p className="text-sm font-medium text-text">{item.module}</p>
              <p className="mt-1 text-xs text-text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 rounded-lg border border-gold/20 bg-gold/5 p-6">
        <h3 className="font-bold text-gold">What Made It Work</h3>
        <p className="mt-2 text-sm text-text-muted leading-relaxed">
          The framework isn't a technology deployment. It's a thinking model that happens to use technology.
          GTS succeeded because they started with classification (thinking), not automation (doing).
          By the time tools were deployed, everyone understood why and what their role was.
        </p>
      </div>

      <div className="mt-10 flex gap-3">
        <button
          onClick={() => setActivePanel('principle')}
          className="rounded-md bg-gold px-5 py-2.5 text-sm font-semibold text-bg transition hover:bg-gold-light"
        >
          Start from the Beginning
        </button>
        <button
          onClick={() => setActivePanel('playbook')}
          className="rounded-md border border-border px-5 py-2.5 text-sm font-medium text-text-muted transition hover:bg-bg-elevated hover:text-text"
        >
          Back: The Playbook
        </button>
      </div>
    </div>
  );
}
