(
    longestPalindromicSubstring = (string)=>{
        let lenString = string.length;
        let resultStr = "";
        let resultStrArr = [];
        let counter  = 0;
        do{
            resultStr+=string[counter];
            for(let i = 0; i < resultStr.length; i++){
                if(resultStr.slice(i) === resultStr.slice(i).split('').reverse().join('')){
                    if(!resultStrArr.includes(resultStr) && resultStr.slice(i).length > 1)
                        resultStrArr.push(resultStr.slice(i));
                }
            }
            counter++;
        }while(counter < lenString);
        console.log(`Longest palindromic substring get from string ${string} is - ${resultStrArr}`);

        /** Searched Logic **/
        let n = string.length; // calculating size of string
        if (n < 2)
            return n; // if string is empty then size will be 0.
                    // if n==1 then, answer will be 1(single
                    // character will always palindrome)
  
        let maxLength = 1,start=0;
        let low, high;
        for (let i = 0; i < n; i++) {
            low = i - 1;
            high = i + 1;
            while ( high < n && string[high] == string[i]) //increment 'high'                                
                high++;
        
            while ( low >= 0 && string[low] == string[i]) // decrement 'low'                
                low--;
        
            while (low >= 0 && high < n && string[low] == string[high]){
                low--;
                high++;
            }
    
            let length = high - low - 1;
            if (maxLength < length) {
                maxLength = length;
                start=low+1;
            }
        }
        console.log(`low ${low} high ${high} start ${start} maxLength ${maxLength}`);
        console.log(`Longest palindrome substring is:${string.substring(start,maxLength+start)} & max length is ${maxLength}`);
    }
)('abcddcb');