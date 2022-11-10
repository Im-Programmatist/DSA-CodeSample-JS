var str = "hello world! I am developer";
var resultStr = "";
for(let i = str.length-1; i >= 0; i--) {
    resultStr += str.charAt(i);
}
console.log('result of reverse string :',resultStr);

var resultWorldRev = "";

console.log('Reverse string with words:', str.split(' ').reverse().join(' '));
console.log('Reverse string sentence with words:', str.split(' ').map((word)=>word.split('').reverse().join('')).join(' '));


const givenArr  = ['a', 'b', 'c', 'd', 'e'];

(reversArray = (givenArr)=>{
    const reversArr  = [];
    for(let i=givenArr.length-1; i>=0; i--)
    {
        reversArr.push(givenArr[i]);
    }
    console.log(`Array reverse is ${reversArr}`);
    console.log(`Array reverse is ${givenArr.reverse()}`);
})(givenArr);