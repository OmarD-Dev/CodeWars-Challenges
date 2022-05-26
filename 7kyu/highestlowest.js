// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
function highAndLow(numbers){
    let arr= numbers.split(' ')
    let numArr= arr.map(Number)
    let high= Math.max(...numArr)
    let low = Math.min(...numArr)
    return `${high} ${low}`
  }
  