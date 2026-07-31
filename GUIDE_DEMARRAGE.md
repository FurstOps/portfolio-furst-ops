# 🚀 Guide de démarrage — De zéro à portfolio en ligne

Ce guide te prend par la main, étape par étape, depuis l'installation jusqu'au déploiement.
Compte environ **45 minutes** pour tout faire la première fois.

---

## 📋 Vue d'ensemble

Voici ce qu'on va faire :

1. **Installer les prérequis** (Node.js, Git, VS Code, Claude Code) — 15 min
2. **Lancer le projet en local** pour voir le portfolio sur ton ordi — 5 min
3. **Personnaliser le contenu** (tes vrais liens, ton style) — 10 min
4. **Mettre le projet sur GitHub** (sauvegarde + historique) — 10 min
5. **Déployer sur Vercel** (site public en ligne) — 5 min

---

## ÉTAPE 1 — Installer les prérequis

### 1.1 — Node.js

Node.js est l'environnement qui fait tourner JavaScript en dehors d'un navigateur. Il est nécessaire pour le développement.

1. Va sur [nodejs.org](https://nodejs.org)
2. Télécharge la version **LTS** (Long Term Support, la plus stable)
3. Lance l'installateur, accepte tous les choix par défaut
4. **Redémarre ton ordinateur** (oui, c'est important)

**Pour vérifier que c'est bien installé**, ouvre un terminal et tape :

```bash
node --version
```

Tu devrais voir quelque chose comme `v20.10.0` ou plus. Si tu vois "command not found", relance ton ordi ou réinstalle.

> **Comment ouvrir un terminal ?**
> - **Mac** : Cmd + Espace → tape "Terminal" → Entrée
> - **Windows** : touche Windows → tape "PowerShell" → Entrée
> - **Linux** : Ctrl + Alt + T

### 1.2 — Git

Git est l'outil qui gère l'historique de ton code. C'est aussi ce qui permet à Claude Code et Vercel de communiquer avec GitHub.

1. Va sur [git-scm.com](https://git-scm.com)
2. Télécharge et installe (tous les choix par défaut sont bons)
3. Vérifie dans le terminal :

```bash
git --version
```

### 1.3 — VS Code (l'éditeur)

VS Code est l'éditeur de code recommandé. Il est gratuit et fonctionne très bien avec Claude Code.

1. Va sur [code.visualstudio.com](https://code.visualstudio.com)
2. Télécharge et installe

### 1.4 — Claude Code

Tu as deux options : la **CLI native** (recommandée par Anthropic) ou via npm.

**Option A — Installation native (recommandée)**

Va sur [docs.claude.com/en/docs/claude-code](https://docs.claude.com/en/docs/claude-code/overview) et suis l'installateur natif pour ton OS (macOS, Windows ou Linux).

**Option B — Via npm (si tu connais déjà npm)**

```bash
npm install -g @anthropic-ai/claude-code
```

**Connexion** : ouvre un terminal et tape :

```bash
claude
```

Il va t'ouvrir une page de connexion dans ton navigateur. Connecte-toi avec ton compte Claude (compte payant requis : Pro, Max, Team ou Enterprise — vérifie que tu as bien souscrit avant).

### 1.5 — Compte GitHub

Si tu n'en as pas déjà un :

1. Va sur [github.com](https://github.com)
2. Crée un compte gratuit avec ton email pro (ex: frederick@furst-ops.com)
3. Choisis un username pro (ex: `fursterick` ou `furst-ops`)

---

## ÉTAPE 2 — Lancer le projet en local

### 2.1 — Décompresser le projet

Tu as reçu un dossier `portfolio-furst-ops/`. Place-le où tu veux sur ton ordi (par ex. `~/Documents/Code/portfolio-furst-ops/`).

### 2.2 — Ouvrir le projet dans VS Code

1. Lance VS Code
2. Menu **File → Open Folder** → sélectionne `portfolio-furst-ops/`
3. VS Code affiche maintenant tous les fichiers du projet à gauche

### 2.3 — Ouvrir le terminal intégré de VS Code

Dans VS Code, menu **View → Terminal** (ou raccourci **Ctrl + `** ou **Cmd + `**).

Un terminal s'ouvre en bas, **déjà placé dans le bon dossier**.

### 2.4 — Installer les dépendances

Dans ce terminal, tape :

```bash
npm install
```

Ça va télécharger React, Vite, etc. Compte 1-2 minutes. Tu verras défiler beaucoup de texte — c'est normal.

À la fin, tu auras un nouveau dossier `node_modules/` (lourd, mais ignoré par Git).

### 2.5 — Lancer le site

```bash
npm run dev
```

Tu devrais voir :

```
  VITE v5.4.0  ready in 234 ms

  ➜  Local:   http://localhost:5173/
```

**Ouvre [http://localhost:5173](http://localhost:5173) dans ton navigateur.** 🎉

Tu vois ton portfolio ! Si tu modifies un fichier et sauvegardes, le navigateur se rafraîchit tout seul.

> **Pour arrêter le serveur** : dans le terminal, fais Ctrl + C

---

## ÉTAPE 3 — Personnaliser le contenu

### 3.1 — Ouvrir le fichier de contenu

Dans VS Code, ouvre `src/data/content.js`. **C'est LE fichier à modifier pour 90% des mises à jour.**

### 3.2 — Mettre tes vraies coordonnées

Cherche tout en bas du fichier `export const CONTACT` et remplace les valeurs :

```js
export const CONTACT = {
  email: 'frederick@furst-ops.com',
  emailHref: 'mailto:frederick@furst-ops.com',
  linkedin: '/in/frederick-furst',
  linkedinHref: 'https://linkedin.com/in/frederick-furst',
  github: '/fursterick',
  githubHref: 'https://github.com/fursterick',
  formLabel: 'via Fillout',
  formHref: 'https://fillout.com/ton-vrai-lien',
}
```

Sauvegarde (Ctrl + S / Cmd + S). Le navigateur se rafraîchit. ✨

### 3.3 — Tester Claude Code

Dans le terminal de VS Code, lance Claude Code :

```bash
claude
```

Essaie une demande simple :

```
> Lis le fichier CLAUDE.md et confirme que tu as compris le projet.
```

Puis essaie une vraie modification :

```
> Ajoute Webflow à ma stack avec un niveau Débutant et le rôle "Sites vitrine no-code"
```

Claude Code va te proposer la modification — accepte-la (touche `y` ou clique sur "Approve").

Va voir dans ton navigateur : Webflow est apparu ! 🎉

---

## ÉTAPE 4 — Mettre le projet sur GitHub

### 4.1 — Créer un dépôt sur GitHub

1. Va sur [github.com](https://github.com), connecte-toi
2. Clique sur le **+** en haut à droite → **New repository**
3. Nom : `portfolio-furst-ops` (ou ce que tu veux)
4. **Visibilité : Private** (au moins au début, tu pourras passer en Public plus tard)
5. **Ne coche RIEN d'autre** (pas de README, pas de gitignore, on en a déjà)
6. Clique **Create repository**

### 4.2 — Initialiser Git dans le projet local

Dans le terminal de VS Code (au sein de ton projet) :

```bash
git init
git add .
git commit -m "Initial commit : portfolio V1"
```

### 4.3 — Connecter ton projet local au dépôt GitHub

GitHub t'affiche une page d'instructions après la création. Cherche la section **"…or push an existing repository from the command line"** et copie les commandes. Elles ressemblent à :

```bash
git remote add origin https://github.com/TON_USERNAME/portfolio-furst-ops.git
git branch -M main
git push -u origin main
```

Colle-les dans le terminal une par une. La dernière commande te demandera de te connecter à GitHub (suis les instructions).

Rafraîchis ta page GitHub : tous tes fichiers sont là ! 🎉

---

## ÉTAPE 5 — Déployer sur Vercel

### 5.1 — Créer un compte Vercel

1. Va sur [vercel.com](https://vercel.com)
2. Clique **Sign Up**
3. Choisis **Continue with GitHub** (c'est le plus simple)
4. Autorise Vercel à accéder à tes dépôts

### 5.2 — Déployer le projet

1. Sur Vercel, clique **Add New → Project**
2. Trouve `portfolio-furst-ops` dans la liste de tes dépôts GitHub
3. Clique **Import**
4. Vercel détecte automatiquement que c'est un projet Vite — laisse tous les réglages par défaut
5. Clique **Deploy**

Patiente 1-2 minutes pendant que Vercel build ton site.

À la fin, tu obtiens une URL du type `https://portfolio-furst-ops.vercel.app` — **ton portfolio est en ligne** ! 🚀

### 5.3 — Activer les déploiements automatiques

C'est déjà fait ! Vercel surveille ton dépôt GitHub. Chaque `git push` redéploie automatiquement ton portfolio. C'est magique.

### 5.4 — Domaine personnalisé (optionnel)

Tu possèdes déjà `furst-ops.com`. Pour l'utiliser :

1. Dans Vercel, ouvre ton projet → **Settings → Domains**
2. Ajoute `furst-ops.com` (ou `portfolio.furst-ops.com`)
3. Vercel te donne 2-3 enregistrements DNS à configurer chez ton registrar (OVH, Gandi, etc.)
4. Configure-les chez ton registrar, attends 5-30 minutes
5. C'est en ligne sur ton domaine !

---

## 🔄 Workflow quotidien après installation

Une fois que tout est en place, voici ton workflow type pour mettre à jour le portfolio :

```bash
# 1. Ouvrir le projet dans VS Code
# (ou : cd ~/Documents/Code/portfolio-furst-ops && code .)

# 2. Lancer le serveur de dev pour voir tes changements en live
npm run dev

# 3. Modifier content.js (ou demander à Claude Code de le faire)
claude
> "Ajoute un nouveau case study sur le projet X"

# 4. Quand tu es satisfait, sauvegarder dans Git et déployer
git add .
git commit -m "Ajout case study projet X"
git push

# → Vercel redéploie automatiquement en 1-2 minutes
```

---

## 🆘 Si quelque chose ne marche pas

**`npm install` échoue** → Vérifie que Node.js est bien installé (`node --version`)

**`npm run dev` lance mais rien ne s'affiche** → Vérifie l'URL `http://localhost:5173` et regarde le terminal pour des erreurs

**`git push` demande des identifiants à chaque fois** → Configure SSH ou un token GitHub (Claude Code peut t'aider)

**Le site déployé n'est pas à jour** → Vérifie sur Vercel l'onglet "Deployments" — peut-être que le build a échoué

**Tu es perdu** → Lance Claude Code (`claude`) et explique-lui ce qui se passe. Il a accès à tout le projet et au fichier CLAUDE.md qui le brief.

---

## 📚 Ressources utiles

- **Documentation Claude Code** : https://docs.claude.com/en/docs/claude-code/overview
- **Documentation Vite** : https://vitejs.dev
- **Documentation React** : https://react.dev
- **Apprendre Git** : https://learngitbranching.js.org (jeu interactif)

---

## ✅ Checklist finale

Une fois que tu as fini les 5 étapes, tu devrais avoir :

- [ ] Node.js, Git, VS Code et Claude Code installés
- [ ] Le projet qui tourne en local sur `http://localhost:5173`
- [ ] Tes vraies coordonnées dans `content.js`
- [ ] Le projet pushé sur GitHub
- [ ] Le portfolio en ligne sur une URL Vercel
- [ ] Au moins une modification faite via Claude Code

**Tu es prêt à itérer !** 🎯
