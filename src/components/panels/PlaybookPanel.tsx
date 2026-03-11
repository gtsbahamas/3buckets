'use client';

import type { PanelId } from '../AppShell';
import { Expandable } from '../Expandable';

export function PlaybookPanel({ setActivePanel }: { setActivePanel: (id: PanelId) => void }) {
  return (
    <div className="flex h-full flex-col overflow-y-auto px-6 py-6 lg:py-8">
      <div className="mx-auto w-full max-w-3xl flex-1">
        <p className="text-xs font-semibold uppercase tracking-widest text-gold">Daily Operations</p>
        <h1 className="mt-3 text-3xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>
          The Playbook
        </h1>
        <p className="mt-2 text-sm text-text-muted">
          What running the Contributor Model looks like day-to-day.
        </p>

        {/* Daily rhythm — compact, always visible */}
        <div className="mt-4 space-y-2">
          {[
            { time: 'Morning', activity: 'Queue Review', desc: 'Process Judgment items. AI prepared overnight. Human decides.' },
            { time: 'Midday', activity: 'Contributor Work', desc: 'Protected time for ideas, improvements, mentorship.' },
            { time: 'End of Day', activity: 'Capture', desc: 'Log contributions. What did you improve today?' },
          ].map(item => (
            <div key={item.time} className="flex gap-3 rounded-md border border-border bg-bg-card p-2.5">
              <div className="w-16 shrink-0">
                <p className="text-[11px] font-semibold uppercase text-gold">{item.time}</p>
              </div>
              <div>
                <p className="text-xs font-medium text-text">{item.activity}</p>
                <p className="mt-0.5 text-[11px] text-text-muted">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <Expandable title="Key Roles" className="mt-4">
          <div className="grid gap-2 sm:grid-cols-2">
            {[
              { role: 'Classification Champion', desc: 'One per department. Maintains bucket classification. Pushes tasks toward Digital.' },
              { role: 'Queue Manager', desc: 'Manages Judgment queue. Ensures timely reviews. Identifies graduation patterns.' },
              { role: 'Contributor Coach', desc: 'Helps team shift identity. Facilitates standups. Tracks contribution patterns.' },
              { role: 'Automation Lead', desc: 'Builds Digital Bucket automations. Monitors reliability. Reports hours freed.' },
            ].map(item => (
              <div key={item.role} className="rounded-md border border-border bg-bg-elevated p-2.5">
                <p className="text-xs font-medium text-gold">{item.role}</p>
                <p className="mt-0.5 text-[11px] text-text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </Expandable>

        <Expandable title="Weekly Rituals" className="mt-3">
          <div className="space-y-2">
            {[
              { name: 'Contributor Standup', freq: '15 min', desc: 'Each person shares one improvement and one idea.' },
              { name: 'Queue Retrospective', freq: '30 min', desc: 'Review patterns. What can graduate to Digital?' },
              { name: 'Automation Health Check', freq: '15 min', desc: 'Digital automations running? Failures? New tasks to automate?' },
            ].map(item => (
              <div key={item.name} className="flex items-baseline justify-between gap-2 text-xs">
                <div>
                  <span className="font-medium text-text">{item.name}</span>
                  <span className="text-text-muted"> — {item.desc}</span>
                </div>
                <span className="shrink-0 text-[11px] text-text-muted">{item.freq}</span>
              </div>
            ))}
          </div>
        </Expandable>

        <Expandable title="Metrics That Matter" className="mt-3">
          <div className="grid gap-2 sm:grid-cols-2">
            {[
              { metric: 'Hours Freed', desc: 'Time reclaimed from Digital automation per week' },
              { metric: 'Queue Throughput', desc: 'Judgment items processed per day' },
              { metric: 'Contributions', desc: 'Ideas submitted, improvements implemented' },
              { metric: 'Graduation Rate', desc: 'Judgment tasks moved to Digital this month' },
              { metric: 'Engagement Score', desc: 'Team satisfaction and sense of purpose' },
              { metric: 'Retention', desc: 'Contributing people don\'t leave' },
            ].map(item => (
              <div key={item.metric} className="text-xs">
                <span className="font-medium text-text">{item.metric}</span>
                <span className="text-text-muted"> — {item.desc}</span>
              </div>
            ))}
          </div>
        </Expandable>

        <div className="mt-6 flex gap-3">
          <button onClick={() => setActivePanel('casestudy')} className="rounded-md bg-gold px-4 py-2 text-sm font-semibold text-bg transition hover:bg-gold-light">
            GTS Case Study
          </button>
          <button onClick={() => setActivePanel('psychology')} className="rounded-md border border-border px-4 py-2 text-sm font-medium text-text-muted transition hover:bg-bg-elevated hover:text-text">
            Back
          </button>
        </div>
      </div>
    </div>
  );
}
