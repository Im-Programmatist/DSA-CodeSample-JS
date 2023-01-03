function multiplyElementsOfArrayOfArrays(arrOfArrs) {
    let multiplicationVar = 1;
    // Only change code below this line
    for (let i = 0; i < arrOfArrs.length; i++) {
      for (let j = 0; j < arrOfArrs[i].length; j++) {
        multiplicationVar *= arrOfArrs[i][j];
      }
    }
    // Only change code above this line
    return multiplicationVar;
  }
  
multiplyElementsOfArrayOfArrays([[1,2],[3,4],[5,6,7]]);