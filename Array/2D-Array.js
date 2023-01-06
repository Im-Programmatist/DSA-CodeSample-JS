https://medium.com/@kategorychnost/essential-coding-interview-questions-with-javascript-part-ii-99e62af06a88

/**
  To create an empty 2D-Array with given size (adaptable for more dimensions):
  let array = Array(rows).fill().map(() => Array(columns));
  Prefilled 2D-Array:
  let array = Array(rows).fill().map(() => Array(columns).fill(0));
  E.g.:
  Array(2).fill().map(() => Array(3).fill(42));
  // Result:
  // [[42, 42, 42],
  //  [42, 42, 42]]

  *** Actually we are making an matrix with mxn 
  const m = 4;
  const  n = 5;

  1. Array Literal Notation - 
  let arr = new Array(m); // create an empty array of length n
  for (var i = 0; i < m; i++) {
    arr[i] = new Array(n); // make each element an array
  }

  2. The Array.from() method
  let arr = Array.from(Array(m), () => new Array(n));

  3. The Array.prototype.map()Method
  let arr = Array(m).fill().map(() => Array(n));

*/

function mineSweeper(bombs, numRows, numCols) {
    let field = [];
    for (let i = 0; i < numRows; i++) {
      field[i] = [];
      for (let j = 0; j < numCols; j++) {
        field[i][j] = 0;
      }
    }
    for (let bomb of bombs) {
      let rowB = bomb[0];
      let colB = bomb[1];
      field[rowB][colB] = -1;
      for (let i = rowB - 1; i <= rowB + 1; i++) {
        for (let j = colB - 1; j <= colB + 1; j++) {
          if (
            0 <= i &&
            i < numRows &&
            0 <= j &&
            j < numCols &&
            field[i][j] !== -1
          ) {
            field[i][j] += 1;
          }
        }
      }
    }
    return field;
}
const res = mineSweeper([[2,3],[2,1]], 4, 4);
console.log(res);