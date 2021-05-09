// game.ts
import { Engine } from 'excalibur'

// Create an instance of te engine.
// I'm specifying that the game be 800 pixels wide by 600 pixels tall.
// If no dimensions are specified the game will be fullscreen.
const game = new Engine({
    width: 800,
    height: 600,
})

// TODO build game

// Start the engine to begin the game.
game.start()
