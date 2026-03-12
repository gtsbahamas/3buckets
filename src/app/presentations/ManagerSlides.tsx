'use client';

import { SlideEngine } from './SlideEngine';

export function ManagerSlides() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: managerCSS }} />
      <SlideEngine totalSlides={8}>
        {({ currentSlide, animatedSlides, getSlideStyle, a, d }) => (
          <main id="mgr-slideshow">

            {/* Slide 1: The Buckets Recap */}
            <section className={`mgr-slide ${currentSlide === 0 ? 'active' : ''}`} style={getSlideStyle(0)}>
              <h2 className={`mgr-headline ${a(0, 0)}`} style={d(0)}>
                You know the <span className="gold">three buckets</span>
              </h2>
              <div className={`mgr-bucket-recap mgr-anim-scale ${a(0, 1)}`} style={d(1)}>
                <div className="recap-bucket digital">
                  <div className="recap-icon">&#x1F4BB;</div>
                  <div className="recap-label">Digital</div>
                  <div className="recap-arrow">&#x2193;</div>
                  <div className="recap-action">System handles</div>
                </div>
                <div className="recap-flow">&#x2192;</div>
                <div className="recap-bucket judgment">
                  <div className="recap-icon">&#x1F9E0;</div>
                  <div className="recap-label">Judgment</div>
                  <div className="recap-arrow">&#x2193;</div>
                  <div className="recap-action">Queue decides</div>
                </div>
                <div className="recap-flow">&#x2192;</div>
                <div className="recap-bucket contributor">
                  <div className="recap-icon">&#x1F4A1;</div>
                  <div className="recap-label">Contributor</div>
                  <div className="recap-arrow">&#x2191;</div>
                  <div className="recap-action">Where growth lives</div>
                </div>
              </div>
              <p className={`mgr-subtext ${a(0, 2)}`} style={d(2)}>
                Your team&apos;s work changes. <strong>So does yours.</strong>
              </p>
            </section>

            {/* Slide 2: The Questions */}
            <section className={`mgr-slide ${currentSlide === 1 ? 'active' : ''}`} style={getSlideStyle(1)}>
              <h2 className={`mgr-headline ${a(1, 0)}`} style={d(0)}>
                The questions you&apos;re <span className="gold">already asking</span>
              </h2>
              <div className="mgr-questions-grid">
                <div className={`mgr-question-card ${a(1, 1)}`} style={d(1)}>
                  <div className="q-icon">
                    <svg viewBox="0 0 48 48" width="48" height="48">
                      <circle cx="24" cy="24" r="22" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.3"/>
                      <path d="M24 14v8M24 30v2" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                      <circle cx="24" cy="38" r="2" fill="currentColor"/>
                    </svg>
                  </div>
                  <div className="q-text">If I&apos;m not assigning tasks, what&apos;s my role?</div>
                </div>
                <div className={`mgr-question-card ${a(1, 2)}`} style={d(2)}>
                  <div className="q-icon">
                    <svg viewBox="0 0 48 48" width="48" height="48">
                      <rect x="8" y="12" width="32" height="24" rx="3" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.3"/>
                      <path d="M14 22h20M14 28h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <circle cx="38" cy="28" r="6" fill="none" stroke="currentColor" strokeWidth="2"/>
                      <path d="M36 28l2 2 3-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="q-text">How do I evaluate my team without task metrics?</div>
                </div>
                <div className={`mgr-question-card ${a(1, 3)}`} style={d(3)}>
                  <div className="q-icon">
                    <svg viewBox="0 0 48 48" width="48" height="48">
                      <path d="M24 8L24 20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.3"/>
                      <path d="M16 28c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="currentColor" strokeWidth="2" fill="none"/>
                      <circle cx="24" cy="36" r="6" fill="none" stroke="currentColor" strokeWidth="2"/>
                      <path d="M22 36h4M24 34v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className="q-text">Am I losing authority or control?</div>
                </div>
                <div className={`mgr-question-card ${a(1, 4)}`} style={d(4)}>
                  <div className="q-icon">
                    <svg viewBox="0 0 48 48" width="48" height="48">
                      <circle cx="16" cy="20" r="6" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.3"/>
                      <circle cx="32" cy="20" r="6" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.3"/>
                      <circle cx="24" cy="34" r="6" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.3"/>
                      <path d="M20 24l4 6M28 24l-4 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className="q-text">Is my team ready for this?</div>
                </div>
              </div>
              <p className={`mgr-quote ${a(1, 5)}`} style={d(5)}>
                Fair questions. Let&apos;s answer every one.
              </p>
            </section>

            {/* Slide 3: The Shift */}
            <section className={`mgr-slide ${currentSlide === 2 ? 'active' : ''}`} style={getSlideStyle(2)}>
              <h2 className={`mgr-headline ${a(2, 0)}`} style={d(0)}>
                From <span className="rose">directing</span> to <span className="teal">facilitating</span>
              </h2>
              <div className="mgr-shift-visual">
                <div className={`mgr-shift-side before mgr-anim-left ${a(2, 1)}`} style={d(1)}>
                  <div className="shift-header">
                    <svg viewBox="0 0 32 32" width="28" height="28"><path d="M16 4l12 8v16H4V12z" fill="none" stroke="currentColor" strokeWidth="2"/><rect x="12" y="18" width="8" height="10" fill="none" stroke="currentColor" strokeWidth="2"/></svg>
                    <span>Traditional Manager</span>
                  </div>
                  <div className="shift-flow">
                    <div className="flow-node">Assign tasks</div>
                    <div className="flow-arrow">&#x2193;</div>
                    <div className="flow-node">Monitor progress</div>
                    <div className="flow-arrow">&#x2193;</div>
                    <div className="flow-node">Review output</div>
                    <div className="flow-arrow">&#x2193;</div>
                    <div className="flow-node">Report upward</div>
                  </div>
                </div>

                <div className={`mgr-shift-arrow mgr-anim-scale ${a(2, 2)}`} style={d(2)}>
                  <svg viewBox="0 0 60 40" width="60" height="40">
                    <defs>
                      <linearGradient id="arrow-grad" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="hsl(350 89% 60%)" stopOpacity="0.6"/>
                        <stop offset="100%" stopColor="hsl(160 84% 39%)" stopOpacity="0.6"/>
                      </linearGradient>
                    </defs>
                    <path d="M5 20h40M40 12l10 8-10 8" stroke="url(#arrow-grad)" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>

                <div className={`mgr-shift-side after mgr-anim-right ${a(2, 3)}`} style={d(3)}>
                  <div className="shift-header">
                    <svg viewBox="0 0 32 32" width="28" height="28"><circle cx="16" cy="16" r="12" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="16" cy="16" r="4" fill="currentColor" opacity="0.5"/><path d="M16 4v8M16 20v8M4 16h8M20 16h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/></svg>
                    <span>Contributor Facilitator</span>
                  </div>
                  <div className="shift-flow">
                    <div className="flow-node highlight">Facilitate ideas</div>
                    <div className="flow-arrow">&#x2193;</div>
                    <div className="flow-node highlight">Guard quality</div>
                    <div className="flow-arrow">&#x2193;</div>
                    <div className="flow-node highlight">Measure impact</div>
                    <div className="flow-arrow">&#x2193;</div>
                    <div className="flow-node highlight">Grow people</div>
                  </div>
                </div>
              </div>
              <p className={`mgr-quote ${a(2, 4)}`} style={d(4)}>
                Not less responsibility. Higher-leverage responsibility.
              </p>
            </section>

            {/* Slide 4: Your Toolkit */}
            <section className={`mgr-slide ${currentSlide === 3 ? 'active' : ''}`} style={getSlideStyle(3)}>
              <h2 className={`mgr-headline ${a(3, 0)}`} style={d(0)}>
                Your <span className="gold">toolkit</span>
              </h2>
              <div className="mgr-toolkit-grid">
                <div className={`mgr-tool-card ${a(3, 1)}`} style={d(1)}>
                  <div className="tool-icon-wrap decide">
                    <svg viewBox="0 0 48 48" width="44" height="44">
                      <circle cx="24" cy="24" r="18" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.3"/>
                      <path d="M16 24l6 6 12-12" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="tool-label">Decide</div>
                  <div className="tool-desc">Approve, refine, or kill ideas. You&apos;re the quality gate.</div>
                </div>
                <div className={`mgr-tool-card ${a(3, 2)}`} style={d(2)}>
                  <div className="tool-icon-wrap assign">
                    <svg viewBox="0 0 48 48" width="44" height="44">
                      <circle cx="18" cy="16" r="6" fill="none" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="34" cy="16" r="6" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.3"/>
                      <path d="M12 38c0-6 4-10 10-10" stroke="currentColor" strokeWidth="2" fill="none"/>
                      <path d="M28 38c0-6 4-10 10-10" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.3"/>
                      <path d="M20 26l6-2 6 2" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.5"/>
                    </svg>
                  </div>
                  <div className="tool-label">Assign</div>
                  <div className="tool-desc">Match ideas to the right contributor on your team.</div>
                </div>
                <div className={`mgr-tool-card ${a(3, 3)}`} style={d(3)}>
                  <div className="tool-icon-wrap measure">
                    <svg viewBox="0 0 48 48" width="44" height="44">
                      <rect x="6" y="28" width="8" height="12" rx="2" fill="currentColor" opacity="0.2"/>
                      <rect x="18" y="20" width="8" height="20" rx="2" fill="currentColor" opacity="0.4"/>
                      <rect x="30" y="10" width="8" height="30" rx="2" fill="currentColor" opacity="0.6"/>
                      <path d="M10 26l10-8 10 4 10-12" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="tool-label">Measure</div>
                  <div className="tool-desc">Record real impact. Dollars saved. Hours freed. Revenue gained.</div>
                </div>
                <div className={`mgr-tool-card ${a(3, 4)}`} style={d(4)}>
                  <div className="tool-icon-wrap facilitate">
                    <svg viewBox="0 0 48 48" width="44" height="44">
                      <circle cx="24" cy="14" r="5" fill="none" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="12" cy="32" r="5" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.5"/>
                      <circle cx="36" cy="32" r="5" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.5"/>
                      <path d="M20 18l-6 10M28 18l6 10M15 34h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 3"/>
                    </svg>
                  </div>
                  <div className="tool-label">Facilitate</div>
                  <div className="tool-desc">Run rooms where ideas surface. Coach your contributors.</div>
                </div>
              </div>
              <p className={`mgr-quote ${a(3, 5)}`} style={d(5)}>
                You&apos;re not losing tools. You&apos;re trading a clipboard for a dashboard.
              </p>
            </section>

            {/* Slide 5: A Manager's Day */}
            <section className={`mgr-slide ${currentSlide === 4 ? 'active' : ''}`} style={getSlideStyle(4)}>
              <h2 className={`mgr-headline ${a(4, 0)}`} style={d(0)}>
                A manager&apos;s day in <span className="gold">the new model</span>
              </h2>
              <div className="mgr-day-timeline">
                <div className={`mgr-day-step ${a(4, 1)}`} style={d(1)}>
                  <div className="day-time-block">
                    <span className="day-emoji">&#x2615;</span>
                    <span className="day-time">8:00 AM</span>
                  </div>
                  <div className="day-content">
                    <div className="day-action">Lead standup</div>
                    <div className="day-detail">&quot;What irks you? What would you fix?&quot;</div>
                    <div className="day-role-badge facilitator">Facilitator</div>
                  </div>
                </div>
                <div className="day-connector"></div>
                <div className={`mgr-day-step ${a(4, 2)}`} style={d(2)}>
                  <div className="day-time-block">
                    <span className="day-emoji">&#x1F50D;</span>
                    <span className="day-time">8:30 AM</span>
                  </div>
                  <div className="day-content">
                    <div className="day-action">Clear your queue</div>
                    <div className="day-detail">3 items need your judgment. Review, decide, done.</div>
                    <div className="day-role-badge decider">Decider</div>
                  </div>
                </div>
                <div className="day-connector"></div>
                <div className={`mgr-day-step ${a(4, 3)}`} style={d(3)}>
                  <div className="day-time-block">
                    <span className="day-emoji">&#x2705;</span>
                    <span className="day-time">9:00 AM</span>
                  </div>
                  <div className="day-content">
                    <div className="day-action">Review the pipeline</div>
                    <div className="day-detail">2 ideas evaluated by AI. Approve, refine, or kill.</div>
                    <div className="day-role-badge decider">Quality Gate</div>
                  </div>
                </div>
                <div className="day-connector"></div>
                <div className={`mgr-day-step ${a(4, 4)}`} style={d(4)}>
                  <div className="day-time-block">
                    <span className="day-emoji">&#x1F91D;</span>
                    <span className="day-time">10:00 AM</span>
                  </div>
                  <div className="day-content">
                    <div className="day-action">Assign and coach</div>
                    <div className="day-detail">Match an approved idea to a contributor. Set milestones.</div>
                    <div className="day-role-badge assigner">Assigner</div>
                  </div>
                </div>
                <div className="day-connector"></div>
                <div className={`mgr-day-step ${a(4, 5)}`} style={d(5)}>
                  <div className="day-time-block">
                    <span className="day-emoji">&#x1F4A1;</span>
                    <span className="day-time">Rest of day</span>
                  </div>
                  <div className="day-content">
                    <div className="day-action">Contribute</div>
                    <div className="day-detail">You&apos;re a contributor too. Your ideas count the same.</div>
                    <div className="day-role-badge contributor-badge">Contributor</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Slide 6: The Pipeline */}
            <section className={`mgr-slide ${currentSlide === 5 ? 'active' : ''}`} style={getSlideStyle(5)}>
              <h2 className={`mgr-headline ${a(5, 0)}`} style={d(0)}>
                The idea pipeline. <span className="gold">Your touchpoints.</span>
              </h2>
              <div className={`mgr-pipeline mgr-anim-scale ${a(5, 1)}`} style={d(1)}>
                <div className="pipeline-stage">
                  <div className="stage-dot team">&#x1F4AC;</div>
                  <div className="stage-label">Raw idea</div>
                  <div className="stage-who">Team submits</div>
                </div>
                <div className="pipeline-arrow">&#x2192;</div>
                <div className="pipeline-stage">
                  <div className="stage-dot ai">&#x1F916;</div>
                  <div className="stage-label">AI shapes</div>
                  <div className="stage-who">System refines</div>
                </div>
                <div className="pipeline-arrow">&#x2192;</div>
                <div className="pipeline-stage">
                  <div className="stage-dot ai">&#x1F4CA;</div>
                  <div className="stage-label">AI evaluates</div>
                  <div className="stage-who">Scored 1-10</div>
                </div>
                <div className="pipeline-arrow">&#x2192;</div>
                <div className="pipeline-stage manager-stage">
                  <div className="stage-dot you">&#x2705;</div>
                  <div className="stage-label">You decide</div>
                  <div className="stage-who">Keep / Kill / Refine</div>
                  <div className="your-badge">YOUR CALL</div>
                </div>
                <div className="pipeline-arrow">&#x2192;</div>
                <div className="pipeline-stage manager-stage">
                  <div className="stage-dot you">&#x1F91D;</div>
                  <div className="stage-label">You assign</div>
                  <div className="stage-who">Right person, milestones</div>
                  <div className="your-badge">YOUR CALL</div>
                </div>
                <div className="pipeline-arrow">&#x2192;</div>
                <div className="pipeline-stage">
                  <div className="stage-dot team">&#x1F6E0;</div>
                  <div className="stage-label">In progress</div>
                  <div className="stage-who">Contributor builds</div>
                </div>
                <div className="pipeline-arrow">&#x2192;</div>
                <div className="pipeline-stage manager-stage">
                  <div className="stage-dot you">&#x1F4B0;</div>
                  <div className="stage-label">You measure</div>
                  <div className="stage-who">$$ saved, hrs freed</div>
                  <div className="your-badge">YOUR CALL</div>
                </div>
              </div>
              <p className={`mgr-subtext ${a(5, 2)}`} style={d(2)}>
                AI handles the analysis. Your team builds. <strong>You make the calls that matter.</strong>
              </p>
            </section>

            {/* Slide 7: What You See */}
            <section className={`mgr-slide ${currentSlide === 6 ? 'active' : ''}`} style={getSlideStyle(6)}>
              <h2 className={`mgr-headline ${a(6, 0)}`} style={d(0)}>
                Your <span className="gold">dashboard</span>
              </h2>
              <div className={`mgr-dashboard-mock ${a(6, 1)}`} style={d(1)}>
                {/* Mini team metrics */}
                <div className="mock-section">
                  <div className="mock-header">Team Bucket Ratios</div>
                  <div className="mock-bars">
                    <div className="mock-member">
                      <span className="mock-name">Sales</span>
                      <div className="mock-bar-track">
                        <div className="mock-bar-fill digital-fill" style={{width: '15%'}}></div>
                        <div className="mock-bar-fill judgment-fill" style={{width: '25%'}}></div>
                        <div className="mock-bar-fill contributor-fill" style={{width: '60%'}}></div>
                      </div>
                    </div>
                    <div className="mock-member">
                      <span className="mock-name">Cert Finance</span>
                      <div className="mock-bar-track">
                        <div className="mock-bar-fill digital-fill" style={{width: '20%'}}></div>
                        <div className="mock-bar-fill judgment-fill" style={{width: '35%'}}></div>
                        <div className="mock-bar-fill contributor-fill" style={{width: '45%'}}></div>
                      </div>
                    </div>
                    <div className="mock-member">
                      <span className="mock-name">Security</span>
                      <div className="mock-bar-track">
                        <div className="mock-bar-fill digital-fill" style={{width: '10%'}}></div>
                        <div className="mock-bar-fill judgment-fill" style={{width: '30%'}}></div>
                        <div className="mock-bar-fill contributor-fill" style={{width: '60%'}}></div>
                      </div>
                    </div>
                    <div className="mock-member">
                      <span className="mock-name">Operations</span>
                      <div className="mock-bar-track">
                        <div className="mock-bar-fill digital-fill" style={{width: '25%'}}></div>
                        <div className="mock-bar-fill judgment-fill" style={{width: '30%'}}></div>
                        <div className="mock-bar-fill contributor-fill" style={{width: '45%'}}></div>
                      </div>
                    </div>
                  </div>
                  <div className="mock-legend">
                    <span className="legend-item"><span className="legend-dot digital-dot"></span> Digital</span>
                    <span className="legend-item"><span className="legend-dot judgment-dot"></span> Judgment</span>
                    <span className="legend-item"><span className="legend-dot contributor-dot"></span> Contributor</span>
                  </div>
                </div>
                {/* Pipeline counts */}
                <div className="mock-section pipeline-counts">
                  <div className="mock-header">Idea Pipeline</div>
                  <div className="pipeline-mini">
                    <div className="pmini"><span className="pmini-num">4</span><span className="pmini-label">Raw</span></div>
                    <div className="pmini"><span className="pmini-num">2</span><span className="pmini-label">Shaping</span></div>
                    <div className="pmini highlight"><span className="pmini-num">3</span><span className="pmini-label">Needs Decision</span></div>
                    <div className="pmini"><span className="pmini-num">5</span><span className="pmini-label">In Progress</span></div>
                    <div className="pmini shipped"><span className="pmini-num">8</span><span className="pmini-label">Shipped</span></div>
                  </div>
                </div>
                {/* Impact */}
                <div className="mock-section impact-section">
                  <div className="mock-header">Impact This Month</div>
                  <div className="impact-metrics">
                    <div className="impact-card">
                      <span className="impact-num">$4,200</span>
                      <span className="impact-label">Saved</span>
                    </div>
                    <div className="impact-card">
                      <span className="impact-num">32 hrs</span>
                      <span className="impact-label">Freed</span>
                    </div>
                    <div className="impact-card">
                      <span className="impact-num">3</span>
                      <span className="impact-label">Process improvements</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className={`mgr-subtext ${a(6, 2)}`} style={d(2)}>
                Real numbers. Real accountability. <strong>Better than a spreadsheet.</strong>
              </p>
            </section>

            {/* Slide 8: Your Move */}
            <section className={`mgr-slide ${currentSlide === 7 ? 'active' : ''}`} style={getSlideStyle(7)}>
              <div className={`mgr-closing-glow mgr-anim-fade ${a(7, 0)}`} style={d(0)}></div>
              <h2 className={`mgr-headline ${a(7, 1)}`} style={d(1)}>
                You&apos;re not losing your role.
              </h2>
              <h2 className={`mgr-headline sub ${a(7, 2)}`} style={d(2)}>
                You&apos;re <span className="gold">upgrading it.</span>
              </h2>
              <div className={`mgr-upgrade-visual ${a(7, 3)}`} style={d(3)}>
                <div className="upgrade-from">
                  <div className="upgrade-icon">&#x1F4CB;</div>
                  <div className="upgrade-label">Task tracker</div>
                </div>
                <div className="upgrade-arrow">
                  <svg viewBox="0 0 80 24" width="80" height="24">
                    <path d="M5 12h60M60 6l10 6-10 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="upgrade-to">
                  <div className="upgrade-icon">&#x1F680;</div>
                  <div className="upgrade-label">Growth driver</div>
                </div>
              </div>
              <div className={`mgr-final-points ${a(7, 4)}`} style={d(4)}>
                <div className="final-point">
                  <span className="fp-icon">&#x2705;</span>
                  <span>Your decisions drive what gets built</span>
                </div>
                <div className="final-point">
                  <span className="fp-icon">&#x2705;</span>
                  <span>Your measurements prove the value</span>
                </div>
                <div className="final-point">
                  <span className="fp-icon">&#x2705;</span>
                  <span>Your team grows because you lead differently</span>
                </div>
              </div>
              <p className={`mgr-quote ${a(7, 5)}`} style={d(5)}>
                We&apos;re all contributors. You just happen to be the ones
                who unlock everyone else.
              </p>
            </section>

          </main>
        )}
      </SlideEngine>
    </>
  );
}

