// You get an array of numbers, return the sum of all of the positives ones.
function positiveSum(arr) {
    return arr.reduce((accumulator, current)=> current > 0 ? accumulator + current: accumulator, 0)
   }