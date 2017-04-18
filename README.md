# Tap Room
Tap Room keeps track of keg levels, displays your beers to customers, provides a POS system, and admin crud functionality.

Tap Room Tap is hosted at [Tap Room](https://kegger-cee7b.firebaseapp.com/pos)

## To run Tap Room from a personal computer:

You will need the following properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Angular CLI](https://ember-cli.com/)
* [Bower](https://bower.io/)

## Installation

**Step 1**: Clone this repository to your local computer

```console
git clone https://github.com/Sean-Peterson/tap-room
```

**Step 2**: Install all development and production dependencies from the project root directory

```console
npm install
```

**Step 3**: Create a new file named `api-keys.ts` in the `src/app` directory to include your firebase information in the following format:

```js
  export var masterFirebaseConfig = {
    apiKey: "xxxx",
    authDomain: "xxxx.firebaseapp.com",
    databaseURL: "https://xxxx.firebaseio.com",
    storageBucket: "xxxx.appspot.com",
    messagingSenderId: "xxxx"
  };
```

**Step 4**: Use Angular-CLI to run a local server instance

```console
ng serve
```

**Step 5**: Visit the app at [http://localhost:4200](http://localhost:4200).


## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

Copyright (c) 2017 Sean Peterson & Erica Wright All Rights Reserved.
