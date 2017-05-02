//1.Reverse a String

function reverseString(str) {
  str = str.split("").reverse().join("");
  return str;
}

reverseString("Greetings from Earth");


//2.Factorialize a Number

function factorialize(num) {
  if(num === 0) {
    return 1;
  }
  return num * factorialize( num - 1);
}

factorialize(5);
