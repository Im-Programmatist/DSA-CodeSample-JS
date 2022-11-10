const givenArr = [7, 3, 5, 4, 8];

(factorial = (givenArr)=>{
    let sumOfFactorials = 0;
    for (let index = 0; index < givenArr.length; index++) {
        let factorialOfItem = 1;
        for (let i = 1; i <= givenArr[index]; i++) {
            factorialOfItem *= i;
        }
        sumOfFactorials+=factorialOfItem;
    }
    console.log(`The sum of the factorial of array ${givenArr} element is ${sumOfFactorials}`);
})(givenArr);