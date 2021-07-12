function highAndLow(numbers){
    // ...
    
   let thisNum = numbers.split(' ').sort((a, b) => a - b)
    let push = thisNum.shift()
    let pop = thisNum[thisNum.length-1]
    if(numbers.length == 2){
      return `${push} ${push}`
    }else{
  
    
   return  `${pop} ${push}`
   
   }
  
    
  }
  