/**
 * Reverse Integer
 * Input nums1 = 145937; OUTPUT - 739541;
 */
(reverseInteger = (num) => {
    if (isNaN(num)) return console.log(`${num} is not a number`);
    let i =  num.toString().length - 1;
    let strNum = num.toString();
    let resultNum = '';
    while(i>=0) {
        console.info(`${strNum[i]}`);
        resultNum += `${strNum[i]}`;
        i--;
    }
    console.log(`result ${resultNum}`);
})(145937); //Pass number type of parameter to function, we can pass a number encoded as a string
