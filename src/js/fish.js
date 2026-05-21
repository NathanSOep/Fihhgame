import {Actor, Engine, Vector} from "excalibur";
import {Resources, ResourceLoader} from "./resources";
import {Player} from "./player";

export class Fish extends Actor {
  posX;
  posY;
  velX;
  velY;
  sprite;
  constructor() {
    super({width: 100, height: 100});
    this.pos = new Vector(50, 100);
    this.sprite = Resources.Fish.toSprite();
    this.graphics.use(this.sprite);

    this.posX = Math.random() * 800;
    this.posY = Math.random() * 600;

    this.velX = Math.random() * -90 - 30;
    this.velY = Math.random() * 100 - 50;

    this.pos = new Vector(this.posX, this.posY);
    this.vel = new Vector(this.velX, this.velY);

    this.events.on("exitviewport", (e) => this.fishLeft(e));
  }

  fishLeft(e) {
    this.vel = new Vector(Math.random() * -90 - 30, Math.random() * 100 - 50);
    this.pos = new Vector(
      this.scene?.engine.drawWidth + 100 + 50 * Math.random(),
      this.posY,
    );
  }
  onCollisionStart(engine, other) {
    if (other.owner instanceof Player) {
      this.kill();
    }
  }
}
