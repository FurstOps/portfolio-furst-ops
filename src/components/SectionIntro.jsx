import { styles } from '../styles/styles'
import { INTRO, CONTACT } from '../data/content'

export default function SectionIntro() {
  return (
    <section id="intro" style={styles.section}>
      <div style={styles.identityRow}>
        {CONTACT.portrait && (
          <img
            src={CONTACT.portrait}
            alt={CONTACT.portraitAlt || INTRO.name}
            style={styles.identityPortrait}
          />
        )}
        <div style={styles.identityText}>
          {INTRO.name && <div style={styles.identityName}>{INTRO.name}</div>}
          <div style={styles.tag}>{INTRO.tag}</div>
        </div>
      </div>

      <h1 style={styles.h1}>
        {INTRO.headline.map((part, i) => (
          <span key={i} style={styles.h1line}>
            {typeof part === 'string' ? part : <span style={styles.accent}>{part.text}</span>}
          </span>
        ))}
      </h1>

      <div style={styles.introMeta}>
        {INTRO.blocks.map((block, i) => (
          <div key={i} style={styles.introBlock}>
            <div style={styles.metaLabel}>{block.label}</div>
            <p style={styles.metaText}>
              {block.pulse && <span style={styles.pulse}>●</span>}
              {block.text}
            </p>
          </div>
        ))}
      </div>

      <a href="#parcours" style={styles.scrollCue}>↓ mon_parcours · mes_projets</a>
    </section>
  )
}
