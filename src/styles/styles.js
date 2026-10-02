// ═══════════════════════════════════════════════════════════════
// STYLES JSX (objets style inline)
// ═══════════════════════════════════════════════════════════════
// Centralise tous les styles utilisés dans les composants.
// Couleurs principales :
//   - Background : #0a0d0c
//   - Texte principal : #d8e0dc, blanc cassé : #f0f5f2
//   - Vert néon (accent) : #a3ff5e
//   - Cyan (accent 2) : #5dd5ff
//   - Rouge (warnings) : #ff6b6b
//   - Gris muet : #5a6260, #8a9590, #b8c2bd
// ═══════════════════════════════════════════════════════════════

export const styles = {
  root: {
    minHeight: '100vh',
    background: '#0a0d0c',
    color: '#d8e0dc',
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '14px',
    lineHeight: 1.6,
    position: 'relative',
    overflow: 'hidden',
  },
  gridBg: {
    position: 'fixed', inset: 0,
    backgroundImage: `linear-gradient(rgba(163, 255, 94, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(163, 255, 94, 0.04) 1px, transparent 1px)`,
    backgroundSize: '60px 60px',
    pointerEvents: 'none', zIndex: 0,
  },
  noiseBg: {
    position: 'fixed', inset: 0,
    backgroundImage: `radial-gradient(circle at 20% 30%, rgba(163, 255, 94, 0.05), transparent 50%), radial-gradient(circle at 80% 70%, rgba(93, 213, 255, 0.04), transparent 50%)`,
    pointerEvents: 'none', zIndex: 0,
  },
  topBar: {
    position: 'fixed', top: 0, left: 0, right: 0,
    background: 'rgba(10, 13, 12, 0.85)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid rgba(163, 255, 94, 0.15)',
    zIndex: 100, padding: '12px 32px',
  },
  topBarInner: {
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    fontSize: '11px', color: '#5a6260',
    flexWrap: 'wrap', gap: '12px',
  },
  statusGroup: { display: 'flex', alignItems: 'center', gap: '8px' },
  dot: {
    width: '6px', height: '6px', borderRadius: '50%',
    background: '#a3ff5e', boxShadow: '0 0 8px #a3ff5e',
    animation: 'pulse 2s infinite',
  },
  mono: { fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.05em' },
  sideNav: {
    position: 'fixed', left: 32, top: '50%',
    transform: 'translateY(-50%)',
    display: 'flex', flexDirection: 'column', gap: '14px', zIndex: 50,
  },
  navItem: {
    fontSize: '11px', textDecoration: 'none',
    paddingLeft: '12px', borderLeft: '2px solid transparent',
    transition: 'all 0.3s ease', letterSpacing: '0.1em',
    fontFamily: "'JetBrains Mono', monospace",
  },
  main: {
    position: 'relative', zIndex: 1,
    paddingLeft: '120px', paddingRight: '80px', paddingTop: '80px',
    maxWidth: '1400px', margin: '0 auto',
  },
  section: {
    minHeight: '100vh',
    paddingTop: '80px', paddingBottom: '80px',
    display: 'flex', flexDirection: 'column', justifyContent: 'center',
  },
  tag: { fontSize: '12px', color: '#a3ff5e', marginBottom: '32px', letterSpacing: '0.15em' },
  h1: {
    fontFamily: "'Fraunces', serif",
    fontSize: '92px', fontWeight: 300,
    lineHeight: 0.95, letterSpacing: '-0.03em',
    marginBottom: '64px', color: '#f0f5f2',
  },
  h1line: { display: 'block' },
  accent: {
    fontStyle: 'italic', fontWeight: 400, color: '#a3ff5e',
    textShadow: '0 0 30px rgba(163, 255, 94, 0.3)',
  },
  introMeta: {
    display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '32px', marginBottom: '80px', maxWidth: '900px',
  },
  introBlock: { paddingTop: '16px', borderTop: '1px solid rgba(163, 255, 94, 0.2)' },
  metaLabel: {
    fontSize: '10px', color: '#a3ff5e',
    letterSpacing: '0.2em', marginBottom: '8px',
    textTransform: 'uppercase',
  },
  metaText: { fontSize: '13px', color: '#b8c2bd', lineHeight: 1.6 },
  pulse: { color: '#a3ff5e', animation: 'pulse 2s infinite', marginRight: '4px' },
  scrollCue: { color: '#5a6260', textDecoration: 'none', fontSize: '12px', letterSpacing: '0.1em', width: 'fit-content' },
  sectionHeader: { display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '40px' },
  sectionNum: { fontSize: '12px', color: '#a3ff5e', letterSpacing: '0.1em' },
  sectionTitle: { fontSize: '12px', color: '#d8e0dc', letterSpacing: '0.25em', fontWeight: 500 },
  sectionLine: { flex: 1, height: '1px', background: 'linear-gradient(90deg, rgba(163, 255, 94, 0.3), transparent)' },
  sectionLead: {
    fontFamily: "'Fraunces', serif",
    fontSize: '28px', fontWeight: 300, lineHeight: 1.4,
    color: '#d8e0dc', marginBottom: '64px', maxWidth: '720px',
    letterSpacing: '-0.01em',
  },
  stackGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
    gap: '1px',
    background: 'rgba(163, 255, 94, 0.15)',
    border: '1px solid rgba(163, 255, 94, 0.15)',
  },
  stackCard: { background: '#0a0d0c', padding: '28px', transition: 'all 0.3s ease' },
  stackIndex: { fontSize: '11px', color: '#a3ff5e', marginBottom: '20px', letterSpacing: '0.1em' },
  stackName: {
    fontFamily: "'Fraunces', serif",
    fontSize: '28px', fontWeight: 400,
    color: '#f0f5f2', marginBottom: '8px', letterSpacing: '-0.01em',
  },
  stackRole: { fontSize: '12px', color: '#8a9590', marginBottom: '20px', lineHeight: 1.5 },
  levelBadge: {
    fontSize: '10px', border: '1px solid', padding: '4px 10px',
    borderRadius: '2px', letterSpacing: '0.1em', textTransform: 'uppercase',
  },
  projectCard: {
    border: '1px solid rgba(163, 255, 94, 0.2)',
    padding: '48px', marginBottom: '24px',
    background: 'linear-gradient(180deg, rgba(163, 255, 94, 0.02), transparent)',
  },
  projectHeader: {
    display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
    gap: '32px', marginBottom: '40px', flexWrap: 'wrap',
  },
  projectTag: { fontSize: '11px', color: '#a3ff5e', marginBottom: '16px', letterSpacing: '0.1em' },
  projectTitle: {
    fontFamily: "'Fraunces', serif",
    fontSize: '64px', fontWeight: 400,
    lineHeight: 1, color: '#f0f5f2',
    marginBottom: '16px', letterSpacing: '-0.02em',
  },
  projectSubtitle: {
    fontSize: '17px', color: '#b8c2bd',
    maxWidth: '600px', lineHeight: 1.5,
    fontFamily: "'Fraunces', serif", fontWeight: 300,
  },
  projectStatus: {
    display: 'flex', flexDirection: 'column',
    gap: '4px', alignItems: 'flex-start',
    border: '1px solid rgba(163, 255, 94, 0.3)',
    padding: '16px 20px', minWidth: '180px',
  },
  projectStatusLabel: { fontSize: '10px', color: '#5a6260', letterSpacing: '0.2em' },
  projectStatusValue: { fontSize: '13px', color: '#a3ff5e', letterSpacing: '0.05em' },
  projectMeta: {
    display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '24px', paddingTop: '24px', paddingBottom: '24px',
    borderTop: '1px solid rgba(163, 255, 94, 0.15)',
    borderBottom: '1px solid rgba(163, 255, 94, 0.15)',
    marginBottom: '40px',
  },
  projectMetaItem: { display: 'flex', flexDirection: 'column', gap: '6px' },
  metaValue: { fontSize: '13px', color: '#d8e0dc', lineHeight: 1.5 },
  highlightsSection: { marginBottom: '48px' },
  statsGrid: {
    display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)',
    gap: '1px',
    background: 'rgba(163, 255, 94, 0.15)',
    border: '1px solid rgba(163, 255, 94, 0.15)',
    marginTop: '16px',
  },
  statBox: {
    background: '#0a0d0c', padding: '28px 16px',
    textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px',
  },
  statNum: {
    fontFamily: "'Fraunces', serif",
    fontSize: '52px', fontWeight: 300, color: '#a3ff5e',
    lineHeight: 1, textShadow: '0 0 20px rgba(163, 255, 94, 0.3)',
  },
  statLabel: {
    fontSize: '10px', color: '#8a9590',
    letterSpacing: '0.15em', textTransform: 'uppercase',
  },
  projectBlock: { marginBottom: '40px' },
  blockLabel: { fontSize: '12px', color: '#a3ff5e', marginBottom: '16px', letterSpacing: '0.05em' },
  blockText: { fontSize: '15px', color: '#b8c2bd', lineHeight: 1.7, maxWidth: '760px' },
  clientName: { color: '#f0f5f2', fontWeight: 500 },
  inline: {
    color: '#f0f5f2',
    background: 'rgba(163, 255, 94, 0.08)',
    padding: '1px 6px', borderRadius: '2px',
  },
  painGrid: {
    display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '16px', marginTop: '24px',
  },
  painCard: {
    padding: '24px',
    border: '1px solid rgba(255, 100, 100, 0.15)',
    background: 'rgba(255, 100, 100, 0.02)',
  },
  painIcon: { fontSize: '24px', color: '#ff6b6b', marginBottom: '12px' },
  painTitle: {
    fontFamily: "'Fraunces', serif",
    fontSize: '18px', color: '#f0f5f2', marginBottom: '8px',
  },
  painDesc: { fontSize: '13px', color: '#8a9590', lineHeight: 1.5 },
  pullQuote: {
    fontFamily: "'Fraunces', serif",
    fontSize: '32px', fontWeight: 300, fontStyle: 'italic',
    color: '#f0f5f2', lineHeight: 1.3,
    padding: '40px 0', margin: '40px 0',
    borderTop: '1px solid rgba(163, 255, 94, 0.2)',
    borderBottom: '1px solid rgba(163, 255, 94, 0.2)',
    letterSpacing: '-0.01em',
  },
  phaseSection: {
    marginTop: '64px', marginBottom: '64px',
    paddingLeft: '32px',
    borderLeft: '2px solid rgba(163, 255, 94, 0.3)',
  },
  phaseHeader: { marginBottom: '40px' },
  phaseBadge: {
    display: 'inline-block',
    fontSize: '10px', color: '#0a0d0c',
    background: '#a3ff5e', padding: '4px 10px',
    letterSpacing: '0.15em', marginBottom: '16px', fontWeight: 600,
  },
  phaseTitle: {
    fontFamily: "'Fraunces', serif",
    fontSize: '42px', fontWeight: 400,
    color: '#f0f5f2', marginBottom: '8px', letterSpacing: '-0.02em',
  },
  phaseMeta: { fontSize: '12px', color: '#5a6260', letterSpacing: '0.1em' },
  subBlock: { marginBottom: '40px' },
  subBlockTitle: {
    fontFamily: "'Fraunces', serif",
    fontSize: '22px', fontWeight: 500, color: '#a3ff5e', marginBottom: '16px',
  },
  bullets: {
    listStyle: 'none', marginTop: '12px', marginBottom: '12px',
    paddingLeft: '0', fontSize: '14px', color: '#b8c2bd', lineHeight: 1.8,
  },
  bulletDash: { color: '#a3ff5e', marginRight: '12px' },
  imgPlaceholder: {
    marginTop: '20px', padding: '60px 20px',
    border: '1px dashed rgba(163, 255, 94, 0.25)',
    background: 'rgba(163, 255, 94, 0.02)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  imgPlaceholderText: {
    fontSize: '12px', color: '#5a6260', letterSpacing: '0.1em',
    fontFamily: "'JetBrains Mono', monospace",
  },
  mediaFigure: { margin: '20px 0 0' },
  mediaImg: {
    display: 'block', width: '100%', height: 'auto',
    border: '1px solid rgba(163, 255, 94, 0.2)',
  },
  mediaCaption: {
    marginTop: '8px', fontSize: '11px', color: '#5a6260', letterSpacing: '0.08em',
    fontFamily: "'JetBrains Mono', monospace",
  },
  mediaGrid: {
    display: 'grid', gap: '16px', maxWidth: '760px',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
  },
  videoWrap: {
    position: 'relative', paddingBottom: '56.25%', height: 0,
    border: '1px solid rgba(163, 255, 94, 0.2)',
  },
  videoFrame: { position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 },
  scenarioCard: {
    border: '1px solid rgba(163, 255, 94, 0.2)',
    padding: '24px', marginBottom: '16px',
    background: 'rgba(163, 255, 94, 0.02)',
  },
  scenarioHead: {
    display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px',
    flexWrap: 'wrap',
  },
  scenarioNum: {
    fontSize: '10px', color: '#a3ff5e', letterSpacing: '0.2em',
    border: '1px solid rgba(163, 255, 94, 0.4)', padding: '4px 8px',
  },
  scenarioName: {
    fontFamily: "'Fraunces', serif",
    fontSize: '20px', color: '#f0f5f2', fontWeight: 500,
  },
  scenarioFlow: {
    display: 'flex', flexWrap: 'wrap',
    gap: '8px', alignItems: 'center', fontSize: '12px',
  },
  flowStep: {
    background: 'rgba(163, 255, 94, 0.08)',
    color: '#d8e0dc', padding: '8px 12px',
    border: '1px solid rgba(163, 255, 94, 0.2)',
    letterSpacing: '0.03em',
  },
  flowArrow: {
    color: '#a3ff5e',
    fontFamily: "'JetBrains Mono', monospace", fontWeight: 600,
  },
  quote: {
    fontFamily: "'Fraunces', serif",
    fontSize: '18px', fontStyle: 'italic', color: '#a3ff5e',
    marginTop: '24px', paddingLeft: '20px',
    borderLeft: '2px solid #a3ff5e', lineHeight: 1.4,
  },
  finalQuote: {
    fontFamily: "'Fraunces', serif",
    fontSize: '26px', fontWeight: 400, color: '#a3ff5e',
    marginTop: '32px', fontStyle: 'italic',
    letterSpacing: '-0.01em', textAlign: 'center',
    padding: '24px',
    border: '1px solid rgba(163, 255, 94, 0.3)',
    background: 'rgba(163, 255, 94, 0.04)',
  },
  archGrid: {
    display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '12px', marginTop: '16px',
  },
  archCol: {
    padding: '20px',
    border: '1px solid rgba(255, 100, 100, 0.15)',
    background: 'rgba(255, 100, 100, 0.02)',
  },
  archColActive: {
    border: '1px solid rgba(163, 255, 94, 0.4)',
    background: 'rgba(163, 255, 94, 0.05)',
  },
  archColLabel: {
    fontFamily: "'Fraunces', serif",
    fontSize: '18px', color: '#ff6b6b',
    marginBottom: '8px', fontWeight: 500,
  },
  archColDesc: { fontSize: '12px', color: '#8a9590', lineHeight: 1.5 },
  parcoursFlow: {
    display: 'flex', flexWrap: 'wrap',
    gap: '10px', alignItems: 'center', margin: '20px 0',
  },
  parcoursStep: {
    background: 'rgba(93, 213, 255, 0.08)',
    border: '1px solid rgba(93, 213, 255, 0.25)',
    color: '#d8e0dc', padding: '12px 16px',
    fontSize: '13px',
    fontFamily: "'JetBrains Mono', monospace",
  },
  parcoursArrow: { color: '#5dd5ff', fontWeight: 600 },
  projectPlaceholder: {
    border: '1px dashed rgba(163, 255, 94, 0.2)',
    padding: '48px',
    background: 'rgba(163, 255, 94, 0.02)',
  },
  placeholderInner: {
    display: 'flex', flexDirection: 'column',
    gap: '8px', alignItems: 'center',
  },
  placeholderText: {
    fontFamily: "'Fraunces', serif",
    fontSize: '32px', color: '#5a6260', fontStyle: 'italic',
  },
  placeholderHint: { fontSize: '11px', color: '#5a6260', letterSpacing: '0.1em' },
  processTimeline: { display: 'flex', flexDirection: 'column', gap: '32px' },
  processStep: {
    display: 'grid', gridTemplateColumns: '80px 1fr',
    gap: '32px', paddingTop: '32px',
    borderTop: '1px solid rgba(163, 255, 94, 0.15)',
  },
  processNum: {
    fontFamily: "'Fraunces', serif",
    fontSize: '48px', fontWeight: 300, color: '#a3ff5e', lineHeight: 1,
  },
  processContent: { display: 'flex', flexDirection: 'column', gap: '8px' },
  processTitle: {
    fontFamily: "'Fraunces', serif",
    fontSize: '28px', fontWeight: 400,
    color: '#f0f5f2', letterSpacing: '-0.01em',
  },
  processDesc: { fontSize: '14px', color: '#b8c2bd', lineHeight: 1.6, maxWidth: '720px' },
  contactHeadline: {
    fontFamily: "'Fraunces', serif",
    fontSize: '92px', fontWeight: 300, lineHeight: 1,
    color: '#f0f5f2', marginBottom: '24px', letterSpacing: '-0.03em',
  },
  contactSub: {
    fontSize: '16px', color: '#b8c2bd',
    maxWidth: '600px', marginBottom: '64px', lineHeight: 1.6,
  },
  formEmbedBlock: {
    maxWidth: '720px', marginBottom: '64px',
  },
  formEmbedLabel: {
    fontSize: '11px', color: '#a3ff5e',
    letterSpacing: '0.2em', textTransform: 'uppercase',
    marginBottom: '16px',
    fontFamily: "'JetBrains Mono', monospace",
  },
  formEmbedFrame: {
    border: '1px solid rgba(163, 255, 94, 0.2)',
    background: 'rgba(163, 255, 94, 0.02)',
    padding: '8px',
    overflow: 'hidden',
  },
  formEmbedFallback: {
    display: 'inline-block', marginTop: '16px',
    fontSize: '12px', color: '#5a6260',
    letterSpacing: '0.05em', textDecoration: 'none',
    fontFamily: "'JetBrains Mono', monospace",
  },
  contactLinks: {
    display: 'flex', flexDirection: 'column', gap: '1px',
    background: 'rgba(163, 255, 94, 0.15)',
    border: '1px solid rgba(163, 255, 94, 0.15)',
    maxWidth: '600px', marginBottom: '80px',
  },
  contactLink: {
    background: '#0a0d0c', padding: '24px 28px',
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    textDecoration: 'none', transition: 'all 0.3s ease',
  },
  contactLinkLabel: {
    fontSize: '11px', color: '#5a6260',
    letterSpacing: '0.2em', textTransform: 'uppercase',
  },
  contactLinkValue: {
    fontFamily: "'Fraunces', serif",
    fontSize: '20px', color: '#f0f5f2', fontWeight: 400,
  },
  footer: { paddingTop: '32px', borderTop: '1px solid rgba(163, 255, 94, 0.15)' },
  footerLine: {
    display: 'flex', justifyContent: 'space-between',
    fontSize: '11px', color: '#5a6260',
    flexWrap: 'wrap', gap: '12px',
  },
}
