class Dice {
    spin(): number {
        return Math.floor(Math.random() * 6) + 1; // Simulate a dice roll (1-6)
    }
}

export default Dice;
