(
    createNonRepeatingSubString = (string) =>{
        var strlng = string.length;
        var resultSubStrCount = 0;
        var resultSubArr = [];
        for(var i = 0; i < strlng; i++){
            var attended = [];
            for(var j = i; j < strlng; j++){
                if(attended.includes(string[j])) break;
                if(!attended.includes(string[j])) {
                    resultSubStrCount = Math.max(resultSubStrCount, j-i+1);
                    attended.push(string[j]);
                }                
            }
            resultSubArr.push(attended.join(''));
        }
        console.log(`Generating substring with no repeating char and max length of substring from given parent string - \n --> given string \t ${string} \n --> Max length of substring is - \t ${resultSubStrCount} \n --> strings can form are - \t ${resultSubArr.filter(item => (item.length==resultSubStrCount) ? item : '')}`);
    }
)('chetan korde patil name taken for testing');
//Complexity of this code is O(n^2) ---> 2 for loops are used
