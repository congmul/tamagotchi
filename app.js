function DigitalPal(name, pet){
    this.name = name;
    this.pet = pet;
    this.hungry = false;
    this.spleepy = false;
    this.bored = true;
    this.age = 0;
    this.outside = false;
    this.houseCondition = 100;
}

DigitalPal.prototype = {
    feed(){
        if(this.hungry){
            console.log("That was yummy!");
            this.hungry = false;
            this.spleepy = true;
        }else{
            console.log("No thanks! I'm full.");
        }
    },
    sleep(){
        if(this.spleepy){
            console.log("Zzzzzzzz");
            this.spleepy = false;
            this.bored = true;
            this.increaseAge();
        }else{
            console.log("No way! I'm not tired.");
        }
    },
    play(){
        if(this.bored){
            console.log("Yay! Let's play!");
            this.bored = false;
            this.hungry = true;
        }else{
            console.log("Not right now. Later?");
        }
    },
    increaseAge(){
        this.age += 1;
        console.log("Happy Birthday to me! I am "+this.age+" old!");
    },
    sound(){
        if(this.pet === "dog"){
            console.log("Woof! Woof!");
        }else{
            console.log("Meow! Meow!");
        }
    },
    goOutside(){
        if(!this.outside){
            console.log("Yay! I love the outdoors!");
            this.outside = true;
            this.sound();
        }else{
            console.log("We're already outside though...");
        }
    },
    goInside(){
        if(this.outside){
            console.log("Do we have to? Fine...");
            this.outside = false;
            this.hungry = true;
        }else{
            console.log("I'm already inside...");
        }
    },
    destroyFurniture(){
        if(this.houseCondition <= 0){
            return;
        }
        this.houseCondition -= 10;
        console.log("MUAHAHAHAHAHA! TAKE TAHT FURNITURE!");
        this.bored = false;
        this.sleepy = true;
    },
    buyNewFurniture(){
        this.houseCondition += 50;
        console.log("Are you sure about that?");
    }
}

module.exports = DigitalPal;