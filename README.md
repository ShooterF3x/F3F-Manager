# 🚀 F3F Manager

![Version](https://img.shields.io/badge/version-5.25-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![PWA](https://img.shields.io/badge/PWA-Ready-purple)

Application web légère pour la gestion du ballastage et du centrage des planeurs de compétition **F3F**.

---

## 🛠 Fonctions principales

* **Gestion de flotte :** Création de fiches techniques (poids vide, CG vide, surface).
* **Calculateur intelligent :** Détermine le poids cible idéal selon la force du vent.
* **Optimisation automatique :** Algorithme de remplissage des soutes pour coller au poids cible et au CG désiré.
* **Journal de bord :** Historique des vols, chronos et ressentis.
* **Mode Offline :** Utilisable sur la pente sans connexion internet (PWA).

---

## 📂 Structure du projet

| Fichier | Rôle |
| :--- | :--- |
| **`index.html`** | Squelette de l'interface et gestion des vues. |
| **`css/style.css`** | Design, thèmes et animations. |
| **`js/app.js`** | Moteur de calcul et logique de l'application. |
| **`sw.js`** | Gestion du cache pour le fonctionnement hors-ligne. |

---

## 📲 Installation rapide

1. Héberger les fichiers sur **GitHub Pages**.
2. Lancer l'URL sur votre smartphone.
3. **Sur iOS :** `Partager` > `Sur l'écran d'accueil`.
4. **Sur Android :** `Menu` > `Installer l'application`.

---

## 🔐 Confidentialité et Données

Toutes les données sont stockées en local sur votre appareil via le **LocalStorage**. Aucune donnée n'est envoyée vers un serveur externe. Pensez à utiliser la fonction **Export JSON** dans les paramètres pour vos sauvegardes.

---

© 2026 F3F Manager - Développé pour la performance.
