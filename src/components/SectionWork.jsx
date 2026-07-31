import { styles } from '../styles/styles'
import { PROJECTS } from '../data/content'
import SectionHeader from './SectionHeader'
import ProjectCard from './ProjectCard'

export default function SectionWork() {
  return (
    <section id="work" style={styles.section}>
      <SectionHeader num="03" title="CASE STUDIES" />

      {PROJECTS.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}

      {/* Placeholder pour projet futur */}
      <div style={styles.projectPlaceholder}>
        <div style={styles.placeholderInner}>
          <div style={styles.placeholderText}>case_study_0{PROJECTS.length + 1}</div>
          <div style={styles.placeholderHint}>// prochain projet en cours d'écriture</div>
        </div>
      </div>
    </section>
  )
}
