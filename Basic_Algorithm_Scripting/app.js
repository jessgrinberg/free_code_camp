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


//3. Check for Palindromes

function palindrome(str) {

  str = str.replace(/[^0-9a-z]/gi, '').toLowerCase();
  if (str == str.split('').reverse().join('')) {
    return true;
  } else {
    return false;
  }
}

palindrome("eye to 8 A.Tnd me");


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


//4.Title Case a Sentence

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


//6.Return Largest Numbers in Arrays

function largestOfFour(arr) {
  // You can do this!
  var largestArray = [];
  for (var i=0; i<arr.length; i++) {
    var largest = 0;
    for (var j=0; j< arr[i].length; j++) {
      if (arr[i][j]>largest) {
        largest = arr[i][j];
      }
    }
    largestArray[i] = largest;
  }
  return largestArray;
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


//7. Confirm the Ending

function confirmEnding(str, target) {
  return (str.substr(-target.length) === target);
}

confirmEnding("Bastian", "n");


//8.Repeat a string repeat a string
function repeatStringNumTimes(str, num) {
  var result = '';
  for(var i=0; i<num; i++) {
    result += str;
  }
  return result;
}

repeatStringNumTimes("abc", 3);


//9.Truncate a string

function truncateString(str, num) {
  // Clear out that junk in your trunk
  var result ='';
  if(str.length>num && num >3) {
    result += str.slice(0, num-3) + '...';
  } else if ( str.length>num && num <= 3){
    result += str.slice(0, num) + '...';
  } else {
    result += str;
  }
  return result;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);


//10.Chunky Monkey

function chunkArrayInGroups(arr, size) {
  var result = [];
  for (var i=0; i<arr.length; i+=size) {
    result.push(arr.slice(i, i+size));
  }
  return result;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);


//11.Slasher Flick

function slasher(arr, howMany) {
  // it doesn't always pay to be first
  return arr.slice(howMany);
}
slasher([1, 2, 3], 2);

//12. Mutation


function mutation(arr) {
 var first = arr[0].toLowerCase().split("");
 var second = arr[1].toLowerCase().split("");

 var count = 0;
 for( var i=0; i<second.length; i++) {
   if (first.indexOf(second[i]) > -1) {
      count ++;
   }
 }

 if (count === second.length) {
     return true;
 } else {
    return false;
 }
}

mutation(["Hello", "hey"]);


//13. Falsy Bouncer


function bouncer(arr) {
  return arr.filter(Boolean);
}

bouncer([7, "ate", "", false, 9]);


//14. Seek and Destroy

function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments);
  args.splice(0,1);
  return arr.filter(function(element) {
    return args.indexOf(element) === -1;
  });

}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);


//14.Where do I belong

function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  arr.push(num);
  arr.sort(function(a, b){
      return a-b
  });
  return arr.indexOf(num);
}

getIndexToIns([40, 60,20,30], 50);
