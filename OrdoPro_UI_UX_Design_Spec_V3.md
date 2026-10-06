# OrdoPro --- UI/UX Design Specification V3

## Prototype-ready specification --- Windows / Flutter Desktop

**Langue de l'application :** Français\
**Plateforme :** Windows Desktop\
**Produit :** OrdoPro\
**Positionnement :** logiciel de création, réutilisation et impression
d'ordonnances médicales personnalisé pour un médecin.

------------------------------------------------------------------------

# 1. Corrections validées

Cette version remplace les précédentes spécifications sur les points
suivants :

-   Suppression des notifications du Top Bar.
-   Suppression de la date et de l'heure du Top Bar.
-   Suppression des onglets `Template` et `Impression` de la zone
    d'ordonnance.
-   La zone de travail de l'ordonnance reste centrée sur `Aperçu` /
    prévisualisation.
-   Patient : `Nom complet`, `Âge`, `Sexe`.
-   Seul `Nom complet` est obligatoire.
-   Téléphone patient, adresse/localisation et numéro de dossier sont
    supprimés.
-   `Âge` est facultatif. S'il existe, il apparaît sur l'ordonnance sous
    la forme `A : 40 ans`.
-   `Sexe` est facultatif dans le dossier patient. Il peut être affiché
    dans l'interface patient lorsqu'il existe, mais **ne doit pas être
    imprimé sur l'ordonnance**.
-   La prescription contient uniquement :
    -   Médicament
    -   Pathologie
    -   Quantité
    -   Actions
-   Suppression de `Dosage`, `Forme` et `Durée` de l'éditeur
    d'ordonnance.
-   Suppression complète de `Conseils / Instructions`.
-   Suppression du bouton secondaire présent à côté du champ de
    recherche médicament.
-   Recherche médicament + `Ajouter un médicament`.
-   `Enter` sur la recherche permet d'ajouter rapidement un médicament.
-   Un médicament existant peut être modifié dans l'ordonnance.
-   Un médicament non présent dans la base peut être ajouté comme
    médicament personnalisé.
-   Date de l'ordonnance : par défaut aujourd'hui, mais modifiable.
-   Les anciennes ordonnances d'un patient sont accessibles directement
    depuis son workflow.
-   Une ancienne ordonnance peut servir de base à une **nouvelle
    ordonnance**, sans écraser l'ancienne.
-   Suppression de `Ordonnances` comme entrée principale du Sidebar.
-   Ajout de `Ordonnances types`.
-   Suppression de `Historique`.
-   Suppression de `Paramètres`.
-   Suppression du concept `profil connecté / déconnexion`.
-   Le nom du médecin est affiché comme identité fixe du logiciel.
-   Le logiciel est pensé comme une version personnalisée/licenciée pour
    un médecin, et non comme un SaaS multi-médecins.

------------------------------------------------------------------------

# 2. Ce que montrent les ordonnances de référence

Les exemples fournis montrent une réalité importante : une ordonnance
algérienne peut être très personnalisée selon le médecin.

On retrouve notamment :

-   en-tête du cabinet ou du médecin
-   logo
-   nom du médecin
-   spécialité
-   parfois informations en français et en arabe
-   coordonnées du cabinet
-   date
-   nom/prénom du patient
-   âge
-   titre `ORDONNANCE`
-   zone libre de prescription
-   signature
-   cachet
-   parfois numéro professionnel / numéro d'ordre
-   footer avec informations du cabinet

Le produit doit donc séparer deux concepts :

### A. L'éditeur de données

Ce que le médecin saisit dans l'application.

### B. Le document imprimé

La représentation finale de ces données dans un modèle d'ordonnance
personnalisé.

Le modèle imprimé doit pouvoir respecter l'identité visuelle du médecin,
sans rendre l'interface de saisie complexe.

------------------------------------------------------------------------

# 3. Principe UX central

Le programme doit être extrêmement rapide.

Workflow cible :

``` text
Patient
   ↓
Nouvelle ordonnance
   ↓
Rechercher médicament
   ↓
Enter
   ↓
Modifier Pathologie / Quantité si nécessaire
   ↓
Ajouter les autres médicaments
   ↓
Choisir la date
   ↓
Aperçu
   ↓
Imprimer
```

Pour un patient existant :