const managerCSS = `
/* Manager Walkthrough Slides */
#mgr-slideshow {
  position: relative; width: 100%; height: 100%; overflow: hidden;
}

.mgr-slide {
  position: absolute; inset: 0;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  padding: 2rem 4rem; opacity: 0; pointer-events: none;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;
}
.mgr-slide.active { opacity: 1; pointer-events: auto; }

/* Animations */
.animate-in { animation: mgr-enter-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
.mgr-anim-fade.animate-in { animation: mgr-enter-fade 0.8s ease forwards; }
.mgr-anim-scale.animate-in { animation: mgr-enter-scale 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
.mgr-anim-left.animate-in { animation: mgr-enter-left 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
.mgr-anim-right.animate-in { animation: mgr-enter-right 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; }

.mgr-slide .mgr-headline:not(.animate-in),
.mgr-slide .mgr-subtext:not(.animate-in),
.mgr-slide .mgr-quote:not(.animate-in),
.mgr-slide .mgr-bucket-recap:not(.animate-in),
.mgr-slide .mgr-question-card:not(.animate-in),
.mgr-slide .mgr-shift-side:not(.animate-in),
.mgr-slide .mgr-shift-arrow:not(.animate-in),
.mgr-slide .mgr-tool-card:not(.animate-in),
.mgr-slide .mgr-day-step:not(.animate-in),
.mgr-slide .mgr-pipeline:not(.animate-in),
.mgr-slide .mgr-dashboard-mock:not(.animate-in),
.mgr-slide .mgr-upgrade-visual:not(.animate-in),
.mgr-slide .mgr-final-points:not(.animate-in),
.mgr-slide .mgr-closing-glow:not(.animate-in) {
  opacity: 0; transform: translateY(20px);
}
.mgr-slide .mgr-anim-scale:not(.animate-in) { opacity: 0; transform: scale(0.8); }
.mgr-slide .mgr-anim-fade:not(.animate-in) { opacity: 0; transform: none; }
.mgr-slide .mgr-anim-left:not(.animate-in) { opacity: 0; transform: translateX(-30px); }
.mgr-slide .mgr-anim-right:not(.animate-in) { opacity: 0; transform: translateX(30px); }

@keyframes mgr-enter-up { to { opacity: 1; transform: translateY(0); } }
@keyframes mgr-enter-fade { to { opacity: 1; } }
@keyframes mgr-enter-scale { to { opacity: 1; transform: scale(1); } }
@keyframes mgr-enter-left { to { opacity: 1; transform: translateX(0); } }
@keyframes mgr-enter-right { to { opacity: 1; transform: translateX(0); } }

/* Typography */
.mgr-headline {
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(2rem, 5vw, 3.5rem); font-weight: 700;
  line-height: 1.15; text-align: center; max-width: 900px;
  color: var(--fg, hsl(220 10% 90%));
}
.mgr-headline.sub { font-size: clamp(1.8rem, 4vw, 3rem); margin-top: 0.5rem; }
.mgr-headline .gold { color: var(--gold, hsl(38 92% 50%)); }
.mgr-headline .rose { color: var(--rose, hsl(350 89% 60%)); }
.mgr-headline .teal { color: var(--teal, hsl(160 84% 39%)); }
.mgr-headline .blue { color: var(--blue-light, hsl(213 66% 55%)); }

.mgr-subtext {
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: var(--fg-muted, hsl(220 10% 55%));
  text-align: center; max-width: 700px; line-height: 1.6; margin-top: 1.5rem;
}
.mgr-subtext strong { color: var(--fg, hsl(220 10% 90%)); }

.mgr-quote {
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(1.1rem, 2.5vw, 1.6rem); font-style: italic;
  color: var(--gold, hsl(38 92% 50%));
  text-align: center; max-width: 700px; line-height: 1.5;
  margin-top: 2rem; position: relative; padding: 0 2rem;
}
.mgr-quote::before {
  content: '\\201C'; font-size: 3rem; position: absolute;
  left: -0.25rem; top: -0.75rem;
  color: var(--gold, hsl(38 92% 50%)); opacity: 0.3;
}

/* Slide 1: Bucket Recap */
.mgr-bucket-recap {
  display: flex; align-items: center; gap: 1rem; margin: 2.5rem 0 1.5rem;
}
.recap-bucket {
  display: flex; flex-direction: column; align-items: center; gap: 0.4rem;
  padding: 1.25rem 1.5rem; border-radius: 12px;
  border: 1px solid var(--border, hsl(220 13% 18%));
  background: var(--surface, hsl(220 13% 12%));
  min-width: 130px;
}
.recap-icon { font-size: 2rem; }
.recap-label { font-family: var(--font-serif, Georgia, serif); font-weight: 700; font-size: 1rem; }
.recap-bucket.digital .recap-label { color: var(--blue-light, hsl(213 66% 55%)); }
.recap-bucket.judgment .recap-label { color: var(--gold, hsl(38 92% 50%)); }
.recap-bucket.contributor .recap-label { color: var(--teal, hsl(160 84% 39%)); }
.recap-arrow { font-size: 1.2rem; }
.recap-bucket.digital .recap-arrow,
.recap-bucket.judgment .recap-arrow { color: var(--rose, hsl(350 89% 60%)); }
.recap-bucket.contributor .recap-arrow { color: var(--teal, hsl(160 84% 39%)); }
.recap-action { font-size: 0.75rem; color: var(--fg-muted, hsl(220 10% 55%)); }
.recap-flow { font-size: 1.5rem; color: var(--fg-muted, hsl(220 10% 55%)); opacity: 0.4; }

/* Slide 2: Questions */
.mgr-questions-grid {
  display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;
  max-width: 600px; margin: 2rem 0 1rem;
}
.mgr-question-card {
  display: flex; flex-direction: column; align-items: center; gap: 0.75rem;
  padding: 1.25rem 1rem; border-radius: 12px;
  border: 1px solid var(--border, hsl(220 13% 18%));
  background: var(--surface, hsl(220 13% 12%));
  transition: border-color 0.3s ease;
}
.mgr-question-card:hover { border-color: var(--gold, hsl(38 92% 50%)); }
.q-icon { color: var(--gold, hsl(38 92% 50%)); }
.q-text { font-size: 0.9rem; color: var(--fg, hsl(220 10% 90%)); text-align: center; line-height: 1.4; }

/* Slide 3: Shift */
.mgr-shift-visual {
  display: flex; align-items: center; gap: 1.5rem; margin: 2rem 0 1rem;
  max-width: 800px;
}
.mgr-shift-side {
  flex: 1; padding: 1.5rem; border-radius: 12px;
  border: 1px solid var(--border, hsl(220 13% 18%));
}
.mgr-shift-side.before { background: hsla(350, 89%, 60%, 0.04); border-color: hsla(350, 89%, 60%, 0.2); }
.mgr-shift-side.after { background: hsla(160, 84%, 39%, 0.04); border-color: hsla(160, 84%, 39%, 0.2); }
.shift-header {
  display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1.25rem;
  font-family: var(--font-serif, Georgia, serif); font-size: 0.9rem; font-weight: 700;
  text-transform: uppercase; letter-spacing: 0.05em;
}
.mgr-shift-side.before .shift-header { color: var(--rose, hsl(350 89% 60%)); }
.mgr-shift-side.after .shift-header { color: var(--teal, hsl(160 84% 39%)); }
.shift-flow { display: flex; flex-direction: column; align-items: center; gap: 0; }
.flow-node {
  padding: 0.5rem 1rem; border-radius: 6px; font-size: 0.85rem;
  color: var(--fg-muted, hsl(220 10% 55%));
  border: 1px solid var(--border, hsl(220 13% 18%));
  background: var(--bg, hsl(220 13% 8%)); width: 100%; text-align: center;
}
.flow-node.highlight {
  color: var(--teal, hsl(160 84% 39%));
  border-color: hsla(160, 84%, 39%, 0.3);
  background: hsla(160, 84%, 39%, 0.05);
}
.flow-arrow { color: var(--fg-muted, hsl(220 10% 55%)); opacity: 0.3; font-size: 0.8rem; padding: 0.1rem 0; }
.mgr-shift-arrow { display: flex; align-items: center; color: var(--fg-muted, hsl(220 10% 55%)); }

/* Slide 4: Toolkit */
.mgr-toolkit-grid {
  display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem;
  max-width: 600px; margin: 2rem 0 1rem;
}
.mgr-tool-card {
  display: flex; flex-direction: column; align-items: center; gap: 0.75rem;
  padding: 1.5rem 1rem; border-radius: 12px;
  border: 1px solid var(--border, hsl(220 13% 18%));
  background: var(--surface, hsl(220 13% 12%));
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}
.mgr-tool-card:hover { border-color: var(--gold, hsl(38 92% 50%)); box-shadow: 0 0 20px hsla(38, 92%, 50%, 0.08); }
.tool-icon-wrap { display: flex; align-items: center; justify-content: center; }
.tool-icon-wrap.decide { color: var(--teal, hsl(160 84% 39%)); }
.tool-icon-wrap.assign { color: var(--blue-light, hsl(213 66% 55%)); }
.tool-icon-wrap.measure { color: var(--gold, hsl(38 92% 50%)); }
.tool-icon-wrap.facilitate { color: var(--fg, hsl(220 10% 90%)); }
.tool-label {
  font-family: var(--font-serif, Georgia, serif); font-size: 1.1rem; font-weight: 700;
  color: var(--fg, hsl(220 10% 90%));
}
.tool-desc { font-size: 0.8rem; color: var(--fg-muted, hsl(220 10% 55%)); text-align: center; line-height: 1.4; }

/* Slide 5: Manager's Day */
.mgr-day-timeline {
  display: flex; flex-direction: column; gap: 0; max-width: 500px; width: 100%; margin: 1.5rem 0;
}
.mgr-day-step {
  display: flex; gap: 1rem; padding: 0.5rem 0; position: relative;
}
.day-time-block {
  display: flex; flex-direction: column; align-items: center; gap: 0.15rem;
  min-width: 70px; flex-shrink: 0;
}
.day-emoji { font-size: 1.5rem; }
.day-time { font-size: 0.65rem; color: var(--gold, hsl(38 92% 50%)); font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; }
.day-content {
  display: flex; flex-direction: column; gap: 0.2rem; padding: 0.5rem 0.75rem;
  border-left: 2px solid var(--border, hsl(220 13% 18%)); flex: 1;
}
.day-action { font-size: 0.95rem; color: var(--fg, hsl(220 10% 90%)); font-weight: 600; }
.day-detail { font-size: 0.8rem; color: var(--fg-muted, hsl(220 10% 55%)); }
.day-role-badge {
  display: inline-flex; align-items: center; width: fit-content;
  padding: 0.15rem 0.5rem; border-radius: 4px; font-size: 0.65rem;
  text-transform: uppercase; letter-spacing: 0.08em; margin-top: 0.2rem;
}
.day-role-badge.facilitator { background: hsla(160, 84%, 39%, 0.12); color: var(--teal, hsl(160 84% 39%)); border: 1px solid hsla(160, 84%, 39%, 0.3); }
.day-role-badge.decider { background: hsla(38, 92%, 50%, 0.12); color: var(--gold, hsl(38 92% 50%)); border: 1px solid hsla(38, 92%, 50%, 0.3); }
.day-role-badge.assigner { background: hsla(213, 66%, 55%, 0.12); color: var(--blue-light, hsl(213 66% 55%)); border: 1px solid hsla(213, 66%, 55%, 0.3); }
.day-role-badge.contributor-badge { background: hsla(160, 84%, 39%, 0.12); color: var(--teal, hsl(160 84% 39%)); border: 1px solid hsla(160, 84%, 39%, 0.3); }
.day-connector { width: 2px; height: 8px; background: var(--border, hsl(220 13% 18%)); margin-left: 34px; }

/* Slide 6: Pipeline */
.mgr-pipeline {
  display: flex; align-items: flex-start; gap: 0.25rem; margin: 2rem 0 1rem;
  overflow-x: auto; padding: 1rem 0; max-width: 95vw;
}
.pipeline-stage {
  display: flex; flex-direction: column; align-items: center; gap: 0.3rem;
  min-width: 80px; position: relative;
}
.pipeline-stage.manager-stage .stage-dot { box-shadow: 0 0 12px hsla(38, 92%, 50%, 0.3); }
.stage-dot {
  width: 44px; height: 44px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 1.2rem;
  border: 2px solid var(--border, hsl(220 13% 18%));
  background: var(--surface, hsl(220 13% 12%));
  transition: all 0.3s ease;
}
.stage-dot.team { border-color: hsla(220, 10%, 55%, 0.3); }
.stage-dot.ai { border-color: hsla(213, 66%, 55%, 0.3); }
.stage-dot.you { border-color: var(--gold, hsl(38 92% 50%)); background: hsla(38, 92%, 50%, 0.1); }
.stage-label { font-size: 0.7rem; font-weight: 600; color: var(--fg, hsl(220 10% 90%)); text-align: center; }
.stage-who { font-size: 0.6rem; color: var(--fg-muted, hsl(220 10% 55%)); text-align: center; }
.your-badge {
  position: absolute; top: -10px; right: -8px;
  padding: 0.1rem 0.35rem; border-radius: 3px;
  background: var(--gold, hsl(38 92% 50%)); color: hsl(220 13% 8%);
  font-size: 0.5rem; font-weight: 800; letter-spacing: 0.05em;
}
.pipeline-arrow { color: var(--fg-muted, hsl(220 10% 55%)); opacity: 0.3; font-size: 0.9rem; padding-top: 0.75rem; }

/* Slide 7: Dashboard Mock */
.mgr-dashboard-mock {
  display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;
  max-width: 700px; width: 100%; margin: 1.5rem 0;
}
.mock-section {
  padding: 1rem; border-radius: 10px;
  border: 1px solid var(--border, hsl(220 13% 18%));
  background: var(--surface, hsl(220 13% 12%));
}
.mock-section:first-child { grid-column: 1 / -1; }
.mock-header {
  font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.1em;
  color: var(--fg-muted, hsl(220 10% 55%)); margin-bottom: 0.75rem; font-weight: 600;
}
.mock-bars { display: flex; flex-direction: column; gap: 0.5rem; }
.mock-member { display: flex; align-items: center; gap: 0.75rem; }
.mock-name { font-size: 0.75rem; color: var(--fg, hsl(220 10% 90%)); min-width: 85px; }
.mock-bar-track {
  flex: 1; height: 16px; border-radius: 4px; display: flex; overflow: hidden;
  background: var(--bg, hsl(220 13% 8%));
}
.mock-bar-fill { height: 100%; transition: width 1.5s cubic-bezier(0.16, 1, 0.3, 1); }
.digital-fill { background: var(--blue-light, hsl(213 66% 55%)); }
.judgment-fill { background: var(--gold, hsl(38 92% 50%)); }
.contributor-fill { background: var(--teal, hsl(160 84% 39%)); }
.mock-legend {
  display: flex; gap: 1rem; margin-top: 0.75rem; justify-content: center;
}
.legend-item { display: flex; align-items: center; gap: 0.35rem; font-size: 0.7rem; color: var(--fg-muted, hsl(220 10% 55%)); }
.legend-dot { width: 8px; height: 8px; border-radius: 2px; }
.digital-dot { background: var(--blue-light, hsl(213 66% 55%)); }
.judgment-dot { background: var(--gold, hsl(38 92% 50%)); }
.contributor-dot { background: var(--teal, hsl(160 84% 39%)); }

/* Pipeline mini */
.pipeline-mini { display: flex; gap: 0.5rem; }
.pmini {
  display: flex; flex-direction: column; align-items: center; gap: 0.15rem;
  padding: 0.5rem; border-radius: 6px; flex: 1;
  background: var(--bg, hsl(220 13% 8%)); border: 1px solid var(--border, hsl(220 13% 18%));
}
.pmini.highlight { border-color: var(--gold, hsl(38 92% 50%)); background: hsla(38, 92%, 50%, 0.05); }
.pmini.shipped { border-color: var(--teal, hsl(160 84% 39%)); background: hsla(160, 84%, 39%, 0.05); }
.pmini-num { font-size: 1.1rem; font-weight: 700; color: var(--fg, hsl(220 10% 90%)); }
.pmini.highlight .pmini-num { color: var(--gold, hsl(38 92% 50%)); }
.pmini.shipped .pmini-num { color: var(--teal, hsl(160 84% 39%)); }
.pmini-label { font-size: 0.55rem; color: var(--fg-muted, hsl(220 10% 55%)); text-align: center; text-transform: uppercase; letter-spacing: 0.05em; }

/* Impact */
.impact-metrics { display: flex; gap: 0.5rem; }
.impact-card {
  display: flex; flex-direction: column; align-items: center; gap: 0.15rem;
  padding: 0.5rem; border-radius: 6px; flex: 1;
  background: var(--bg, hsl(220 13% 8%)); border: 1px solid var(--border, hsl(220 13% 18%));
}
.impact-num { font-size: 1rem; font-weight: 700; color: var(--teal, hsl(160 84% 39%)); }
.impact-label { font-size: 0.6rem; color: var(--fg-muted, hsl(220 10% 55%)); text-transform: uppercase; letter-spacing: 0.05em; }

/* Slide 8: Closing */
.mgr-closing-glow {
  position: absolute; width: 400px; height: 400px; border-radius: 50%;
  background: radial-gradient(circle, hsla(38, 92%, 50%, 0.06), transparent 70%);
  pointer-events: none; animation: mgr-glow-pulse 4s ease-in-out infinite;
}
@keyframes mgr-glow-pulse { 0%, 100% { transform: scale(1); opacity: 0.5; } 50% { transform: scale(1.2); opacity: 1; } }

.mgr-upgrade-visual {
  display: flex; align-items: center; gap: 1.5rem; margin: 2rem 0 1.5rem;
}
.upgrade-from, .upgrade-to {
  display: flex; flex-direction: column; align-items: center; gap: 0.5rem;
  padding: 1.25rem 2rem; border-radius: 12px;
  border: 1px solid var(--border, hsl(220 13% 18%));
  background: var(--surface, hsl(220 13% 12%));
}
.upgrade-from { opacity: 0.5; }
.upgrade-to { border-color: var(--gold, hsl(38 92% 50%)); box-shadow: 0 0 20px hsla(38, 92%, 50%, 0.1); }
.upgrade-icon { font-size: 2.5rem; }
.upgrade-label { font-size: 0.85rem; color: var(--fg, hsl(220 10% 90%)); font-weight: 600; }
.upgrade-arrow { color: var(--gold, hsl(38 92% 50%)); }

.mgr-final-points {
  display: flex; flex-direction: column; gap: 0.75rem; max-width: 450px; margin-bottom: 1rem;
}
.final-point {
  display: flex; align-items: center; gap: 0.75rem; font-size: 0.95rem;
  color: var(--fg, hsl(220 10% 90%));
}
.fp-icon { font-size: 1.1rem; }

/* Responsive */
@media (max-width: 768px) {
  .mgr-slide { padding: 2rem 1.5rem; }

  .mgr-bucket-recap { flex-direction: column; gap: 0.5rem; }
  .recap-flow { transform: rotate(90deg); }

  .mgr-questions-grid { grid-template-columns: 1fr; max-width: 320px; }

  .mgr-shift-visual { flex-direction: column; gap: 1rem; }
  .mgr-shift-arrow { transform: rotate(90deg); }

  .mgr-toolkit-grid { grid-template-columns: 1fr; max-width: 300px; }

  .mgr-pipeline {
    flex-wrap: wrap; justify-content: center; gap: 0.5rem;
  }
  .pipeline-arrow { display: none; }

  .mgr-dashboard-mock { grid-template-columns: 1fr; }
  .pipeline-mini { flex-wrap: wrap; }

  .mgr-upgrade-visual { flex-direction: column; gap: 1rem; }
  .upgrade-arrow svg { transform: rotate(90deg); }
}

@media (max-width: 480px) {
  .mgr-slide { padding: 1.5rem 1rem; }
  .recap-bucket { min-width: 0; width: 100%; padding: 1rem; }
  .mgr-questions-grid { max-width: 100%; }
  .mgr-question-card { padding: 1rem 0.75rem; }
  .q-text { font-size: 0.8rem; }
  .mgr-shift-visual { max-width: 100%; }
  .mgr-shift-side { padding: 1rem; }
  .flow-node { font-size: 0.8rem; padding: 0.4rem 0.75rem; }
  .mgr-toolkit-grid { max-width: 100%; gap: 0.75rem; }
  .mgr-tool-card { padding: 1rem 0.75rem; }
  .mgr-day-timeline { max-width: 100%; }
  .day-time-block { min-width: 55px; }
  .day-emoji { font-size: 1.25rem; }
  .day-action { font-size: 0.85rem; }
  .mgr-pipeline { gap: 0.35rem; }
  .pipeline-stage { min-width: 65px; }
  .stage-dot { width: 36px; height: 36px; font-size: 1rem; }
  .stage-label { font-size: 0.6rem; }
  .stage-who { font-size: 0.55rem; }
  .your-badge { font-size: 0.45rem; }
  .mgr-dashboard-mock { max-width: 100%; gap: 0.75rem; }
  .mock-name { min-width: 65px; font-size: 0.65rem; }
  .pipeline-mini { gap: 0.35rem; }
  .pmini { padding: 0.35rem; }
  .pmini-label { font-size: 0.5rem; }
  .impact-metrics { gap: 0.35rem; }
  .impact-card { padding: 0.35rem; }
  .impact-num { font-size: 0.85rem; }
  .impact-label { font-size: 0.5rem; }
  .upgrade-from, .upgrade-to { padding: 1rem 1.25rem; }
  .upgrade-icon { font-size: 2rem; }
  .mgr-quote { padding: 0 1rem; }
  .mgr-quote::before { left: -0.25rem; }
}
`;
