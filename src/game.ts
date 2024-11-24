
import Dice from "./util/dice";
import Player from "./util/player";

class GameEnvironment {
    private attacker: Player;
    private defender: Player;
    private dice: Dice;

    constructor(attacker: Player, defender: Player, dice: Dice) {
        this.attacker = attacker;
        this.defender = defender;
        this.dice = dice;
    }

    start(): string {
        let attack_value: number;
        let defend_value: number;
        let attack_dice_value: number;
        let defend_dice_value: number;
        let value_diff: number;
        let turn: boolean;

        // Deciding who goes first based on initial health/attack values
        turn = this.attacker.get_health_attack() > this.defender.get_health_attack();

        let roundCount = 0;
        const maxRounds = 50;

        while (this.attacker.get_health() > 0 && this.defender.get_health() > 0) {

            if (roundCount++ >= maxRounds) {
                // exceding maximum rounds
                break;
            }

            attack_dice_value = this.attacker.roll_dice(this.dice);
            defend_dice_value = this.defender.roll_dice(this.dice);

            console.log(this.attacker.get_health() , this.defender.get_health());

            if (turn) {
                // Attacker's turn
                attack_value = this.attacker.get_attack() * attack_dice_value;
                defend_value = this.defender.get_strength() * defend_dice_value;
            } else {
                // Defender's turn
                attack_value = this.defender.get_attack() * defend_dice_value;
                defend_value = this.attacker.get_strength() * attack_dice_value;
            }

            if (attack_value > defend_value) {
                value_diff = attack_value - defend_value;
                this.defender.set_health(this.defender.get_health() - value_diff);

                // if defender is dead
                if (this.defender.get_health() <= 0) {
                    return "Attacker Wins!";
                }
            } else {

                value_diff = defend_value - attack_value;

                this.attacker.set_health(this.attacker.get_health() - value_diff);
                // if attacker is dead
                if (this.attacker.get_health() <= 0) {
                    return "Defender Wins!";
                }
            }

            // Switching turns
            turn = !turn;
        }

        console.log("completed exec");

        // If loop ends, it's a tie 
        return "It's a Tie!";
    }


}

export default GameEnvironment;
