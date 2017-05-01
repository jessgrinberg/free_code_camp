//Hello

/*Hello i am a comment!*/

// Define myName below this line
var myName;

// Setup
var a;
var b = 2;

// Only change code below this line
a = 7;
b = a;

var initializeVar = 9;

// Initialize these three variables
var d;
var e;
var f;

// Do not change code below this line

d = 5;
e = 10;
f = "I am a";

d = d + 1;
e = e + 5;
f = f + " String!";


// Declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;


var sum = 10 + 10;

var difference = 45 - 33;

var product = 8 * 10;

var quotient = 66 / 33;


var increment = 87;

// Only change code below this line
increment++;


var decrement = 11;

// Only change code below this line
decrement --;

var myDecimal = 5.3;
var product = 2.0 * 2.5;
var quotient = 4.4 / 2.0;

var remainder;
remainder = 11 % 3;




var g = 3;
var h = 17;
var i = 12;

// Only modify code below this line

g += 12;
h += 9;
i += 7;


var j = 11;
var k = 9;
var l = 3;

j -= 6;
k -= 15;
l -= 1;

var m = 5;
var n = 12;
var p = 4.6;

m *= 5;
n *= 3;
p *= 10;


var q = 48;
var r = 108;
var s = 33;

// Only modify code below this line

q /= 12;
r /= 4;
s /= 11;



function convertToF(celsius) {
  var fahrenheit;
  // Only change code below this line
  fahrenheit = celsius * (9/5) + 32

  // Only change code above this line
  return fahrenheit;
}

// Change the inputs below to test your code
convertToF(30);


var myFirstName = "Jessica";
var myLastName = "Grinberg"


var myStr = "I am a \"double quoted\" string inside \"double quotes\".";

var mySecondStr = '<a href="http://www.example.com" target="_blank">Link</a>';

var myThirdStr= "FirstLine\n\\SecondLine\\\rThirdLine";

var myConcatenate = "This is the start. " + "This is the end.";

var mySecondConcatenate;
mySecondConcatenate = "This is the first sentence. ";
mySecondConcatenate += "This is the second sentence.";

var myStringName;
var myConstructStr;
myStringName = "Jessica";
myConstructStr = "My name is " + myStringName + " and I am swell!";

var someAdjective;
var myAppendStr = "Learning to code is ";
someAdjective = "amazing";
myAppendStr += someAdjective;

var lastNameLength = 0;
var lastName = "Lovelace";
lastNameLength = lastName.length;

// Setup
var firstLetterOfLastName = "";
var lastName = "Lovelace";
// Only change code below this line
firstLetterOfLastName = lastName[0];

var myStrImmutability = "Jello World";
// Only change code below this line
myStrImmutability = "Hello World";

var lastName = "Lovelace";
// Only change code below this line.
var thirdLetterOfLastName = lastName[2];

var lastName = "Lovelace";
var lastLetterOfLastName = lastName[lastName.length - 1];

var secondToLastLetterOfLastName = lastName[lastName.length -2];


function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  var result = "";
  // Your code below this line

  result = myNoun + " ! He said " + myVerb + " as he jumped into his convertible and " +  myAdverb + " drove off with his " + myAdjective + "."
  // Your code above this line
  return result;
}

// Change the words here to test your function
wordBlanks("dog", "big", "ran", "quickly");

var myArray = ["Jessica", 31];

var myNestArray = [["Jessica",31],["weight",100]];

var myIndexArray = [1,2,3];
// Only change code below this line.
var myData = myIndexArray[0];

var myModifArray = [1,2,3];
myModifArray[0] = 3;

var myMultiArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
// Only change code below this line.
var myData = myMultiArray[2][1];

var myPushArray = [["John", 23], ["cat", 2]];
myPushArray.push(["dog",3]);

var myPopArray = [["John", 23], ["cat", 2]];
var removedFromMyArray = myPopArray.pop();

var myShiftArray = [["John", 23], ["dog", 3]];
var removedFromMyArray = myShiftArray.shift();

