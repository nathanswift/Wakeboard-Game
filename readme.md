# Wakeboard JS

Fun little JavaScript game where you jump waves and try not to crash!

## 1. wakeboarder - wakeboarder.js

This file runs larger tasks like:

- Changing scenes
- Keeping track of high scores
- Different user options. 

The "init" method is found here (where we load the initial scene).

## 2. scenes - (menu.js, game.js, game-over.js)

Each scene has a contains a load method that is ran when passed to the loader.

## 3. loading - loading.js

To change scenes, call the "load" method on the "wakeboarder" object.

```js
    // example: how to return to menu
    wakeboarder.load('menu');
```

## 4. main - main.js

And this is where it all starts!