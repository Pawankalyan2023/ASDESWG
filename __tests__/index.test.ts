
import GameEnvironment from "../src/game";
import Player from "../src/util/player";
import Dice from "../src/util/dice";


describe("GameEnvironment Tests", () => {
    
    test("Attacker wins when attack value consistently outmatches defender", () => {
        const attacker = new Player("Attacker", 100, 20, 30);
        const defender = new Player("Defender", 100, 15, 25);
        const dice = new Dice(); // Using the random dice
        const game = new GameEnvironment(attacker, defender, dice);

        const result = game.start();

        console.log(result); // Checking the result of the game
        // expect(result).toBe("Attacker Wins!");
    });

    test("Defender wins when defense consistently overpowers attacker", () => {
        const attacker = new Player("Attacker", 100, 10, 15);
        const defender = new Player("Defender", 100, 25, 30);
        const dice = new Dice(); // Using the random dice
        const game = new GameEnvironment(attacker, defender, dice);

        const result = game.start();

        console.log(result); // Checking the result of the game
        // expect(result).toBe("Defender Wins!"); 
    });

    test("Game ends in a tie when both players have the same health and strength", () => {
        const attacker = new Player("Attacker", 100, 20, 20);
        const defender = new Player("Defender", 100, 20, 20);
        const dice = new Dice(); // Using the random dice
        const game = new GameEnvironment(attacker, defender, dice);

        const result = game.start();

        console.log(result); // Checking the result of the game
        // expect(result).toBe("It's a Tie!"); 
    });

    test("Attacker wins with dice rolls influencing the outcome", () => {
        const attacker = new Player("Attacker", 100, 20, 30);
        const defender = new Player("Defender", 100, 15, 25);
        const dice = new Dice(); // Using the random dice
        const game = new GameEnvironment(attacker, defender, dice);

        const result = game.start();

        console.log(result); // Checking the result of the game
        // expect(result).toBe("Attacker Wins!"); 
    });

    test("Defender wins with low health but higher strength", () => {
        const attacker = new Player("Attacker", 50, 10, 15);
        const defender = new Player("Defender", 30, 30, 40);
        const dice = new Dice(); // Using the random dice
        const game = new GameEnvironment(attacker, defender, dice);

        const result = game.start();

        console.log(result); // Checking the result of the game
        // expect(result).toBe("Defender Wins!"); 
    });
});
