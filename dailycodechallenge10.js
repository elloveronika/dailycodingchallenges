//Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

function fakeBin(arr){
  
    let storage = ''
    
     
   for(let i = 0 ; i < arr.length ; i++){
   if(arr[i] < 5){
      storage += 0//try to find a way to add on to itself
   }else if(arr[i] >= 5){
     storage += 1
   }
    
   } return storage
     }
     //comment look its me wolfie