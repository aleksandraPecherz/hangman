import {
    Game
} from './Game.js';
const game = new Game(
    document.getElementById("letters"),
    document.getElementById("category"),
    document.getElementById("word"),
    document.getElementById("output")
);
game.start();
document.getElementById("newGame").addEventListener("click", () => game.restart())