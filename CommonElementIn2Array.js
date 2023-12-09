(
    commonElementIn2Array = (arr1, arr2)=>{
        let resArr = [];
        for(let i=0; i<arr1.length; i++){
            for(let j=0; j<arr2.length; j++){
                if(arr1[i] == arr2[j] && !resArr.includes(arr1[i]))
                    resArr.push(arr1[i]);
            }
        }
        console.log(`Result Array 1 - `,resArr);

        var p1 = 0, p2 = 0, resArr2 = [];
        while(p1 < arr1.length && p2 < arr2.length) {
            if(arr1[p1]==arr2[p2]){
                resArr2.push(arr1[p1]);
                p1++;p2++;
            }
            else if(arr1[p1]>arr2[p2]){
                p2++;
            }else{
                p1++;
            }
        }
        console.log('Result Array 2 - ',resArr2);
    }
)([1,2,3,4,5,6],[5,6,7,8,9,10,4]);