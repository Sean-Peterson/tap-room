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


## Technologies Used
  * **HTML**: Hypertext Markup Language, a standardized system for tagging text files to achieve font, color, graphic, and hyperlink effects on World Wide Web pages.
  * **CSS**: The Cascading Style Sheets Specification is a computer language that is used to write formatting instructions.
  * **JavaScipt**: An object-oriented computer programming language commonly used to create interactive effects within web browsers.
  * **Angular2**: Angular2 is a JavaScript framework for creating web applications.
  * **Typescript**: Typescript is a free and open-source programming language developed and maintained by Microsoft. It is a strict superset of JavaScript, and adds optional static typing and class-based object-oriented programming to the language.
  * **npm**: A NodeJS package manager. You can use it to install node programs. Also, if you use it in development, it makes it easier to specify and link dependencies.


## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

Copyright (c) 2017 Sean Peterson & Erica Wright All Rights Reserved.
