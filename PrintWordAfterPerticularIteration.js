let str1 = "Hello";
let str2 = "World";
//Print hello on multiple of 3 and world on multiple of 5 up to 50
for (let i = 0; i < 50; i++) {
    if(i%3==0){
        console.log(str1);
    }
    else if(i%5==0){
        console.log(str2);
    }
    else{
        console.log(i);
    }
}

//print hello after each 3 iteration and world after each 5 iteration up to 100
for(let i=0; i < 100; i++){
    let h = i%3 === 0 ,
    w = i%5 === 0 ;
    console.log(`${h?(w?str1+str2:str2):w?str1:i}`);
}