``` text
Patient
   ↓
Ordonnances précédentes
   ↓
Choisir une ancienne ordonnance
   ↓
Créer une nouvelle ordonnance à partir de celle-ci
   ↓
Date = aujourd'hui
   ↓
Modifier si nécessaire
   ↓
Aperçu
   ↓
Imprimer
```

------------------------------------------------------------------------

# 4. Navigation finale

Sidebar :

``` text
OrdoPro
Votre assistant médical

Accueil
Patients
Ordonnances types
Certificats
Base de médicaments

────────────────────

Dr. Ahmed Benali
Médecin généraliste
```

À supprimer :

-   Ordonnances
-   Historique
-   Paramètres
-   Déconnexion
-   Profil connecté
-   Notifications

Le médecin affiché dans le bas du Sidebar est une information fixe.

------------------------------------------------------------------------

# 5. Top Bar

Top Bar minimaliste.

Contenu possible :

``` text
[Recherche globale............................]
```

Aucun :

-   notification
-   date
-   heure
-   avatar utilisateur
-   bouton de déconnexion

Le Top Bar ne doit pas prendre de place inutilement.

------------------------------------------------------------------------

# 6. Accueil

Objectif : accéder immédiatement aux actions principales.

Header :

``` text
Bonjour, Dr. Ahmed Benali
Que souhaitez-vous faire ?
```

Actions principales :

``` text
[ + Nouveau patient ]
[ + Nouvelle ordonnance ]
[ Ordonnances types ]
[ Certificats ]
```

Bloc de recherche :

``` text
Rechercher un patient...
```

Patients récents :

``` text
Patient                  Dernière ordonnance
Ahmed Benali             05/10/2026
Sara Haddad              02/10/2026
Mohamed Ali              28/09/2026
```

Pas de statistiques complexes dans le MVP.

------------------------------------------------------------------------

# 7. Patient --- création

Modal ou page compacte :

``` text
Nouveau patient

Nom complet *
[...................................]

Âge
[........] ans

Sexe
[ Homme ▼ ]

[Annuler]                    [Créer]
```

Règles :

-   Nom complet : obligatoire.
-   Âge : facultatif.
-   Sexe : facultatif.
-   Pas de téléphone.
-   Pas d'adresse.
-   Pas de numéro de dossier.

Si âge est `null`, rien ne doit être imprimé concernant l'âge.

Si sexe est `null`, rien ne doit être affiché comme valeur de sexe.

------------------------------------------------------------------------

# 8. Patient --- profil

``` text
┌─────────────────────────────────────────────┐
│ Ahmed Benali                                │
│ A : 40 ans                                  │
│ Homme                                       │
│                                             │
│ [Nouvelle ordonnance]                       │
│ [Ordonnances précédentes]                   │
└─────────────────────────────────────────────┘
```

Si l'âge est absent :

``` text
Ahmed Benali
Homme
```

Si le sexe est absent :

``` text
Ahmed Benali
A : 40 ans
```

Si les deux sont absents :

``` text
Ahmed Benali
```

------------------------------------------------------------------------

# 9. Ordonnance --- écran principal

C'est l'écran le plus important.

``` text
┌───────────────────────────────────────────────────────────────┐
│ Nouvelle ordonnance                         Date 05/10/2026   │
├───────────────────────────────────────────────────────────────┤
│ Patient                                                       │
│                                                               │
│ Ahmed Benali                                                  │
│ A : 40 ans                                                    │
│                                                               │
│ [Changer de patient] [Ordonnances précédentes]               │
├───────────────────────────────────────────────────────────────┤
│ Médicaments                                                   │
│                                                               │
│ [ Rechercher un médicament................ ] [Ajouter]        │
│                                                               │
│ Médicament          Pathologie              Quantité  Action  │
│ ───────────────────────────────────────────────────────────── │
│ Doliprane            Fièvre                    20      ✎ 🗑    │
│ Amoxicilline         Infection                 14      ✎ 🗑    │
│ Oméprazole           Gastrite                   7      ✎ 🗑    │
├───────────────────────────────────────────────────────────────┤
│                                                               │
│ [Enregistrer]                       [Aperçu] [Imprimer]       │
└───────────────────────────────────────────────────────────────┘
```

------------------------------------------------------------------------

# 10. Date

La date est toujours initialisée avec la date actuelle.

Exemple :

`05/10/2026`

Elle est modifiable.

UX :

``` text
Date de l'ordonnance
[ 05/10/2026 📅 ]
```

