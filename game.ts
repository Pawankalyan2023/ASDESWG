import Dice from "./util/dice";
import Player from "./util/player";

class GameEnivronment {

    private attacker: Player;
    private defender: Player;
    private dice: Dice;

    constructor(attacker: Player, defender: Player) {

        this.attacker = attacker;
        this.defender = defender;
        this.dice = new Dice();

    }

    start() {
        let attack_value : number;
        let defend_value : number;
        let current_health : number; 
        let attack_dice_value : number;
        let defend_dice_value : number;
        let value_diff : number;
        let turn : boolean;

        
        turn = this.attacker.get_health_attack() > this.defender.get_health_attack();
        
        while (this.attacker.get_health() > 0 && this.defender.get_health() > 0) {
            
            attack_dice_value = this.attacker.roll_dice(this.dice);
            defend_dice_value = this.defender.roll_dice(this.dice);

            if (turn) {
                attack_value = this.attacker.get_attack() * attack_dice_value;
                defend_value = this.defender.get_strength() * defend_dice_value;
            } else {
                attack_value = this.defender.get_attack() * defend_dice_value;
                defend_value = this.attacker.get_strength() * attack_dice_value;
            }

            if (attack_value > defend_value) {
                
                current_health = this.defender.get_health();
                value_diff = attack_value - defend_value;
                
                try {
                    this.defender.set_health(current_health - value_diff);
                } catch (error){
                    console.log("A Wins...");
                    return null ;
                }

            } else {

                current_health = this.attacker.get_health();
                value_diff = defend_value - attack_value;

                try{
                    this.attacker.set_health(current_health - value_diff);
                } catch (error){
                    console.log("B Wins...");
                    return null;
                }

            }

            turn = !turn;

        }

        console.log("Tie...");
    }
}

export default GameEnivronment;