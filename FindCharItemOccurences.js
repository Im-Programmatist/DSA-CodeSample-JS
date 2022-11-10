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