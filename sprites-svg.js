/*
INSTRUCTIONS POUR LA CRÉATION DES SPRITES

L'application a besoin de 9 fichiers PNG, un pour chaque fruit:
1. apple.png
2. banana.png
3. orange.png
4. strawberry.png
5. pear.png
6. grape.png
7. watermelon.png
8. cherry.png
9. blueberry.png

Chaque fichier PNG est une spritesheet contenant 4 images empilées verticalement,
chacune représentant le fruit dans une saison différente:
- Position Y=0px: Printemps
- Position Y=50px: Été
- Position Y=100px: Automne
- Position Y=150px: Hiver

Dimensions de chaque image:
- Largeur: 50px
- Hauteur: 50px

Dimensions totales de chaque spritesheet:
- Largeur: 50px
- Hauteur: 200px (4 saisons × 50px)

Exemple de structure pour apple.png:
┌─────────┐
│ Pomme   │ Y=0px (Printemps)
│Printemps│
└─────────┘
┌─────────┐
│ Pomme   │ Y=50px (Été)
│  Été    │
└─────────┘
┌─────────┐
│ Pomme   │ Y=100px (Automne)
│ Automne │
└─────────┘
┌─────────┐
│ Pomme   │ Y=150px (Hiver)
│  Hiver  │
└─────────┘

Pour créer ces images, vous pouvez utiliser un éditeur d'image et créer des variations 
pour chaque saison, par exemple:
- Printemps: couleurs vives, éléments floraux
- Été: couleurs chaudes, aspect juteux
- Automne: couleurs orangées/brunes
- Hiver: couleurs bleues/blanches, aspect givré

Placez tous les fichiers PNG dans un dossier "images" à la racine du projet.
*/

// Structure des dossiers du projet
/*
CreaTune/
├── index.html
├── manifest.json
├── service-worker.js
├── icons/
│   ├── icon-192x192.png
│   └── icon-512x512.png
└── images/
    ├── apple.png
    ├── banana.png
    ├── orange.png
    ├── strawberry.png
    ├── pear.png
    ├── grape.png
    ├── watermelon.png
    ├── cherry.png
    └── blueberry.png
*/