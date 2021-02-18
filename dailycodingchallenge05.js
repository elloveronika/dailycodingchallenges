function findOdd(A) {
    
  let odd = A.reduce(function (accumulator , currentValue) {//take test on line 7 
    if (currentValue in accumulator) {
     accumulator[currentValue]++
    }// first index is 20 
    else {
      accumulator[currentValue] = 1
    }
    return accumulator
   },{}) 
  console.log(odd)
  
  for (let value in odd){
    if(odd[value] % 2 !== 0)
    return parseInt(value) //value is a way to refer to the properties //the [] refers to the property value
  }
      
  }       
  //arr.reduce(callback( accumulator, currentValue, [, index[, array]] )[, initialValue])
  
  