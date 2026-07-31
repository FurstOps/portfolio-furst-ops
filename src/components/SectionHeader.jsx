import { styles } from '../styles/styles'

export default function SectionHeader({ num, title }) {
  return (
    <div style={styles.sectionHeader}>
      <span style={styles.sectionNum}>{num}</span>
      <span style={styles.sectionTitle}>{title}</span>
      <span style={styles.sectionLine} />
    </div>
  )
}
