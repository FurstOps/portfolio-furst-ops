// ═══════════════════════════════════════════════════════════════
// 📝 CONTENU DU PORTFOLIO
// ═══════════════════════════════════════════════════════════════
// Ce fichier centralise tout le contenu modifiable.
// Pour mettre à jour le portfolio, tu n'as qu'à éditer CE fichier.
// Pas besoin de toucher aux composants React.
//
// Tu peux aussi demander à Claude Code de modifier ce fichier
// en langage naturel, par exemple :
//   "Ajoute un nouveau projet à content.js"
//   "Change mon titre en intro"
//   "Ajoute Webflow à ma stack avec un niveau Débutant"
// ═══════════════════════════════════════════════════════════════

// ───────────────────────────────────────────────────────────────
// SECTION INTRO
// ───────────────────────────────────────────────────────────────

export const INTRO = {
  tag: '// product_builder.no_code × ia',
  headline: [
    'Je conçois et je livre des',
    { text: 'produits digitaux', accent: true },
    'en orchestrant le no-code',
    'et l\'IA.',
  ],
  blocks: [
    {
      label: 'Mission',
      text: 'Transformer un besoin métier en produit qui tourne vraiment — structuré, automatisé, livré vite. Le no-code pour aller droit au but, l\'IA pour construire au-delà.',
    },
    {
      label: 'Pour qui',
      text: 'Fondateurs early-stage, équipes ops surchargées, PME en transformation digitale, organisations à impact.',
    },
    {
      label: 'Statut',
      text: 'En mission pour un programme national de santé publique · ouvert aux projets freelance & opportunités CDI.',
      pulse: true,
    },
  ],
}

// ───────────────────────────────────────────────────────────────
// SECTION STACK
// ───────────────────────────────────────────────────────────────
// level peut être : 'Confirmé', 'Intermédiaire', 'Débutant'

export const STACK = [
  { name: 'Notion', role: 'Documentation · Roadmap · Pilotage', level: 'Confirmé' },
  { name: 'Airtable', role: 'Base de données relationnelle', level: 'Confirmé' },
  { name: 'Make', role: 'Automatisations · Orchestration', level: 'Confirmé' },
  { name: 'Figma', role: 'UX/UI · Design Systems', level: 'Intermédiaire' },
  { name: 'Lovable', role: 'Prototypage IA-assisté', level: 'Intermédiaire' },
  { name: 'Bubble', role: 'Apps complexes · Logique métier', level: 'Intermédiaire' },
  { name: 'Fillout', role: 'Formulaires connectés', level: 'Confirmé' },
]

// ───────────────────────────────────────────────────────────────
// SECTION CASE STUDIES
// ───────────────────────────────────────────────────────────────
// Pour ajouter un nouveau projet, dupliquer un objet ci-dessous.
// Tous les champs sont optionnels sauf id, title, subtitle.

