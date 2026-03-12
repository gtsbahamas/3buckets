'use client';

import { SlideEngine } from './SlideEngine';

export function ChampionSlides() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: championCSS }} />
      <SlideEngine totalSlides={8}>
        {({ currentSlide, animatedSlides, getSlideStyle, a, d }) => (
          <main id="ch-slideshow">

            {/* Slide 0: Champion Training — Overview */}
            <section className={`ch-slide ${currentSlide === 0 ? 'active' : ''}`} style={getSlideStyle(0)}>
              <h2 className={`ch-headline ${a(0, 0)}`} style={d(0)}>
                Champion Training
              </h2>
              <p className={`ch-subtext ${a(0, 1)}`} style={d(1)}>
                Your role. Your rhythm. Your impact.
              </p>
              <p className={`ch-body ${a(0, 2)}`} style={d(2)}>
                You were chosen as a Champion because you see what others miss.
                This training covers what you do, how you do it, and why it matters.
              </p>
              <div className={`ch-card-row ${a(0, 3)}`} style={d(3)}>
                <div className="ch-card">
                  <span className="ch-card-icon">&#x1F50D;</span>
                  <p className="ch-card-label">Review</p>
                  <p className="ch-card-desc">Process submissions from your team</p>
                </div>
                <div className="ch-card">
                  <span className="ch-card-icon">&#x1F504;</span>
                  <p className="ch-card-label">Drive</p>
                  <p className="ch-card-desc">Push tasks toward automation</p>
                </div>
                <div className="ch-card">
                  <span className="ch-card-icon">&#x1F4A1;</span>
                  <p className="ch-card-label">Unlock</p>
                  <p className="ch-card-desc">Free people to contribute</p>
                </div>
              </div>
            </section>

            {/* Slide 1: What a Champion Does */}
            <section className={`ch-slide ${currentSlide === 1 ? 'active' : ''}`} style={getSlideStyle(1)}>
              <h2 className={`ch-headline ${a(1, 0)}`} style={d(0)}>
                What a Champion Does
              </h2>
              <p className={`ch-subtext ${a(1, 1)}`} style={d(1)}>
                Three responsibilities. Nothing more.
              </p>
              <div className={`ch-responsibilities ${a(1, 2)}`} style={d(2)}>
                <div className="ch-resp ch-resp--gold">
                  <span className="ch-resp-num">1</span>
                  <div>
                    <p className="ch-resp-title">Review Submissions</p>
                    <p className="ch-resp-desc">
                      When someone on your team records a process, it lands in your review queue.
                      You read the AI summary, look at the flowchart, and decide: approve it or send it back for more detail.
                    </p>
                  </div>
                </div>
                <div className={`ch-resp ch-resp--blue ${a(1, 3)}`} style={d(3)}>
                  <span className="ch-resp-num">2</span>
                  <div>
                    <p className="ch-resp-title">Drive Classification</p>
                    <p className="ch-resp-desc">
                      Every process your team submits gets classified: Digital, Judgment, or Contributor.
                      Your job is to keep pushing. Can this Judgment task become Digital? Is someone still
                      copy-pasting when the system should be doing it?
                    </p>
                  </div>
                </div>
                <div className={`ch-resp ch-resp--teal ${a(1, 4)}`} style={d(4)}>
                  <span className="ch-resp-num">3</span>
                  <div>
                    <p className="ch-resp-title">Log Standups</p>
                    <p className="ch-resp-desc">
                      After each morning standup, log what was discussed. Wins, blockers, ideas.
                      This creates the record that proves the model is working.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Slide 2: The Review Queue */}
            <section className={`ch-slide ${currentSlide === 2 ? 'active' : ''}`} style={getSlideStyle(2)}>
              <h2 className={`ch-headline ${a(2, 0)}`} style={d(0)}>
                The Review Queue
              </h2>
              <p className={`ch-subtext ${a(2, 1)}`} style={d(1)}>
                How to review a process submission
              </p>
              <p className={`ch-body ${a(2, 2)}`} style={d(2)}>
                When a team member submits a process, the system generates an AI summary and a flowchart.
                You see both in Champions &rarr; Review Queue.
              </p>
              <div className={`ch-steps ${a(2, 3)}`} style={d(3)}>
                <div className="ch-step">
                  <span className="ch-step-num">1</span>
                  <div>
                    <p className="ch-step-title">Read the AI Summary</p>
                    <p className="ch-step-desc">Trigger, frequency, time estimate, steps. Does this match reality? Is anything missing?</p>
                  </div>
                </div>
                <div className="ch-step">
                  <span className="ch-step-num">2</span>
                  <div>
                    <p className="ch-step-title">Check the Flowchart</p>
                    <p className="ch-step-desc">Blue nodes = Digital (automatable). Yellow nodes = Judgment (needs a human). Does the classification make sense?</p>
                  </div>
                </div>
                <div className="ch-step">
                  <span className="ch-step-num">3</span>
                  <div>
                    <p className="ch-step-title">Decide</p>
                    <p className="ch-step-desc">
                      <span className="ch-green">Approve</span> if it&apos;s clear and accurate.{' '}
                      <span className="ch-yellow">Request Revision</span> if something is missing or unclear. Add notes explaining what you need.
                    </p>
                  </div>
                </div>
              </div>
              <div className={`ch-callout ${a(2, 4)}`} style={d(4)}>
                <p className="ch-callout-label">Ask yourself on every submission:</p>
                <p className="ch-callout-quote">&ldquo;Is someone still doing this manually when the system should be doing it?&rdquo;</p>
                <p className="ch-callout-note">If yes, flag it. That&apos;s a Digital bucket item waiting to be automated.</p>
              </div>
            </section>

            {/* Slide 3: The Morning Standup */}
            <section className={`ch-slide ${currentSlide === 3 ? 'active' : ''}`} style={getSlideStyle(3)}>
              <h2 className={`ch-headline ${a(3, 0)}`} style={d(0)}>
                The Morning Standup
              </h2>
              <p className={`ch-subtext ${a(3, 1)}`} style={d(1)}>
                30 minutes. Every morning. Non-negotiable.
              </p>
              <p className={`ch-quote ${a(3, 2)}`} style={d(2)}>
                &ldquo;What you got? What did you dream about last night? What&apos;s your pain point? What irks you?&rdquo;
              </p>
              <div className={`ch-two-col ${a(3, 3)}`} style={d(3)}>
                <div className="ch-col-card">
                  <p className="ch-col-title ch-col-title--green">What Goes Right</p>
                  <ul className="ch-col-list">
                    <li>Everyone shares one win or one idea</li>
                    <li>Short. Nobody monologues.</li>
                    <li>Ideas get built on by the group</li>
                    <li>Someone volunteers to own the next step</li>
                  </ul>
                </div>
                <div className="ch-col-card">
                  <p className="ch-col-title ch-col-title--red">What Goes Wrong</p>
                  <ul className="ch-col-list">
                    <li>Status reports instead of ideas</li>
                    <li>One person talks for 10 minutes</li>
                    <li>Nobody brings anything</li>
                    <li>Same problems repeated weekly</li>
                  </ul>
                </div>
              </div>
              <div className={`ch-callout ch-callout--gold ${a(3, 4)}`} style={d(4)}>
                <p className="ch-callout-label">Your job as Champion:</p>
                <ul className="ch-callout-list">
                  <li>Keep it moving. Redirect monologues.</li>
                  <li>Pull quiet people in. &ldquo;What&apos;s bugging you this week?&rdquo;</li>
                  <li>Write down every idea. Log it after in the Standups tab.</li>
                  <li>Follow up next standup: &ldquo;Last week you mentioned X. What happened?&rdquo;</li>
                </ul>
              </div>
            </section>

            {/* Slide 4: Driving Classification */}
            <section className={`ch-slide ${currentSlide === 4 ? 'active' : ''}`} style={getSlideStyle(4)}>
              <h2 className={`ch-headline ${a(4, 0)}`} style={d(0)}>
                Driving Classification
              </h2>
              <p className={`ch-subtext ${a(4, 1)}`} style={d(1)}>
                The whole point is to move work between buckets.
              </p>
              <div className={`ch-buckets ${a(4, 2)}`} style={d(2)}>
                <div className="ch-bucket ch-bucket--blue">
                  <p className="ch-bucket-name">Digital</p>
                  <p className="ch-bucket-desc">System does it</p>
                </div>
                <span className="ch-bucket-arrow">&larr;</span>
                <div className="ch-bucket ch-bucket--yellow">
                  <p className="ch-bucket-name">Judgment</p>
                  <p className="ch-bucket-desc">Human decides</p>
                </div>
                <span className="ch-bucket-arrow">&rarr;</span>
                <div className="ch-bucket ch-bucket--teal">
                  <p className="ch-bucket-name">Contributor</p>
                  <p className="ch-bucket-desc">Human creates</p>
                </div>
              </div>
              <div className={`ch-flow-cards ${a(4, 3)}`} style={d(3)}>
                <div className="ch-flow-card">
                  <p className="ch-flow-title">Judgment &rarr; Digital</p>
                  <p className="ch-flow-desc">
                    Every time you approve a Judgment task, ask: could the system handle this with enough confidence?
                    If the answer keeps being yes, it graduates to Digital. One less thing a human touches.
                  </p>
                </div>
                <div className="ch-flow-card">
                  <p className="ch-flow-title">Time Freed &rarr; Contributor</p>
                  <p className="ch-flow-desc">
                    Every hour freed from Digital automation is an hour someone can spend contributing.
                    Track it. &ldquo;We automated X, that freed 5 hours a week. What did those hours become?&rdquo;
                  </p>
                </div>
              </div>
              <div className={`ch-callout ch-callout--gold ${a(4, 4)}`} style={d(4)}>
                <p className="ch-callout-quote">&ldquo;You should be upset that you&apos;re doing it.&rdquo;</p>
                <p className="ch-callout-note">
                  If someone is still copy-pasting data from one screen to another, that&apos;s your signal. Flag it. Push it to Digital.
                </p>
              </div>
            </section>

            {/* Slide 5: What Good Looks Like */}
            <section className={`ch-slide ${currentSlide === 5 ? 'active' : ''}`} style={getSlideStyle(5)}>
              <h2 className={`ch-headline ${a(5, 0)}`} style={d(0)}>
                What Good Looks Like
              </h2>
              <p className={`ch-subtext ${a(5, 1)}`} style={d(1)}>
                Real examples from GTS
              </p>
              <div className={`ch-examples ${a(5, 2)}`} style={d(2)}>
                <div className="ch-example ch-example--teal">
                  <p className="ch-example-title">Alex&apos;s FAQ Idea</p>
                  <p className="ch-example-desc">
                    Alex noticed customers kept calling back with questions about technical quotes they didn&apos;t understand.
                    Suggested attaching plain-English FAQs to every quote. Cameras, DVRs, battery life, storage.
                    Explained like &ldquo;talking to a 10-year-old.&rdquo; Simple. Nobody thought of it because everyone was
                    too busy copy-pasting invoices.
                  </p>
                </div>
                <div className={`ch-example ch-example--teal ${a(5, 3)}`} style={d(3)}>
                  <p className="ch-example-title">Randi&apos;s Root Cause</p>
                  <p className="ch-example-desc">
                    Randi noticed we kept replacing batteries on a vehicle every week. Instead of just processing the expense,
                    he investigated. Turns out it was the alternator, not the battery. Found the actual problem instead of
                    paying for the symptom.
                  </p>
                </div>
                <div className={`ch-example ch-example--blue ${a(5, 4)}`} style={d(4)}>
                  <p className="ch-example-title">AP Bill Flow</p>
                  <p className="ch-example-desc">
                    Bill comes in as a PDF email. Someone opens it on one screen, copy-pastes into the accounting system
                    on another screen, emails it to the bank for payment. Three screens. Zero thinking.
                    That&apos;s Digital. The system does it now.
                  </p>
                </div>
              </div>
              <p className={`ch-body ch-body--center ${a(5, 5)}`} style={d(5)}>
                Your job is to find more Alexs and Randis. They&apos;re already on your team. They just need the time.
              </p>
            </section>

            {/* Slide 6: Measuring Success */}
            <section className={`ch-slide ${currentSlide === 6 ? 'active' : ''}`} style={getSlideStyle(6)}>
              <h2 className={`ch-headline ${a(6, 0)}`} style={d(0)}>
                Measuring Success
              </h2>
              <p className={`ch-subtext ${a(6, 1)}`} style={d(1)}>
                What proves this is working
              </p>
              <div className={`ch-metrics ${a(6, 2)}`} style={d(2)}>
                <div className="ch-metric">
                  <p className="ch-metric-name">Submissions Reviewed</p>
                  <p className="ch-metric-desc">How many processes did you review this week?</p>
                  <p className="ch-metric-target">Target: 3-5 per week</p>
                </div>
                <div className="ch-metric">
                  <p className="ch-metric-name">Tasks Graduated</p>
                  <p className="ch-metric-desc">How many Judgment items moved to Digital this month?</p>
                  <p className="ch-metric-target">Target: 1-2 per month</p>
                </div>
                <div className="ch-metric">
                  <p className="ch-metric-name">Hours Freed</p>
                  <p className="ch-metric-desc">How much time did automation save your team?</p>
                  <p className="ch-metric-target">Target: Track weekly</p>
                </div>
                <div className="ch-metric">
                  <p className="ch-metric-name">Ideas Captured</p>
                  <p className="ch-metric-desc">How many Contributor ideas came from standups?</p>
                  <p className="ch-metric-target">Target: 2-3 per week</p>
                </div>
                <div className="ch-metric">
                  <p className="ch-metric-name">Standup Logs</p>
                  <p className="ch-metric-desc">Did you log every standup consistently?</p>
                  <p className="ch-metric-target">Target: Every standup</p>
                </div>
                <div className="ch-metric">
                  <p className="ch-metric-name">Follow-Through</p>
                  <p className="ch-metric-desc">How many ideas turned into action?</p>
                  <p className="ch-metric-target">Target: At least 1 per month</p>
                </div>
              </div>
              <div className={`ch-callout ch-callout--gold ${a(6, 3)}`} style={d(3)}>
                <p className="ch-callout-label">Compensation Connection</p>
                <p className="ch-callout-quote">
                  &ldquo;Alex put this process in place. It&apos;s saving us $10 a day. Why shouldn&apos;t Alex get $2 out of $10 every day?&rdquo;
                </p>
                <p className="ch-callout-note">
                  When contributions create measurable value, they should be recognized. Your standup logs and review records are the proof.
                </p>
              </div>
            </section>

            {/* Slide 7: Keeping It Going */}
            <section className={`ch-slide ${currentSlide === 7 ? 'active' : ''}`} style={getSlideStyle(7)}>
              <h2 className={`ch-headline ${a(7, 0)}`} style={d(0)}>
                Keeping It Going
              </h2>
              <p className={`ch-subtext ${a(7, 1)}`} style={d(1)}>
                This works only if you work it.
              </p>
              <div className={`ch-habits ${a(7, 2)}`} style={d(2)}>
                <div className="ch-habit">
                  <span className="ch-habit-num">1</span>
                  <div>
                    <p className="ch-habit-title">Check Your Queue Daily</p>
                    <p className="ch-habit-desc">If submissions pile up, your team stops submitting. Review within 24 hours.</p>
                  </div>
                </div>
                <div className="ch-habit">
                  <span className="ch-habit-num">2</span>
                  <div>
                    <p className="ch-habit-title">Run Standups Every Morning</p>
                    <p className="ch-habit-desc">Skip one and it becomes two. Two becomes a week. A week and the habit is dead.</p>
                  </div>
                </div>
                <div className="ch-habit">
                  <span className="ch-habit-num">3</span>
                  <div>
                    <p className="ch-habit-title">Follow Up on Ideas</p>
                    <p className="ch-habit-desc">Nothing kills momentum faster than ideas that go nowhere. Every standup, revisit last week&apos;s ideas.</p>
                  </div>
                </div>
                <div className="ch-habit">
                  <span className="ch-habit-num">4</span>
                  <div>
                    <p className="ch-habit-title">Celebrate Wins Publicly</p>
                    <p className="ch-habit-desc">When someone&apos;s idea saves time or money, say it out loud. Name them. That&apos;s how you build a contribution culture.</p>
                  </div>
                </div>
                <div className="ch-habit">
                  <span className="ch-habit-num">5</span>
                  <div>
                    <p className="ch-habit-title">Keep Pushing to Digital</p>
                    <p className="ch-habit-desc">Every month, look at your team&apos;s Judgment items. At least one should be graduating to automation.</p>
                  </div>
                </div>
              </div>
              <div className={`ch-final-quote ${a(7, 3)}`} style={d(3)}>
                <p className="ch-final-quote-text">
                  &ldquo;Your job is to contribute to the growth of the company. Your job is contribution.&rdquo;
                </p>
                <p className="ch-final-quote-sub">
                  You&apos;re not just a reviewer. You&apos;re the person who makes sure your team has the time and space to do their best work.
                </p>
              </div>
            </section>

          </main>
        )}
      </SlideEngine>
    </>
  );
}

