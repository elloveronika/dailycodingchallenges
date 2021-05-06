function bmi(weight, height) {
    let newHeight = Math.pow(height, 2)
    let newBMI = (weight / newHeight)
    let finalBMI = (newBMI.toFixed(1))
    
    if(finalBMI <= 18.5) {
      return "Underweight"
    } else if (finalBMI <= 25) {
      return "Normal"
    } else if (finalBMI <= 30) {
      return "Overweight"
    } else if (finalBMI >= 30) {
      return "Obese"
   }
  }