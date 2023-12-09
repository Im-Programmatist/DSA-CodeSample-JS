const findOcc = (given, findItem) =>{
    let count = 0;
    for (let i = 0; i < given.length; i++) {
        if(findItem == given[i])
            count++;
    }
    console.log(`Occurrence of ${findItem} in ${given} is - ${count}`);
}
findOcc([1,2,4,3,1,5,3,6,2,,5,8,9,10],1);
findOcc('abcadebcsdggbefgee','g');

//New logic with array of with char and it's count 
(
    countCharItem = (string) =>{
        var res = [];
        for (let i = 0; i < string.length; i++){
            let count = 0;
            for (let j = 0; j < string.length; j++){
                if(string[i]== string[j] && i > j){
                   break;
                }
                if(string[i]== string[j] && string[j] !== " "){
                    count++;
                }
            }
            if(count > 0){
                console.log(string[i], count);
                !res.includes(string[i]) ? res.push(`${string[i]}-${count}`) : '';
            }
        }
        console.log(res);
    }
)('this is string');

function mostFrequent(arr) {
    let maxCount = -1,
      maxItem = null,
      count = {};
    for (let i of arr) {
      if (!count.hasOwnProperty(i)) count[i] = 1;
      else count[i] += 1;
      if (count[i] > maxCount) {
        maxCount = count[i];
        maxItem = i;
      }
    }
    return maxItem;
  }
  const freq = mostFrequent([1, 3, 2, 1, 4, 1,3,2,3,4,2,5,2]);
  console.log(`Max frequency of elements: ${freq}`);