Le champ doit accepter :

-   sélection via calendrier
-   saisie clavier
-   modification d'une date ancienne

------------------------------------------------------------------------

# 11. Recherche médicament

Champ unique :

`Rechercher un médicament...`

Recherche possible par :

-   nom commercial
-   DCI
-   nom partiel

Résultats :

``` text
Doliprane 1000 mg
Paracétamol

Doliprane 500 mg
Paracétamol
```

------------------------------------------------------------------------

# 12. Ajout par Enter

Comportement obligatoire :

``` text
Utilisateur tape :
Doliprane 1000

↓ Enter

Médicament ajouté à la liste.
```

Si un résultat correspond exactement : - ajouter directement.

Si plusieurs résultats : - afficher la liste et permettre la sélection.

Si aucun résultat : - proposer :

``` text
Médicament non trouvé

[Ajouter comme médicament personnalisé]
```

Le médecin peut alors saisir le nom manuellement.

------------------------------------------------------------------------

# 13. Médicament dans l'ordonnance

Chaque ligne contient seulement :

``` text
Médicament
Pathologie
Quantité
Actions
```

Exemple :

``` text
Doliprane 1000 mg | Fièvre | 20 | ✎ 🗑
```

Pas de :

-   dosage supplémentaire
-   forme
-   durée
-   posologie
-   conseils

Ces informations ne font pas partie du modèle de données de l'ordonnance
MVP.

------------------------------------------------------------------------

# 14. Modification d'une ligne

Click sur `✎` :

``` text
Modifier le médicament

Médicament
[ Doliprane 1000 mg ]

Pathologie
[ Fièvre ]

Quantité
[ 20 ]

[Annuler]       [Enregistrer]
```

Un médicament provenant de la base peut être modifié.

Un médicament personnalisé peut également être modifié.

------------------------------------------------------------------------

# 15. Ordonnances précédentes

Depuis le patient :

``` text
Ordonnances précédentes
```

Liste :

``` text
05/10/2026
3 médicaments

21/09/2026
4 médicaments

10/08/2026
2 médicaments
```

Chaque élément :

``` text
[05/10/2026]   3 médicaments
               [Utiliser comme nouvelle ordonnance]
```

------------------------------------------------------------------------

# 16. Réutilisation d'une ancienne ordonnance

Très important :

L'ancienne ordonnance ne doit jamais être écrasée.

Action :

`Utiliser comme nouvelle ordonnance`

Résultat :

``` text
Ancienne ordonnance
       ↓
Copie
       ↓
Nouvelle ordonnance
       ↓
Date = aujourd'hui
```

Le médecin peut ensuite modifier la copie.

Cela conserve l'historique réel.

------------------------------------------------------------------------

# 17. Ordonnances types

Les `Ordonnances types` sont des ensembles préenregistrés de
médicaments.

Exemple :

``` text
Ordonnance type

Fièvre
3 médicaments

Infection
4 médicaments

Gastrite
2 médicaments
```

Ou :

``` text
Rhume
├── Médicament A
├── Médicament B
└── Médicament C
```

Action :

`Utiliser`

Ajoute les médicaments dans l'ordonnance actuelle.

L'utilisateur peut ensuite modifier ou supprimer chaque ligne.

------------------------------------------------------------------------

# 18. Création d'une ordonnance type

``` text
Nouvelle ordonnance type

Nom
[ Fièvre ]

Médicaments

[ Doliprane 1000 mg ]
[ ... ]

Pathologie par défaut
[ Fièvre ]

Quantité
[ 20 ]

[Enregistrer]
```

Les valeurs restent modifiables lorsqu'une ordonnance type est
appliquée.

------------------------------------------------------------------------

# 19. Base de médicaments

La base est indépendante des ordonnances.

Écran :

``` text
Base de médicaments

[ Rechercher un médicament................ ]

Nom                  DCI
Doliprane 1000 mg    Paracétamol
Amoxicilline 1 g     Amoxicilline
Oméprazole 20 mg     Oméprazole
```

Actions :

-   rechercher
-   consulter
-   ajouter si autorisé par le produit
-   modifier si le workflow l'autorise

Important :

Un médicament peut exister dans la base, mais l'ordonnance utilise une
**copie de ses informations nécessaires**.

Ainsi, modifier la base plus tard ne modifie pas automatiquement une
ancienne ordonnance.

