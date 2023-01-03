https://medium.com/@kategorychnost/essential-coding-interview-questions-with-javascript-part-ii-99e62af06a88

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