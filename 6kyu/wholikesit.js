// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:
function likes(names) {
    let name = names[0]
    let name2 = names[1]
    let name3 = names[2]
    let num = names.length - 2
    if(names.length === 0){
      return "no one likes this"
    }else if(names.length === 1){
      return `${name} likes this`
    }else if(names.length === 2){
      return `${name} and ${name2} like this`
    }else if(names.length === 3){
      return `${name}, ${name2} and ${name3} like this`
    }else{
      return `${name}, ${name2} and ${num} others like this`
    }
  }