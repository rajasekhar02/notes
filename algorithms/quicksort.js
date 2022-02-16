let quicksort = function (a, l, r){
  if(l>=r) return;
  let pivotIndex = partition(a,l,r);
  
  quicksort(a,l,pivotIndex-1);
  quicksort(a,pivotIndex,r);
}

let partition = function(a,l,r){
let nextValueToSwap = l;
let pivot = a[r];
for(let iter=l;iter<r;iter++){
  if(a[iter]<=pivot){
    [a[nextValueToSwap],a[iter]] = [a[iter],a[nextValueToSwap]];
    nextValueToSwap++;
  }
}
 [a[nextValueToSwap],a[r]] = [a[r],a[nextValueToSwap]];
 return lastValueLessThanPivot++;
}
let arr = [2,3,1,4,5,3];
quicksort(arr,0,arr.length-1);
console.log(arr)
