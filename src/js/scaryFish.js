import {Color, Vector} from "excalibur";
import {Fish} from "./fish";
import {Player} from "./player";

export class ScaryFish extends Fish {
  constructor() {
    super();
    this.sprite.tint = Color.Red;
  }

  onCollisionStart(engine, other) {
    if (other.owner instanceof Player) {
      this.flee();
    }
  }
  flee() {
    this.actions.moveBy(new Vector(300, -200), 200);
    this.vel = new Vector(this.velX, this.velY);
  }
}
