// Let's play! You have to return which player won! In case of a draw return Draw!.
const rps = (p1, p2) => {
    if( p1 === p2 ){
      return 'Draw!'
    }
    else if (p1==='scissors' && p2=== 'paper' || p1==='rock'&& p2==='scissors'|| p1=== 'paper'&& p2==='rock'){
      return 'Player 1 won!'
    }
    else if (p1==='scissors' && p2=== 'rock' || p1==='rock'&& p2==='paper'|| p1=== 'paper'&& p2==='scissors'){
      return 'Player 2 won!'
    }
    
  };