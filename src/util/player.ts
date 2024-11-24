import Dice from "./dice";

class Player {
    protected name: string;
    protected health: number;
    protected strength: number;
    protected attack: number;

    constructor(name: string, health: number, strength: number, attack: number) {
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.attack = attack;
    }

    get_health(): number {
        return this.health;
    }

    get_name(): string {
        return this.name;
    }

    get_strength(): number {
        return this.strength;
    }

    get_attack(): number {
        return this.attack;
    }

    get_health_attack(): number {
        return this.health + this.attack;
    }

    set_health(value: number): void {
        this.health = value;
    }

    roll_dice(dice: Dice): number {
        return dice.spin();
    }
}

export default Player;
