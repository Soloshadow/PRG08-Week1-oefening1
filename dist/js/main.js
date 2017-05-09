var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var gameObject = (function () {
    function gameObject(str, elm, x, y) {
        this.div = document.createElement(str);
        elm.appendChild(this.div);
        this.x = x;
        this.y = y;
        this.draw();
        var tekst = "Created a " + str + "!";
        Message.logMessage(tekst);
    }
    gameObject.prototype.draw = function () {
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
    };
    return gameObject;
}());
var Driver = (function (_super) {
    __extends(Driver, _super);
    function Driver(div, x, y) {
        return _super.call(this, 'driver', div, x, y) || this;
    }
    return Driver;
}(gameObject));
var Kart = (function (_super) {
    __extends(Kart, _super);
    function Kart(x, y) {
        var _this = _super.call(this, 'kart', document.body, x, y) || this;
        _this.speed = 3;
        _this.d = new Driver(_this.div, 0, 0);
        return _this;
    }
    Kart.prototype.move = function () {
        this.x = this.x + this.speed;
    };
    return Kart;
}(gameObject));
var Game = (function () {
    function Game() {
        var _this = this;
        this.k = new Kart(200, 200);
        requestAnimationFrame(function () { return _this.gameLoop(); });
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.k.move();
        this.k.draw();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    return Game;
}());
window.addEventListener("load", function () {
    new Game();
});
var Message = (function () {
    function Message() {
    }
    Message.logMessage = function (str) {
        console.log(str);
    };
    return Message;
}());
//# sourceMappingURL=main.js.map