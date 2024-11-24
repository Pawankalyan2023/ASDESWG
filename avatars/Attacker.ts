import Player from "../src/util/player";

class Attacker extends Player {
    // defining the Attacker values 
    constructor(...attacker_data : number[]){
        super("attacker", attacker_data[0] , attacker_data[1] , attacker_data[2]);
    }

}

export default Attacker;