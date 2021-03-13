//find a wof in the array and warn the other sheep about it

function warnTheSheep(queue) {
    let newQueue = queue.reverse()
    let num= +newQueue.indexOf('wolf')
      for(let i = 0; i <= newQueue.length ; i++){
      if(newQueue[i] ==='wolf'){
        return "Pls go away and stop eating my sheep"
      }else{
        return `Oi! Sheep number ${num}! You are about to be eaten by a wolf!`
      }
      }
    }