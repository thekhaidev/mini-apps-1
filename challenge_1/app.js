var turn = 'First'
counter = 0;


// Controls turns and playing game

function testClick(e) {
//  console.log(e.path[0].innerHTML)

 if ((e.path[0].innerHTML === "[  ]") && (turn === 'First')) {
   e.path[0].innerHTML = "[X]"
   console.log('Current turn: ', turn)
   turn = 'O'
 }

 if ((e.path[0].innerHTML === "[  ]") && (turn === 'O')) {
  console.log('Currently turn ', turn)
  e.path[0].innerHTML = "[O]"
  turn = 'X'
}

 if ((e.path[0].innerHTML === "[  ]") && (turn === 'X')){
  console.log('Currently turn ', turn)
  e.path[0].innerHTML = "[X]"
  turn = 'O'
}



// Increment counter to keep track of turns
counter++;
console.log(counter)
// Draw condition. If no one has won at this point,
// Declare draw and reset board
if (counter === 9) {
  alert('The game has tied!')
  counter = 0;
  resetBoard();
}
}

// Controls resetting board

function resetBoard(e) {
  var item = board.getElementsByTagName('td')
  for (var i = 0; i < item.length; i++) {
    item[i].innerHTML = '[  ]'
    turn = 'First'
  }
}




const reset = document.getElementById("reset")
const board = document.getElementById("board");

reset.addEventListener("click", resetBoard)
board.addEventListener("click", testClick);
