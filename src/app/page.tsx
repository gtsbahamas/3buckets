'use client';

import { AppShell, usePanelContext } from '@/components/AppShell';
import { PrinciplePanel } from '@/components/panels/PrinciplePanel';
import { DigitalPanel } from '@/components/panels/DigitalPanel';
import { JudgmentPanel } from '@/components/panels/JudgmentPanel';
import { ContributorPanel } from '@/components/panels/ContributorPanel';
import { RolloutPanel } from '@/components/panels/RolloutPanel';
import { PsychologyPanel } from '@/components/panels/PsychologyPanel';
import { PlaybookPanel } from '@/components/panels/PlaybookPanel';
import { CaseStudyPanel } from '@/components/panels/CaseStudyPanel';

function PanelRouter() {
  const { activePanel, setActivePanel, direction } = usePanelContext();

  const animClass = direction === 'right' ? 'animate-slide-in-right' : 'animate-slide-in-left';

  return (
    <div key={activePanel} className={animClass}>
      {activePanel === 'principle' && <PrinciplePanel setActivePanel={setActivePanel} />}
      {activePanel === 'digital' && <DigitalPanel setActivePanel={setActivePanel} />}
      {activePanel === 'judgment' && <JudgmentPanel setActivePanel={setActivePanel} />}
      {activePanel === 'contributor' && <ContributorPanel setActivePanel={setActivePanel} />}
      {activePanel === 'rollout' && <RolloutPanel setActivePanel={setActivePanel} />}
      {activePanel === 'psychology' && <PsychologyPanel setActivePanel={setActivePanel} />}
      {activePanel === 'playbook' && <PlaybookPanel setActivePanel={setActivePanel} />}
      {activePanel === 'casestudy' && <CaseStudyPanel setActivePanel={setActivePanel} />}
    </div>
  );
}

export default function Home() {
  return (
    <AppShell>
      <PanelRouter />
    </AppShell>
  );
}
