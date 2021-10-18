var turn = 'First'

function testClick(e) {
//  console.log(e.path[0].innerHTML)

 if ((e.path[0].innerHTML === "[  ]") && (turn === 'First')) {
  //  console.log('Current turn: ', turn)
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
}

const board = document.getElementById("board");

board.addEventListener("click", testClick);
