var arr = ["Pratik", "Sanket", "Nikhil", "Oman", "Oman","Chetan", "Hello", "Chetan", "Hello", "Sanket", "Nikhil"];

var sortArr = [];

const countStr  = arr.filter((item, index) => arr.indexOf(item) === index);
console.log('Removed duplicate array -',countStr);


var resString = "";
var testArr = [];

for(let i = 0; i <arr.length; i++) {  
    count = 1;  
    for(let j = i+1; j <arr.length; j++) {  
        if(arr[i] == arr[j] && arr[i] != ' ') {
            count++;
            if(!testArr.includes(arr[i])){
                testArr.push(arr[i]);
            }
        }
    }
    if(count > 1)
        resString = `${resString} ${arr[i]} ${count}, `;
    else if(!testArr.includes(arr[i]))
        resString = `${resString} ${arr[i]} 1, `;
}

console.log(`Array ${arr} has duplicate element,\n here is the count of each element\n ${resString}`);