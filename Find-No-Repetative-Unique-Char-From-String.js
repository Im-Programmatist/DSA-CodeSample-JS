/* Find-No-Repetative-Unique-Char-From-String */

const str = "aabbceedrrtwdd";
let out = 0;
let inner = 0;
for(let i = 0; i< str.length; i++){
  let count = 0;
  out++;
  for(let j = 0; j< str.length; j++){
      inner++;
        if(str[i]===str[j]){
            count++;
        }
    }
    if(count == 1){
        console.log(str[i], count);
    }
}
console.log(out, inner);

let result = "";

for (let i = 0; i < str.length; i++) {
    out++;
  let isUnique = true;
  for (let j = 0; j < str.length; j++) {
      inner++;
    if (i !== j && str[i] === str[j]) {
      isUnique = false;
      break;
    }
  }
  if (isUnique) {
    result += str[i];
  }
}

console.log(result);
console.log(out, inner);
