# Portfolio Website - Studio Workora

Site vitrine moderne avec système CMS admin intégré, construit avec React, TypeScript, et Supabase.

## Fonctionnalités

- **Site vitrine moderne** avec animations et design soigné
- **Panneau d'administration CMS** pour gérer le contenu
- **Authentification sécurisée** via Supabase
- **Design responsive** optimisé pour tous les appareils
- **Animations fluides** et micro-interactions

## Technologies utilisées

- **React 18** - Framework frontend
- **TypeScript** - Typage statique
- **Vite** - Build tool et dev server
- **Tailwind CSS** - Framework CSS utility-first
- **React Router** - Routing
- **Supabase** - Backend as a Service (base de données + authentification)
- **Lucide React** - Icônes

## Structure du projet

```
portfolio-website/
├── src/
│   ├── components/          # Composants réutilisables
│   │   ├── admin/          # Composants pour l'admin
│   │   ├── Header.tsx      # En-tête du site
│   │   ├── Footer.tsx      # Pied de page
│   │   └── Hero3DScene.tsx # Scène 3D animée
│   ├── contexts/           # React contexts
│   │   └── AuthContext.tsx # Gestion de l'authentification
│   ├── pages/              # Pages du site
│   │   ├── admin/          # Pages admin
│   │   ├── Home.tsx
│   │   ├── Services.tsx
│   │   ├── Portfolio.tsx
│   │   └── Contact.tsx
│   ├── lib/
│   │   └── supabase.ts     # Configuration Supabase
│   ├── App.tsx             # Composant racine
│   └── main.tsx            # Point d'entrée
├── supabase/
│   └── migrations/         # Migrations de base de données
└── public/                 # Fichiers statiques
```

## Installation

1. Clonez le repository :
```bash
git clone https://github.com/MaximeONF/portfolio-website.git
cd portfolio-website
```

2. Installez les dépendances :
```bash
npm install
```

3. Configurez les variables d'environnement :

Créez un fichier `.env` à la racine du projet :
```env
VITE_SUPABASE_URL=votre_url_supabase
VITE_SUPABASE_ANON_KEY=votre_anon_key_supabase
```

4. Lancez le serveur de développement :
```bash
npm run dev
```

## Configuration Supabase

1. Créez un projet sur [Supabase](https://supabase.com)
2. Récupérez l'URL et la clé anonyme dans les paramètres du projet
3. Exécutez les migrations dans l'éditeur SQL de Supabase (fichiers dans `supabase/migrations/`)
4. Créez un utilisateur admin via l'interface Supabase Auth

## Scripts disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Compile le projet pour la production
- `npm run preview` - Prévisualise le build de production
- `npm run lint` - Vérifie le code avec ESLint
- `npm run typecheck` - Vérifie les types TypeScript

## Accès admin

L'interface d'administration est accessible via `/admin/login`.

Vous devez créer un compte admin via Supabase Auth ou la page `/admin/signup`.

## Sections gérables via le CMS

- **Hero** - Section d'accueil principale
- **Présentation** - Section "À propos"
- **Services** - Liste des services proposés
- **Portfolio** - Projets et réalisations
- **Tarifs** - Plans tarifaires
- **FAQ** - Questions fréquentes
- **Contact** - Informations de contact
- **Paramètres** - Configuration du site

## Sécurité

- Row Level Security (RLS) activé sur toutes les tables
- Authentification sécurisée via Supabase
- Contenu public accessible en lecture seule
- Modification réservée aux utilisateurs authentifiés

## Licence

Ce projet est privé et appartient à Studio Workora.

## Contact

Pour toute question : contact@studio.workora.fr