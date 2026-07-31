// ═══════════════════════════════════════════════════════════════
// Helpers
// ═══════════════════════════════════════════════════════════════

import { styles } from '../styles/styles'

/**
 * Parse les **mots en gras** dans un texte pour les wrapper dans
 * un span stylé. Utile pour mettre en valeur des mots-clés dans
 * les descriptions de projet.
 */
export function parseInline(text) {
  if (!text) return null
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <span key={i} style={styles.inline}>
          {part.slice(2, -2)}
        </span>
      )
    }
    return part
  })
}
