import {Actor, Engine, Vector} from "excalibur";
import {Resources, ResourceLoader} from "./resources";

export class Mine extends Actor {
  posX;
  posY;
  velX;
  velY;
  constructor() {
    super({width: 100, height: 100});
    this.pos = new Vector(50, 100);
  }

  onInitialize(engine) {
    this.graphics.use(Resources.Mine.toSprite());

    this.posX = Math.random() * engine.drawWidth;
    this.posY = Math.random() * engine.drawHeight;

    this.velX = Math.random() * -10 - 10;
    this.velY = Math.random() * 100 - 50;

    this.pos = new Vector(this.posX, this.posY);
    this.vel = new Vector(this.velX, this.velY);

    this.events.on("exitviewport", (e) => this.fishLeft(e));
  }

  fishLeft(e) {
    this.pos = new Vector(
      this.scene?.engine.drawWidth + 100 + 50 * Math.random(),
      this.posY,
    );
  }
}
