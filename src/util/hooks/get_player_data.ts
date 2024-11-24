import PlayerInputs from "../types/PlayerInputs";

function get_player_data(
    AHealth: number,
    AStrength: number,
    AAttack: number,
    BHealth: number,
    BStrength: number,
    BAttack: number
): Promise<PlayerInputs> {
    return Promise.resolve({
        player1: [AHealth, AStrength, AAttack],
        player2: [BHealth, BStrength, BAttack],
    });
}

export default get_player_data;
