

var arr = ["Pratik", "Sanket", "Nikhil", "Oman", "Oman","Chetan", "Hello", "Chetan", "Hello", "Sanket", "Nikhil"];
var sortArr = [];
const countStr  = arr.filter((item,
    index) => arr.indexOf(item) === index);
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

const a = ['g', 'a', 'b', 'c', 'd', 'e', 'f', 'a', 'a', 'c', 'e', 'g']
var resSort = [];
let stringSort = '';
for(let i = 0; i < a.length; i++){
    let count = 0;
    for(let j = 0; j < a.length; j++){
        if(a[i]==a[j] && i>j){
            break;
        }
        if(a[i]==a[j]){
            count++;
        }
        if(a[i]==a[j] && !resSort.includes(a[i])){
            resSort.push(a[i]);
        }
    }
    if(count>0){
        stringSort = stringSort+` ${a[i]}${count}`;
        console.log(`The element ${a[i]} is repeated in ${count} times.`);
    }      
}
console.log(resSort);
console.log(stringSort);

