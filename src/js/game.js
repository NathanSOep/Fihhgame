import "../css/style.css";
import {Actor, Engine, Vector, DisplayMode, Resource} from "excalibur";
import {Resources, ResourceLoader} from "./resources.js";
import {ScaryFish} from "./scaryFish.js";
import {Fish} from "./fish.js";
import {Mine} from "./mine.js";
import {Player} from "./player.js";
import {StartScene} from "./scenes/startScene.js";
import {levelOne} from "./scenes/levelOne.js";

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
    this.addScene("start", new StartScene());
    this.addScene("levelOne", new levelOne());

    this.goToScene("start");
  }
}

new Game();
