# Guide de Déploiement Netlify - OrdoPro V3

Ce projet est 100% prêt pour être déployé sur **Netlify** afin d'être testé par le client / médecin.

---

## Option 1 : Déploiement en 10 secondes par Glisser-Déposer (Netlify Drop)
*Méthode recommandée : instantanée, ne nécessite aucune commande ni compte GitHub.*

1. Ouvrez dans votre navigateur : **[https://app.netlify.com/drop](https://app.netlify.com/drop)**
2. Ouvrez le dossier du projet dans le Finder de votre Mac :
   `/Users/macbookair/flutter2/ordopro`
3. **Glissez-déposez le dossier `prototype`** directement dans le cercle de la page Netlify.
4. Votre site est déployé en 5 secondes avec une URL publique en HTTPS (ex: `https://ordopro-v3-demo.netlify.app`).
5. Vous pouvez renommer le sous-domaine dans les paramètres Netlify (*Site configuration > Change site name*).

---

## Option 2 : Déploiement direct via le Terminal (Netlify CLI)

Exécutez simplement cette commande dans votre terminal :

```bash
npx -y netlify deploy --dir=prototype --prod
```

1. Netlify vous demandera de vous connecter (*Authorize in browser*).
2. Choisissez *Create & configure a new project*.
3. Entrez un nom de site (ex: `ordopro-v3-medical`).
4. Votre lien direct de production s'affiche dans le terminal !

---

## Option 3 : Déploiement automatique via GitHub / GitLab

Si vous poussez ce répertoire sur GitHub :
1. Créez un nouveau dépôt sur GitHub et poussez le code :
   ```bash
   git init
   git add .
   git commit -m "feat: OrdoPro V3 prototype ready for client"
   git branch -M main
   git remote add origin <VOTRE_URL_GITHUB>
   git push -u origin main
   ```
2. Sur **[Netlify](https://app.netlify.com)** : *Add new site > Import an existing project > GitHub*.
3. Netlify détecte automatiquement le fichier [`netlify.toml`](file:///Users/macbookair/flutter2/ordopro/netlify.toml) présent à la racine :
   * **Publish directory** : `prototype`
   * **Build command** : *(vide / statique)*
4. Cliquez sur **Deploy site**.

---

## Fichiers de configuration inclus

* [`netlify.toml`](file:///Users/macbookair/flutter2/ordopro/netlify.toml) : Configuration racine Netlify avec dossier de publication `prototype`, redirections SPA et en-têtes HTTP de sécurité.
* [`prototype/_redirects`](file:///Users/macbookair/flutter2/ordopro/prototype/_redirects) : Règle de redirection fallback pour Netlify Drop.
* [`prototype/_headers`](file:///Users/macbookair/flutter2/ordopro/prototype/_headers) : En-têtes de sécurité et types MIME pour les fichiers statiques.
* [`prototype/index.html`](file:///Users/macbookair/flutter2/ordopro/prototype/index.html) : En-têtes Open Graph, Favicon médical SVG et bannière d'orientation pour les médecins ouvrant le lien sur smartphone.
