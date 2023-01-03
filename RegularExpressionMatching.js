/**
 * //https://redquark.org/leetcode/0010-regular-expression-matching/
 * Regular Expression Matching
 * given input string s and pattern to match is p,
 * implement regular expression matching with support for '*' & '.' where:
 * '.' - matches any single character
 * '*' - Matches zero or more of the preceding element(same char/element)
 * Matching should consider & cover entire input string not partial(do not stop on first occurrence)
 * Input s = "aa"; p="a"; 
 * OUTPUT - false (a does not match the entire string 'a');
 * Input s = "aa"; p="a*"; 
 * OUTPUT - true (* means zero or more preceding elements will come to match, it may become aa);
 * Input s = "ab"; p=".*"; 
 * OUTPUT - true (.* means zero or more * of any character(.)
 * Both contain lower case letters, it is must that * means previous valid char
*/

function isMatch(s, p) 
{
    const rows = s.length;
    const columns = p.length;
    // Base conditions
    if (rows == 0 && columns == 0) {
        return true;
    }
    if (columns == 0) {
        return false;
    }
    // DP array
    const dp = Array.from({ length: s.length + 1 }, () => [false]);
    console.log('dp',dp);
    // Empty string and empty pattern are a match
    dp[0][0] = true;
    console.log('dp[0][0] = true',dp);
    // Deals with patterns with *
    for (let i = 1; i < columns + 1; i++) {
        if (p[i - 1] === '*') {
            dp[0][i] = dp[0][i - 2];
            console.log('dp[0][i] = dp[0][i - 2];',dp);
        }
        else {
            dp[0][i] = false;
            console.log('dp[0][i] = false;',dp);
        };
    }
    console.log(`rows end, column start`);
    // For remaining characters
    for (let i = 1; i < rows + 1; i++) {
        for (let j = 1; j < columns + 1; j++) {
            if (p[j - 1] === '*') {
                if (p[j - 2] === s[i - 1] || p[j - 2] === '.') {
                    dp[i][j] = dp[i][j - 2] || dp[i - 1][j];
                } else {
                    dp[i][j] = dp[i][j - 2];
                }
                console.log(`p[j - 1] === '*'`, dp);
            } else if (p[j - 1] === s[i - 1] || p[j - 1] === '.') {
                dp[i][j] = dp[i - 1][j - 1];
                console.log(`p[j - 1] === s[i - 1]`, dp);
            } else {
                dp[i][j] = false;
                console.log(`dp[i][j] = false;`, dp);
            }
        }
    }
    console.log(`dp last`,dp, rows, columns);
    console.log(`dp[rows][columns]`,dp[rows][columns]);
    return dp[rows][columns];
};

console.log(isMatch('aab','aa.'));