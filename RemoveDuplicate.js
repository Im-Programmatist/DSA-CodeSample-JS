const givenArr = ["a","b","c","a","d","e","f","b","c"];//[1, 2, 4, 3, 1, 5, 3, 6, 2, 5, 8, 9, 10];
const givenStr = "abcadebcsdggbefgee";

(removeDuplicateCharStr = (givenStr) => {
    let resArr = [];
    for( let i = 0 ;i < givenStr.length ;i++)
    {
        if (resArr.includes(givenStr[i])) {
            continue; 
        }
        else{
            resArr.push(givenStr[i]);
        }
    }
    console.log(`String from ${givenStr} removed duplicate char : ${resArr.join('')}`);

})(givenStr);

(removeDuplicateItemEntryArr = (givenArr) =>{
    console.log(`Result of array removing duplicate from ${givenArr} is - 
        ${givenArr.filter((item, index)=>givenArr.indexOf(item) === item)}`
    );

    const resArr =[];
    for( let i = 0 ;i < givenArr.length ;i++)
    {
        if (resArr.includes(givenArr[i])) {
            continue;
        }
        else{
            resArr.push(givenArr[i]);
        }
    }
    console.log(`For - Result of array removing duplicate from ${givenArr} is - ${resArr}`);

})(givenArr);


var arr = ["apple", "mango", "apple",
            "orange", "mango", "mango"];
function removeDuplicates(arr) {
    return arr.filter((item,
        index) => arr.indexOf(item) === index);
}
console.log(removeDuplicates(arr));

function removeDuplicatesUsingSet(arr) {
    return [...new Set(arr)];
}
console.log('Remove duplicate element in array',givenArr, removeDuplicatesUsingSet(givenArr));
console.log('Remove duplicate element in string',givenStr, [...new Set(givenStr.split(''))].join(''));