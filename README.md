F3F Manager
Application web (PWA) de gestion de ballast et centrage pour planeurs de compétition F3F. Permet d'optimiser la charge alaire en fonction du vent tout en respectant les tolérances de centrage (CG).

Fonctions principales
Gestion de flotte : Création de fiches techniques par modèle (poids à vide, surface, soutes).

Calculateur dynamique : Calcul du poids cible selon la force du vent et un facteur de charge ajustable.

Optimisation automatique : Algorithme qui remplit les soutes (Laiton/Plomb/Tungstène) pour atteindre le poids idéal en restant proche du CG cible.

Journal de bord : Enregistrement des vols avec conditions, chronos et notes.

Mode Offline : Fonctionne sans réseau sur le terrain (PWA).

Installation
L'application est statique. Pour l'installer :

Héberger les fichiers sur GitHub Pages (ou n'importe quel serveur web).

Ouvrir l'URL sur smartphone.

Sur iOS : Partager > "Sur l'écran d'accueil".

Sur Android : Menu > "Installer l'application".

Structure du projet
index.html : Structure de l'interface et gestion des vues.

css/style.css : Design et thèmes (Cyber, Snow, Flat, Bunker).

js/app.js : Logique de calcul, dictionnaire de traduction et gestion des données (LocalStorage).

sw.js : Service Worker pour le cache et l'utilisation hors-ligne.

Données
Toutes les données sont stockées localement dans le navigateur. Une fonction d'export/import JSON est disponible dans les paramètres pour les sauvegardes ou le transfert entre appareils.
