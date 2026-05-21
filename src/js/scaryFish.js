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
      this.actions.moveTo(new Vector(this.pos.x - 300, this.pos.y + 200, 200));
    }
  }
}
