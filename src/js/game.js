import "../css/style.css";
import {Actor, Engine, Vector, DisplayMode, Resource} from "excalibur";
import {Resources, ResourceLoader} from "./resources.js";
import {Fish} from "./fish.js";
import {Mine} from "./mine.js";
import {Player} from "./player.js";
import {ScaryFish} from "./scaryFish.js";

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
      const mine = new Mine();
      this.add(mine);
    }

    for (let i = 0; i < 50; i++) {
      const fish = new Fish();
      this.add(fish);
    }
    for (let i = 0; i < 10; i++) {
      const scaryFish = new ScaryFish();
      this.add(scaryFish);
    }
  }
}

new Game();