const championCSS = `
/* ── Champion Slides ── */

#ch-slideshow {
  position: relative;
  width: 100%;
  height: 100%;
}

.ch-slide {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 1.5rem;
  transition: opacity 0.5s ease, transform 0.5s ease;
  overflow-y: auto;
  gap: 1rem;
}

@media (min-width: 640px) {
  .ch-slide { padding: 3rem 2.5rem; gap: 1.25rem; }
}

/* ── Typography ── */

.ch-headline {
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(1.5rem, 5vw, 2.5rem);
  font-weight: 700;
  color: #d4a843;
  text-align: center;
  line-height: 1.2;
  margin: 0;
}

.ch-subtext {
  font-size: clamp(0.875rem, 2.5vw, 1.125rem);
  color: #8888a0;
  text-align: center;
  margin: 0;
}

.ch-body {
  font-size: clamp(0.875rem, 2vw, 1rem);
  color: #8888a0;
  text-align: center;
  max-width: 32rem;
  line-height: 1.6;
  margin: 0;
}

.ch-body--center { text-align: center; }

.ch-quote {
  font-size: clamp(0.9rem, 2.5vw, 1.125rem);
  color: #8888a0;
  text-align: center;
  font-style: italic;
  max-width: 36rem;
  margin: 0;
}

/* ── Card Row (Slide 0) ── */

.ch-card-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
  width: 100%;
  max-width: 28rem;
}

.ch-card {
  background: #12121a;
  border: 1px solid #2a2a3a;
  border-radius: 0.75rem;
  padding: 1rem;
  text-align: center;
}

.ch-card-icon { font-size: 1.5rem; display: block; margin-bottom: 0.5rem; }
.ch-card-label { font-weight: 600; color: #e8e8ed; margin: 0; font-size: 0.9rem; }
.ch-card-desc { color: #8888a0; font-size: 0.7rem; margin: 0.25rem 0 0; }

/* ── Responsibilities (Slide 1) ── */

.ch-responsibilities {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
  max-width: 36rem;
}

.ch-resp {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem 1.25rem;
  border-radius: 0.75rem;
}

.ch-resp--gold  { background: rgba(212,168,67,0.05); border: 1px solid rgba(212,168,67,0.3); }
.ch-resp--blue  { background: rgba(96,165,250,0.05); border: 1px solid rgba(96,165,250,0.3); }
.ch-resp--teal  { background: rgba(45,212,191,0.05); border: 1px solid rgba(45,212,191,0.3); }

.ch-resp-num {
  font-size: 1.25rem;
  font-weight: 700;
  color: #e8e8ed;
  flex-shrink: 0;
  width: 1.5rem;
}

.ch-resp-title { font-weight: 600; color: #e8e8ed; font-size: 1rem; margin: 0; }
.ch-resp-desc { color: #8888a0; font-size: 0.8rem; line-height: 1.5; margin: 0.25rem 0 0; }

/* ── Steps (Slide 2) ── */

.ch-steps {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
  max-width: 36rem;
}

.ch-step {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
}

.ch-step-num {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 50%;
  background: rgba(212,168,67,0.2);
  color: #d4a843;
  font-weight: 700;
  font-size: 0.8rem;
  flex-shrink: 0;
}

.ch-step-title { font-weight: 600; color: #e8e8ed; font-size: 0.9rem; margin: 0; }
.ch-step-desc { color: #8888a0; font-size: 0.8rem; line-height: 1.4; margin: 0.125rem 0 0; }

.ch-green { color: #4ade80; font-weight: 600; }
.ch-yellow { color: #facc15; font-weight: 600; }

/* ── Callout ── */

.ch-callout {
  background: #1a1a25;
  border: 1px solid #2a2a3a;
  border-radius: 0.75rem;
  padding: 1rem 1.25rem;
  width: 100%;
  max-width: 36rem;
}

.ch-callout--gold { background: rgba(212,168,67,0.05); border-color: rgba(212,168,67,0.3); }

.ch-callout-label { font-weight: 600; color: #e8e8ed; font-size: 0.85rem; margin: 0; }
.ch-callout-quote { color: #d4a843; font-size: 0.85rem; margin: 0.375rem 0 0; }
.ch-callout-note { color: #8888a0; font-size: 0.75rem; margin: 0.25rem 0 0; }

.ch-callout-list {
  list-style: none;
  padding: 0;
  margin: 0.5rem 0 0;
}

.ch-callout-list li {
  color: #8888a0;
  font-size: 0.8rem;
  line-height: 1.6;
  padding-left: 0.75rem;
  position: relative;
}

.ch-callout-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.55em;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #d4a843;
}

/* ── Two Columns (Slide 3) ── */

.ch-two-col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
  width: 100%;
  max-width: 36rem;
}

@media (max-width: 480px) {
  .ch-slide { padding: 1.5rem 1rem; gap: 0.75rem; }
  .ch-card-row { grid-template-columns: 1fr; max-width: 100%; }
  .ch-card { padding: 0.75rem; }
  .ch-two-col { grid-template-columns: 1fr; }
  .ch-resp { padding: 0.75rem 1rem; gap: 0.75rem; }
  .ch-callout { padding: 0.75rem 1rem; }
  .ch-example { padding: 0.75rem 1rem; }
  .ch-buckets { gap: 0.35rem; }
  .ch-bucket { padding: 0.5rem; }
  .ch-bucket-name { font-size: clamp(0.85rem, 3vw, 1.5rem); }
  .ch-flow-card { padding: 0.75rem 1rem; }
}

.ch-col-card {
  background: #12121a;
  border: 1px solid #2a2a3a;
  border-radius: 0.75rem;
  padding: 1rem;
}

.ch-col-title { font-weight: 600; font-size: 0.9rem; margin: 0 0 0.5rem; }
.ch-col-title--green { color: #4ade80; }
.ch-col-title--red { color: #f87171; }

.ch-col-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.ch-col-list li {
  color: #8888a0;
  font-size: 0.8rem;
  line-height: 1.5;
  padding: 0.125rem 0;
}

/* ── Buckets (Slide 4) ── */

.ch-buckets {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  max-width: 36rem;
}

.ch-bucket {
  flex: 1;
  text-align: center;
  padding: 0.75rem;
  border-radius: 0.75rem;
}

.ch-bucket--blue   { background: rgba(96,165,250,0.1); border: 1px solid rgba(96,165,250,0.3); }
.ch-bucket--yellow { background: rgba(250,204,21,0.1); border: 1px solid rgba(250,204,21,0.3); }
.ch-bucket--teal   { background: rgba(45,212,191,0.1); border: 1px solid rgba(45,212,191,0.3); }

.ch-bucket-name { font-size: clamp(1rem, 3vw, 1.5rem); font-weight: 700; margin: 0; }
.ch-bucket--blue .ch-bucket-name   { color: #60a5fa; }
.ch-bucket--yellow .ch-bucket-name { color: #facc15; }
.ch-bucket--teal .ch-bucket-name   { color: #2dd4bf; }

.ch-bucket-desc { color: #8888a0; font-size: 0.7rem; margin: 0.25rem 0 0; }
.ch-bucket-arrow { color: #8888a0; font-size: 1.25rem; flex-shrink: 0; }

.ch-flow-cards {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
  max-width: 36rem;
}

.ch-flow-card {
  background: #12121a;
  border: 1px solid #2a2a3a;
  border-radius: 0.75rem;
  padding: 1rem 1.25rem;
}

.ch-flow-title { font-weight: 600; color: #e8e8ed; font-size: 0.9rem; margin: 0; }
.ch-flow-desc { color: #8888a0; font-size: 0.8rem; line-height: 1.5; margin: 0.25rem 0 0; }

/* ── Examples (Slide 5) ── */

.ch-examples {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
  max-width: 36rem;
}

.ch-example {
  padding: 1rem 1.25rem;
  border-radius: 0.75rem;
}

.ch-example--teal { background: rgba(45,212,191,0.05); border: 1px solid rgba(45,212,191,0.3); }
.ch-example--blue { background: rgba(96,165,250,0.05); border: 1px solid rgba(96,165,250,0.3); }

.ch-example-title { font-weight: 600; font-size: 0.9rem; margin: 0; }
.ch-example--teal .ch-example-title { color: #2dd4bf; }
.ch-example--blue .ch-example-title { color: #60a5fa; }

.ch-example-desc { color: #8888a0; font-size: 0.8rem; line-height: 1.5; margin: 0.25rem 0 0; }

/* ── Metrics (Slide 6) ── */

.ch-metrics {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.625rem;
  width: 100%;
  max-width: 36rem;
}

@media (max-width: 480px) {
  .ch-metrics { grid-template-columns: 1fr; }
}

.ch-metric {
  background: #12121a;
  border: 1px solid #2a2a3a;
  border-radius: 0.75rem;
  padding: 0.875rem 1rem;
}

.ch-metric-name { font-weight: 600; color: #e8e8ed; font-size: 0.85rem; margin: 0; }
.ch-metric-desc { color: #8888a0; font-size: 0.7rem; margin: 0.125rem 0 0; }
.ch-metric-target { color: #d4a843; font-size: 0.7rem; margin: 0.375rem 0 0; }

/* ── Habits (Slide 7) ── */

.ch-habits {
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  width: 100%;
  max-width: 36rem;
}

.ch-habit {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
}

.ch-habit-num {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 50%;
  background: rgba(212,168,67,0.2);
  color: #d4a843;
  font-weight: 700;
  font-size: 0.8rem;
  flex-shrink: 0;
}

.ch-habit-title { font-weight: 600; color: #e8e8ed; font-size: 0.85rem; margin: 0; }
.ch-habit-desc { color: #8888a0; font-size: 0.8rem; line-height: 1.4; margin: 0.125rem 0 0; }

/* ── Final Quote (Slide 7) ── */

.ch-final-quote {
  background: rgba(212,168,67,0.05);
  border: 1px solid rgba(212,168,67,0.3);
  border-radius: 0.75rem;
  padding: 1.25rem;
  text-align: center;
  width: 100%;
  max-width: 36rem;
}

.ch-final-quote-text {
  color: #d4a843;
  font-size: clamp(0.9rem, 2.5vw, 1.125rem);
  font-weight: 500;
  margin: 0;
}

.ch-final-quote-sub {
  color: #8888a0;
  font-size: 0.8rem;
  margin: 0.5rem 0 0;
}

/* ── Animations ── */

@keyframes ch-enter-up {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes ch-enter-fade {
  from { opacity: 0; }
  to   { opacity: 1; }
}

@keyframes ch-enter-scale {
  from { opacity: 0; transform: scale(0.95); }
  to   { opacity: 1; transform: scale(1); }
}

.animate-in {
  animation: ch-enter-up 0.6s ease both;
}

.ch-card-row .animate-in,
.ch-buckets .animate-in {
  animation-name: ch-enter-scale;
}
`;
