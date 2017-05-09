/// <reference path="kart.ts"/>
/// <reference path="driver.ts"/>

class Game {
    k:Kart;
    constructor() {
        this.k = new Kart(200, 200);
        requestAnimationFrame(()=>this.gameLoop());
    }

    gameLoop(){
        this.k.move();
        this.k.draw();
        requestAnimationFrame(()=>this.gameLoop());
        //console.log('this is the gameloop');
    }
    
} 


// load
window.addEventListener("load", function() {
    
    new Game();
    
});