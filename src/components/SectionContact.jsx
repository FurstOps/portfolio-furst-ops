import { useEffect } from 'react'
import { styles } from '../styles/styles'
import { CONTACT, META } from '../data/content'
import SectionHeader from './SectionHeader'

export default function SectionContact() {
  // On ne liste que les liens réellement renseignés (label + value + href définis).
  const links = [
    { label: 'email', value: CONTACT.email, href: CONTACT.emailHref },
    { label: 'linkedin', value: CONTACT.linkedin, href: CONTACT.linkedinHref },
    { label: 'github', value: CONTACT.github, href: CONTACT.githubHref },
    { label: 'phone', value: CONTACT.phone, href: CONTACT.phoneHref },
  ].filter((l) => l.value && l.href)

  // Charge le script d'embed Fillout (une seule fois) pour le redimensionnement dynamique
  useEffect(() => {
    if (!CONTACT.formId) return
    const SRC = 'https://server.fillout.com/embed/v1/'
    if (document.querySelector(`script[src="${SRC}"]`)) return
    const script = document.createElement('script')
    script.src = SRC
    script.async = true
    document.body.appendChild(script)
  }, [])

  return (
    <section id="contact" style={styles.section}>
      <SectionHeader num="06" title="CONTACT" />

      <div style={styles.contactTop}>
        {CONTACT.portrait && (
          <img
            src={CONTACT.portrait}
            alt={CONTACT.portraitAlt || ''}
            style={styles.contactPortrait}
          />
        )}
        <div style={{ flex: 1, minWidth: 0 }}>
          <h2 style={styles.contactHeadline}>
            On <span style={styles.accent}>construit</span> quelque chose ?
          </h2>
          <p style={styles.contactSub}>
            Mission freelance, opportunité CDI, ou juste une question sur un projet — j'aime échanger sur les sujets no-code et product.
          </p>
        </div>
      </div>

      {CONTACT.formId && (
        <div style={styles.formEmbedBlock}>
          <div style={styles.formEmbedLabel}>// démarrer_un_projet</div>
          <div style={styles.formEmbedFrame}>
            <div
              data-fillout-id={CONTACT.formId}
              data-fillout-embed-type="standard"
              data-fillout-inline-embed
              data-fillout-dynamic-resize
              style={{ width: '100%', height: '620px' }}
            />
          </div>
          <a href={CONTACT.formHref} target="_blank" rel="noopener noreferrer" style={styles.formEmbedFallback}>
            Le formulaire ne s'affiche pas ? {CONTACT.formLabel} →
          </a>
        </div>
      )}

      <div style={styles.contactLinks}>
        {links.map((link) => (
          <a key={link.label} href={link.href} style={styles.contactLink}>
            <span style={styles.contactLinkLabel}>{link.label}</span>
            <span style={styles.contactLinkValue}>{link.value} →</span>
          </a>
        ))}
      </div>

      <footer style={styles.footer}>
        <div style={styles.footerLine}>
          <span style={styles.mono}>— built_with: Claude · React · custom_design</span>
          <span style={styles.mono}>{META.copyright}</span>
        </div>
      </footer>
    </section>
  )
}
