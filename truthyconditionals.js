function paperwork(n, m) {
    let total= 0 
    
    if(n > 0 && m > 0){
     total = n * m 
  }else if (n <= 0 && m <= 0){
    total = 0
  }
    return total
    
  }