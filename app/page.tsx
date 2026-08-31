import ContactForm from './contact-form';

const navItems = [
  ['AI Readiness', '#readiness'], ['AI Skills Workshops', '#skills'],
  ['AI Learning Circles', '#circles'], ['Emotional Intelligence', '#emotional-intelligence'],
  ['Change & Transformation', '#transformation'], ['Results', '#results'], ['About', '#about'],
];

const needs = [
  'Role-specific opportunities to apply AI to real work', 'The confidence to experiment, question and learn',
  'The judgment to evaluate AI-generated information', 'Clarity about what AI should and should not do',
  'Shared standards for responsible use', 'Leaders who can navigate anxiety, uncertainty and resistance',
  'Time and support to turn new knowledge into new behavior',
];

const pathway = [
  {
    number: '01', kicker: 'Measure readiness', id: 'readiness', title: 'Six Dimensions Employee Engagement and Change Readiness Survey',
    text: 'Before introducing another tool or training program, we assess whether the organizational environment can support meaningful change.',
    bullets: ['Empowered to make decisions and apply new skills', 'Safe to experiment, question and admit uncertainty', 'Respected for the professional judgment they bring', 'Supported with appropriate leadership, guidance and resources', 'Acknowledged when they raise concerns, needs or ideas', 'Connected to colleagues, purpose and shared learning'],
    close: 'The results reveal the cultural, emotional and systemic barriers that could prevent AI adoption from translating into performance.',
    cta: 'Start with the readiness survey', tone: 'cyan',
  },
  {
    number: '02', kicker: 'Strengthen leadership judgment', id: 'emotional-intelligence', title: 'MSCEIT® 2 Emotional Intelligence Assessments',
    text: 'AI adoption creates decisions that technology alone cannot make. Leaders must know when to trust an output, when to challenge it and how to lead people through the emotional reality of change.',
    bullets: ['Recognize emotional information influencing decisions', 'Respond more effectively under pressure', 'Understand how emotions affect attention, risk and judgment', 'Navigate resistance with curiosity rather than dismissal', 'Communicate change with clarity and compassion', 'Create healthier conditions for learning and experimentation'],
    close: 'The ability-based MSCEIT® 2 assessment, paired with Emotional Maths® feedback and coaching, measures how effectively leaders perceive, connect, understand and manage emotions.',
    cta: 'Equip our leaders for AI-era change', tone: 'magenta',
  },
  {
    number: '03', kicker: 'Build practical AI capability', id: 'skills', title: 'Role-Specific AI Skills Workshops',
    text: 'People do not need more generic prompting tips. They need to practice using AI on the work they are responsible for doing.',
    bullets: ['Identify where AI can create useful value in their role', 'Brief AI clearly using the SCRIPT™ methodology', 'Evaluate outputs for accuracy, relevance, bias and risk', 'Protect sensitive organizational and customer information', 'Decide when human judgment must remain in the lead', 'Improve a real task, workflow or decision'],
    close: 'Every interactive workshop is built around your people, work and goals, not around promoting a particular technology platform.',
    cta: 'Design our AI skills workshop', tone: 'amber',
  },
  {
    number: '04', kicker: 'Turn learning into behavior', id: 'circles', title: 'Facilitated AI Learning Circles',
    text: 'One workshop can create awareness. Sustained practice creates capability. Learning Circles turn individual experimentation into organizational knowledge.',
    bullets: ['Bring genuine workplace challenges into the learning process', 'Practice with the AI tools available to them', 'Compare approaches and learn from colleagues', 'Examine where trust in AI is justified and where it is not', 'Explore emotional responses affecting adoption', 'Build shared language, judgment and responsible norms'],
    close: 'Leaders gain valuable insight into workflow friction, capability gaps, employee concerns and opportunities for improvement across the wider system.',
    cta: 'Launch an AI Learning Circle', tone: 'cyan',
  },
  {
    number: '05', kicker: 'Embed and sustain the change', id: 'transformation', title: 'AI Workforce Transformation and Change Support',
    text: 'Training cannot succeed if the surrounding organization remains unchanged. We connect AI learning to the systems that shape how work actually gets done.',
    bullets: ['Organizational priorities and decision rights', 'Existing workflows, processes and responsibilities', 'Leadership behavior and employee engagement', 'Policies, governance and responsible-use standards', 'Measures of productivity, quality and wellbeing', 'Ongoing learning, accountability and reinforcement'],
    close: 'The objective is not to make employees use more AI. It is to use AI where it creates real value while preserving the human capabilities that matter.',
    cta: 'Build our transformation roadmap', tone: 'magenta',
  },
];

