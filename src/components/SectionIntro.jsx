import { styles } from '../styles/styles'
import { INTRO } from '../data/content'

export default function SectionIntro() {
  return (
    <section id="intro" style={styles.section}>
      <div style={styles.tag}>{INTRO.tag}</div>

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

      <a href="#work" style={styles.scrollCue}>↓ explore_the_work</a>
    </section>
  )
}
