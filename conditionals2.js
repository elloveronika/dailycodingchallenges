function getGrade (s1, s2, s3) {
    let total = Math.round((s1 + s2 + s3) / 3)//remember order of operations
    
      if(total >= 90){
      return 'A'
    }else if(total >= 80){
      return 'B'
    }else if(total >= 70) {
        return 'C'
      }else if(total >= 60){
    return 'D'
      }else if(total <= 60){
        return 'F'
      }
    }