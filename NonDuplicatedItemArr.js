/* 
Write a function to find non-repetitive numbers, that are only once in a given array.
Input: [2, 3, 4, 3, 3, 2, 4, 9, 1, 2, 5, 5]
Output: [9, 1]
*/
const arr =  [2, 3, 4, 3, 3, 2, 4, 9, 1, 2, 5, 5]

const getNonDuplicatedValues = (arr) => 
    arr.filter((item,index) => {
      arr.splice(index,1)
      const unique = !arr.includes(item)
      arr.splice(index,0,item)
      return unique
})
console.log("Non duplicated values: " , ...getNonDuplicatedValues(arr))

const len = arr.length
let result = [];
for(var i=0; i<len; i++){
    for(var j=0; j<len; j++){
        if(i === j)
            continue;
        if(arr[i] === arr[j])
            break;
    }
    if (j === len) {
        result.push(arr[i]);
    }
}
console.log(result);


var uniq = [];
for (var i = 0; i < arr.length; i++) {
  for (var j = 0; j < arr.length; j++) {
    if (arr[i] == arr[j] && i != j) break;
    else if (j == arr.length - 1) uniq.push(arr[i])
  }
}
console.log(uniq)

var array = [-1, 2, 5, 6, 2, 9, -1, 6, 5, -1, 3],
unique = array.filter((v, i) => array.indexOf(v) === array.lastIndexOf(v));

console.log(unique);