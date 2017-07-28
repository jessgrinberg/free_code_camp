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
