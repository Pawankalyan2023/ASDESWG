
class Dice {

    public spin(){
        return (Math.floor(Math.random() * 10) % 6) + 1;
    }

}

export default Dice ;
