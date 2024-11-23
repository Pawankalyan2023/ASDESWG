import Dice from "./dice";

class Player {
    
    protected name : string ;
    protected health : number ;
    protected strength : number ;
    protected attack : number ;

    constructor(name : string , health : number , strength : number , attack : number){
        this.health = health;
        this.strength = strength;
        this.attack = attack;
        this.name = name;
    }

    public get_health(){
        return this.health;
    }

    public get_name(){
        return this.name;
    }

    public get_strength(){
        return this.strength;
    }

    public get_attack(){
        return this.attack;
    }

    public get_health_attack(){
        return this.attack + this.health
    }

    public set_name(value : string){
        this.name = value;
    }

    public set_health(value : number){

        if (value <= 0){
            throw Error("HealthValueError : value of health cannot be negative.");
        }

        this.health = value;
    }

    public set_strength(value : number){

        if (value < 0){
            throw Error("StrengthValueError : value of strength cannot be negative.");
        }

        this.strength = value;
    }

    public set_attack(value : number){
        
        if (value < 0){
            throw Error("AttackValueError : value of attack cannot be negative.");
        }

        this.attack = value;
    }

    public roll_dice(dice : Dice){
        return dice.spin();
    }

};

export default Player;