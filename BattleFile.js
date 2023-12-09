const array1 = [1,2,4,3,5]
const array2 = [1,3,6,9,0,7,5]
const result = [];
for(let i = 0; i < array1.length; i++){
    for(let j = 0; j < array2.length; j++){
        if(array1[i] === array2[j] && !result.includes(array1[i])){
            result.push(array1[i]);
        }
    }
}
console.log(result);

function findOcc(arr, item){
    let count = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] === item){
            count++;
        }
    }
    console.log("occurance of "+ item + " is "+ count);
}

findOcc([1,2,4,3,1,5,3,6,2,5,5,8,9,10],5)

var dupArr = ["Pratik", "abc", "xyz", "", " ", "Sanket", "Sanket", "Nikhil", "Oman", "Oman","Chetan", "Hello", "Chetan", "Hello", "Sanket", "Nikhil"];
const dupResult = new Set();
const testRes = []
for(let i=0; i<= dupArr.length; i++){
    let count = 1
    for(let j=i+1; j<= dupArr.length; j++){
        if(dupArr[i] === dupArr[j]){
            count++
        }
    }
    if(count > 1 && !testRes.includes(dupArr[i])){
        dupResult.add(dupArr[i]);
        testRes.push(dupArr[i]);
        console.log(`duplicate name in arra - ${dupArr[i]} & it's count is ${count}`);
    } 
}
console.log([...dupResult], testRes);

// var sortArr = [1,3,5,2,15,6,7,8,10,11,16,14,12,13];
var sortArr = ["pratik", "abc", "xyz", "ijkl", "pqr", "sanket"];
var temp;
for( let i = 0; i < sortArr.length; i++ ){
    for (let j = 0; j < sortArr.length; j++){
        if(sortArr[i] < sortArr[j]){
            temp = sortArr[i]
            sortArr[i] = sortArr[j]
            sortArr[j] = temp
        }
    }
}
console.log("sorted arr - "+ sortArr);

var arr = ["apple", "mango", "apple", "orange", "mango", "mango"];
for (var i=0; i<arr.length; i++) {

}