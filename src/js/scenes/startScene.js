import {Color, Label, Scene} from "excalibur";
import {Game} from "../game";

export class StartScene extends Scene {
  /**
   *
   * @param {Game} engine
   */
  onInitialize(engine) {
    const settingsLabel = new Label({
      color: Color.Yellow,
      x: engine.drawWidth / 2,
      y: engine.drawHeight / 2,
      text: "Settings",
    });
    this.add(settingsLabel);
    const levelOneLabel = new Label({
      color: Color.Yellow,
      x: engine.drawWidth / 2,
      y: engine.drawHeight / 2 - 20,
      text: "Level 1",
    });
    this.add(levelOneLabel);
    levelOneLabel.on("pointerdown", () => this.clickHandler());
  }
  clickHandler() {
    this.engine.goToScene("levelOne");
  }
}
