# Système de Thèmes Jour/Nuit

## Fonctionnalités ajoutées

### 1. Barre de navigation améliorée
- Design moderne et responsive
- Bouton de changement de thème intégré
- Navigation fluide et accessible

### 2. Mode jour/nuit
- **Mode clair** : Couleurs claires et contrastées pour une lecture confortable en journée
- **Mode sombre** : Couleurs sombres pour réduire la fatigue oculaire en soirée
- Transition fluide entre les modes
- Sauvegarde automatique de la préférence utilisateur

### 3. Variables CSS
Les couleurs sont gérées par des variables CSS pour une maintenance facile :

```css
:root {
    --bg-primary: #ffffff;      /* Arrière-plan principal */
    --text-primary: #333333;    /* Texte principal */
    --accent-color: #ff8800;    /* Couleur d'accent (orange) */
    /* ... autres variables */
}

[data-theme="dark"] {
    --bg-primary: #1a1a1a;      /* Arrière-plan sombre */
    --text-primary: #ffffff;     /* Texte blanc */
    --accent-color: #ff9f40;     /* Orange plus clair pour le contraste */
    /* ... autres variables */
}
```

## Utilisation

### Basculer entre les thèmes
- Cliquez sur l'icône soleil/lune dans la barre de navigation
- Le thème choisi est automatiquement sauvegardé dans le navigateur
- Au rechargement de la page, votre préférence est conservée

### Intégrer le système dans d'autres pages
1. Incluez les fichiers CSS dans cet ordre :
   ```html
   <link rel="stylesheet" href="navbar.css">
   <link rel="stylesheet" href="theme.css">
   <link rel="stylesheet" href="style.css">
   ```

2. Incluez le JavaScript :
   ```html
   <script src="navbar.js"></script>
   ```

3. Assurez-vous que Font Awesome est inclus pour les icônes :
   ```html
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
   ```

## Personnalisation

### Modifier les couleurs
Éditez les variables CSS dans `navbar.css` pour personnaliser les couleurs :
- Changez `--accent-color` pour modifier la couleur principale
- Ajustez `--bg-primary` et `--bg-secondary` pour les arrière-plans
- Modifiez `--text-primary` et `--text-secondary` pour les textes

### Ajouter de nouveaux éléments
Pour que vos nouveaux éléments respectent le système de thèmes :
1. Utilisez les variables CSS existantes
2. Ajoutez vos styles personnalisés dans `theme.css`
3. Testez dans les deux modes (clair et sombre)

## Fichiers modifiés/créés

- `navbar.js` : Logique de navigation et changement de thème
- `navbar.css` : Styles de la navigation et variables de thème
- `theme.css` : Styles globaux pour les thèmes
- `index.html` : Inclusion du nouveau fichier CSS
- `README-themes.md` : Cette documentation

## Compatibilité

- Compatible avec tous les navigateurs modernes
- Responsive design (mobile, tablette, desktop)
- Accessible (support des lecteurs d'écran)
- Performance optimisée (transitions CSS, pas de JavaScript lourd)