import { useState, useEffect } from 'react'
import { styles } from './styles/styles'

import TopBar from './components/TopBar'
import SideNav from './components/SideNav'
import SectionIntro from './components/SectionIntro'
import SectionStack from './components/SectionStack'
import SectionWork from './components/SectionWork'
import SectionProcess from './components/SectionProcess'
import SectionContact from './components/SectionContact'

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('intro')

  // Observe quelle section traverse la bande centrale de l'écran pour mettre à jour la nav.
  // rootMargin "-40% 0px -40% 0px" crée une bande horizontale au milieu du viewport :
  // la section active = celle qui passe dans ces 20% centraux, indépendamment de sa hauteur.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    )
    document.querySelectorAll('section[id]').forEach((sec) => observer.observe(sec))
    return () => observer.disconnect()
  }, [])

  return (
    <div style={styles.root}>
      {/* Backgrounds décoratifs */}
      <div style={styles.gridBg} />
      <div style={styles.noiseBg} />

      <TopBar />
      <SideNav activeSection={activeSection} />

      <main style={styles.main}>
        <SectionIntro />
        <SectionStack />
        <SectionWork />
        <SectionProcess />
        <SectionContact />
      </main>
    </div>
  )
}
