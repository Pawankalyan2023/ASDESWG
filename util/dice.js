"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dice = /** @class */ (function () {
    function Dice() {
    }
    Dice.prototype.spin = function () {
        return (Math.floor(Math.random() * 10) % 6) + 1;
    };
    return Dice;
}());
exports.default = Dice;
