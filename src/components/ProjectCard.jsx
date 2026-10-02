import { useEffect, useState } from 'react'
import { styles } from '../styles/styles'
import { parseInline } from './helpers'

export default function ProjectCard({ project }) {
  const p = project
  const [lightbox, setLightbox] = useState(null) // { src, alt } | null

  // Esc closes the lightbox + lock background scroll while open
  useEffect(() => {
    if (!lightbox) return
    const onKey = (e) => { if (e.key === 'Escape') setLightbox(null) }
    window.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [lightbox])

  return (
    <article style={styles.projectCard}>
      {/* HEADER */}
      <div style={styles.projectHeader}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={styles.projectTag}>{p.tag}</div>
          <h2 style={styles.projectTitle}>{p.title}</h2>
          <p style={styles.projectSubtitle}>{p.subtitle}</p>
        </div>
        <div style={styles.projectStatus}>
          <span style={styles.projectStatusLabel}>STATUS</span>
          <span style={styles.projectStatusValue}>{p.status}</span>
          <span style={{ ...styles.projectStatusLabel, marginTop: 8 }}>PÉRIODE</span>
          <span style={styles.projectStatusValue}>{p.period}</span>
        </div>
      </div>

      {/* META */}
      <div style={styles.projectMeta}>
        <div style={styles.projectMetaItem}>
          <span style={styles.metaLabel}>Rôle</span>
          <span style={styles.metaValue}>{p.role}</span>
        </div>
        <div style={styles.projectMetaItem}>
          <span style={styles.metaLabel}>Durée</span>
          <span style={styles.metaValue}>{p.duration}</span>
        </div>
        <div style={styles.projectMetaItem}>
          <span style={styles.metaLabel}>Stack</span>
          <span style={styles.metaValue}>{p.stack}</span>
        </div>
      </div>

      {/* HIGHLIGHTS */}
      {p.highlights && (
        <div style={styles.highlightsSection}>
          <div style={styles.blockLabel}>→ Highlights</div>
          <div style={styles.statsGrid}>
            {p.highlights.map((h, idx) => (
              <div key={idx} style={styles.statBox}>
                <div style={styles.statNum}>{h.num}</div>
                <div style={styles.statLabel}>{h.label}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* CLIENT */}
      {p.client && (
        <div style={styles.projectBlock}>
          <div style={styles.blockLabel}>→ Client</div>
          <p style={styles.blockText}>
            <span style={styles.clientName}>{p.client.name}</span> — {p.client.desc}
          </p>
        </div>
      )}

      {/* CONTEXTE / PAIN POINTS */}
      {p.painPoints && (
        <div style={styles.projectBlock}>
          <div style={styles.blockLabel}>→ Contexte initial</div>
          <p style={styles.blockText}>
            Une organisation qui tenait à bout de bras : forte culture terrain, maturité digitale en construction. En coulisses :
          </p>
          <div style={styles.painGrid}>
            {p.painPoints.map((pain, i) => (
              <div key={i} style={styles.painCard}>
                <div style={styles.painIcon}>{pain.icon}</div>
                <div style={styles.painTitle}>{pain.title}</div>
                <div style={styles.painDesc}>{pain.desc}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* PULL QUOTE */}
      {p.pullQuote && (
        <blockquote style={styles.pullQuote}>"{p.pullQuote}"</blockquote>
      )}

      {/* PHASES */}
      {p.phases && p.phases.map((phase, i) => (
        <div key={i} style={styles.phaseSection}>
          <div style={styles.phaseHeader}>
            <div style={styles.phaseBadge}>{phase.badge}</div>
            <h3 style={styles.phaseTitle}>{phase.title}</h3>
            <div style={styles.phaseMeta}>{phase.meta}</div>
          </div>

          {phase.blocks.map((block, j) => (
            <div key={j} style={styles.subBlock}>
              <div style={styles.subBlockTitle}>{block.title}</div>

              {block.text && (
                <p style={styles.blockText}>{parseInline(block.text)}</p>
              )}

              {block.bullets && (
                <ul style={styles.bullets}>
                  {block.bullets.map((b, k) => (
                    <li key={k}>
                      <span style={styles.bulletDash}>—</span> {parseInline(b)}
                    </li>
                  ))}
                </ul>
              )}

              {block.textAfter && (
                <p style={styles.blockText}>{parseInline(block.textAfter)}</p>
              )}

              {/* SCÉNARIOS MAKE */}
              {block.scenarios && block.scenarios.map((s, k) => (
                <div key={k} style={styles.scenarioCard}>
                  <div style={styles.scenarioHead}>
                    <span style={styles.scenarioNum}>{s.num}</span>
                    <span style={styles.scenarioName}>{s.name}</span>
                  </div>
                  <div style={styles.scenarioFlow}>
                    {s.flow.map((step, l) =>
                      step === '→' || step === '+' ? (
                        <span key={l} style={styles.flowArrow}>{step}</span>
                      ) : (
                        <span key={l} style={styles.flowStep}>{step}</span>
                      )
                    )}
                  </div>
                </div>
              ))}

              {/* ARCHITECTURE COMPARATIVE */}
              {block.architecture && (
                <div style={styles.archGrid}>
                  {block.architecture.map((col, k) => (
                    <div
                      key={k}
                      style={col.active ? { ...styles.archCol, ...styles.archColActive } : styles.archCol}
                    >
                      <div style={{ ...styles.archColLabel, color: col.active ? '#5ea3ff' : '#ff6b6b' }}>
                        {col.label}
                      </div>
                      <div style={styles.archColDesc}>{col.desc}</div>
                    </div>
                  ))}
                </div>
              )}

              {/* USER JOURNEY */}
              {block.userJourney && (
                <div style={styles.parcoursFlow}>
                  {block.userJourney.map((step, k) => (
                    <span key={k}>
                      <span style={styles.parcoursStep}>{step}</span>
                      {k < block.userJourney.length - 1 && (
                        <span style={{ ...styles.parcoursArrow, margin: '0 10px' }}>→</span>
                      )}
                    </span>
                  ))}
                </div>
              )}

              {block.quote && <p style={styles.quote}>"{block.quote}"</p>}

              {block.images && block.images.length > 0 ? (
                <div style={block.imagesNarrow ? { ...styles.imgGallery, ...styles.imgGalleryNarrow } : styles.imgGallery}>
                  {block.images.map((img, k) => {
                    const isVideo = /\.(mp4|webm|mov)$/i.test(img.src || '')
                    if (img.loom) {
                      return (
                        <figure key={k} style={styles.imgFigure}>
                          <div style={styles.videoWrap}>
                            <iframe src={img.loom.replace('/share/', '/embed/')} style={styles.videoFrame} allowFullScreen title={img.alt || 'Démo vidéo'} />
                          </div>
                          {img.caption && <figcaption style={styles.imgCaption}>{img.caption}</figcaption>}
                        </figure>
                      )
                    }
                    return (
                      <figure key={k} style={styles.imgFigure}>
                        {isVideo ? (
                          <video
                            src={img.src}
                            poster={img.poster}
                            controls
                            preload="metadata"
                            playsInline
                            style={styles.imgEl}
                            aria-label={img.alt || ''}
                          />
                        ) : (
                          <img
                            src={img.src}
                            alt={img.alt || ''}
                            style={styles.imgElClickable}
                            onClick={() => setLightbox({ src: img.src, alt: img.alt || '' })}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault()
                                setLightbox({ src: img.src, alt: img.alt || '' })
                              }
                            }}
                          />
                        )}
                        {img.caption && (
                          <figcaption style={styles.imgCaption}>{img.caption}</figcaption>
                        )}
                      </figure>
                    )
                  })}
                </div>
              ) : block.image ? (
                <div style={styles.imgPlaceholder}>
                  <span style={styles.imgPlaceholderText}>{block.image}</span>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      ))}

      {/* APPRENTISSAGES */}
      {p.learnings && (
        <div style={styles.projectBlock}>
          <div style={styles.blockLabel}>→ Ce que j'en retire</div>
          <ul style={styles.bullets}>
            {p.learnings.map((l, i) => (
              <li key={i}>
                <span style={styles.bulletDash}>—</span> {l}
              </li>
            ))}
          </ul>
          {p.finalQuote && (
            <p style={styles.finalQuote}>"{p.finalQuote}"</p>
          )}
        </div>
      )}

      {/* LIGHTBOX */}
      {lightbox && (
        <div
          style={styles.lightboxBackdrop}
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.alt || 'Image agrandie'}
        >
          <button
            type="button"
            style={styles.lightboxClose}
            onClick={() => setLightbox(null)}
            aria-label="Fermer"
          >
            ×
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            style={styles.lightboxImg}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </article>
  )
}
