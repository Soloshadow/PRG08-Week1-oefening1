/// <reference path="gameobject.ts" />

class Driver extends gameObject{
                  
    constructor(div:HTMLElement, x: number, y: number) {
        super('driver', div, x, y);
        //console.log('this is the driver class');
    }
}