# Facepass

Projet d'un gestionnaire de mot de passe dont la connexion peut se faire par reconnaissance faciale.

## Contexte


### Consignes

Dans le cadre d'un Hackathon, nous avions une semaine pour réaliser un projet dans lequel nous avons crée un outil de cybersécurité. Ce projet est un gestionnaire de mot de passe accompagné de nouvelles fonctionnalités.

Fait par Slimen, François, Yanis, Ilian, Jibril, Younes, Leila, Luca.
Du 14 au 18 mars 2022.

### Langages et outils utilisés

* Html, CSS, JS - Programmation web basique
* Vue.js - Partie front-end pour rendre la page dynamique
* Node.js - Partie back-end
* MongoDB - Gestion de la base de données
* Git - Partage et mise en ligne des fichiers
* Trello - Répartition des tâches

### A quoi peut servir le projet
Ce projet peut servir à stocker de manière sécurisée ses informations personnelles (mot de passes, numéros de carte de crédit...), avec une interface intuitive et ergonomique pour tous.

## Fonctionnalités
* Créer un compte et s'identifier
* Enregistrer des infos personnelles de type "identifiant - mot de passe" 
* Enregistrer des infos personnelles de type "carte de crédit
* Enregistrer des infos personnelles de type "notes sécurisées" 
* Modification et suppression des données déjà enregistrées
* Indicateur niveau de robustesse pour les mots de passe
 

### A venir
* Connexion par reconnaissance faciale
* Ajouter un mot de passe aux favorils


### Lancer le projet

``` bash
# Lancer le serveur (dossier back-end)
node server.js

# Lancer le site (dossier front-end)
npm install
npm run dev
```

### Mise en place du projet 

Le projet se compose de deux repos.

Un repos front : VueJS
Un repas api: nodeJS

Afin de mettre en place ces deux projets sur votre environnement en local il vous faudra ::

-```Git clone https://github.com/KeyceGroupe7/facepass_front.git && git clone https://github.com/KeyceGroupe7/facepass_back.git```
- Faire un ```npm Install``` a la racine des deux repos.
- Créer un compte mongoDB et créer une base de db.

Une fois la base de donnée crée il vous faudra récupérer la string du cluster du type : 
```@cluster0.xxx.mongodb.net/nomDeLaDB?retryWrites=true&w=majority```

Ensuite récupérer cette string et copier la dans le fichier ```database.js``` et la coller dans le propriété cluster.

Mettre votre username et votre password dans le meme fichier.

Après avoir saisie les informations dans le fichier database.js il vous faudra lancer les serveurs avec la commande 

API : ```node server.js```
FRONT : ```npm run dev ```

### En cas de problème :
supprimer les dossier node_modules et relancer la commande npm i

