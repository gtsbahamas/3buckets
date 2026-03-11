'use client';

import type { PanelId } from '../AppShell';

export function PlaybookPanel({ setActivePanel }: { setActivePanel: (id: PanelId) => void }) {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12 lg:py-20">
      <div className="animate-fade-in">
        <p className="text-sm font-semibold uppercase tracking-widest text-gold">Daily Operations</p>
        <h1 className="mt-4 text-4xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>
          The Playbook
        </h1>
        <p className="mt-4 text-lg text-text-muted">
          What running the Contributor Model looks like day-to-day.
          Rituals, roles, and metrics that keep the system alive.
        </p>
      </div>

      {/* Daily Rhythm */}
      <div className="mt-12">
        <h2 className="text-xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>Daily Rhythm</h2>
        <div className="mt-4 space-y-3">
          {[
            { time: 'Morning', activity: 'Queue Review', desc: 'Process Judgment Bucket items. AI has prepared overnight. Human decides.' },
            { time: 'Midday', activity: 'Contributor Work', desc: 'Protected time for ideas, improvements, mentorship. No task-doing.' },
            { time: 'End of Day', activity: 'Capture', desc: 'Log contributions. What did you improve? What idea did you explore?' },
          ].map(item => (
            <div key={item.time} className="flex gap-4 rounded-md border border-border bg-bg-card p-4">
              <div className="w-20 shrink-0">
                <p className="text-xs font-semibold uppercase text-gold">{item.time}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-text">{item.activity}</p>
                <p className="mt-1 text-xs text-text-muted">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Roles */}
      <div className="mt-12">
        <h2 className="text-xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>Key Roles</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {[
            {
              role: 'Classification Champion',
              desc: 'One per department. Maintains the bucket classification. Challenges assumptions. Pushes tasks toward Digital when ready.',
            },
            {
              role: 'Queue Manager',
              desc: 'Manages the Judgment queue. Ensures items get reviewed promptly. Identifies patterns for graduation to Digital.',
            },
            {
              role: 'Contributor Coach',
              desc: 'Helps team members shift identity from task-doer to contributor. Facilitates standups. Tracks contribution patterns.',
            },
            {
              role: 'Automation Lead',
              desc: 'Technical lead for Digital Bucket execution. Builds automations. Monitors reliability. Reports hours freed.',
            },
          ].map(item => (
            <div key={item.role} className="rounded-md border border-border bg-bg-elevated p-4">
              <p className="text-sm font-medium text-gold">{item.role}</p>
              <p className="mt-2 text-xs text-text-muted leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Weekly */}
      <div className="mt-12">
        <h2 className="text-xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>Weekly Rituals</h2>
        <div className="mt-4 space-y-3">
          {[
            { name: 'Contributor Standup', freq: 'Weekly, 15 min', desc: 'Each person shares: one thing they improved, one idea they\'re exploring.' },
            { name: 'Queue Retrospective', freq: 'Weekly, 30 min', desc: 'Review Judgment queue patterns. What can graduate to Digital? What needs more human attention?' },
            { name: 'Automation Health Check', freq: 'Weekly, 15 min', desc: 'Are Digital Bucket automations running? Any failures? Any new tasks to automate?' },
          ].map(item => (
            <div key={item.name} className="rounded-md border border-border bg-bg-card p-4">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-text">{item.name}</p>
                <span className="text-xs text-text-muted">{item.freq}</span>
              </div>
              <p className="mt-2 text-xs text-text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Metrics */}
      <div className="mt-12">
        <h2 className="text-xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>Metrics That Matter</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {[
            { metric: 'Hours Freed', desc: 'Time reclaimed from Digital Bucket automation per week' },
            { metric: 'Queue Throughput', desc: 'Judgment items processed per day, average decision time' },
            { metric: 'Contributions', desc: 'Ideas submitted, improvements implemented, mentorship hours' },
            { metric: 'Graduation Rate', desc: 'Judgment tasks that moved to Digital this month' },
            { metric: 'Engagement Score', desc: 'Team satisfaction and sense of purpose (quarterly survey)' },
            { metric: 'Retention', desc: 'Are your best people staying? Contributing people don\'t leave.' },
          ].map(item => (
            <div key={item.metric} className="rounded-md border border-border bg-bg-elevated px-4 py-3">
              <p className="text-sm font-medium text-text">{item.metric}</p>
              <p className="mt-1 text-xs text-text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 flex gap-3">
        <button
          onClick={() => setActivePanel('casestudy')}
          className="rounded-md bg-gold px-5 py-2.5 text-sm font-semibold text-bg transition hover:bg-gold-light"
        >
          See It In Action: GTS Case Study
        </button>
        <button
          onClick={() => setActivePanel('psychology')}
          className="rounded-md border border-border px-5 py-2.5 text-sm font-medium text-text-muted transition hover:bg-bg-elevated hover:text-text"
        >
          Back: The Psychology
        </button>
      </div>
    </div>
  );
}
