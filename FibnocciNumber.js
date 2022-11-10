const prompt = require('prompt');
let number = 0;
let n1 = 0, n2 = 1;
let fibonacci = 0;
prompt.start();
prompt.get(['number'], function (err, result) {
    number = parseInt(result.number);
    console.log(`Generated fibonacci number up to ${number} is -\t`);
    for(let i=1; i<=number; i++) {
        console.log(n1);
        fibonacci = n1 + n2;
        n1 = n2;
        n2 = fibonacci;
    }
});
