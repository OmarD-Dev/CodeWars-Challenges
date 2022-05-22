// Given an integral number, determine if it's a square number:
var isSquare = function(n){
    let x = Math.sqrt(n) 
    let y = Math.floor(Math.sqrt(n))
    if (x - y == 0){
      return true
    }else{
      return false
    }
  }
  