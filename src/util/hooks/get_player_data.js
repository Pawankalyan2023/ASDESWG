"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function get_player_data() {
    var playerInputs = {
        player1: [],
        player2: []
    };
    var count = 0;
    return new Promise(function (resolve) {
        process.stdin.setEncoding('utf-8');
        var currentPlayer = playerInputs.player1;
        console.log("Enter numbers for Player 1 (press Enter after each number, and type 'done' to finish):");
        process.stdin.on('data', function (data) {
            var input = data.toString().trim();
            if (!isNaN(Number(input))) {
                currentPlayer.push(Number(input));
            }
            else {
                console.log("Invalid input. Please enter a valid number.");
                return;
            }
            if (count === 2) {
                if (currentPlayer === playerInputs.player1) {
                    currentPlayer = playerInputs.player2;
                    console.log("Enter numbers for Player 2 (press Enter after each number, and type 'done' to finish):");
                }
                else {
                    process.stdin.pause();
                    resolve(playerInputs);
                }
                count = 0;
            }
            else {
                count += 1;
            }
        });
    });
}
exports.default = get_player_data;
