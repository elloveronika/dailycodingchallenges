function getAverage(marks){
    //TODO : calculate the downwar rounded average of the marks array
    //have to grab each number of an array
    // then go through each one to add then divide? 
    //basically find the average of the numbers in the array
  let total= 0
  
    for(let i = 0 ; i < marks.length ; i++){
      total += marks[i] / marks.length
    }
    return Math.floor(total)
    
  
  }