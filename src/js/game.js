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
    
        for (let index = 0; index < 100; index++) {
            const fish = new Actor()
            fish.graphics.use(Resources.Fish.toSprite())
            fish.events.on("exitviewport", (e) => this.fishLeft(e))
            fish.pos = new Vector(Math.random() * 1280, Math.random() * 720)
            fish.vel = new Vector(Math.random() * -100, Math.random()*100)
            this.add(fish)
        }

        for (let index = 0; index < 5; index++) {
            this.addActor(Resources.Shark.toSprite(), 1000, 10j);
        }

        
    }
    addActor(sprite, xRange, yRange) {
        const actor = new Actor();
        actor.graphics.use(sprite)
        actor.events.on("exitviewport", (e)=> this.fishLeft(e))
        actor.pos = new Vector(Math.random() * 1280, Math.random() * 720)
        actor.vel = new Vector(Math.random() * xRange, Math.random()* yRange)
        this.add(actor)    
    }
    

    fishLeft(e) {
        e.target.pos = new Vector(Math.random()* 1350,Math.random()* 300)
    }
}

new Game()