------------------------------------------------------------------------

# 20. Certificats

Le module reste disponible mais séparé.

``` text
Certificats

[ Nouveau certificat ]

Certificat médical
Certificat d'aptitude
Certificat de repos
Certificat personnalisé
```

Workflow :

``` text
Patient
↓
Type de certificat
↓
Informations
↓
Aperçu
↓
Imprimer
```

Le design doit rester cohérent avec l'ordonnance.

------------------------------------------------------------------------

# 21. Aperçu imprimable

L'aperçu représente une vraie feuille A4.

Il doit reproduire le style d'une ordonnance réelle, comme les
références fournies.

Structure recommandée :

``` text
┌───────────────────────────────────────────────┐
│ LOGO     DR. AHMED BENALI                    │
│          Médecin généraliste                  │
│          Informations du cabinet             │
│          éventuellement FR + AR              │
├───────────────────────────────────────────────┤
│ Date : 05/10/2026                            │
│ Nom : Ahmed Benali                            │
│ A : 40 ans                                    │
│                                               │
│                 ORDONNANCE                    │
│                                               │
│ 1. Doliprane 1000 mg                          │
│    Fièvre                         20           │
│                                               │
│ 2. Amoxicilline 1 g                           │
│    Infection                      14           │
│                                               │
│                                               │
│                         Signature / Cachet    │
├───────────────────────────────────────────────┤
│ Informations du cabinet / footer             │
└───────────────────────────────────────────────┘
```

Le `Sexe` n'est jamais imprimé ici.

Si `Âge == null`, la ligne `A : ...` est absente.

------------------------------------------------------------------------

# 22. Template imprimé du médecin

Même si `Template` n'est plus une section de l'application, le document
doit évidemment avoir un modèle graphique.

Le modèle est une **configuration interne du produit**, pas un écran
principal destiné au médecin.

Il peut contenir :

-   logo
-   nom du médecin
-   spécialité
-   téléphone professionnel
-   adresse professionnelle
-   informations en arabe
-   numéro professionnel / numéro d'ordre si nécessaire
-   signature
-   cachet
-   footer

Le médecin ne doit pas pouvoir changer son identité depuis l'application
dans le MVP.

------------------------------------------------------------------------

# 23. Layout du document

Le document doit être :

-   A4
-   imprimable
-   lisible en noir et blanc
-   compatible avec imprimantes courantes
-   avec marges suffisantes
-   sans éléments UI
-   sans boutons
-   sans éléments décoratifs inutiles

Le résultat final doit ressembler à une vraie ordonnance
professionnelle, pas à une capture d'écran du logiciel.

------------------------------------------------------------------------

# 24. Actions principales

Sur l'écran ordonnance :

### Enregistrer

Sauvegarde la nouvelle ordonnance.

### Aperçu

Affiche le document A4.

### Imprimer

Lance le workflow d'impression.

### Nouvelle ordonnance

Réinitialise le formulaire après confirmation si nécessaire.

------------------------------------------------------------------------

# 25. États importants

## Aucun médicament

``` text
Aucun médicament ajouté

Recherchez un médicament pour commencer.
```

## Recherche sans résultat

``` text
Aucun médicament trouvé.

[Ajouter comme médicament personnalisé]
```

## Enregistrement

``` text
Enregistrement...
```

## Enregistré

``` text
Ordonnance enregistrée.
```

## Erreur

``` text
Impossible d'enregistrer l'ordonnance.
Veuillez réessayer.
```

------------------------------------------------------------------------

# 26. Raccourcis clavier

``` text
Ctrl + N       Nouvelle ordonnance
Ctrl + S       Enregistrer
Ctrl + P       Imprimer
Ctrl + K       Recherche
Enter          Ajouter / sélectionner médicament
Esc            Fermer une fenêtre
Delete         Supprimer la ligne sélectionnée
```

------------------------------------------------------------------------

# 27. Design System

## Couleurs

Primary 900: `#0F2F57` Primary 800: `#153E70` Primary 700: `#1856A0`
Primary 600: `#1769D2` Primary 500: `#2F80ED` Primary 100: `#EAF3FF`
Primary 50: `#F5F9FF`

Background: `#F6F8FB` Surface: `#FFFFFF` Border: `#DDE5EF`

Text primary: `#172033` Text secondary: `#5E6B7D` Text muted: `#8A95A5`

