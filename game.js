"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dice_1 = require("./util/dice");
var GameEnivronment = /** @class */ (function () {
    function GameEnivronment(attacker, defender) {
        this.attacker = attacker;
        this.defender = defender;
        this.dice = new dice_1.default();
    }
    GameEnivronment.prototype.start = function () {
        var attack_value;
        var defend_value;
        var current_health;
        var attack_dice_value;
        var defend_dice_value;
        var value_diff;
        var turn;
        turn = this.attacker.get_health_attack() > this.defender.get_health_attack();
        while (this.attacker.get_health() > 0 && this.defender.get_health() > 0) {
            attack_dice_value = this.attacker.roll_dice(this.dice);
            defend_dice_value = this.defender.roll_dice(this.dice);
            if (turn) {
                attack_value = this.attacker.get_attack() * attack_dice_value;
                defend_value = this.defender.get_strength() * defend_dice_value;
            }
            else {
                attack_value = this.defender.get_attack() * defend_dice_value;
                defend_value = this.attacker.get_strength() * attack_dice_value;
            }
            if (attack_value > defend_value) {
                current_health = this.defender.get_health();
                value_diff = attack_value - defend_value;
                try {
                    this.defender.set_health(current_health - value_diff);
                }
                catch (error) {
                    console.log("A Wins...");
                    return null;
                }
            }
            else {
                current_health = this.attacker.get_health();
                value_diff = defend_value - attack_value;
                try {
                    this.attacker.set_health(current_health - value_diff);
                }
                catch (error) {
                    console.log("B Wins...");
                    return null;
                }
            }
            turn = !turn;
        }
        console.log("Tie...");
    };
    return GameEnivronment;
}());
exports.default = GameEnivronment;
