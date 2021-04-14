const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    // TODO
    const newPump = distanceToPump /mpg
    //first i would have to see ifmpg is less than dt
    if(newPump <= fuelLeft ){
      return true
    }else{
      return false
    }
     
  };