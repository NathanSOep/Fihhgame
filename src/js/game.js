import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode, Resource } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Game extends Engine {
    
    constructor() {
        super({ 
            width: 1280,
            height: 720,
            maxFps: 60,
            displayMode: DisplayMode.FitScreen
         })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        console.log("start de game!")
        for (let index = 0; index < 150; index++) {
            this.addActor(Resources.Blub.toSprite(), 10, -50)
            
        }
    
        for (let index = 0; index < 100; index++) {
            this.addActor(Resources.Fish.toSprite(), -100, 10)
        }

        for (let index = 0; index < 5; index++) {
            this.addActor(Resources.Shark.toSprite(), 1000, 100);
        }

        
    }
    addActor(sprite, xV, yV) {
        const actor = new Actor();
        actor.graphics.use(sprite)
        actor.events.on("exitviewport", (e)=> this.fishLeft(e))
        actor.pos = new Vector(Math.random() * 1280, Math.random() * 720)
        actor.vel = new Vector(Math.random() * xV, Math.random()* yV)
        this.add(actor)    
    }
    

    fishLeft(e) {
        e.target.pos = new Vector(Math.random()* 1280,Math.random()* 720)
    }
}

new Game()
