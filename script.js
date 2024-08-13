let array = [8,6,4,3,2];
let result = findMinimum(array);
console.log(result);

function findMinimum(arr){
    let min = arr[0];
    
    for(i=0; i<arr.length; i++){
        if(arr[i] < min){
        min = arr[i];
    }
    }

  return min;
}