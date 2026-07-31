import { useState, useEffect } from 'react'
import { styles } from '../styles/styles'
import { META } from '../data/content'

export default function TopBar() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const timeStr = time.toLocaleTimeString('fr-FR', { hour12: false })

  return (
    <div style={styles.topBar}>
      <div style={styles.topBarInner}>
        <div style={styles.statusGroup}>
          <span style={styles.dot} />
          <span style={styles.mono}>SYSTEM · ONLINE</span>
        </div>
        <div style={styles.mono}>{META.location} · {timeStr}</div>
        <div style={styles.mono}>{META.version} — last_update: {META.lastUpdate}</div>
      </div>
    </div>
  )
}
