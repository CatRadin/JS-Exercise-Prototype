/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
    this.name = name;
    this.isFlying = false;
  }
  Airplane.prototype.takeOff = function () {
    this.isFlying = true;
  };
  Airplane.prototype.land = function () {
    this.isFlying = false;
  };
  
  
  /*
  // 👇 COMPLETE YOUR WORK BELOW 👇
  // 👇 COMPLETE YOUR WORK BELOW 👇
  // 👇 COMPLETE YOUR WORK BELOW 👇
  */
  
  /*
    TASK 1
      - Write a Person Constructor that initializes `name` and `age` from arguments.
      - All instances of Person should initialize with an empty `stomach` array.
      - Give instances of Person the ability to `.eat("someFood")`:
          + When eating an edible, it should be pushed into the `stomach`.
          + The `eat` method should have no effect if there are 10 items in the `stomach`.
      - Give instances of Person the ability to `.poop()`:
          + When an instance poops, its `stomach` should empty.
      - Give instances of Person a method `.toString()`:
          + It should return a string with `name` and `age`. Example: "Mary, 50"
  */
  
  //Constructor function to build objects

 function Person(pName, pAge){
  this.name = pName,
  this.age = pAge,
  this.stomach = []
 }

 //prototype that checks if the stomach has less than 10 items and if does then it pushes someFood into the stomach array.
 Person.prototype.eat = function(someFood) {
  if(this.stomach.length < 10){
    this.stomach.push(someFood);
  } else {
  console.log("Go poop!");
  }
}

//this prototype empties the array using .length set to 0
Person.prototype.poop = function(){
this.stomach.length = 0;
}
 
//this prototype creates a string to return with the pName and pAge being passed inside as argument.
Person.prototype.toString = function(){
  return `${this.name} and ${this.age}`;
}
  
  
  
  
  /*
    TASK 2
      - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
      - All instances built with Car:
          + should initialize with an `tank` at 0
          + should initialize with an `odometer` at 0
      - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
      - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
          + Should cause the `odometer` to go up.
          + Should cause the the `tank` to go down taking `milesPerGallon` into account.
      - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
          + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
  */

  //Constructor Function to make objects
 function Car(pModel, milesPerGallon) {
   this.model = pModel,
   this.milesPerGallon = milesPerGallon;
   this.tank = 0,
   this.odometer = 0
 
  }

//prototype that lets me put gallons of gas into the tank of the cars
  Car.prototype.fill = function (gallons){
    this.tank += gallons;
    
  }

//prototype that lets me make the odometer go up and the tank to go down based on the miles per gallon (pMPG) being passed inside.
  
Car.prototype.drive = function(distance){
  //if the distance divided by miles per galon is less tan or equal the tank then I subtract distance divided by miles per gallon and subtract the number from the tank
  if((distance / this.milesPerGallon) <= this.tank ){
    this.tank = this.tank - (distance / this.milesPerGallon);
    this.odometer += distance;
    

    //else the tank is empty and I say that you ran out of fuel
  }else{
    this.odometer = this.tank * this.milesPerGallon;
    this.tank = 0;
    return `I ran out of fuel at ${this.odometer} miles!`
  }
  
}
  
  /*
    TASK 3
      - Write a Baby constructor subclassing Person.
      - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
      - Besides the methods on Person.prototype, babies have the ability to `.play()`:
          + Should return a string "Playing with x", x being the favorite toy.
  */

  // a new subclass constructor of Person! I CALL person to make an object out of baby.
 function Baby(name, age, favoriteToy) {
   Person.call(this, name, age);
   this.favoriteToy = favoriteToy;
  }

  //this is where Baby inherits all of Person's prototypes~! or rather functions!
  Baby.prototype = Object.create(Person.prototype);

//I make a new prototype to use the favorite toy we created in the subclass constructor of Person (Baby) and I return a string using this!
  Baby.prototype.play = function() {
    return `Playing with ${this.favoriteToy}`;
  }
 
  
  /* 
    TASK 4
    In your own words explain the four principles for the "this" keyword below:
    1. Global binding
    2. 
    3. 
    4. 
  */
  
  
  ///////// END OF CHALLENGE /////////

  /* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
    return 'bar';
}

export default{
    foo,
    Person, 
    Car,
    Baby
}