var myUnshiftArray = [["John", 23], ["dog", 3]];
myUnshiftArray.shift();
myUnshiftArray.unshift(["Paul",35]);

var myList = [["chocolate bar", 5], ["oatmeal",1],["milk",2],["apples",10],["bananas",3]];


function reusableFunction() {
  console.log("Hi World");
}

reusableFunction();

function functionWithArgs(a,b) {
  console.log(a+b);
}
functionWithArgs(5,10);

// Declare your variable here

var myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5;
}

// Only change code above this line
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}


function myLocalScope() {
  'use strict';
  var myVar = 'foo';

  console.log(myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log(myVar);

// Now remove the console log line to pass the test



// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  var outerWear = "sweater";


  // Only change code above this line
  return outerWear;
}

myOutfit();

function timesFive(num) {
  return num * 5;
}
timesFive(2);


var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7);



function nextInLine(arr, item) {
  // Your code here
  arr.push(item);
  return arr.shift();  // Change this line
}

// Test Setup
var testArr = [1,2,3,4,5];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));


function welcomeToBooleans() {

// Only change code below this line.

return true; // Change this line

// Only change code above this line.
}


function trueOrFalse(wasThatTrue) {
  if(wasThatTrue) {
    return "Yes, that was true" ;
  }
  return "No, that was false";
}

trueOrFalse(false);


function testEqual(val) {
  if (val == 12) {
    return "Equal";
  }
  return "Not Equal";
}

testEqual(12);


function testStrict(val) {
  if (val === 7) {
    return "Equal";
  }
  return "Not Equal";
}
testStrict(7);


function testNotEqual(val) {
  if (val != 99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);


function testStrictNotEqual(val) {

  if (val !== 17) {

    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);



function testGreaterThan(val) {
  if (val > 100) {  // Change this line
    return "Over 100";
  }

  if (val > 10) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);



function testGreaterOrEqual(val) {
  if (val >= 20) {
    return "20 or Over";
  }

  if (val >= 10 ) {
    return "10 or Over";
  }

  return "9 or Under";
}

// Change this value to test
testGreaterOrEqual(10);


function testLessThan(val) {
  if (val < 25 ) {
    return "Under 25";
  }

  if (val < 55 ) {
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);

function testLessOrEqual(val) {
  if (val <= 12 ) {
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24 ) {
    return "Smaller Than or Equal to 24";
  }

  return "25 or More";
}

// Change this value to test
testLessOrEqual(10);


function testLogicalAnd(val) {

  if (val <= 50 && val >= 25) {
      return "Yes";

  }

  return "No";
}

// Change this value to test
testLogicalAnd(10);


function testLogicalOr(val) {

  if (val < 10 || val > 20 ) {
    return "Outside";
  }

  return "Inside";
}

testLogicalOr(15);


function testElse(val) {
  var result = "";

  if (val > 5) {
    result = "Bigger than 5";
  }

  else {
    result = "5 or Smaller";
  }

  return result;
}

// Change this value to test
testElse(4);


function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }

  else if (val < 5) {
    return "Smaller than 5";
  }

  else return "Between 5 and 10";
}

// Change this value to test
testElseIf(7);



function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

// Change this value to test
orderMyLogic(7);



function testSize(num) {
  // Only change code below this line
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else if (num >= 20) {
    return "Huge";
  } else {
      return "Change Me";
  }
}

// Change this value to test
testSize(7);




function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes == 1) {
    return "Hole-in-one!";
  } else if (strokes <= par - 2) {
    return "Eagle";
  } else if (strokes == par - 1) {
    return "Birdie";
  } else if (strokes == par) {
    return "Par";
  } else if (strokes == par + 1) {
    return "Bogey";
  } else if (strokes == par + 2) {
    return "Double Bogey";
  } else if (strokes >= par +3) {
    return "Go Home!";
  }
  return "Change Me";
}

// Change these values to test
golfScore(5, 4);


function caseInSwitch(val) {
  var answer = "";
  // Only change code below this line
  switch (val) {
    case 1:
      return "alpha";
      break;
    case 2:
      return "beta";
      break;

    case 3:
      return "gamma";
      break;

    case 4:
      return "delta";
      break;
  }
   return answer;
}
// Change this value to test
caseInSwitch(1);


