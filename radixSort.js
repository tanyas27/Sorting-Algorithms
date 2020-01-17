function countSort(arr, digits){
    var sortA = [arr.length];
    let exp = 10 ** digits ;
    let maxElatD = arr.reduce((prev,item) => Math.max(prev,item%exp),0 );
    
    var AuxA = new Array(maxElatD);
    for(let i=0; i<=maxElatD ; i++){
        AuxA[i] =0;
    }
    for(let i =0; i <arr.length ; i++)
    {
        AuxA[arr[i]%exp]++;
    }
    for(let i=1; i<=maxElatD ; i++){
        AuxA[i] += AuxA[i-1];
    }
    for(let i=0; i <arr.length ;i++)
    {
       sortA[AuxA[arr[i]%exp]-1]= arr[i] ;
       AuxA[arr[i]%exp]-- ;
         
    }
    return sortA ;
 }

function radixSort(arr){
    let max = Math.max(...arr) ;
    let sortAr = new Array(arr.length);
    let digits = String(max).split('').length;
    for(let i=1;i<=digits;i++){
      sortAr = countSort(arr,i);     
    }
    return sortAr ;
}
 let arr = [121, 432, 564, 23, 1, 45, 788];
 console.log(radixSort(arr));