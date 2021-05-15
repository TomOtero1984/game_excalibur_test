"use strict";
exports.__esModule = true;
// game.ts
var excalibur_1 = require("excalibur");
// Create an instance of te engine.
// I'm specifying that the game be 800 pixels wide by 600 pixels tall.
// If no dimensions are specified the game will be fullscreen.
var game = new excalibur_1.Engine({
    width: 800,
    height: 600
});
// TODO build game
// Start the engine to begin the game.
game.start();
