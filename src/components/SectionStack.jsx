import { styles } from '../styles/styles'
import { STACK } from '../data/content'
import SectionHeader from './SectionHeader'

export default function SectionStack() {
  return (
    <section id="stack" style={styles.section}>
      <SectionHeader num="02" title="STACK / OUTILS" />

      <p style={styles.sectionLead}>
        Une stack volontairement resserrée. Chaque outil a un rôle précis. Pas de hype, pas de gadget.
      </p>

      <div style={styles.stackGrid}>
        {STACK.map((tool, i) => (
          <div key={tool.name} style={styles.stackCard}>
            <div style={styles.stackIndex}>{String(i + 1).padStart(2, '0')}</div>
            <div style={styles.stackName}>{tool.name}</div>
            <div style={styles.stackRole}>{tool.role}</div>
            <div>
              <span
                style={{
                  ...styles.levelBadge,
                  color: tool.level === 'Confirmé' ? '#5ea3ff' : '#5dd5ff',
                  borderColor: tool.level === 'Confirmé' ? '#5ea3ff' : '#5dd5ff',
                }}
              >
                {tool.level}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
