//square every digit 


function squareDigits(num){
  
  const digits = num.toString().split('')
  console.log(digits) 
  const newDigits = digits.map(x => x * x)
  console.log(newDigits)
  const newNewDigits = newDigits.join('')
  console.log(newNewDigits)
    return +newNewDigits
    
  }squareDigits(9119)