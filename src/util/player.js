"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Player = /** @class */ (function () {
    function Player(name, health, strength, attack) {
        this.health = health;
        this.strength = strength;
        this.attack = attack;
        this.name = name;
    }
    Player.prototype.get_health = function () {
        return this.health;
    };
    Player.prototype.get_name = function () {
        return this.name;
    };
    Player.prototype.get_strength = function () {
        return this.strength;
    };
    Player.prototype.get_attack = function () {
        return this.attack;
    };
    Player.prototype.get_health_attack = function () {
        return this.attack + this.health;
    };
    Player.prototype.set_name = function (value) {
        this.name = value;
    };
    Player.prototype.set_health = function (value) {
        if (value <= 0) {
            throw Error("HealthValueError : value of health cannot be negative.");
        }
        this.health = value;
    };
    Player.prototype.set_strength = function (value) {
        if (value < 0) {
            throw Error("StrengthValueError : value of strength cannot be negative.");
        }
        this.strength = value;
    };
    Player.prototype.set_attack = function (value) {
        if (value < 0) {
            throw Error("AttackValueError : value of attack cannot be negative.");
        }
        this.attack = value;
    };
    Player.prototype.roll_dice = function (dice) {
        return dice.spin();
    };
    return Player;
}());
;
exports.default = Player;
