const str = "abcdcba abcdcba"
const chk = str.split("").reverse().join("");
console.log("string is palindrome ", str === chk )