
function sumStr(a,b) {
    //p: two strings a and b are numbers
    //r: the sum of two numbers converted to a string
    //e: "4" + "5" --> "9"
    //p: convert the two strings into nums and when we get the sum we convert back to a string
      
      
    let newa= +a
    console.log(newa)
    let newb= +b
    console.log(newb)
      let sum  = newb + newa 
      console.log(sum)
      return sum.toString()
    
    }