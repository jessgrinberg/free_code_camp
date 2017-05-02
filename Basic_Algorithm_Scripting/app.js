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

//4.Find the Longest Word in a String


function findLongestWord(str) {
  return str.split(" ").sort(function (a, b) { return b.length - a.length; })[0].length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");

    //or FCC solution
    function findLongestWord(str) {
      var words = str.split(' ');
      var maxLength = 0;

      for (var i = 0; i < words.length; i++) {
        if (words[i].length > maxLength) {
          maxLength = words[i].length;
        }
      }

      return maxLength;
    }