const credentialAwards = [
  { credential: 'SHRM-CP / SHRM-SCP', credits: '11 Professional Development Credits (PDCs)', status: 'Approved', emphasized: true },
  { credential: 'ATD CPTD / APTD', credits: '11 Recertification Points', status: 'Approved', emphasized: true },
  { credential: 'APA', credits: '11 Continuing Education Credits', status: 'Approved', emphasized: false },
  { credential: 'ICF', credits: '7 Core Competency + 4 Resource Development hours', status: 'Approved', emphasized: false },
];

const method = [
  ['See', 'Measure the current reality through surveys, interviews, workflow analysis and employee insight.'],
  ['Understand', 'Identify the emotional, cultural, operational and capability barriers affecting readiness.'],
  ['Make', 'Design the workshops, learning experiences, workflows and change interventions needed.'],
  ['Manage', 'Support people as they practice new skills, navigate uncertainty and apply learning to real work.'],
  ['Sustain', 'Measure adoption, reinforce effective behavior and connect workforce capability to outcomes.'],
];

const outcomes = [
  'Increased employee confidence using AI', 'More relevant, role-specific applications',
  'Time returned from repetitive or avoidable work', 'Better-quality AI outputs and stronger human review',
  'Reduced anxiety, confusion and unmanaged experimentation', 'Improved leadership judgment during change',
  'Stronger employee engagement and change readiness', 'Shared responsible-use practices',
  'Greater collaboration and knowledge exchange', 'Clearer workflows and decision rights',
  'Sustainable behavior change beyond the training event', 'A stronger link between AI investment and performance',
];

const experience = [
  ['25+', 'years of organizational change, communications, learning and transformation experience'],
  ['14', 'years of Big Four experience'], ['1,000+', 'employees reached through practical AI and digital-skills learning'],
  ['10', 'years of government experience with Secret clearance'],
  ['4', 'proprietary methodologies: Emotional Maths®, SUMMS™, SCRIPT™ and the Six Dimensions of EI Work Environments'],
  ['20+', 'years of research supporting master-practitioner expertise in the hard-ability MSCEIT® 2 science-based emotional intelligence model'],
];

const team = [
  { name: 'Charles R. Collins Jnr', role: 'Founder and AI Adoption Specialist', image: '/team-composite.png', crop: 'charles' },
  { name: 'Zena Tuitt Collins', role: 'EI & AI Skills Trainer', image: '/team-composite.png', crop: 'zena' },
  { name: 'Mela Toro Waters', role: 'Organizational Development Consultant', image: '/team-composite.png', crop: 'mela' },
  { name: 'David R. Caruso, PhD', role: 'Psychologist focused on the assessment and development of emotional intelligence', image: '/david-caruso.jpg', crop: 'david' },
];

