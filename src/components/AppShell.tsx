'use client';

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';

// --- Panel IDs and Navigation ---

export const PANELS = [
  { id: 'principle', label: 'The Principle', icon: '◈', section: 'framework' },
  { id: 'digital', label: 'Digital Bucket', icon: '⚡', section: 'framework' },
  { id: 'judgment', label: 'Judgment Bucket', icon: '⚖️', section: 'framework' },
  { id: 'contributor', label: 'Contributor Bucket', icon: '💡', section: 'framework' },
  { id: 'rollout', label: 'The 90-Day Rollout', icon: '🚀', section: 'playbook' },
  { id: 'psychology', label: 'The Psychology', icon: '🧠', section: 'playbook' },
  { id: 'playbook', label: 'The Playbook', icon: '📋', section: 'playbook' },
  { id: 'casestudy', label: 'Case Study: GTS', icon: '🏢', section: 'evidence' },
] as const;

export type PanelId = (typeof PANELS)[number]['id'];

type PanelContextType = {
  activePanel: PanelId;
  setActivePanel: (id: PanelId) => void;
  direction: 'left' | 'right';
};

const PanelContext = createContext<PanelContextType>({
  activePanel: 'principle',
  setActivePanel: () => {},
  direction: 'right',
});

export const usePanelContext = () => useContext(PanelContext);

// --- Sidebar ---

function Sidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { activePanel, setActivePanel } = usePanelContext();

  const sections = [
    { label: 'The Framework', panels: PANELS.filter(p => p.section === 'framework') },
    { label: 'Implementation', panels: PANELS.filter(p => p.section === 'playbook') },
    { label: 'Evidence', panels: PANELS.filter(p => p.section === 'evidence') },
  ];

  const handleClick = (id: PanelId) => {
    setActivePanel(id);
    onClose();
  };

  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-border bg-bg-card transition-transform duration-300 lg:translate-x-0 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 border-b border-border px-5 py-5">
          <span className="text-2xl font-bold text-gold" style={{ fontFamily: 'var(--font-serif)' }}>
            3 Buckets
          </span>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto px-3 py-4">
          {sections.map(section => (
            <div key={section.label} className="mb-4">
              <div className="mb-1.5 px-3 text-[10px] font-semibold uppercase tracking-wider text-text-muted/60">
                {section.label}
              </div>
              <div className="space-y-0.5">
                {section.panels.map(panel => (
                  <button
                    key={panel.id}
                    onClick={() => handleClick(panel.id)}
                    className={`flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition ${
                      activePanel === panel.id
                        ? 'bg-gold/10 text-gold'
                        : 'text-text-muted hover:bg-bg-elevated hover:text-text'
                    }`}
                  >
                    <span className="text-base">{panel.icon}</span>
                    <span>{panel.label}</span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </nav>

        {/* Footer */}
        <div className="border-t border-border px-5 py-4">
          <a
            href="/presentations"
            className="block text-sm text-gold hover:text-gold-light transition mb-3"
          >
            View Presentations →
          </a>
          <p className="text-xs text-text-muted">
            The Contributor Framework
          </p>
          <p className="mt-1 text-[10px] text-text-muted/60">
            by Ty Wells &middot; GTS Bahamas
          </p>
        </div>
      </aside>
    </>
  );
}

// --- Mobile Header ---

function MobileHeader({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <header className="fixed inset-x-0 top-0 z-30 flex h-14 items-center border-b border-border bg-bg-card px-4 lg:hidden">
      <button
        onClick={onMenuClick}
        className="flex h-10 w-10 items-center justify-center rounded-md text-text-muted hover:bg-bg-elevated hover:text-text"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>
      <span className="ml-3 font-bold text-gold" style={{ fontFamily: 'var(--font-serif)' }}>
        3 Buckets
      </span>
    </header>
  );
}

// --- Shell ---

export function AppShell({ children }: { children: ReactNode }) {
  const [activePanel, setActivePanelRaw] = useState<PanelId>('principle');
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [drawerOpen, setDrawerOpen] = useState(false);

  const setActivePanel = useCallback((id: PanelId) => {
    const currentIdx = PANELS.findIndex(p => p.id === activePanel);
    const nextIdx = PANELS.findIndex(p => p.id === id);
    setDirection(nextIdx >= currentIdx ? 'right' : 'left');
    setActivePanelRaw(id);
  }, [activePanel]);

  return (
    <PanelContext.Provider value={{ activePanel, setActivePanel, direction }}>
      <div className="flex h-screen">
        <Sidebar open={drawerOpen} onClose={() => setDrawerOpen(false)} />
        <MobileHeader onMenuClick={() => setDrawerOpen(true)} />
        <main className="flex h-screen flex-1 flex-col overflow-hidden lg:ml-64">
          <div className="h-full pt-14 lg:pt-0">
            {children}
          </div>
        </main>
      </div>
    </PanelContext.Provider>
  );
}
