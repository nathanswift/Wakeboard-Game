# Wakeboard JS

Fun little JavaScript game where you jump waves and try not to crash!

## 1. wakeboarder - wakeboarder.js

This file runs larger tasks like changing scenes, keeping track of high scores, and different user options. You will also find an "init" method attached to this object, where we load the init scene and game settings.

## 2. scenes - (menu.js, game.js, game-over.js)

Each scene has a corresponding JavaScript file associated with it and every scene (except loading) has a load method.

## 3. loading - loading.js

When you want to change to a different scene, all you have to do is call the "load" method on the "wakeboarder" object.

```js
    // example: how to return to menu
    wakeboarder.load('menu');
```

## 4. main - main.js

And this is where it all starts! In this file you will see the "init" method ran that we define on the "wakerboarder" object in the "wakeboarder.js". 