function removeDuplicateWords (s) {
    // your perfect code...
   let newStr=  s.split(' ')
     return  [...new Set(newStr)].join(' ')
  }