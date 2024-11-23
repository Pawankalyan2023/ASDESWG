import Player from "../util/player";

class Defender extends Player {

    constructor(...defender_data : number[]){
        super("defender" , defender_data[0] , defender_data[1] , defender_data[2]);
    }

}

export default Defender;