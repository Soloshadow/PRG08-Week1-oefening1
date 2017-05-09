abstract class gameObject {
    div: HTMLElement;
    x: number;
    y: number;

    constructor(str: string,elm:HTMLElement, x: number, y: number) {
        this.div = document.createElement(str);
        elm.appendChild(this.div);

        this.x = x;
        this.y = y;
        this.draw();

        let tekst: string = "Created a " + str + "!";
        Message.logMessage(tekst);
    }

    draw():void{
        this.div.style.transform ="translate(" + this.x + "px," + this.y + "px)";
    }
}