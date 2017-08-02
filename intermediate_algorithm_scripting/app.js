//1.Sum All Numbers in a Range
function sumAll(arr) {
    var max = Math.max(arr[0],arr[1]);
    var min = Math.min(arr[0], arr[1]);
    var temp = 0;
    for (var i =min; i<=max; i ++) {
        temp += i;
    }
    document.querySelector('#one').innerHTML = temp;
    return(temp);
}

sumAll([1, 4]);


//2.Diff Two Arrays
function diffArray(arr1, arr2) {
  var newArr = [];

  function onlyInFirst(first,second) {
    // Looping through an array to find elements that don't exist in another array
    for (var i=0; i<first.length; i++) {
      if(second.indexOf(first[i]) === -1) {
        newArr.push(first[i]);
      }
    }
  }
  // Same, same; but different.
  onlyInFirst(arr1,arr2);
  onlyInFirst(arr2,arr1);
  document.querySelector('#two').innerHTML = newArr;
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