export const PROJECTS = [
  {
    id: 'dcartes',
    tag: 'case_study_01 · mission_client · association_ADAL',
    title: 'D-Cartes · Programme D-marche®',
    subtitle: "Refondre l'application de création et de partage de balades d'un programme national de santé publique dédié à la marche et aux seniors.",
    status: 'EN COURS',
    period: 'Depuis juin 2026',
    role: 'Product Builder · dév. assisté par IA',
    duration: 'Mission au long cours · itérations continues avec retours terrain',
    stack: 'Conception produit · Dév. assisté par IA · React · PostgreSQL',

    client: {
      name: 'ADAL — À la Découverte de l\'Âge Libre',
      desc: "association porteuse du programme national D-marche®, programme motivationnel de marche reconnu par Santé Publique France, partenaire du programme ICOPE et certifié Facile À Lire et à Comprendre.",
    },

    highlights: [
      { num: '2', label: 'apps refondues' },
      { num: '2', label: 'formats de fiche' },
      { num: '1', label: 'mode collaboratif' },
      { num: 'GPS', label: 'tracé mobile' },
      { num: 'PDF', label: 'fiches auto' },
      { num: '100%', label: 'pensé seniors' },
    ],

    pullQuote: "La technique au service du terrain : chaque écran finit entre les mains de vrais marcheurs.",

    phases: [
      {
        badge: 'PHASE 01',
        title: 'Comprendre le programme & cadrer le produit',
        meta: 'Cadrage · cahier des charges ADAL · conception',
        blocks: [
          {
            title: 'Partir du besoin réel, pas de la techno',
            text: "Le programme D-marche® s'appuie sur un réseau national d'intervenants et de marcheurs. L'enjeu : leur donner un outil **simple**, accessible aux seniors, pour créer et partager des balades — sans jargon ni friction.",
            bullets: [
              "Lecture du cahier des charges de l'association (formats de fiche, informations \"office de tourisme\" obligatoires)",
              'Priorité absolue à la simplicité et à la lisibilité (public senior, certification FALC)',
              'Philosophie produit : **créer vite** une balade, la **compléter ensuite**',
            ],
          },
        ],
      },
      {
        badge: 'PHASE 02',
        title: 'Construire l\'application',
        meta: 'App de création · portail public · espace membre',
        blocks: [
          {
            title: 'Créer une balade depuis son téléphone',
            text: "Tracé du parcours au **GPS** en marchant, ajout de points d'intérêt (repos, patrimoine, commodités…) avec pictogrammes clairs, et photos géolocalisées.",
          },
          {
            title: 'Des fiches parcours prêtes à partager',
            text: "Génération de **fiches PDF en 2 formats** — une simplifiée (grand public, à imprimer) et une détaillée — alignées sur le gabarit de l'association : carte, repères, distance / durée / dénivelé, infos d'accès et de confort, variantes.",
          },
          {
            title: 'Marcher à plusieurs, en temps réel',
            text: 'Un mode **collaboratif** permet de créer et suivre une balade à plusieurs, en direct — pensé pour les sorties de groupe animées par les intervenants du programme.',
          },
          {
            title: 'Portail public, espace membre & back-office',
            text: 'Annuaire public des balades de la communauté, espace personnel du marcheur, et outils de modération / supervision pour les animateurs.',
            quote: "Concevoir pour des seniors, c'est retirer tout ce qui n'est pas essentiel à l'écran.",
          },
        ],
      },
    ],

    learnings: [
      'Concevoir pour un public senior : simplicité, lisibilité, accessibilité avant tout',
      "Traduire un cahier des charges associatif en fonctionnalités concrètes et testées sur le terrain",
      'Livrer du vrai produit, vite, en orchestrant no-code et développement assisté par IA',
    ],
    finalQuote: 'Un produit utile, entre de vraies mains, sur le terrain.',
  },

  {
    id: 'playoff',
    tag: 'case_study_02 · bootcamp_RNCP39108 · école_cube',
    title: 'PlayOff Amateurs',
    subtitle: '12 semaines pour transformer une PME sportive : structurer ses ops, puis lui livrer un MVP de réservation de terrains.',
    status: 'MVP LIVRÉ',
    period: 'Avril 2026',
    role: 'Product Builder · Lead solo',
    duration: '12 semaines · 6 sprints · méthodo agile',
    stack: 'Notion · Airtable · Make · Figma · Lovable · Bubble',

    client: {
      name: 'PlayOff Amateurs',
      desc: "PME française · 7 ans d'existence · centaines d'événements/an · acteur national (foot 5, basket, padel, running, multisports).",
    },

    highlights: [
      { num: '12', label: 'semaines' },
      { num: '6', label: 'sprints' },
      { num: '6', label: 'outils' },
      { num: '2', label: 'scénarios Make' },
      { num: '23', label: 'points audit' },
      { num: '1', label: 'MVP livré' },
    ],

    pullQuote: "Mettre de l'ordre · créer de la confiance · poser les bases d'une transformation durable.",

    painPoints: [
      {
        icon: '⊟',
        title: 'Données éparpillées',
        desc: 'Un Google Sheets par équipe, mis à jour manuellement. Doublons partout.',
      },
      {
        icon: '✉',
        title: 'Email comme source de vérité',
        desc: "Décisions par email/WhatsApp. Si quelqu'un est absent, l'info disparaît.",
      },
      {
        icon: '⚠',
        title: 'Données personnelles exposées',
        desc: 'Tous les collaborateurs ont accès à tout. Sensible inclus.',
      },
      {
        icon: '∅',
        title: 'Zéro vision commune',
        desc: "Aucun statut standardisé, aucune vision du cycle de vie d'une compétition.",
      },
    ],

    phases: [
      {
        badge: 'PHASE 01',
        title: 'Structurer & Automatiser',
        meta: 'Semaines 1 → 5 · Notion · Airtable · Make',
        blocks: [
          {
            title: 'Semaines 1-2 — Comprendre avant de construire',
            bullets: [
              'Espace Notion : roadmap 6 sprints, backlog priorisé, template Sprint Review, page Sécurité/RGPD, personas',
              "Modèle de données Airtable : **6 tables reliées** autour de l'entité centrale **Compétition**",
              'Pilotage en sprints documenté → "6 sprints · 6 fois Terminé"',
            ],
            image: '[ visuel · Notion timeline 6 sprints + modèle Airtable ]',
          },
          {
            title: 'Semaines 3-4 — De la base aux automatisations',
            bullets: [
              'Enrichissement Airtable : champs calculés (nb joueurs, validité équipe/match), vues métier (Équipes complètes, Matchs prêts, Compétitions à piloter)',
              'Formulaire client : inscrire sans accès direct à la base',
              '**Benchmark Make vs Zapier vs n8n** documenté → Make choisi (seul outil vert sur tous les critères critiques)',
            ],
            image: '[ visuel · Benchmark Make / Zapier / n8n ]',
          },
          {
            title: 'Semaines 4-5 — Deux scénarios Make en production',
            scenarios: [
              {
                num: 'SCÉNARIO 01',
                name: 'Validation des équipes',
                flow: [
                  'Modification table Équipes',
                  '→', '≥ 5 joueurs ?',
                  '→', 'Statut validé',
                  '+', 'Email capitaine',
                  '+', 'Google Calendar',
                ],
              },
              {
                num: 'SCÉNARIO 02',
                name: 'Génération du brief compétition',
                flow: [
                  'Inscriptions clôturées',
                  '→', 'Brief Google Docs',
                  '→', 'Export PDF',
                  '→', 'Envoi Ops',
                  '+', 'Traçabilité Airtable',
                ],
              },
            ],
            quote: "Une automatisation ne doit jamais échouer sans laisser de trace.",
          },
        ],
      },
      {
        badge: 'PHASE 02',
        title: 'Pivot Produit & MVP',
        meta: 'Semaines 6 → 12 · Figma · Lovable · Bubble',
        blocks: [
          {
            title: 'Semaine 6 — Design System Figma',
            text: "Nouveau défi : concevoir une app de location de terrains entre amis. L'identité visuelle de PlayOff existait — mon rôle : la formaliser en système réutilisable. **4 couleurs · 2 typographies · composants réutilisables**, plus les écrans clés (accueil, recherche terrain, réservation).",
            image: '[ visuel · Design System Figma + écrans clés ]',
          },
          {
            title: 'Semaine 7 — Démo cliquable Lovable',
            text: 'Périmètre volontairement limité : pas de BDD, pas de paiement réel, pas de logique persistante. **Lovable = storytelling produit · Bubble = développement réel.**',
            bullets: [
              "Découverte & sélection d'un terrain",
              'Localisation Google Maps & choix du créneau',
              'Récapitulatif & répartition des frais par joueur',
            ],
            textAfter: "En quelques heures, l'idée devient cliquable. Le concept est validé par la Direction. Cap sur le développement réel.",
            image: '[ visuel · 3 écrans Lovable ]',
          },
          {
            title: 'Semaines 8-9 — Architecture technique assumée',
            text: "Décision : **Full Bubble** plutôt que d'orchestrer Airtable + Make + Bubble. Rationale claire :",
            architecture: [
              { label: '✗ Airtable', desc: 'BDD redondante, synchronisation à maintenir', active: false },
              { label: '✗ Make', desc: 'Logique métier dispersée hors de l\'app', active: false },
              { label: '✓ Full Bubble', desc: 'Source de vérité unique, tout centralisé', active: true },
            ],
            textAfter: 'Services externes intégrés : **Stripe** (paiement), **Google Maps** (géoloc), **Gmail** (confirmation). Limites MVP assumées : Make et Stripe réintégrables en V2.',
            quote: 'Bubble = cœur du produit · Services externes = fonctionnalités spécialisées · Rien de plus.',
          },
          {
            title: 'Semaines 10-11 — MVP Bubble de bout en bout',
            text: 'Parcours utilisateur complet livré :',
            userJourney: [
              '🔐 Création compte',
              '🏟 Recherche terrain',
              '🗺 Fiche + Maps',
              '📅 Créneau + récap',
              '✉ Confirmation',
            ],
            bullets: [
              'Authentification Bubble native',
              'Répartition du coût par joueur',
              'Email de confirmation réel',
              'Privacy rules appliquées',
            ],
            image: '[ visuel/vidéo · démo MVP Bubble ]',
          },
          {
            title: 'Sprint 6 — Audit sécurité dédié',
            text: '**23 points de contrôle · 6 catégories · preuves documentées dans Airtable**. Catégories couvertes : Collaboration, Configuration, Workflow, Éditeur, Data, API. Statuts : Présent · Corrigé · N/A.',
            quote: "Tester ne suffit pas. Documenter la preuve, c'est ce qui rend une application transmissible et défendable.",
            image: '[ visuel · grille audit sécurité 23 points ]',
          },
        ],
      },
    ],

    learnings: [
      '6 outils maîtrisés avec leurs forces et leurs limites',
      'Conduire un projet en sprints, prioriser un backlog métier, benchmarker des outils',
      "Comprendre avant de construire · Choisir c'est renoncer · Assumer ses arbitrages",
    ],
    finalQuote: '6 outils · 2 projets · 1 méthode. Prêt à recommencer.',
  },

  // ─── Pour ajouter un nouveau projet, dupliquer le bloc ci-dessus ───
]

