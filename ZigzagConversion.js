/**
 * Zigzag Conversion
 * The string "HELLOWORLD!" is written in a zigzag pattern on a given number of rows 

    ---> "HELLOWORLD!" = 11 char - 3 row ===> 5 col
    H   O   L 
    E L W R D 
    L   O   !
    ---> Result would be  - combine char in first row then second and last third
        - HOL
        ELWRD
        LO!

    ---> "HELLOWORLDCOME!" = 15 char - 4 row ===> 7 col
    H    O    M
    E  W R  O E
    L O  L C  !
    L    D
     ---> Result would be  - combine char from all rows
        - HOM
          EWROE
          LOLC!
          LD

    "HELLOWORLDCOME!" = 15 char - 6 row ===> 6 col
    H             C 
    E         D   O
    L      L      M
    L   R         E
    O O           !
    W
*
*/

(zigZagPattern = (gvString, gvRow) => {
    let gvStrLen = gvString.length;
    
    if (gvRow == 1) {
        console.log(`it would be same string if row is 1...😃`);
        return;
    }
    let strArray = gvString.split("");

    // Create an array of strings for all n rows
    let resultArray = new Array(gvRow);
    console.log(`initial result array - ${resultArray}`);
    for (let i = 0; i < gvRow; i++) {
        resultArray[i] = "";
    }
    console.table(`initial result array - \n`);
    console.table(resultArray);
    // Initialize index for
    // array of strings arr[]
    let row = 0;
    let down = true; // True if we are moving
    // down in rows, else false
    // Traverse through
    // given string
    for (let i = 0; i < gvStrLen; ++i) {
        // append current character
        // to current row
        resultArray[row] += strArray[i];
        // If last row is reached,
        // change direction to 'up'
        if (row == gvRow - 1) {
            down = false;
        }
        // If 1st row is reached,
        // change direction to 'down'
        else if (row == 0) {
            down = true;
        }
        // If direction is down,
        // increment, else decrement
        if (down) {
            row++;
        } else {
            row--;
        }
    }
    // Print concatenation
    // of all rows
    console.table(`result array - \n`);
    console.table(resultArray);
    for (let i = 0; i < gvRow; ++i) {
        console.log(`i in for - ${i}`);
        console.log(`${resultArray[i]}`);
    }
})("HELLOWORLD!", 4);
