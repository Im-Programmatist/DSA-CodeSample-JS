/**
 * Regular Expression Matching
 * given input string s and pattern to match is p,
 * implement regular expression matching with support for '*' & '.' where:
 * '.' - matches any single character
 * '*' - Matches zero or more of the preceding element(same char/element)
 * Matching should consider & cover entire input string not partial(do not stop on first occurrence)
 * Input s = "aa"; p="a" 
 * OUTPUT - false (a does not match the entire string 'a');
 * Input s = "aa"; p="a*" 
 * OUTPUT - true (* means zero or more preceding elements will come to match, it may become aa);
 * Input s = "ab"; p=".*" 
 * OUTPUT - true (.* means zero or more * of any character(.)
 * Both contain lower case latters, it is must that * means previous valid char
*/

(regularExpressionMatching = (num) => {
    for(var i =0; i<3; i ++){
        setTimeout(() => {
            console.log(`i - `, i);
        },0);
        const prom = new Promise((resolve, reject) => {
            resolve('test resolve');
        });
    
        prom.then((res) => {console.log(`1. then`,i);})
        .catch((err) => {console.log(`1. catch`,i);})
        .then(() => {console.log(`2. then`,i);})
        .then(() =>{console.log(`3. then`,i);})
        .catch((err) =>{console.log(`2. catch`,i);})
        console.log(`out i - `, i);
    }

})('aa'); 
