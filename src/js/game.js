import "../css/style.css";
import {Actor, Engine, Vector, DisplayMode, Resource} from "excalibur";
import {Resources, ResourceLoader} from "./resources.js";
import {ScaryFish} from "./scaryFish.js";
import {Fish} from "./fish.js";
import {Mine} from "./mine.js";
import {Player} from "./player.js";

export class Game extends Engine {
  constructor() {
    super({
      width: 800,
      height: 600,
      maxFps: 60,
      displayMode: DisplayMode.FitScreen,
    });
    this.start(ResourceLoader).then(() => this.startGame());
  }

  startGame() {
    console.log("start de game!");
    const player = new Player();
    this.add(player);
    for (let i = 0; i < 3; i++) {
      this.add(new Mine());
    }

    for (let i = 0; i < 50; i++) {
      this.add(new Fish());
    }
    for (let i = 0; i < 10; i++) {
      this.add(new ScaryFish());
    }
  }
}

new Game();
