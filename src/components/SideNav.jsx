import { styles } from '../styles/styles'

const SECTIONS = [
  { id: 'intro', label: '01 / intro' },
  { id: 'stack', label: '02 / stack' },
  { id: 'work', label: '03 / work' },
  { id: 'process', label: '04 / process' },
  { id: 'contact', label: '05 / contact' },
]

export default function SideNav({ activeSection }) {
  return (
    <nav className="side-nav" style={styles.sideNav}>
      {SECTIONS.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          style={{
            ...styles.navItem,
            color: activeSection === s.id ? '#a3ff5e' : '#5a6260',
            borderLeftColor: activeSection === s.id ? '#a3ff5e' : 'transparent',
          }}
        >
          {s.label}
        </a>
      ))}
    </nav>
  )
}
