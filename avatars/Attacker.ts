import Player from "../util/player";

class Attacker extends Player {

    constructor(...attacker_data : number[]){
        super("attacker", attacker_data[0] , attacker_data[1] , attacker_data[2]);
    }

}

export default Attacker;