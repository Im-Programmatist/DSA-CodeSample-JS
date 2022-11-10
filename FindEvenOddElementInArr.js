const givenArr = [1, 2, 4, 3, 1, 5, 3, 6, 2, 5, 8, 9, 10];

const findEven = (givenArr) => {
    return givenArr.filter(item => item%2==0);
}
console.log(`${givenArr} Even Elements: ${findEven(givenArr)}`);

const findOdd = (givenArr) => {  
    return givenArr.filter(item => item%2!==0);
}
console.log(`${givenArr} Odd Elements : ${findOdd(givenArr)}`);

//With sorted and removed duplicate

const findEvenSort = (givenArr) => {
    return [...new Set(givenArr.filter(item => item%2==0))];
}
console.log(`Sorted ${givenArr} Even Elements: ${findEvenSort(givenArr)}`);

const findOddSort = (givenArr) => {  
    return [...new Set(givenArr.filter(item => item%2==1))];
}
console.log(`Sorted ${givenArr} Odd Elements: ${findOddSort(givenArr)}`);