
import Attacker from "../../avatars/Attacker";
import Defender from "../../avatars/Defender";
import Player from "../player";
import get_player_data from "./get_player_data";

async function get_players(){

    let players = await get_player_data()
    
    let player_a : Player;
    let player_b : Player;

    if (players.player1[0] > players.player2[0]){
        player_a = new Attacker(...players.player1);
        player_b = new Defender(...players.player2);
    } else {
        player_a = new Attacker(...players.player2);
        player_b = new Defender(...players.player1);
    }

    return {player_1 : player_a , player_2 : player_b};
}

export default get_players;