Success: `#16845B` Warning: `#B7791F` Error: `#D64545`

------------------------------------------------------------------------

# 28. Typography

Application UI :

-   Inter
-   Segoe UI fallback

Ordonnance imprimée : - une police très lisible et professionnelle - le
titre `Ordonnance` peut avoir une typographie plus classique - éviter
les polices décoratives pour les données médicales

------------------------------------------------------------------------

# 29. Spacing

Base : 4 px

``` text
4
8
12
16
20
24
32
40
48
```

Page padding : 24 px\
Card padding : 20 px\
Input height : 40--44 px\
Button height : 40--44 px

------------------------------------------------------------------------

# 30. Components

Créer des composants réutilisables :

``` text
AppShell
Sidebar
TopBar
PageHeader
SearchField
PrimaryButton
SecondaryButton
PatientSelector
PatientCard
MedicineSearch
MedicineRow
MedicineEditor
TreatmentPresetCard
PrescriptionEditor
PrescriptionPreview
CertificateEditor
HistoryList / PreviousPrescriptionList
EmptyState
LoadingState
ErrorState
SuccessToast
ConfirmationDialog
DateField
```

------------------------------------------------------------------------

# 31. Architecture UX

Le design doit distinguer clairement :

``` text
Patient
    ↓
Patient Data

Medicine Database
    ↓
Medicine Selection

Prescription
    ↓
Prescription Snapshot

Printed Document
    ↓
A4 Template
```

Une modification de la base de médicaments ne doit pas réécrire les
anciennes ordonnances.

------------------------------------------------------------------------

# 32. Prototype --- écrans à concevoir

Le prototype UI/UX doit contenir au minimum :

1.  Accueil
2.  Liste des patients
3.  Création d'un patient
4.  Profil patient
5.  Nouvelle ordonnance
6.  Recherche médicament
7.  Ajout médicament personnalisé
8.  Modification d'un médicament
9.  Ordonnances précédentes
10. Réutilisation d'une ancienne ordonnance
11. Ordonnances types
12. Création d'une ordonnance type
13. Base de médicaments
14. Certificats
15. Aperçu A4
16. État vide
17. État erreur
18. Confirmation de suppression
19. Impression

------------------------------------------------------------------------

# 33. Objectif final du prototype

Le prototype doit permettre de comprendre immédiatement :

**Comment le médecin passe de son patient à une ordonnance imprimée.**

Il ne faut pas commencer par dessiner toutes les pages secondaires.

Priorité :

``` text
Patient
↓
Ordonnance
↓
Recherche médicament
↓
Pathologie
↓
Quantité
↓
Anciennes ordonnances
↓
Ordonnance type
↓
Aperçu A4
↓
Impression
```

------------------------------------------------------------------------

# 34. Règle UX fondamentale

Le médecin ne doit jamais avoir l'impression de remplir un logiciel
administratif.

Il doit avoir l'impression de **remplir rapidement une ordonnance
numérique**.

Chaque élément de l'interface qui ne sert pas directement ce workflow
doit être considéré comme candidat à la suppression.

------------------------------------------------------------------------

# 35. Acceptance checklist

-   [x] Interface française
-   [x] Windows desktop
-   [x] Patient minimal
-   [x] Nom obligatoire
-   [x] Âge facultatif
-   [x] Sexe facultatif
-   [x] Sexe absent de l'impression
-   [x] Âge absent si null
-   [x] Format âge imprimé `A : XX ans`
-   [x] Médicament
-   [x] Pathologie
-   [x] Quantité
-   [x] Modification médicament
-   [x] Médicament personnalisé
-   [x] Ajout par Enter
-   [x] Date automatique
-   [x] Date modifiable
-   [x] Ordonnances précédentes
-   [x] Copie d'une ancienne ordonnance
-   [x] Ordonnances types
-   [x] Base de médicaments
-   [x] Certificats
-   [x] Aperçu A4
-   [x] Impression
-   [x] Médecin fixe
-   [x] Pas de logout
-   [x] Pas de profil utilisateur
-   [x] Pas de notifications
-   [x] Pas de date/heure dans Top Bar
-   [x] Pas de téléphone patient
-   [x] Pas de localisation patient
-   [x] Pas de numéro de dossier
-   [x] Pas de conseils/instructions
-   [x] Pas de dosage/form/durée dans l'éditeur MVP
