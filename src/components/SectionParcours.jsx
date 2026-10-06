import { styles } from '../styles/styles'
import { PARCOURS } from '../data/content'
import SectionHeader from './SectionHeader'
import { parseInline } from './helpers'

export default function SectionParcours() {
  return (
    <section id="parcours" style={styles.section}>
      <SectionHeader num="02" title="PARCOURS" />

      <p style={styles.sectionLead}>{PARCOURS.lead}</p>

      {PARCOURS.stats && (
        <div style={styles.parcoursStats}>
          {PARCOURS.stats.map((s) => (
            <div key={s.label} style={styles.statBox}>
              <div style={styles.statNum}>{s.num}</div>
              <div style={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      )}

      <div style={styles.timeline}>
        {PARCOURS.timeline.map((step) => (
          <div key={step.title} className="timeline-item" style={styles.timelineItem}>
            <div style={styles.timelinePeriod}>{step.period}</div>
            <div style={styles.timelineBody}>
              <div style={styles.timelineTitle}>{step.title}</div>
              <div style={styles.timelineOrg}>{step.org}</div>
              {step.text && <p style={styles.timelineText}>{parseInline(step.text)}</p>}
            </div>
          </div>
        ))}
      </div>

      {PARCOURS.strengths && (
        <div style={styles.projectBlock}>
          <div style={styles.blockLabel}>→ {PARCOURS.strengthsTitle}</div>
          <div style={styles.strengthGrid}>
            {PARCOURS.strengths.map((s) => (
              <div key={s.title} style={styles.strengthCard}>
                <div style={styles.strengthTitle}>{s.title}</div>
                <div style={styles.strengthDesc}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