// ───────────────────────────────────────────────────────────────
// SECTION PROCESS
// ───────────────────────────────────────────────────────────────

export const PROCESS_STEPS = [
  {
    n: '01',
    t: 'Discover',
    d: 'Cadrage du besoin, identification des points de friction, mapping des process existants. Avant de construire, comprendre le métier.',
  },
  {
    n: '02',
    t: 'Architect',
    d: "Modèle de données, choix de stack justifiés, wireframes Figma, validation utilisateur. Choisir c'est renoncer — j'assume mes arbitrages.",
  },
  {
    n: '03',
    t: 'Build',
    d: 'Sprints de 2 semaines. Itérations rapides. Documentation continue dans Notion. Pas de boîte noire.',
  },
  {
    n: '04',
    t: 'Automate',
    d: 'Make pour orchestrer. Contrôles de cohérence. Notifications. Workflows métier. Une automatisation ne doit jamais échouer sans laisser de trace.',
  },
  {
    n: '05',
    t: 'Handover',
    d: 'Documentation, transfert, formation. Le produit doit vivre sans moi.',
  },
]

// ───────────────────────────────────────────────────────────────
// SECTION CONTACT — remplace par tes vrais liens !
// ───────────────────────────────────────────────────────────────

export const CONTACT = {
  email: 'ffurst@furst-ops.com',
  emailHref: 'mailto:ffurst@furst-ops.com',
  linkedin: '/in/frederick-furst',
  linkedinHref: 'https://www.linkedin.com/in/frederick-furst-34682890',
  // Formulaire de contact Fillout (embarqué dans la section + lien direct de secours)
  formId: 'h1Q4GdZ1kGus',
  formLabel: 'ouvrir le formulaire',
  formHref: 'https://forms.fillout.com/t/h1Q4GdZ1kGus',
}

// ───────────────────────────────────────────────────────────────
// MÉTADONNÉES
// ───────────────────────────────────────────────────────────────

export const META = {
  version: 'v0.3',
  lastUpdate: '2026.07',
  location: 'FR · THEYS',
  copyright: '© 2026 — Furst Ops · Theys, FR',
}
