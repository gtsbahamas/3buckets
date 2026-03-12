'use client';

import { SlideEngine } from './SlideEngine';

export function TeamMemberSlides() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: teamMemberCSS }} />
      <SlideEngine totalSlides={8}>
        {({ currentSlide, animatedSlides, getSlideStyle, a, d }) => (
          <main id="tm-slideshow">

            {/* Slide 1: The Problem */}
            <section className={`tm-slide ${currentSlide === 0 ? 'active' : ''}`} style={getSlideStyle(0)}>
              <div className={`tm-problem-visual anim-scale ${a(0, 0)}`} style={d(0)}>
                <div className="tm-screen-box">
                  PDF / Email
                  <div className="tm-data-packet"></div>
                </div>
                <div className="tm-copy-arrow">
                  <div className="tm-arrow-line"></div>
                  <span>copy &amp; paste</span>
                </div>
                <div className="tm-screen-box">Your ERP</div>
              </div>
              <div className={`tm-repeat-indicator ${a(0, 1)}`} style={d(1)}>
                <span className="tm-loop-icon">&#x21bb;</span> Repeat. All day. Every day.
              </div>
              <p className={`tm-slide-quote ${a(0, 2)}`} style={d(2)}>
                Technically don&apos;t need you to transcribe or transpose
                from one system into the next. That&apos;s a waste of your time.
                You should be upset.
              </p>
            </section>

            {/* Slide 2: Three Buckets */}
            <section className={`tm-slide ${currentSlide === 1 ? 'active' : ''}`} style={getSlideStyle(1)}>
              <h2 className={`tm-slide-headline ${a(1, 0)}`} style={d(0)}>
                Everything you do fits in <span className="tm-gold">three buckets</span>
              </h2>
              <div className={`tm-buckets-container anim-scale ${a(1, 1)}`} style={d(1)}>
                <div className="tm-bucket tm-digital">
                  <div className="tm-bucket-vessel"><div className="tm-bucket-fill"></div></div>
                  <span className="tm-bucket-icon">&#x1F4BB;</span>
                  <span className="tm-bucket-label">Digital</span>
                  <span className="tm-bucket-desc">The system does it</span>
                </div>
                <div className="tm-bucket tm-judgment">
                  <div className="tm-bucket-vessel"><div className="tm-bucket-fill"></div></div>
                  <span className="tm-bucket-icon">&#x1F9E0;</span>
                  <span className="tm-bucket-label">Judgment</span>
                  <span className="tm-bucket-desc">You think, decide, act</span>
                </div>
                <div className="tm-bucket tm-contributor">
                  <div className="tm-bucket-vessel"><div className="tm-bucket-fill"></div></div>
                  <span className="tm-bucket-icon">&#x1F4A1;</span>
                  <span className="tm-bucket-label">Contributor</span>
                  <span className="tm-bucket-desc">You grow the company</span>
                </div>
              </div>
              <div className={`tm-bucket-direction ${a(1, 2)}`} style={d(2)}>
                <span><span className="tm-arrow-down">&#x2193;</span> Shrink</span>
                <span>&#x2192;</span>
                <span><span className="tm-arrow-down">&#x2193;</span> Minimize</span>
                <span>&#x2192;</span>
                <span><span className="tm-arrow-up">&#x2191;</span> Maximize</span>
              </div>
            </section>

            {/* Slide 3: Digital */}
            <section className={`tm-slide ${currentSlide === 2 ? 'active' : ''}`} style={getSlideStyle(2)}>
              <h2 className={`tm-slide-headline ${a(2, 0)}`} style={d(0)}>
                <span className="tm-blue">Digital.</span> The system does it.
              </h2>
              <div className={`tm-digital-items ${a(2, 1)}`} style={d(1)}>
                {[
                  { icon: '\u{1F4C4}', text: 'Bill entry from PDF', delay: '1.2s' },
                  { icon: '\u{1F4E7}', text: 'Payment emails to vendors', delay: '1.4s' },
                  { icon: '\u{1F4CB}', text: 'PO creation from approvals', delay: '1.6s' },
                  { icon: '\u{1F4B0}', text: 'Invoice generation', delay: '1.8s' },
                  { icon: '\u{1F4CA}', text: 'Report generation', delay: '2.0s' },
                  { icon: '\u{23F0}', text: 'Time & attendance', delay: '2.2s' },
                  { icon: '\u{1F4C5}', text: 'Appointment reminders', delay: '2.4s' },
                  { icon: '\u{1F4DD}', text: 'Quote follow-ups', delay: '2.6s' },
                ].map((item, i) => (
                  <div key={i} className="tm-digital-item" style={{ '--delay': item.delay } as React.CSSProperties}>
                    <span className="tm-item-icon">{item.icon}</span> {item.text}
                    <div className="tm-automated-check">&#x2713;</div>
                  </div>
                ))}
              </div>
              <p className={`tm-digital-summary ${a(2, 2)}`} style={d(2)}>Zero human effort required.</p>
              <p className={`tm-slide-quote ${a(2, 3)}`} style={d(3)}>
                If it&apos;s digital, the system can do it.
                You don&apos;t have to take a copy and paste.
              </p>
            </section>

            {/* Slide 4: Judgment */}
            <section className={`tm-slide ${currentSlide === 3 ? 'active' : ''}`} style={getSlideStyle(3)}>
              <h2 className={`tm-slide-headline ${a(3, 0)}`} style={d(0)}>
                <span className="tm-gold">Judgment.</span> Your queue.
              </h2>
              <p className={`tm-slide-subtext ${a(3, 1)}`} style={d(1)}>
                Things the system can&apos;t handle alone. It flags them. You decide.
              </p>
              <div className={`tm-judgment-queue ${a(3, 2)}`} style={d(2)}>
                <div className="tm-queue-item">
                  <div className="tm-queue-confidence tm-confidence-low">
                    <div className="tm-confidence-bar"><div className="tm-confidence-bar-fill"></div></div>
                    <span className="tm-confidence-label">Low</span>
                  </div>
                  <span className="tm-queue-text">Handwritten PO from security — can&apos;t read</span>
                  <span className="tm-queue-action">Review</span>
                </div>
                <div className="tm-queue-item">
                  <div className="tm-queue-confidence tm-confidence-med">
                    <div className="tm-confidence-bar"><div className="tm-confidence-bar-fill"></div></div>
                    <span className="tm-confidence-label">Medium</span>
                  </div>
                  <span className="tm-queue-text">Technician reported 1hr, job usually takes 2hrs</span>
                  <span className="tm-queue-action">Verify</span>
                </div>
                <div className="tm-queue-item">
                  <div className="tm-queue-confidence tm-confidence-low">
                    <div className="tm-confidence-bar"><div className="tm-confidence-bar-fill"></div></div>
                    <span className="tm-confidence-label">Low</span>
                  </div>
                  <span className="tm-queue-text">Customer disputing invoice — needs call</span>
                  <span className="tm-queue-action">Call</span>
                </div>
              </div>
              <p className={`tm-slide-quote ${a(3, 3)}`} style={d(3)}>
                The things that require critical thinking —
                those are going to be on my queue of things I have to actually do.
              </p>
            </section>

            {/* Slide 5: Contributor */}
            <section className={`tm-slide ${currentSlide === 4 ? 'active' : ''}`} style={getSlideStyle(4)}>
              <div className={`tm-contributor-glow anim-fade ${a(4, 0)}`} style={d(0)}></div>
              <h2 className={`tm-slide-headline ${a(4, 1)}`} style={d(1)}>
                <span className="tm-teal">Contributor.</span> This is the point.
              </h2>
              <p className={`tm-slide-subtext ${a(4, 2)}`} style={d(2)}>
                Not processing work. Creating value.
              </p>
              <div className="tm-contributor-ideas">
                <div className={`tm-idea-card ${a(4, 3)}`} style={d(3)}>
                  <span className="tm-idea-icon">&#x1F4AC;</span>
                  <div className="tm-idea-content">
                    <span className="tm-idea-who">Alex&apos;s idea</span>
                    <span className="tm-idea-text">Attach a plain-language FAQ to every quote so customers actually understand what they&apos;re buying</span>
                    <span className="tm-idea-impact">Differentiates from every competitor</span>
                  </div>
                </div>
                <div className={`tm-idea-card ${a(4, 4)}`} style={d(4)}>
                  <span className="tm-idea-icon">&#x1F527;</span>
                  <div className="tm-idea-content">
                    <span className="tm-idea-who">Randi&apos;s catch</span>
                    <span className="tm-idea-text">Investigated why batteries are replaced weekly — it&apos;s the alternator, not the battery</span>
                    <span className="tm-idea-impact">Saves recurring expense every week</span>
                  </div>
                </div>
                <div className={`tm-idea-card ${a(4, 5)}`} style={d(5)}>
                  <span className="tm-idea-icon">&#x1F4B2;</span>
                  <div className="tm-idea-content">
                    <span className="tm-idea-who">Anyone&apos;s opportunity</span>
                    <span className="tm-idea-text">Negotiate vendor discounts, spot upsells during service calls, improve a process</span>
                    <span className="tm-idea-impact">Measurable. Compensable.</span>
                  </div>
                </div>
              </div>
              <p className={`tm-slide-quote ${a(4, 6)}`} style={d(6)}>
                What can we do to help grow, build, improve?
                That&apos;s the part we need more focus on — not the processing stuff.
              </p>
            </section>

            {/* Slide 6: The Shift */}
            <section className={`tm-slide ${currentSlide === 5 ? 'active' : ''}`} style={getSlideStyle(5)}>
              <h2 className={`tm-slide-headline ${a(5, 0)}`} style={d(0)}>
                The <span className="tm-gold">shift</span>
              </h2>
              <div className="tm-shift-comparison">
                <div className={`tm-shift-side tm-before anim-left ${a(5, 1)}`} style={d(1)}>
                  <span className="tm-shift-label">Before</span>
                  <div className="tm-shift-item"><span className="tm-icon">&#x2717;</span> &quot;I do accounts payable&quot;</div>
                  <div className="tm-shift-item"><span className="tm-icon">&#x2717;</span> Siloed departments</div>
                  <div className="tm-shift-item"><span className="tm-icon">&#x2717;</span> Job description = task list</div>
                  <div className="tm-shift-item"><span className="tm-icon">&#x2717;</span> I stay in my lane</div>
                  <div className="tm-shift-item"><span className="tm-icon">&#x2717;</span> Success = tasks completed</div>
                </div>
                <div className={`tm-shift-divider anim-scale ${a(5, 2)}`} style={d(2)}>&#x2192;</div>
                <div className={`tm-shift-side tm-after anim-right ${a(5, 3)}`} style={d(3)}>
                  <span className="tm-shift-label">After</span>
                  <div className="tm-shift-item"><span className="tm-icon">&#x2713;</span> &quot;I contribute to the company&quot;</div>
                  <div className="tm-shift-item"><span className="tm-icon">&#x2713;</span> Cross-functional collaboration</div>
                  <div className="tm-shift-item"><span className="tm-icon">&#x2713;</span> Job = add measurable value</div>
                  <div className="tm-shift-item"><span className="tm-icon">&#x2713;</span> We all contribute everywhere</div>
                  <div className="tm-shift-item"><span className="tm-icon">&#x2713;</span> Success = value created</div>
                </div>
              </div>
              <p className={`tm-slide-quote ${a(5, 4)}`} style={d(4)}>
                Your job is to contribute to the growth of the company.
                You don&apos;t do sales. You don&apos;t do HR. You don&apos;t do service.
                Your job is contribution.
              </p>
            </section>

            {/* Slide 7: How It Works */}
            <section className={`tm-slide ${currentSlide === 6 ? 'active' : ''}`} style={getSlideStyle(6)}>
              <h2 className={`tm-slide-headline ${a(6, 0)}`} style={d(0)}>
                A day in <span className="tm-gold">the new model</span>
              </h2>
              <div className="tm-daily-timeline">
                <div className={`tm-timeline-step ${a(6, 1)}`} style={d(1)}>
                  <div className="tm-step-dot">&#x2615;</div>
                  <div className="tm-step-content">
                    <span className="tm-step-time">8:00 AM</span>
                    <span className="tm-step-action">Morning standup</span>
                    <span className="tm-step-detail">&quot;What you got? What&apos;s your pain point? What irks you?&quot;</span>
                  </div>
                </div>
                <div className={`tm-timeline-step ${a(6, 2)}`} style={d(2)}>
                  <div className="tm-step-dot">&#x2699;</div>
                  <div className="tm-step-content">
                    <span className="tm-step-time">Already done</span>
                    <span className="tm-step-action">Digital work handled overnight</span>
                    <span className="tm-step-detail">Bills entered, emails sent, reports generated</span>
                    <span className="tm-copilot-badge">System automated</span>
                  </div>
                </div>
                <div className={`tm-timeline-step ${a(6, 3)}`} style={d(3)}>
                  <div className="tm-step-dot">&#x1F50D;</div>
                  <div className="tm-step-content">
                    <span className="tm-step-time">8:30 AM</span>
                    <span className="tm-step-action">Check your queue</span>
                    <span className="tm-step-detail">3 items need your judgment. Review, decide, done.</span>
                    <span className="tm-copilot-badge">Co-pilot mode</span>
                  </div>
                </div>
                <div className={`tm-timeline-step ${a(6, 4)}`} style={d(4)}>
                  <div className="tm-step-dot">&#x1F4A1;</div>
                  <div className="tm-step-content">
                    <span className="tm-step-time">Rest of day</span>
                    <span className="tm-step-action">Contribute</span>
                    <span className="tm-step-detail">Collaborate on ideas. Improve a process. Spot an opportunity.</span>
                  </div>
                </div>
              </div>
              <p className={`tm-slide-quote ${a(6, 5)}`} style={d(5)}>
                I don&apos;t need you. I want you.
                There&apos;s a difference. I want you because you have
                knowledge, tribal knowledge of the business.
              </p>
            </section>

            {/* Slide 8: Your Move */}
            <section className={`tm-slide ${currentSlide === 7 ? 'active' : ''}`} style={getSlideStyle(7)}>
              <h2 className={`tm-slide-headline ${a(7, 0)}`} style={d(0)}>
                <span className="tm-gold">Your move.</span>
              </h2>
              <p className={`tm-slide-subtext ${a(7, 1)}`} style={d(1)}>
                Categorize your work. Every task goes in a bucket.
              </p>
              <div className={`tm-cta-buckets anim-scale ${a(7, 2)}`} style={d(2)}>
                <div className="tm-cta-bucket">
                  <div className="tm-cta-bucket-vessel">?</div>
                  <span className="tm-cta-bucket-label">Digital</span>
                  <span className="tm-cta-bucket-prompt">What do you do that&apos;s purely data entry?</span>
                </div>
                <div className="tm-cta-bucket">
                  <div className="tm-cta-bucket-vessel">?</div>
                  <span className="tm-cta-bucket-label">Judgment</span>
                  <span className="tm-cta-bucket-prompt">What requires you to think and decide?</span>
                </div>
                <div className="tm-cta-bucket">
                  <div className="tm-cta-bucket-vessel">?</div>
                  <span className="tm-cta-bucket-label">Contributor</span>
                  <span className="tm-cta-bucket-prompt">What would you do to grow your company?</span>
                </div>
              </div>
              <p className={`tm-cta-instruction ${a(7, 3)}`} style={d(3)}>
                Start classifying your tasks. <strong>Pick one from each bucket.</strong>
              </p>
              <p className={`tm-slide-quote ${a(7, 4)}`} style={d(4)}>We&apos;re all contributors.</p>
            </section>

          </main>
        )}
      </SlideEngine>
    </>
  );
}

