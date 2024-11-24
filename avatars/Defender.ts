import Player from "../src/util/player";

class Defender extends Player {
    // defining the defender values  
    constructor(...defender_data : number[]){
        super("defender" , defender_data[0] , defender_data[1] , defender_data[2]);
    }

}

export default Defender;