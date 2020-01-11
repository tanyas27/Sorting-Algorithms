function countSort(arr){
   var sortA = [arr.length];
   var k = Math.max(...arr);
   var AuxA = new Array(k);
   for(let i=0; i<=k ; i++){
       AuxA[i] =0;
   }
   for(let i =0; i <arr.length ; i++)
   {
       AuxA[arr[i]]++;
   }
   let j = 0;
   for(let i=0; i <=k ;i++){
       temp = AuxA[i];
       while(temp--){
            sortA[j]= i ;
            j++ ;
       }

   }
   return sortA ;
}
let ar = [5,2,9,5,2,3,5];
console.log(countSort(ar));