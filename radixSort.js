function countSort(arr, n, exp){
    var sortA = new Array(arr.length);
    var AuxA = new Array(10).fill(0);
    
    for(let i =0; i <n ; i++)
    {
        AuxA[(Math.floor(arr[i]/exp))%10]++;
    }
    for(let i=1; i<10 ; i++){
        AuxA[i] += AuxA[i-1];
    }
    for(let i=n-1; i>=0 ;i--)
    {
       sortA[AuxA[(Math.floor(arr[i]/exp))%10]-1]= arr[i] ;
       AuxA[(Math.floor(arr[i]/exp))%10]-- ;
         
    }
    return sortA ;
 }

function radixSort(arr){
    let max = Math.max(...arr) ;
    let sortAr = arr;
    for(let exp = 1; Math.floor(max/exp) > 0; exp *= 10){
      sortAr = countSort(sortAr,sortAr.length,exp);     
    }
    return sortAr;
}
 let arr = [121, 432, 564, 23, 1, 45, 788];
 console.log(radixSort(arr));