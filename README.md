## Description du projet

Ce projet est un exerice de refonte d'une application web, qui permet de gérer des données utilisateurs de type "employées". 
Composé d'un formulaire d'ajout d'utilisateur, puis d'un tableau d'affichage et de tris.
Si aucune donnée n'est passée par le formulaire, un mock de données (`mockEmployees.json`) est appelé pour simuler un affichage standard. 
L'application utilise [Next.js](https://nextjs.org), Redux, du SASS couplé à des élèments en TailwindCSS.


👉 https://hrnet-project-ocr.vercel.app/



## Fonctionnalités

* Récupération de données de formulaire
* Affichage des données utilisateurs dans un tableau (Datatable-like)
* Le projet stocke et manage les données Front via Redux (state manager)
* Plusieurs élèments sont d'anciens plugins Jquery, et ont été converti en composant simple ReactJS.

L'un d'entre eux, `Modal`, a été reconstruit en tant que plugin publiable, disponible ici sur [NPM](https://www.npmjs.com/package/milooz-modal-ts-rc)

N.B: Les élèments de type "datePicker" ont été re-intégré simplement en élèment HTML5 Standard natif `<input type="date"/>` (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date).


## Dépendances
* Next
* React
* React DOM
* Redux ToolKit


## Dev-Dépendances
* React
* React DOM
* Redux ToolKit
* TypeScript
* SASS
* TailWind


## Installation
1. Cloner le dépôt Git
```bash
git clone https://github.com/Mil00Z/hr-net.git
```

2. Installer les dépendances : 
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Lancer l'application avec :
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Utilisation
* Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
* Remplir le formulaire et soumettre 
OR
se rendre sur la page de listing des employées (`http://localhost:3000/employees`)


## Structure du projet
* `src/`: dossier contenant les fichiers sources de l'application.
* `src/app/`: dossier de routage des pages du projet, standard en Next.js.
* `src/components/`: dossier contenant les composants de l'application.
* `src/redux/`: dossier contenant la logique Redux pour le management du store.
* `src/datas/`: dossier contenant les mock de données.
* `src/styles/`: dossier contenant des styles SCSS complémentaires.


### More Details
This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.



## Next Universe
To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!



## Deploiement sur Vercel
https://hrnet-project-ocr.vercel.app/



