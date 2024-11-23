
import GameEnvironment from "./game";
import get_players from "./util/hooks/get_players";

(async () => {
    
    const players = await get_players();

    let game = new GameEnvironment(players.player_1, players.player_2);

    game.start();

})();



