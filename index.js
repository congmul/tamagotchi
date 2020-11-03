const inquirer = require("inquirer");
const digitalPal = require("./app");
let pet;

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your pet's name?",
      name: "petName"
    },
    {
      type: "list",
      message: "What do you want to feed a dog or cat?",
      name: "pet",
      choices: [
          "dog",
          "cat"
      ]
    }
  ]).then(function(response) {
    console.log(response.petName);
    if (response.pet === "dog") {
        pet = new digitalPal(response.petName, "dog");
    }else {
        pet = new digitalPal(response.petName, "cat");
    }

        play();
        
  });


function play(){
    inquirer
  .prompt([
    {
      type: "list",
      message: "What do you want to do with your pet?",
      name: "toDo",
      choices: [
          "feed",
          "sleep",
          "play",
          "sound",
          "goOutside",
          "goInside",
          "destroyFurniture",
          "buyNewFurniture",
          "EXIT"
      ]
    }
  ]).then(function(response) {
    console.log(response.toDo);
    pet.sound();
    
    if(response.toDo !== "EXIT"){
        play();
    }
  });
}