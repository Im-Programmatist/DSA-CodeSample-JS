const givenArr = [1, 2, 4, 3, 1, 5, 3, 6, 2, 5, 8, 9, 10];
const givenStr = "abcadebcsdggbefgee";

(getOccNoOfCharInString = (givenStr) => {
    let resultString = "";
    for( let i = 0 ;i < givenStr.length ;i++)
    {   
        let count = 0;
        for (let j = 0; j < givenStr.length; j++) {
        if (givenStr[i] == givenStr[j] && i > j) {
            break;
        }
        if (givenStr[i] == givenStr[j]) {
            count++;
        }
        }
        if (count > 0) 
            resultString += givenStr[i]+count+" ";
    }
    console.log(`String Result2 of char occurrence in string with count is ${resultString}`);

    let string = givenStr.split("").sort().join("");
    let counter = 1;
    let resultString2 = "";
    for (let i = 0; i < string.length; i++) {
        if (string[i] == string[i + 1]) {
            counter++;
        } else {
            resultString2 += string[i]+counter+" ";
            counter = 1;
        }
    }
    console.log(`String Result2 of char occurrence in string with count is ${resultString2}`);

})(givenStr);

(getOccNoOfItemInObject = (givenArr) =>{
    let resultObj = {};
    for (const element of givenArr) {
        if (resultObj[element]) {
            resultObj[element] += 1;
        } else {
            resultObj[element] = 1;
        }
    }
    console.log(`Result of array item occurrence from ${givenArr} is - ${JSON.stringify(resultObj)}`);
})(givenArr);


for (let i = 0; i < givenArr.length; i++) {
    if (string[i] == string[i + 1]) {
        counter++;
    } else {
        resultString2 += string[i]+counter+" ";
        counter = 1;
    }
}