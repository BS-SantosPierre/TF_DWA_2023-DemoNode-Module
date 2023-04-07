# Demo - Modules

## Initialisation d'un projet node
1. `npm init`
2. `npm install --save-dev nodemon `
3. Ajouter le script `"dev": "nodemon index.js"` dans la section scripts du fichier package.json
4. Enjoy :sparkles:

## Etapes si vous souhaiter lancer ce projet localement
1. Cloner le projet
2. `npm install`
3. `npm run dev`
4. Enjoy :tada:

## Récap Matière - module

### Installer un paquet sur npm

#### Installe dans les dépendance de production

```npm install nanoid```

```npm i nanoid```

#### Installe le paquet dans les dépendance de dev donc non accessible en production

```npm install --save-dev nodemon```

```npm i -D nodemon```

### Exécution des scripts

Si vous avez un un script dans votre packages.json, par exemple 
`"dev": "nodemon index.js"`

Vous pouvez l'éxecuter grâce à la commande suivante:
``` npm run dev ```

Si vous n'avez pas de script mais vous souhaitez exécuter une dépendance installer vous pouvez à ce moment utiliser:
```npx nodemon index.js```

### Export Module

Pour exporter des méthodes dans vos fichiers js vous devez utiliser le mot clé `module.exports` et séléctionner les méthode que vous souhaiter exporter. La méthode `secretMethod` ne sera pas exporter.

```js
  // modules/users.js

  const sayHello = () => {
    console.log('Hello World');
  }
  
  const secretMethod = () => {
    console.log('chuuut !');
  }
  
  module.exports = { sayHello };
```

#### Autres écriture possible tout mettre dans un objet et exporter l'objet

```js
  // modules/users.js
  
  const secretMethod = () => {
    console.log('chuuut !');
  }
  
  const userModule = {
    sayHello: () => {
      console.log('Hello World');    
    } 
  }
  
  module.exports = userModule;
```

### Import Module

Pour importer vos méthode vous pouvez soit importer tout l'objet ou bien juste les méthode nécessaire.

```js
  // index.js
  const user = require('./modules/user.js');
 
  user.sayHello();
```

#### Importer juste une méthode

```js
  // index.js
  const { sayHello } = require('./modules/user.js');
 
  sayHello();
```
