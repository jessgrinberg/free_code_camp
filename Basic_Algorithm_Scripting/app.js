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

//5.Find the Longest Word in a String


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


//6.Title Case a Sentence

function titleCase(str) {
 return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

titleCase("I'm a little tea pot");

// Explanation:
// The / Is the beginning of a regex (regular expression).
// The \w looks for all word characters in a string.
// A word character is a character from a-z, A-Z, 0-9,
// including the _ (underscore) character.
// The \S is any character that is NOT a whitespace character.
// The * is a character that says to look for n zero or more times.
// The /g selects each instance.
