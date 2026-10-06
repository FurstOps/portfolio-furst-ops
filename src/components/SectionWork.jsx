import { useState } from 'react'
import { styles } from '../styles/styles'
import { PROJECTS } from '../data/content'
import SectionHeader from './SectionHeader'
import ProjectCard from './ProjectCard'

// Menu cliquable : une tuile par projet, un seul case study affiché à la fois.
export default function SectionWork() {
  const [activeId, setActiveId] = useState(PROJECTS[0]?.id)
  const active = PROJECTS.find((p) => p.id === activeId) || PROJECTS[0]

  const select = (id) => {
    setActiveId(id)
    // Ramène le haut du case study à l'écran
    requestAnimationFrame(() => {
      const el = document.getElementById('case-study')
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }

  return (
    <section id="work" style={styles.section}>
      <SectionHeader num="03" title="PROJETS" />

      <p style={styles.sectionLead}>
        {PROJECTS.length} projets livrés, de bout en bout. Choisis-en un pour lire le case study.
      </p>

      <div style={styles.projectMenu} role="tablist" aria-label="Projets">
        {PROJECTS.map((p, i) => {
          const isActive = p.id === active.id
          return (
            <button
              key={p.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => select(p.id)}
              style={{ ...styles.projectTile, ...(isActive ? styles.projectTileActive : {}) }}
            >
              <span style={styles.projectTileTop}>
                <span style={styles.projectTileIndex}>{String(i + 1).padStart(2, '0')}</span>
                <span style={styles.projectTileStatus}>{p.status}</span>
              </span>
              <span style={styles.projectTileTitle}>{p.title}</span>
              {p.pitch && <span style={styles.projectTilePitch}>{p.pitch}</span>}
              <span style={styles.projectTileMeta}>{p.period}</span>
              <span style={{ ...styles.projectTileCta, color: isActive ? '#5ea3ff' : '#8a9590' }}>
                {isActive ? '● affiché ci-dessous' : '→ voir le case study'}
              </span>
            </button>
          )
        })}
      </div>

      <div id="case-study" style={{ scrollMarginTop: '72px' }}>
        <ProjectCard key={active.id} project={active} />
      </div>
    </section>
  )
}
