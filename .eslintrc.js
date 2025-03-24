module.exports = {
  env: {
    browser: true, // Indique que le code est destiné à être exécuté dans un navigateur.
    es2021: true,  // Utilise les fonctionnalités ECMAScript 2021.
  },
  extends: [
    'plugin:react/recommended', // Utilise les règles recommandées pour React.
    'plugin:@typescript-eslint/recommended', // Utilise les règles recommandées pour TypeScript.
    'plugin:prettier/recommended', // Intègre Prettier pour le formatage du code.
  ],
  parser: '@typescript-eslint/parser', // Utilise le parser TypeScript pour ESLint.
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // Permet l'analyse du JSX.
    },
    ecmaVersion: 12, // Utilise la version ECMAScript 2021.
    sourceType: 'module', // Permet l'utilisation des modules ECMAScript.
  },
  plugins: [
    'react', // Ajoute le plugin React pour ESLint.
    '@typescript-eslint', // Ajoute le plugin TypeScript pour ESLint.
  ],
  rules: {
    "react/no-unescaped-entities": "off" // Désactive la règle qui empêche les entités non échappées dans le JSX.
  },
  settings: {
    react: {
      version: 'detect', // Détecte automatiquement la version de React utilisée.
    },
  },
};