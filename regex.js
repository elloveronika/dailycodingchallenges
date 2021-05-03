function validatePIN (pin) {
    let newPin=  pin.replace(/[a]/gi, '').replace(/\W_/g,"").match(/[0-9]/g)
     return newPin.length == 6 || newPin.length == 4  ? true : false
      
    }