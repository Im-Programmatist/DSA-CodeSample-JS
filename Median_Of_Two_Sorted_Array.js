/**
 * Median of two SORTED arrays
 * Input nums1 = [1,2] nums2 = [3,4] then output would be 2.5 as median and array [1,2,3,4] 
*/

(
    medianOfTwoSortedArray = (numArr1, numArr2) =>{
        
        let resultArray = [];
        let numArr1Length = numArr1.length;
        let numArr2Length = numArr2.length;   
        let totalLengthOfResultArr = numArr1Length + numArr2Length;
        let halfLengthOfResultArr = Math.ceil(totalLengthOfResultArr+1/2);     

        if(totalLengthOfResultArr==0)
            return console.log('Both array are empty!');
        
        //First merged array with sorting on both array 
        //for sorting we can use binary search
        //The binary search is reduce computation complexity by iteration only though half of array. 
        let i = 0 , j = 0, k = 1;
        while(k < halfLengthOfResultArr){
            if(i<numArr1Length && j<numArr2Length){
                if(numArr1[i] == numArr2[j] || numArr1[i]<numArr2[j]){
                    console.log('if if',numArr1[i]);
                    resultArray.push(numArr1[i]);
                    i++;
                }else{
                    console.log('if else',numArr2[j]);
                    resultArray.push(numArr2[j]);
                    j++;
                }
            }
            else if(i>=numArr1Length){
                console.log('else if 1',numArr2[j]);
                resultArray.push(numArr2[j]);
                j++;
            }else if(j>=numArr2Length){
                console.log('else if 2',numArr1[i]);
                resultArray.push(numArr1[i]);
                i++;
            }else{
                console.log('inside else');
            }
            k++;
        }
        console.log(resultArray);
        console.log(`
        ${resultArray[resultArray.length/2]}, ${resultArray[resultArray.length/2-1]}, 
            The median of the results array is ${
                resultArray.length%2==0 ? 
                ((resultArray[resultArray.length/2]+resultArray[resultArray.length/2-1])/2) : 
                (resultArray[Math.ceil(resultArray.length/2)-1])
            }
        `);
       
    }
)([1,2,3,4], [6,7,8]) //Array Must be Sorted

