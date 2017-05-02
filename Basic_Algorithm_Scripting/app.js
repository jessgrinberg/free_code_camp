//1.Reverse a String

function reverseString(str) {
  str = str.split("").reverse().join("");
  return str;
}

reverseString("Greetings from Earth");
