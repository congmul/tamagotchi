function DigitalPal(){
    this.hungry = false;
    this.spleepy = false;
    this.bored = true;
    this.age = 0;
    this.outside = false;
    this.houseCondition = 100;
}

DigitalPal.prototype = {
    feed : function(){
        if(this.hungry){
            console.log("That was yummy!");
            this.hungry = false;
            this.spleepy = true;
        }else{
            console.log("No thanks! I'm full.");
        }
    },
    sleep : function(){
        if(this.spleepy){
            console.log("Zzzzzzzz");
            this.spleepy = false;
            this.bored = true;
            this.increaseAge();
        }else{
            console.log("No way! I'm not tired.");
        }
    },
    play : function(){
        if(this.bored){
            console.log("Yay! Let's play!");
            this.bored = false;
            this.hungry = true;
        }else{
            console.log("Not right now. Later?");
        }
    },
    increaseAge : function(){
        this.age += 1;
        console.log("Happy Birthday to me! I am "+age+" old!");
    },
    bark : function(){
        console.log("Woof! Woof!");
    },
    goOutside : function(){
        if(!this.outside){
            console.log("Yay! I love the outdoors!");
            this.outside = true;
            this.bark();
        }else{
            console.log("We're already outside though...");
        }
    },
    goInside : function(){
        if(this.outside){
            console.log("Do we have to? Fine...");
            this.outside = false;
        }else{
            console.log("I'm already inside...");
        }
    },
    meow : function(){
        console.log("Meow! Meow!");
    },
    destroyFurniture : function(){
        if(this.houseCondition <= 0){
            return;
        }
        this.houseCondition -= 10;
        console.log("MUAHAHAHAHAHA! TAKE TAHT FURNITURE!");
        this.bored = false;
        this.sleepy = true;
    },
    buyNewFurniture : function(){
        this.houseCondition += 50;
        console.log("Are you sure about that?");
    }
}

let dog = new DigitalPal();
let cat = new DigitalPal();