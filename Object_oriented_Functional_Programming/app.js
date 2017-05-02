//1. Declare JavaScript Objects as Variables
var car = {
  "wheels":4,
  "engines":1,
  "seats":5
};

var motorBike = {
  "wheels": 2,
  "engines": 1,
  "seats": 2
};

//2.Construct JavaScript Objects with Functions
//use capital word to make it clear it is a constructor
var Car = function() {
  this.wheels = 4;
  this.engines = 1;
  this.seats = 5;
};

var MotorBike = function() {
  this.wheels = 2;
  this.engines = 1;
  this.seats = 1;
};

//3.Make Instances of Objects with a Constructor Function
var Car = function() {
  this.wheels = 4;
  this.engines = 1;
  this.seats = 5;
};

var myCar = new Car();
myCar.nickname = "mumu";

//4.Make Unique Objects by Passing Parameters to our Constructor
var Car = function(wheels, seats,engines) {
  this.wheels = wheels;
  this.seats = seats;
  this.engines = engines;
};

var myCar = new Car(4,4,1);

//5.Make Object Properties Private

var Car = function() {
  // this is a private variable
  var speed = 10;

  // these are public methods
  this.accelerate = function(change) {
    speed += change;
  };

  this.decelerate = function() {
    speed -= 5;
  };

  this.getSpeed = function() {
    return speed;
  };
};

var Bike = function() {
  var gear = 0;

  this.getGear = function() {
     return gear;
  };

  this.setGear = function(set) {
     gear = set;
  };

};

var myCar = new Car();

var myBike = new Bike();
