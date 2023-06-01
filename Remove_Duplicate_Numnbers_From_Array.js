function removeDuplicates(array) {
  var result = [];

  for (var i = 0; i < array.length; i++) {
    var currentNumber = array[i];
    var isDuplicate = false;

    for (var j = 0; j < result.length; j++) {
      if (currentNumber === result[j]) {
        isDuplicate = true;
        break;
      }
    }

    if (!isDuplicate) {
      result.push(currentNumber);
    }
  }

  return result;
}

// Example usage:
var numbers = [1, 2, 3, 4, 3, 2, 1];
var uniqueNumbers = removeDuplicates(numbers);
console.log(uniqueNumbers);


var a = [1,2,3,1,4,2,5,6];
uniqueArray = a.filter(function(item, pos) {
    return a.indexOf(item) == pos;
});
// console.log('uniqueArray - ', uniqueArray);

var resultArrv = [];
for(let i = 0; i < a.length; i++){
    for(let j = 0; j <= i; j++){
        if(!resultArrv.includes(a[j])){
            resultArrv.push(a[j]);
        }
    }
}
// console.log('resultArrv', resultArrv);
arr = [1,2,3,1,4,2,5,6];
let unique = [];
for (i = 0; i < arr.length; i++) {
    if (unique.indexOf(arr[i]) === -1) {
        unique.push(arr[i]);
    }
}
