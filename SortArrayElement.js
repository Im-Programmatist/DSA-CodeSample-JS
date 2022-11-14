var arr = [1,3,5,2,15,6,7,8,10,11,16,14,12,13];
var tmp;
for (let i = 1; i < arr.length; i++){
    for(let j = 0; j < i; j++){
        if(arr[i] > arr[j]){
            tmp = arr[i];
            arr[i] = arr[j];
            arr[j] = tmp;
        }
    }
}
console.log('Sorted array is Descending -', arr);

var arr2 = [1,3,5,2,15,6,7,8,10,11,16,14,12,13];
var temp2;
for (let i = arr2.length; i >= 0; i--){
    for(let j = arr2.length-1; j > i; j--){
        if(arr2[i] > arr2[j]){
            temp2 = arr2[i];
            arr2[i] = arr2[j];
            arr2[j] = temp2;
        }
    }
}
console.log('Sorted array is Ascending -', arr2);
//Same above logic with different way
var arr3 = [1,3,5,2,15,6,7,8,10,11,16,15,14,12,13];
var tmp3;
for (let i = 1; i < arr3.length; i++){
    for(let j = 0; j < i; j++){
        if(arr3[i] < arr3[j]){
            tmp3 = arr3[i];
            arr3[i] = arr3[j];
            arr3[j] = tmp3;
        }
    }
}
console.log('Sorted array is Ascending -', arr3);

var str  = "hello world";
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
console.log("String alphabetically ordered:- ",arr.join(''));
