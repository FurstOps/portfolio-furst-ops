import { styles } from '../styles/styles'

const SECTIONS = [
  { id: 'intro', label: '01 / intro' },
  { id: 'parcours', label: '02 / parcours' },
  { id: 'work', label: '03 / projets' },
  { id: 'stack', label: '04 / stack' },
  { id: 'process', label: '05 / process' },
  { id: 'contact', label: '06 / contact' },
]

export default function SideNav({ activeSection }) {
  const handleClick = (e, id) => {
    e.preventDefault()
    const target = document.getElementById(id)
    if (!target) return
    // Force-restore body scroll in case a stale lightbox left it locked
    if (document.body.style.overflow === 'hidden') {
      document.body.style.overflow = ''
    }
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    // Update URL hash without re-triggering the default jump
    history.replaceState(null, '', `#${id}`)
  }

  return (
    <nav className="side-nav" style={styles.sideNav}>
      {SECTIONS.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          onClick={(e) => handleClick(e, s.id)}
          style={{
            ...styles.navItem,
            color: activeSection === s.id ? '#5ea3ff' : '#5a6260',
            borderLeftColor: activeSection === s.id ? '#5ea3ff' : 'transparent',
          }}
        >
          {s.label}
        </a>
      ))}
    </nav>
  )
}