function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line
  switch (val) {
  case 'a':
    answer = "apple";
  break;

  case "b":
    answer = "bird";
    break;
  case "c":
    answer = "cat";
    break;
  default:
    answer = "stuff";
    break;

  }
  return answer;
}

// Change this value to test
switchOfStuff(1);



function sequentialSizes(val) {
  var answer = "";
  switch(val) {
    case 1:
    case 2:
    case 3:
       answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
  }

  return answer;
}

sequentialSizes(1);



function chainToSwitch(val) {
  var answer = "";
  switch(val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
      break;
  }
  return answer;
}

// Change this value to test
chainToSwitch(7);



function isLess(a, b) {
  // Fix this code
  return a < b;
}
// Change these values to test
isLess(10, 15);



function abTest(a, b) {
  if (a < 0 || b < 0) {
    return undefined;
  }

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);


var myDog = {
  "name": "Vegas",
  "legs": 4,
  "tails": 1,
  "friends": ["cat","mouse","goldfish"]
};


var testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

var hatValue = testObj.hat;
var shirtValue = testObj.shirt;


var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

var entreeValue = testObj["an entree"];
var drinkValue = testObj["the drink"];


var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

var playerNumber = 16;
var player = testObj[playerNumber];


var myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["Free Code Camp Campers"]
};

myDog["name"] = "Happy Coder";


var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["Free Code Camp Campers"]
};

myDog["bark"] = "woof";

var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["Free Code Camp Campers"],
  "bark": "woof"
};

delete myDog.tails;

var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CS",
      "8T",
      "LP" ],
    "gold": true,
  },
  {
    "artist": "Daft Punk",
    "title": "Get Lucky",
    "release_year": 2013,
    "formats": [
      "CD",
      "LP"
    ]
  }
];


var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

var gloveBoxContents = myStorage.car.inside["glove box"];


var myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

var secondTree = myPlants[1].list[1];


var myArray = [];
for (var i=1; i<=5; i++) {
  myArray.push(i);
}


var myArray = [];

for (var i=1; i<10; i +=2) {
  myArray.push(i);
}


var myArray = [];

for(var i = 9; i > 0; i -= 2) {
  myArray.push(i);
}


var myArr = [ 2, 3, 4, 5, 6];
var total = 0;
for (var i=0; i<myArr.length; i++) {
  total += myArr[i];
}


var myArray = [];
var i = 0;
while (i < 5) {
  myArray.push(i);
  i++
}


function randomFraction() {
  return Math.random();
}


var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}

function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1) + myMin ); // Change this line
}
var myRandom = randomRange(5, 15);


// Setup
var testString = "Ada Lovelace and Charles Babbage designed the first computer and the software that would have run on it.";

// Example
var expressionToGetSoftware = /software/gi;
var softwareCount = testString.match(expressionToGetSoftware).length;

var expression = /and/gi;  // Change this Line

// This code counts the matches of expression in testString
var andCount = testString.match(expression).length;


// Setup
var testString = "There are 3 cats but 4 dogs.";

var expression = /\d+/g;  // Change this line

// This code counts the matches of expression in testString
var digitCount = testString.match(expression).length;


// Setup
var testString = "How many spaces are there in this sentence?";

var expression = /\s+/g;  // Change this line

// This code counts the matches of expression in testString
var spaceCount = testString.match(expression).length;


var testString = "How many non-space characters are there in this sentence?";

var expression = /\S/g;  // Change this line

// This code counts the matches of expression in testString
var nonSpaceCount = testString.match(expression).length;



// Setup
function phoneticLookup(val) {

  var result = "";

  var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  };

  result = lookup[val];

  return result;
}

// Change this value to test
phoneticLookup("charlie");


// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  if (myObj.hasOwnProperty(checkProp)) {
    return myObj[checkProp];
  } else {
    return 'Not Found';
  }
}

// Test your code by modifying these values
checkObj("gift");
