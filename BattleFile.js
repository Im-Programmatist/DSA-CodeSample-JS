
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
