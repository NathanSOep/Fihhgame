import {Actor, Keys, Vector} from "excalibur";
import {Resources} from "./resources";
import {Fish} from "./fish";
import {Mine} from "./mine";
import {ScaryFish} from "./scaryFish";

export class Player extends Actor {
  movementSpeed;
  score;
  constructor() {
    super({width: 100, height: 100});
    this.movementSpeed = 500;
    this.score = 0;
  }
  onInitialize(engine) {
    this.graphics.use(Resources.Shark.toSprite());
    this.pos = new Vector(engine.drawWidth / 2, engine.drawHeight / 2);
    this.on("collisionstart", (event) => this.hitSomething(event));
  }

  hitSomething(event) {
    if (event.other.owner instanceof Mine) {
      this.kill();
      event.other.owner.kill();
    }
    if (event.other.owner instanceof ScaryFish) {
      event.other.owner.actions.moveTo(300, -300, 200);
      event.other.owner.velX = Math.random() * -90 - 30;
      event.other.owner.velY = Math.random() * 100 - 50;
    }
  }
  onPreUpdate(engine) {
    let xspeed = 0;
    let yspeed = 0;
    if (engine.input.keyboard.isHeld(Keys.A)) {
      xspeed = -this.movementSpeed;
    }
    if (engine.input.keyboard.isHeld(Keys.D)) {
      xspeed = this.movementSpeed;
    }
    if (engine.input.keyboard.isHeld(Keys.S)) {
      yspeed = this.movementSpeed;
    }
    if (engine.input.keyboard.isHeld(Keys.W)) {
      yspeed = -this.movementSpeed;
    }

    this.vel = new Vector(xspeed, yspeed);
  }
}
