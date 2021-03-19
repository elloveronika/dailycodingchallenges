function digitize(n) {
    //code here
    let newArr= n.toString().split("").reverse()
    return newArr.map(Number)
  }