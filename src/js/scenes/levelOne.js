import {Color, Label, Scene} from "excalibur";
import {Player} from "../player";
import {Mine} from "../mine";
import {Fish} from "../fish";
import {ScaryFish} from "../scaryFish";

export class levelOne extends Scene {
  scoreLabel;
  onInitialize(engine) {
    this.scoreLabel = new Label({
      color: Color.Yellow,
      text: "Score: 0",
      z: 10,
    });
    this.add(this.scoreLabel);
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
