/**
 * We are going to find Nth term in geomatric progration series
 * here we need 
 * 1. first term and the(a)
 * 2. ration in between 2 successive terms(r) (divide second term by first term then will get ratio) 
 * 3. Nth term in which we are interested
 * Formula - TN = a1 * r^(N-1)
 */
const prompt = require('prompt');
let nterm;
let series;
prompt.start();
console.log('Enter Series and nth term which you want to find : \n');
prompt.get(['geomatric_progration_series','number', 'first_number', 'ratio'], function (err, result) {
    series = result.geomatric_progration_series.split(/[, ]+/);
    nterm = parseInt(result.number);
    let ratio = series[1]/series[0] || result.ratio;
    let firstN = series[0] || parseInt(result.first_number); 
    console.info(`GP Series given is - ${series}\n`);
    console.info(`Nth Number given is - ${nterm}`);
    console.info(`First term value is ${firstN} & Ration is - ${ratio}`);
    console.log(`The value of ${nterm} is ${firstN * Math.floor(Math.pow(ratio, nterm - 1))}`);
});

// (findNthTerm = () =>{})(); 