const teamMemberCSS = `
#tm-slideshow {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.tm-slide {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 4rem;
  opacity: 0;
  pointer-events: none;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1),
              opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;
}

.tm-slide.active { opacity: 1; pointer-events: auto; }

/* Entrance animations */
.tm-slide .animate-in { animation: tm-enter-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
.tm-slide .anim-fade.animate-in { animation: tm-enter-fade 0.8s ease forwards; }
.tm-slide .anim-scale.animate-in { animation: tm-enter-scale 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
.tm-slide .anim-left.animate-in { animation: tm-enter-left 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
.tm-slide .anim-right.animate-in { animation: tm-enter-right 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; }

/* Hidden state for animatable elements */
.tm-slide .tm-slide-headline:not(.animate-in),
.tm-slide .tm-slide-subtext:not(.animate-in),
.tm-slide .tm-slide-quote:not(.animate-in),
.tm-slide .tm-repeat-indicator:not(.animate-in),
.tm-slide .tm-problem-visual:not(.animate-in),
.tm-slide .tm-buckets-container:not(.animate-in),
.tm-slide .tm-bucket-direction:not(.animate-in),
.tm-slide .tm-digital-items:not(.animate-in),
.tm-slide .tm-digital-summary:not(.animate-in),
.tm-slide .tm-judgment-queue:not(.animate-in),
.tm-slide .tm-contributor-glow:not(.animate-in),
.tm-slide .tm-idea-card:not(.animate-in),
.tm-slide .tm-shift-side:not(.animate-in),
.tm-slide .tm-shift-divider:not(.animate-in),
.tm-slide .tm-timeline-step:not(.animate-in),
.tm-slide .tm-cta-buckets:not(.animate-in),
.tm-slide .tm-cta-instruction:not(.animate-in) {
  opacity: 0;
  transform: translateY(20px);
}
.tm-slide .anim-scale:not(.animate-in) { opacity: 0; transform: scale(0.8); }
.tm-slide .anim-fade:not(.animate-in) { opacity: 0; transform: none; }
.tm-slide .anim-left:not(.animate-in) { opacity: 0; transform: translateX(-30px); }
.tm-slide .anim-right:not(.animate-in) { opacity: 0; transform: translateX(30px); }

@keyframes tm-enter-up { to { opacity: 1; transform: translateY(0); } }
@keyframes tm-enter-fade { to { opacity: 1; } }
@keyframes tm-enter-scale { to { opacity: 1; transform: scale(1); } }
@keyframes tm-enter-left { to { opacity: 1; transform: translateX(0); } }
@keyframes tm-enter-right { to { opacity: 1; transform: translateX(0); } }

/* Typography */
.tm-slide-headline {
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(2rem, 5vw, 3.5rem); font-weight: 700;
  line-height: 1.15; text-align: center; max-width: 900px;
  color: var(--fg, hsl(220 10% 90%));
}
.tm-slide-headline .tm-gold { color: var(--gold, hsl(38 92% 50%)); }
.tm-slide-headline .tm-blue { color: var(--blue-light, hsl(213 66% 55%)); }
.tm-slide-headline .tm-teal { color: var(--teal, hsl(160 84% 39%)); }

.tm-slide-subtext {
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: var(--fg-muted, hsl(220 10% 55%));
  text-align: center; max-width: 700px; line-height: 1.6; margin-top: 1.5rem;
}

.tm-slide-quote {
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(1.25rem, 3vw, 2rem); font-style: italic;
  color: var(--gold, hsl(38 92% 50%));
  text-align: center; max-width: 800px; line-height: 1.5;
  margin-top: 2rem; position: relative; padding: 0 2rem;
}
.tm-slide-quote::before {
  content: '\\201C'; font-size: 4rem; position: absolute;
  left: -0.5rem; top: -1rem;
  color: var(--gold, hsl(38 92% 50%)); opacity: 0.3;
}

/* --- Slide 1: Problem --- */
.tm-problem-visual { display: flex; align-items: center; gap: 2rem; margin-bottom: 2rem; }
.tm-screen-box {
  width: 120px; height: 80px;
  border: 2px solid var(--border, hsl(220 13% 18%)); border-radius: 8px;
  background: var(--surface, hsl(220 13% 12%));
  display: flex; align-items: center; justify-content: center;
  font-size: 0.75rem; color: var(--fg-muted, hsl(220 10% 55%));
  position: relative;
}
.tm-copy-arrow { display: flex; flex-direction: column; align-items: center; gap: 0.25rem; color: var(--rose, hsl(350 89% 60%)); }
.tm-copy-arrow .tm-arrow-line { width: 60px; height: 2px; background: var(--rose, hsl(350 89% 60%)); position: relative; }
.tm-copy-arrow .tm-arrow-line::after {
  content: ''; position: absolute; right: -2px; top: -4px;
  border: 5px solid transparent; border-left-color: var(--rose, hsl(350 89% 60%));
}
.tm-copy-arrow span { font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.1em; }
.tm-data-packet {
  position: absolute; width: 8px; height: 8px;
  background: var(--gold, hsl(38 92% 50%)); border-radius: 2px;
  top: 50%; margin-top: -4px;
  animation: tm-packet-move 2s ease-in-out infinite;
}
@keyframes tm-packet-move {
  0% { left: 100%; opacity: 0; } 10% { opacity: 1; }
  90% { opacity: 1; } 100% { left: calc(100% + 100px); opacity: 0; }
}
.tm-repeat-indicator {
  font-size: 0.8rem; color: var(--fg-muted, hsl(220 10% 55%));
  margin-top: 1rem; display: flex; align-items: center; gap: 0.5rem;
}
.tm-repeat-indicator .tm-loop-icon { color: var(--rose, hsl(350 89% 60%)); font-size: 1.2rem; }

/* --- Slide 2: Buckets --- */
.tm-buckets-container { display: flex; gap: 2rem; margin: 2rem 0; }
.tm-bucket { display: flex; flex-direction: column; align-items: center; gap: 1rem; width: 200px; }
.tm-bucket-vessel {
  width: 140px; height: 160px;
  border: 2px solid var(--border, hsl(220 13% 18%)); border-top: none;
  border-radius: 0 0 20px 20px; position: relative; overflow: hidden;
  background: var(--surface, hsl(220 13% 12%));
}
.tm-bucket-fill {
  position: absolute; bottom: 0; left: 0; right: 0;
  transition: height 1s cubic-bezier(0.16, 1, 0.3, 1); height: 0;
}
.tm-bucket.tm-digital .tm-bucket-fill {
  background: linear-gradient(to top, hsla(213, 66%, 33%, 0.4), hsla(213, 66%, 33%, 0.1));
  border-top: 2px solid var(--blue-light, hsl(213 66% 55%));
}
.tm-bucket.tm-judgment .tm-bucket-fill {
  background: linear-gradient(to top, hsla(38, 92%, 50%, 0.3), hsla(38, 92%, 50%, 0.1));
  border-top: 2px solid var(--gold, hsl(38 92% 50%));
}
.tm-bucket.tm-contributor .tm-bucket-fill {
  background: linear-gradient(to top, hsla(160, 84%, 39%, 0.3), hsla(160, 84%, 39%, 0.1));
  border-top: 2px solid var(--teal, hsl(160 84% 39%));
}
.tm-bucket-icon { font-size: 2rem; line-height: 1; }
.tm-bucket-label { font-family: var(--font-serif, Georgia, serif); font-size: 1.1rem; font-weight: 700; text-align: center; }
.tm-bucket.tm-digital .tm-bucket-label { color: var(--blue-light, hsl(213 66% 55%)); }
.tm-bucket.tm-judgment .tm-bucket-label { color: var(--gold, hsl(38 92% 50%)); }
.tm-bucket.tm-contributor .tm-bucket-label { color: var(--teal, hsl(160 84% 39%)); }
.tm-bucket-desc { font-size: 0.85rem; color: var(--fg-muted, hsl(220 10% 55%)); text-align: center; line-height: 1.4; }
.tm-slide.active .tm-bucket-fill { height: 70%; }
.tm-bucket-direction { display: flex; align-items: center; gap: 1.5rem; margin-top: 1.5rem; font-size: 0.9rem; color: var(--fg-muted, hsl(220 10% 55%)); }
.tm-bucket-direction .tm-arrow-down { color: var(--rose, hsl(350 89% 60%)); }
.tm-bucket-direction .tm-arrow-up { color: var(--teal, hsl(160 84% 39%)); }

/* --- Slide 3: Digital --- */
.tm-digital-items { display: flex; flex-wrap: wrap; gap: 0.75rem; justify-content: center; max-width: 700px; margin: 1.5rem 0; }
.tm-digital-item {
  display: flex; align-items: center; gap: 0.5rem; padding: 0.5rem 1rem;
  background: var(--surface, hsl(220 13% 12%));
  border: 1px solid var(--border, hsl(220 13% 18%)); border-radius: 6px;
  font-size: 0.85rem; color: var(--fg-muted, hsl(220 10% 55%));
  position: relative; overflow: hidden;
}
.tm-digital-item .tm-item-icon { font-size: 1rem; }
.tm-automated-check {
  position: absolute; top: -6px; right: -6px;
  width: 20px; height: 20px; border-radius: 50%;
  background: hsl(145 72% 40%);
  color: white; font-size: 0.7rem; font-weight: 700;
  display: flex; align-items: center; justify-content: center;
  opacity: 0; transform: scale(0.5);
  box-shadow: 0 0 8px hsla(145, 72%, 40%, 0.4);
}
.tm-slide.active .tm-digital-item .tm-automated-check {
  animation: tm-check-pop 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  animation-delay: var(--delay, 1.5s);
}
@keyframes tm-check-pop { to { opacity: 1; transform: scale(1); } }
.tm-slide.active .tm-digital-item {
  animation: tm-card-tint 0.4s ease forwards;
  animation-delay: var(--delay, 1.5s);
}
@keyframes tm-card-tint { to { border-color: hsla(213, 66%, 55%, 0.4); } }
.tm-digital-summary { font-size: 1rem; color: var(--blue-light, hsl(213 66% 55%)); font-weight: 600; margin-top: 1rem; text-align: center; }

/* --- Slide 4: Judgment --- */
.tm-judgment-queue { display: flex; flex-direction: column; gap: 0.75rem; max-width: 550px; width: 100%; margin: 1.5rem 0; }
.tm-queue-item {
  display: flex; align-items: center; gap: 1rem; padding: 0.75rem 1rem;
  background: var(--surface, hsl(220 13% 12%));
  border: 1px solid var(--border, hsl(220 13% 18%)); border-radius: 8px;
  border-left: 3px solid var(--gold, hsl(38 92% 50%));
}
.tm-queue-confidence { display: flex; flex-direction: column; align-items: center; gap: 0.15rem; min-width: 50px; }
.tm-confidence-bar { width: 40px; height: 4px; background: var(--border, hsl(220 13% 18%)); border-radius: 2px; overflow: hidden; }
.tm-confidence-bar-fill { height: 100%; border-radius: 2px; transition: width 1s ease; width: 0; }
.tm-confidence-low .tm-confidence-bar-fill { background: var(--rose, hsl(350 89% 60%)); }
.tm-confidence-med .tm-confidence-bar-fill { background: var(--gold, hsl(38 92% 50%)); }
.tm-slide.active .tm-confidence-low .tm-confidence-bar-fill { width: 25%; }
.tm-slide.active .tm-confidence-med .tm-confidence-bar-fill { width: 55%; }
.tm-confidence-label { font-size: 0.6rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--fg-muted, hsl(220 10% 55%)); }
.tm-queue-text { font-size: 0.9rem; color: var(--fg, hsl(220 10% 90%)); flex: 1; }
.tm-queue-action {
  font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.1em;
  color: var(--gold, hsl(38 92% 50%)); padding: 0.25rem 0.5rem;
  border: 1px solid var(--gold, hsl(38 92% 50%)); border-radius: 4px; white-space: nowrap;
}

/* --- Slide 5: Contributor --- */
.tm-contributor-ideas { display: flex; flex-direction: column; gap: 1rem; max-width: 600px; margin: 1.5rem 0; }
.tm-idea-card {
  display: flex; align-items: flex-start; gap: 1rem; padding: 1rem 1.25rem;
  background: var(--surface, hsl(220 13% 12%));
  border: 1px solid var(--border, hsl(220 13% 18%)); border-radius: 10px;
  border-left: 3px solid var(--teal, hsl(160 84% 39%));
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}
.tm-idea-icon { font-size: 1.5rem; line-height: 1; flex-shrink: 0; }
.tm-idea-content { display: flex; flex-direction: column; gap: 0.25rem; }
.tm-idea-who { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--teal, hsl(160 84% 39%)); font-weight: 600; }
.tm-idea-text { font-size: 0.95rem; color: var(--fg, hsl(220 10% 90%)); line-height: 1.4; }
.tm-idea-impact { font-size: 0.8rem; color: var(--fg-muted, hsl(220 10% 55%)); font-style: italic; }
.tm-contributor-glow {
  position: absolute; width: 300px; height: 300px; border-radius: 50%;
  background: radial-gradient(circle, hsla(160, 84%, 39%, 0.08), transparent 70%);
  pointer-events: none; animation: tm-glow-pulse 4s ease-in-out infinite;
}
@keyframes tm-glow-pulse { 0%, 100% { transform: scale(1); opacity: 0.5; } 50% { transform: scale(1.2); opacity: 1; } }

/* --- Slide 6: Shift --- */
.tm-shift-comparison { display: flex; gap: 2rem; margin: 2rem 0; max-width: 800px; width: 100%; }
.tm-shift-side { flex: 1; display: flex; flex-direction: column; gap: 0.75rem; padding: 1.5rem; border-radius: 12px; border: 1px solid var(--border, hsl(220 13% 18%)); }
.tm-shift-side.tm-before { background: hsla(350, 89%, 60%, 0.05); border-color: hsla(350, 89%, 60%, 0.2); }
.tm-shift-side.tm-after { background: hsla(160, 84%, 39%, 0.05); border-color: hsla(160, 84%, 39%, 0.2); }
.tm-shift-label { font-family: var(--font-serif, Georgia, serif); font-size: 1.1rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; }
.tm-shift-side.tm-before .tm-shift-label { color: var(--rose, hsl(350 89% 60%)); }
.tm-shift-side.tm-after .tm-shift-label { color: var(--teal, hsl(160 84% 39%)); }
.tm-shift-item { display: flex; align-items: center; gap: 0.75rem; font-size: 0.9rem; color: var(--fg-muted, hsl(220 10% 55%)); line-height: 1.4; }
.tm-shift-item .tm-icon { font-size: 1.1rem; flex-shrink: 0; }
.tm-shift-side.tm-before .tm-shift-item .tm-icon { color: var(--rose, hsl(350 89% 60%)); }
.tm-shift-side.tm-after .tm-shift-item .tm-icon { color: var(--teal, hsl(160 84% 39%)); }
.tm-shift-divider { display: flex; align-items: center; justify-content: center; font-size: 2rem; color: var(--gold, hsl(38 92% 50%)); padding: 0 0.5rem; }

/* --- Slide 7: Daily --- */
.tm-daily-timeline { display: flex; flex-direction: column; gap: 0; max-width: 500px; width: 100%; margin: 1.5rem 0; position: relative; }
.tm-daily-timeline::before {
  content: ''; position: absolute; left: 19px; top: 10px; bottom: 10px;
  width: 2px; background: var(--border, hsl(220 13% 18%));
}
.tm-timeline-step { display: flex; align-items: flex-start; gap: 1rem; padding: 0.75rem 0; position: relative; }
.tm-step-dot {
  width: 40px; height: 40px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 1.1rem; flex-shrink: 0; z-index: 1;
  border: 2px solid var(--border, hsl(220 13% 18%));
  background: var(--bg, hsl(220 13% 8%)); transition: all 0.5s ease;
}
.tm-slide.active .tm-step-dot { border-color: var(--gold, hsl(38 92% 50%)); background: var(--surface, hsl(220 13% 12%)); }
.tm-step-content { display: flex; flex-direction: column; gap: 0.15rem; padding-top: 0.5rem; }
.tm-step-time { font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--gold, hsl(38 92% 50%)); font-weight: 600; }
.tm-step-action { font-size: 0.95rem; color: var(--fg, hsl(220 10% 90%)); }
.tm-step-detail { font-size: 0.8rem; color: var(--fg-muted, hsl(220 10% 55%)); }
.tm-copilot-badge {
  display: inline-flex; align-items: center; gap: 0.35rem;
  padding: 0.2rem 0.5rem; background: hsla(213, 66%, 33%, 0.15);
  border: 1px solid var(--blue-light, hsl(213 66% 55%)); border-radius: 4px;
  font-size: 0.7rem; color: var(--blue-light, hsl(213 66% 55%));
  text-transform: uppercase; letter-spacing: 0.08em; margin-top: 0.35rem; width: fit-content;
}

/* --- Slide 8: CTA --- */
.tm-cta-buckets { display: flex; gap: 2rem; margin: 2rem 0; }
.tm-cta-bucket { display: flex; flex-direction: column; align-items: center; gap: 0.75rem; width: 180px; }
.tm-cta-bucket-vessel {
  width: 120px; height: 140px;
  border: 2px dashed var(--border, hsl(220 13% 18%)); border-top: none;
  border-radius: 0 0 20px 20px; display: flex; align-items: center; justify-content: center;
  font-size: 2rem; color: var(--fg-muted, hsl(220 10% 55%));
  transition: border-color 0.5s ease;
}
.tm-cta-bucket-vessel:hover { border-color: var(--gold, hsl(38 92% 50%)); }
.tm-cta-bucket-label { font-family: var(--font-serif, Georgia, serif); font-size: 1rem; font-weight: 700; }
.tm-cta-bucket:nth-child(1) .tm-cta-bucket-label { color: var(--blue-light, hsl(213 66% 55%)); }
.tm-cta-bucket:nth-child(2) .tm-cta-bucket-label { color: var(--gold, hsl(38 92% 50%)); }
.tm-cta-bucket:nth-child(3) .tm-cta-bucket-label { color: var(--teal, hsl(160 84% 39%)); }
.tm-cta-bucket-prompt { font-size: 0.8rem; color: var(--fg-muted, hsl(220 10% 55%)); text-align: center; font-style: italic; }
.tm-cta-instruction { font-size: 1.1rem; color: var(--fg, hsl(220 10% 90%)); text-align: center; max-width: 500px; line-height: 1.6; margin-top: 1rem; }
.tm-cta-instruction strong { color: var(--gold, hsl(38 92% 50%)); }

/* Responsive */
@media (max-width: 768px) {
  .tm-slide { padding: 2rem 1.5rem; }
  .tm-screen-box { width: 90px; height: 60px; }
  .tm-copy-arrow .tm-arrow-line { width: 40px; }
  .tm-buckets-container { flex-direction: column; align-items: center; gap: 1.5rem; }
  .tm-bucket-vessel { width: 120px; height: 120px; }
  .tm-digital-items { gap: 0.5rem; }
  .tm-digital-item { font-size: 0.75rem; padding: 0.4rem 0.75rem; }
  .tm-queue-item { flex-wrap: wrap; gap: 0.5rem; }
  .tm-queue-action { margin-left: auto; }
  .tm-idea-card { padding: 0.75rem 1rem; }
  .tm-shift-comparison { flex-direction: column; gap: 1rem; }
  .tm-shift-divider { transform: rotate(90deg); padding: 0; }
  .tm-daily-timeline { padding-left: 0.5rem; }
  .tm-cta-buckets { flex-direction: column; align-items: center; gap: 1.5rem; }
  .tm-cta-bucket-vessel { width: 100px; height: 110px; }
}

@media (max-width: 480px) {
  .tm-slide { padding: 1.5rem 1rem; }
  .tm-problem-visual { gap: 1rem; }
  .tm-screen-box { width: 80px; height: 55px; font-size: 0.65rem; }
  .tm-copy-arrow .tm-arrow-line { width: 30px; }
  .tm-bucket { width: min(200px, 80vw); }
  .tm-bucket-vessel { width: 100px; height: 100px; }
  .tm-bucket-direction { gap: 0.75rem; font-size: 0.8rem; flex-wrap: wrap; justify-content: center; }
  .tm-judgment-queue { max-width: 100%; }
  .tm-queue-text { font-size: 0.8rem; }
  .tm-contributor-ideas { max-width: 100%; }
  .tm-idea-card { gap: 0.75rem; padding: 0.6rem 0.75rem; }
  .tm-idea-text { font-size: 0.85rem; }
  .tm-shift-side { padding: 1rem; }
  .tm-shift-item { font-size: 0.8rem; }
  .tm-daily-timeline { max-width: 100%; }
  .tm-cta-bucket { width: min(180px, 80vw); }
  .tm-cta-bucket-vessel { width: 90px; height: 100px; }
  .tm-slide-quote { padding: 0 1rem; margin-top: 1.5rem; }
  .tm-slide-quote::before { left: -0.25rem; }
}
`;
