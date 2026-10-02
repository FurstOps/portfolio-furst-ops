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
    subtitle: "Reconstruire de A à Z l'application de création et de partage de balades d'un programme national de santé publique dédié à la marche des seniors — de la maquette jusqu'à la mise en production.",
    status: 'EN RECETTE',
    period: 'Juin 2026 → mise en ligne visée mi-décembre 2026',
    role: 'Product Builder solo · dév. assisté par IA (Claude Code)',
    duration: '4 mois et demi · pilotage en COPIL avec le client · recette terrain',
    stack: 'React (PWA) · TypeScript · PostgreSQL · Leaflet · Android · OVHcloud (HDS)',

    client: {
      name: "ADAL — À la Découverte de l'Âge Libre",
      desc: "association porteuse du programme national D-marche®, programme motivationnel de marche reconnu par Santé Publique France, partenaire du programme ICOPE et certifié Facile À Lire et à Comprendre.",
    },

    highlights: [
      { num: '99+', label: 'items livrés & documentés' },
      { num: '4', label: 'COPIL client' },
      { num: '29', label: 'demandes livrées en 3 jours' },
      { num: '5', label: 'versions Android publiées' },
      { num: '2', label: 'formats de fiche PDF' },
      { num: '0', label: 'service tiers à l\'usage' },
    ],

    pullQuote: "Mesurer avant de coder : chaque écran finit entre les mains de vrais marcheurs seniors.",

    painPoints: [
      {
        icon: '⊟',
        title: 'Une maquette sans données',
        desc: "Une app de création et un annuaire public existaient, mais tournaient sur des données de démonstration.",
      },
      {
        icon: '⌂',
        title: 'Une plateforme vieillissante',
        desc: "L'existant reposait sur une technologie ancienne, difficile à faire évoluer et à maintenir.",
      },
      {
        icon: '⚕',
        title: 'Des contraintes santé fortes',
        desc: 'Programme de santé publique : hébergement de données de santé (HDS) et RGPD non négociables.',
      },
      {
        icon: '◎',
        title: 'Un public senior',
        desc: "Des utilisateurs sur le terrain, au téléphone, parfois sans réseau : zéro place pour la complexité.",
      },
    ],

    phases: [
      {
        badge: 'PHASE 01',
        title: 'Brancher la maquette sur le réel',
        meta: 'Fin juin → juillet 2026 · données réelles · terrain',
        blocks: [
          {
            title: 'De la démo au produit, écran par écran',
            text: "En quelques jours, la création de balade, la **capture GPS réelle**, la modération et l'annuaire public fonctionnent sur de vraies données. Les **29 balades historiques** sont reprises sans perte.",
            bullets: [
              "Application **installable** (PWA) qui fonctionne hors connexion : aucune donnée perdue quand le réseau coupe",
              "Points d'intérêt typés (vue, commodité, danger…) et photos compressées sur le téléphone",
              'Annuaire public filtrable, en liste ou sur carte',
              "Diagnostic GPS qui **explique lui-même** la cause d'une panne et guide l'utilisateur",
            ],
          },
          {
            title: 'Marcher à plusieurs, en temps réel',
            text: "Invitation par code ou QR, tracé partagé en direct, **passage de relais automatique** si le responsable perd le signal. Choix assumé : une synchronisation simple et robuste plutôt qu'un temps réel complexe, mieux adaptée aux réseaux mobiles. Validé sur deux téléphones réels : **0 doublon, 0 point perdu**.",
            userJourney: [
              '📲 Code / QR',
              '🚶 Tracé partagé',
              '🔁 Relais auto',
              '✅ Clôture pour tous',
            ],
          },
        ],
      },
      {
        badge: 'PHASE 02',
        title: "Sortir de l'ancienne plateforme",
        meta: 'Juillet 2026 · architecture · mise en ligne',
        blocks: [
          {
            title: '3 contraintes qui ont tout décidé',
            text: "Un seul serveur, un seul langage, facile à maintenir. Le périmètre s'élargit du module cartographique à **toute la plateforme** : back-office, espace membre, site public.",
            architecture: [
              { label: '✗ Garder l\'ancien', desc: 'Technologie vieillissante, chaque évolution coûte cher', active: false },
              { label: '✗ Fusion forcée', desc: 'Deux systèmes à maintenir, fragile', active: false },
              { label: '✓ Rebuild progressif', desc: "Nouvelle app autonome, l'ancienne sert de filet de sécurité", active: true },
            ],
            textAfter: "Le client décide d'**arrêter l'ancienne plateforme** : elle est gelée le 23/07, toute nouveauté se fait désormais dans la v2.",
          },
          {
            title: 'Une revue client, 29 demandes, 3 jours',
            text: "Après une revue des parcours avec l'association, les **29 demandes** sont livrées en trois jours, dont 11 « gains rapides » en une seule journée — suivies d'un support de COPIL.",
            bullets: [
              'Éditeur de tracé pensé pour les seniors : redresser, effacer, redessiner au doigt, annuler pas à pas',
              'Fiche PDF en 2 formats conformes au gabarit de l\'association',
              'Supervision intégrée au back-office, défis entre marcheurs, espace « Mon compte » complet',
            ],
          },
          {
            title: 'Mise en ligne chez un hébergeur certifié santé',
            text: "Fin juillet, l'environnement de recette est en ligne en France chez **OVHcloud**, dans un cadre **HDS**, avec livraison automatique, chiffrement, sauvegardes quotidiennes **dont la restauration a été testée** — pas seulement décrite.",
            quote: 'Aucune dépendance à un service tiers au moment de l\'usage : cartes, adresses et correcteur sont hébergés par le projet.',
          },
        ],
      },
      {
        badge: 'PHASE 03',
        title: 'Retours terrain & produit complet',
        meta: 'Août → septembre 2026 · 4 COPIL · itérations continues',
        blocks: [
          {
            title: 'Créer une balade depuis son téléphone',
            text: "Parcours guidé, adresse de départ suggérée à partir du référentiel officiel des communes, puis capture sur le terrain avec **deux grands boutons** (Étape / Point d'intérêt) : moins d'erreurs de toucher en marchant. Choix guidé par la mesure : 47 % d'étapes, 43 % de points d'intérêt — aucun bouton ne devait dominer.",
            images: [
              { src: '/images/dcartes/tableau-de-bord.webp', caption: 'Tableau de bord du marcheur' },
              { src: '/images/dcartes/creer-balade.webp', caption: 'Création guidée d\'une balade' },
              { src: '/images/dcartes/hors-ligne.webp', caption: 'Préparer une zone hors ligne' },
            ],
          },
          {
            title: 'Partir sans réseau',
            text: "Zones de carte téléchargées à l'avance, **poids annoncé avant le téléchargement**, création de balade hors ligne et synchronisation au retour du réseau, sans doublon.",
          },
          {
            title: 'Une fiche PDF « carnet de route »',
            text: "Trois maquettes proposées, la piste retenue en COPIL puis livrée : distance depuis le départ, photos dans le fil du parcours, **profil altimétrique**, variantes « faire moins / faire plus ». Police **Atkinson Hyperlegible** (conçue pour la basse vision), impression noir & blanc pensée pour être pliée.",
            bullets: [
              'Dénivelé lu sur le relief IGN plutôt que sur le GPS : 600 m mesurés pour 599 m publiés sur un parcours de référence',
              'Tracés GPS recalés sur les chemins (3 à 8 % de distance corrigée)',
              'Test anti-débordement : 10/10 combinaisons passent (6/10 débordaient avant)',
            ],
          },
          {
            title: 'Modération, RGPD & challenges',
            text: "File de validation, **floutage des visages et des plaques** par le modérateur (manuel par choix : un détecteur qui rate un visage pousse à valider sans regarder), nom public au choix (« Prénom N. »), modération des commentaires. Côté motivation : **challenges** individuels ou par équipes, au ton coopératif — sans podium.",
          },
          {
            title: "L'appli Android « D-marche » sur le Play Store",
            text: "Une application Android dédiée lit le **podomètre** du programme. Cinq versions publiées, dont une corrigée après un bug repéré sur un vrai téléphone ; publique sur le Play Store depuis septembre 2026.",
          },
        ],
      },
      {
        badge: 'PHASE 04',
        title: 'Recette à grande échelle & mise en production',
        meta: 'Octobre → décembre 2026 · en cours',
        blocks: [
          {
            title: 'Tester avec les vrais utilisateurs, par vagues',
            text: "Un **guide du testeur** illustré accompagne les correspondants du programme. Une première vague démarre début octobre, une seconde plus large mi-octobre, avec un audit et un durcissement de l'application juste avant.",
            bullets: [
              'Recette en 2 vagues, retours traités au fil de l\'eau',
              'Préproduction prête sur la même infrastructure, sauvegardes testées',
              'Mise en production visée **mi-décembre 2026**',
            ],
            // 👉 Ajouter une démo : video: 'https://www.loom.com/share/XXXXXXXX',
          },
        ],
      },
    ],

    learnings: [
      'Mesurer avant de coder : trois fois, la mesure a révélé un problème différent de celui décrit par le retour utilisateur',
      'Concevoir pour un public senior : libellés clairs, contraste élevé, chaque bouton grisé accompagné de son explication',
      'Piloter un client en COPIL : comptes rendus vivants, choix par défaut listés pour validation, registre des sujets clos',
      "Orchestrer l'IA (Claude Code) avec méthode : journaux de passation, vérification systématique dans un vrai navigateur, runbooks testés",
      'Livrer un vrai produit, sous contraintes santé (HDS, RGPD), en solo',
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
  version: 'v0.4',
  lastUpdate: '2026.10',
  location: 'FR · THEYS',
  copyright: '© 2026 — Furst Ops · Theys, FR',
}
