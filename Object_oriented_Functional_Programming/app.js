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
