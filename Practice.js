console.log([1,2,3,1,4,5,3,6,2,7,9,6].filter((item, index, arr)=>arr.indexOf(item) == index));

var str  = "hello world";
console.log(str.split('').sort());

function sortString(str){
    var arr = str.split('');
    var tmp;
    for(var i = 0; i < arr.length; i++){
      for(var j = i + 1; j < arr.length; j++){
        /* if ASCII code greater then swap the elements position*/
        if(arr[i] > arr[j]){
          tmp = arr[i];
          arr[i] = arr[j];
          arr[j] = tmp;
        }
      }
    }
    return arr.join('');
}
console.log(sortString('hello world'));