function Brand() {
  return <span className="brand-mark" aria-hidden="true"><img src="/grand-strategy-mark-white.png" alt="" /></span>;
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Grand Strategy home"><Brand /><span>Grand Strategy</span></a>
        <nav aria-label="Primary navigation">{navItems.map(([label, href]) => <a href={href} key={href}>{label}</a>)}</nav>
        <a className="nav-cta" href="#contact">Assess our readiness</a>
        <details className="mobile-menu"><summary aria-label="Open navigation"><span /><span /><span /></summary><div>{navItems.map(([label, href]) => <a href={href} key={href}>{label}</a>)}<a href="#contact">Assess our readiness</a></div></details>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">AI access is not AI readiness</p>
          <h1>Build a workforce that can use AI well <span>and lead the change around it.</span></h1>
          <p className="hero-intro">Grand Strategy Consulting helps organizations measure workforce readiness, build practical AI skills, strengthen emotional intelligence and embed new ways of working that improve performance without losing human judgment, trust or connection.</p>
          <div className="hero-actions"><a className="button primary" href="#contact">Assess our AI readiness</a><a className="button text-link" href="#pathway">Explore the transformation pathway <span aria-hidden="true">↘</span></a></div>
          <p className="proof-line"><span>Human-centered</span><span>Tool-agnostic</span><span>Research-led</span><span>Built around real work</span></p>
        </div>
        <div className="hero-visual" aria-label="Five stages of the SUMMS methodology, with humans in the lead">
          <svg className="summs-diagram" viewBox="0 0 800 800" role="img" aria-labelledby="summs-title summs-desc">
            <title id="summs-title">Human in the Lead SUMMS methodology</title><desc id="summs-desc">Five connected hexagons labelled See, Understand, Make, Manage and Sustain surround a central hexagon labelled Human in the Lead.</desc>
            <defs><linearGradient id="summs-stroke" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#21c7ff"/><stop offset=".52" stopColor="#ffffff"/><stop offset="1" stopColor="#f16bdb"/></linearGradient><radialGradient id="summs-glow"><stop stopColor="#1a78ba" stopOpacity=".24"/><stop offset="1" stopColor="#0a1123" stopOpacity="0"/></radialGradient></defs>
            <circle cx="400" cy="400" r="350" fill="url(#summs-glow)"/><circle className="diagram-orbit diagram-orbit-outer" cx="400" cy="400" r="280"/><circle className="diagram-orbit diagram-orbit-inner" cx="400" cy="400" r="190"/>
            <g className="diagram-connectors" stroke="url(#summs-stroke)" strokeWidth="3"><line x1="400" y1="400" x2="400" y2="125"/><line x1="400" y1="400" x2="666" y2="314"/><line x1="400" y1="400" x2="565" y2="630"/><line x1="400" y1="400" x2="235" y2="630"/><line x1="400" y1="400" x2="134" y2="314"/></g>
            <g className="diagram-node-group"><polygon className="diagram-node diagram-node-see" points="400,45 469,85 469,165 400,205 331,165 331,85"/><text x="400" y="132" className="diagram-label">SEE</text></g>
            <g className="diagram-node-group"><polygon className="diagram-node diagram-node-understand" points="666,234 735,274 735,354 666,394 597,354 597,274"/><text x="666" y="312" className="diagram-label diagram-label-small">UNDERSTAND</text></g>
            <g className="diagram-node-group"><polygon className="diagram-node diagram-node-make" points="565,550 634,590 634,670 565,710 496,670 496,590"/><text x="565" y="637" className="diagram-label">MAKE</text></g>
            <g className="diagram-node-group"><polygon className="diagram-node diagram-node-manage" points="235,550 304,590 304,670 235,710 166,670 166,590"/><text x="235" y="637" className="diagram-label">MANAGE</text></g>
            <g className="diagram-node-group"><polygon className="diagram-node diagram-node-sustain" points="134,234 203,274 203,354 134,394 65,354 65,274"/><text x="134" y="312" className="diagram-label">SUSTAIN</text></g>
            <polygon className="diagram-core" points="400,255 526,327 526,473 400,545 274,473 274,327"/><text x="400" y="390" className="diagram-core-label"><tspan x="400">HUMAN</tspan><tspan x="400" dy="34">IN THE LEAD</tspan></text>
          </svg>
        </div>
      </section>

      <section className="client-experience" aria-labelledby="client-experience-title">
        <div className="client-experience-copy">
          <p className="section-label">Client experience</p>
          <h2 id="client-experience-title">Experience that sees beyond the tool.</h2>
          <p>We bring multidisciplinary global experience in project management, people and organisational change, and learning and development across nonprofit, SME, Fortune 100 and FTSE 100 organisations.</p>
          <p>We understand the process, people and performance challenges that sit behind the AI brief, so your solutions can create meaningful value in the work, not simply add another tool.</p>
        </div>
        <div className="client-logo-panel"><img src="/client-experience-logos.png" alt="Selected organisations and sectors represented in Grand Strategy Consulting's client experience" /></div>
      </section>

      <section className="problem light-section section-pad" aria-labelledby="problem-title">
        <div className="section-label">The readiness gap</div>
        <div className="problem-grid">
          <div><p className="kicker">The challenge is not access</p><h2 id="problem-title">Your workforce does not need another AI demonstration.</h2><p className="lead">Showing people what AI can do is not the same as preparing them to use it responsibly, confidently and consistently.</p><blockquote>AI adoption is emotional before it is technical.</blockquote></div>
          <div className="needs-card"><p>Employees need:</p><ul>{needs.map(item => <li key={item}>{item}</li>)}</ul></div>
        </div>
        <div className="video-feature">
          <iframe src="https://www.youtube-nocookie.com/embed/g-RbwujOFfs?rel=0" title="Grand Strategy Consulting video" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
        </div>
        <p className="section-note">Without these conditions, organizations may have AI access but still experience scattered experimentation, inconsistent quality, low trust, unmanaged risk and wasted investment.</p>
      </section>

      <section className="pathway section-pad" id="pathway" aria-labelledby="pathway-title">
        <div className="pathway-head"><div><div className="section-label">The transformation pathway</div><p className="kicker">An integrated workforce system</p><h2 id="pathway-title">From access to readiness.<br />From training to performance.</h2></div><p>Employee engagement, emotional intelligence, practical AI capability and organizational change, connected in one pathway.</p></div>
        <div className="pathway-line" aria-hidden="true">{pathway.map(step => <span key={step.number}>{step.number}</span>)}</div>
        <div className="pathway-list">
          {pathway.map(step => (
            <article className={`pathway-card ${step.tone}`} id={step.id} key={step.number}>
              <div className="step-meta"><span>{step.number}</span><p>{step.kicker}</p></div>
              <div className="step-copy">
                <h3>{step.title}</h3>
                <p className="step-intro">{step.text}</p>
                {step.id === 'emotional-intelligence' && <>
                  <div className="step-media-row"><div className="step-certification"><img src="/msceit2-certified.png" alt="MHS MSCEIT 2 Certified" /></div><div className="step-playlist"><iframe src="https://www.youtube-nocookie.com/embed/videoseries?list=PLcaD4ZHbCmLtK9BBzSVN3bbCSznDAx8Ys&rel=0" title="MSCEIT emotional intelligence video playlist" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen /></div></div>
                  <div className="credential-awards">
                    <h4>Professional credential credits awarded</h4>
                    <table aria-label="MSCEIT 2 credential credits awarded">
                      <thead><tr><th>Credential</th><th>Credits Awarded</th><th>Status</th></tr></thead>
                      <tbody>{credentialAwards.map(award => <tr key={award.credential}><td data-label="Credential">{award.emphasized ? <strong>{award.credential}</strong> : award.credential}</td><td data-label="Credits Awarded">{award.emphasized ? <strong>{award.credits}</strong> : award.credits}</td><td data-label="Status"><span>{award.status}</span></td></tr>)}</tbody>
                    </table>
                  </div>
                </>}
                <ul>{step.bullets.map(item => <li key={item}>{item}</li>)}</ul>
                <p className="step-close">{step.close}</p>
                <a className="arrow-link" href={step.id === 'emotional-intelligence' ? '/emotional-intelligence/p/emotional-intelligence-msceit-assessment-coaching-session-e9g35' : '#contact'}>{step.cta} <span aria-hidden="true">↗</span></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="method section-pad" aria-labelledby="method-title">
        <div className="method-intro"><div className="section-label">Our methodology</div><p className="kicker">SUMMS™</p><h2 id="method-title">A systems approach to AI workforce transformation.</h2><p>This prevents AI adoption from becoming an isolated technology initiative. It connects people, process, leadership, culture and performance.</p></div>
        <div className="method-steps">{method.map(([name, text], index) => <article key={name}><span>0{index + 1}</span><h3>{name}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="difference light-section section-pad" aria-labelledby="difference-title">
        <div className="section-label">What makes the approach different</div>
        <div className="difference-grid"><div><p className="kicker">Human judgment stays in the lead</p><h2 id="difference-title">Most AI providers begin with the technology. We begin with the work.</h2></div><div className="questions"><p>We ask:</p>{['What problem is the organization trying to solve?', 'Where are people losing time, energy or clarity?', 'What requires human judgment, trust, creativity or compassion?', 'What could AI safely and usefully support?', 'What emotional and cultural conditions will affect adoption?', 'How will the organization know performance has improved?'].map((q, i) => <p key={q}><span>0{i + 1}</span>{q}</p>)}</div></div>
        <div className="sometimes"><p>Sometimes the answer is a new AI workflow.</p><p>Sometimes it is better leadership, a clearer process, stronger emotional intelligence or a safer environment for learning.</p><strong>Frequently, it is a carefully designed combination.</strong></div>
      </section>

      <section className="results section-pad" id="results" aria-labelledby="results-title">
        <div className="results-head"><div><div className="section-label">Outcomes</div><p className="kicker">Evidence beyond attendance</p><h2 id="results-title">What successful AI workforce transformation should produce.</h2></div><p>We examine readiness, application, behavior, workflow improvement and organizational impact.</p></div>
        <div className="outcome-grid">{outcomes.map((outcome, i) => <div key={outcome}><span>{String(i + 1).padStart(2, '0')}</span><p>{outcome}</p></div>)}</div>
      </section>

      <section className="experience section-pad" id="about" aria-labelledby="experience-title">
        <div className="experience-copy"><div className="section-label">Evidence and experience</div><p className="kicker">Grounded in real organizations</p><h2 id="experience-title">Transformation experience that connects what others treat separately.</h2><p>Technology, workforce capability, emotional intelligence, employee engagement and change, brought together through experience across corporate, healthcare, government, education, technology, creative and mission-led environments.</p><p>Grand Strategy brings master-level MSCEIT® 2 practitioner and trainer capability, the Six Dimensions framework and deep organizational-change practice to every engagement.</p></div>
        <div className="experience-stats">{experience.map(([number, label]) => <div key={number + label}><strong>{number}</strong><span>{label}</span></div>)}</div>
        <div className="team-panel" aria-labelledby="team-title">
          <div className="team-heading"><div><p className="kicker">The people behind the work</p><h3 id="team-title">Our team</h3></div><p>Practical AI adoption, emotional intelligence and organizational development expertise in one integrated team.</p></div>
          <div className="team-grid">
            {team.map(member => (
              <article className="team-member" key={member.name}>
                <div className={`portrait-frame ${member.crop === 'david' ? 'photo' : 'composite'} ${member.crop}`}>
                  <img src={member.image} alt={member.name} />
                </div>
                <h4>{member.name}</h4><p>{member.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="diagnostic section-pad" aria-labelledby="diagnostic-title">
        <div className="diagnostic-copy"><div className="section-label">Start with readiness, not another tool</div><h2 id="diagnostic-title">Bring us one workforce challenge.</h2><p>In a focused diagnostic conversation, we will help determine what should be measured first and whether the right next step is a readiness survey, leadership assessment, skills workshop, Learning Circle or broader transformation roadmap.</p><p className="no-pitch">No generic AI pitch. No assumption that technology is automatically the answer.</p></div>
        <div className="challenge-cloud">{['Adoption is inconsistent', 'Value is unclear', 'People are anxious', 'Training has not changed behavior', 'Use cases remain generic', 'Standards are missing', 'Processes are fragmented', 'Leaders need evidence'].map(item => <span key={item}>{item}</span>)}</div>
      </section>

      <section className="book-offer section-pad" id="discovery" aria-labelledby="book-offer-title">
        <div className="book-cover-shell">
          <a className="book-cover-link" href="https://www.stopwastingtimewithai.com/" target="_blank" rel="noreferrer" aria-label="Visit the Stop Wasting Time With AI website">
            <img src="/stop-wasting-time-with-ai.png" alt="Stop Wasting Time With AI book cover by Zena Collins" />
          </a>
        </div>
        <div className="book-offer-copy">
          <div className="section-label">A complimentary resource for your AI journey</div>
          <p className="kicker">Book a discovery call</p>
          <h2 id="book-offer-title">Get a free copy of <em>Stop Wasting Time With AI.</em></h2>
          <p>Schedule a discovery call with Grand Strategy and receive Zena Collins&apos; practical, emotionally intelligent guide to using AI well.</p>
          <p className="book-note">Choose a time that works for you. We will follow up with details about your complimentary copy.</p>
          <a className="button primary" href="https://calendar.app.google/p8DynbYQdBA4Kxs56" target="_blank" rel="noreferrer">Book a discovery call <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <section className="final-cta contact-section" id="contact"><div className="final-glow" aria-hidden="true" /><div className="contact-intro"><p className="eyebrow">The human capability behind AI performance</p><h2>Give people more than access.<br /><span>Give them the capability to use AI well.</span></h2><p>Tell us where you want to begin. Send us a message via the form. We look forward to speaking with you.</p></div><ContactForm /></section>

      <footer><a className="brand" href="#top"><Brand /><span>Grand Strategy</span></a><p>Human-centered transformation for the AI era.</p><div><a href="#readiness">AI readiness</a><a href="#skills">AI skills</a><a href="#circles">Learning Circles</a><a href="#about">About</a></div><p className="copyright">© {new Date().getFullYear()} Grand Strategy Consulting LLC</p></footer>
    </main>
  );
}
