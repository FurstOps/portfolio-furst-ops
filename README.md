# Portfolio Furst Ops

Portfolio professionnel de Frédérick Furst, Product Builder No-Code.

**Stack technique :** React 18 + Vite + JavaScript (pas de TypeScript).
**Style visuel :** Dark mode tech / lab terminal, accents néon vert.

---

## 🚀 Démarrage rapide

### 1. Installer les dépendances (à faire une seule fois)

```bash
npm install
```

Ça télécharge React, Vite et tout ce qu'il faut. Ça crée un dossier `node_modules/` qui peut être lourd (~100 Mo) — c'est normal, il est ignoré par Git.

### 2. Lancer en mode développement

```bash
npm run dev
```

Le site s'ouvre sur **http://localhost:5173**. Chaque modification que tu sauvegardes est rechargée automatiquement (hot reload).

### 3. Construire la version finale (pour déployer)

```bash
npm run build
```

Ça génère un dossier `dist/` prêt à être hébergé sur Vercel, Netlify, ou n'importe quel serveur statique.

---

## 📝 Mettre à jour le portfolio

**90% du temps, tu n'as qu'à éditer un seul fichier : `src/data/content.js`.**

Ce fichier contient tout le contenu du portfolio :

| Section | Constante à modifier |
|---|---|
| Hero / Intro | `INTRO` |
| Outils maîtrisés | `STACK` |
| Projets / Case studies | `PROJECTS` |
| Méthodologie | `PROCESS_STEPS` |
| Coordonnées | `CONTACT` |
| Métadonnées (version, copyright) | `META` |

### Exemples

**Ajouter un outil à la stack :**
```js
// Dans content.js, dans le tableau STACK
{ name: 'Webflow', role: 'Sites vitrine no-code', level: 'Débutant' },
```

**Ajouter un projet :**
Duplique l'objet projet `playoff` dans `PROJECTS` et modifie les champs. Tous les champs sont optionnels sauf `id`, `title`, `subtitle`.

**Mettre à jour tes coordonnées :**
```js
export const CONTACT = {
  email: 'frederick@furst-ops.com',
  emailHref: 'mailto:frederick@furst-ops.com',
  linkedin: '/in/frederick-furst',
  linkedinHref: 'https://linkedin.com/in/frederick-furst',
  // ...
}
```

---

## 🤖 Utiliser Claude Code

Le fichier `CLAUDE.md` à la racine briefe automatiquement Claude Code à chaque session : il sait où trouver chaque chose et comment respecter ton style visuel.

**Exemples de demandes utiles :**

```
> "Ajoute un nouveau case study sur le projet X que je viens de finir"
> "Change le niveau de maîtrise de Bubble à Confirmé"
> "Ajoute une section À propos entre Stack et Work"
> "Le texte d'intro est trop générique, rends-le plus accrocheur"
> "Vérifie le responsive sur mobile et corrige les soucis"
```

---

## 🗂 Architecture des fichiers

```
portfolio-furst-ops/
├── index.html              # Point d'entrée HTML
├── package.json            # Dépendances et scripts npm
├── vite.config.js          # Config Vite
├── CLAUDE.md               # Brief pour Claude Code
├── README.md               # Ce fichier
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx            # Entry point React
    ├── Portfolio.jsx       # Composant racine
    ├── data/
    │   └── content.js      # ⭐ Tout le contenu modifiable
    ├── styles/
    │   ├── global.css      # Reset + animations + fonts
    │   └── styles.js       # Objets style JSX
    └── components/
        ├── TopBar.jsx
        ├── SideNav.jsx
        ├── SectionHeader.jsx
        ├── SectionIntro.jsx
        ├── SectionStack.jsx
        ├── SectionWork.jsx
        ├── ProjectCard.jsx
        ├── SectionProcess.jsx
        ├── SectionContact.jsx
        └── helpers.jsx
```

---

## 🎨 Palette de couleurs

| Usage | Hex |
|---|---|
| Background principal | `#0a0d0c` |
| Vert néon (accent) | `#a3ff5e` |
| Cyan (secondaire) | `#5dd5ff` |
| Rouge (warnings) | `#ff6b6b` |
| Texte principal | `#d8e0dc` |
| Texte blanc cassé | `#f0f5f2` |

---

## 🚢 Déploiement sur Vercel

1. Crée un compte sur [vercel.com](https://vercel.com) (gratuit, plan Hobby)
2. Pousse ce projet sur GitHub
3. Sur Vercel, clique "New Project" et sélectionne ton dépôt GitHub
4. Vercel détecte automatiquement Vite et configure tout
5. Clique "Deploy" — ton site sera en ligne en 1-2 minutes

Une fois connecté, **chaque push sur GitHub redéploiera automatiquement** ton portfolio.

---

## 📞 Contact

Frédérick Furst — Furst Ops
Theys (Isère), France
