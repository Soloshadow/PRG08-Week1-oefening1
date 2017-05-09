/// <reference path="gameobject.ts" />
class Kart extends gameObject {

    //private div:HTMLElement;
    private speed:number;
    d: Driver;
            
    constructor(x: number, y: number) {
        super('kart', document.body, x, y);
        this.speed = 3;

        this.d = new Driver(this.div, 0,0);

        //console.log('this is the kart class');
    }

    public move(){
        this.x = this.x + this.speed;
        
    }
    
 
}