function warnTheSheep(queue) {
    let num = queue.reverse().indexOf('wolf') //reversing array , then find index of wolf //warn sheep in front reverse,, write conditional that will warn sheep
 if(queue.indexOf('wolf') === 0){
 console.log('pls go away and stop eating my sheep')
 }else{
   console.log(`Oi! Sheep number ${num}! You are in danger`)
 }
 }
 warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"])