import { styles } from '../styles/styles'
import { PROCESS_STEPS } from '../data/content'
import SectionHeader from './SectionHeader'

export default function SectionProcess() {
  return (
    <section id="process" style={styles.section}>
      <SectionHeader num="05" title="PROCESS" />

      <p style={styles.sectionLead}>
        Une méthode simple, agile, documentée. Pas de boîte noire.
      </p>

      <div style={styles.processTimeline}>
        {PROCESS_STEPS.map((step) => (
          <div key={step.n} style={styles.processStep}>
            <div style={styles.processNum}>{step.n}</div>
            <div style={styles.processContent}>
              <div style={styles.processTitle}>{step.t}</div>
              <p style={styles.processDesc}>{step.d}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
