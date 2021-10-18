const reset = document.getElementById("reset")
const board = document.getElementById("board");
const item = board.getElementsByTagName('td')
var turn = 'First'
var counter = 0;


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

// Win condition for three in a row first row
if (((item[0].innerHTML==='[O]') && (item[1].innerHTML==='[O]') && (item[2].innerHTML==='[O]')) || ((item[0].innerHTML==='[X]') && (item[1].innerHTML==='[X]') && (item[2].innerHTML==='[X]'))) {
  alert('Congratulations! You won!')
  counter = 0;
  resetBoard();
}

// Win condition for three in a row second row
if (((item[3].innerHTML==='[O]') && (item[4].innerHTML==='[O]') && (item[5].innerHTML==='[O]')) || ((item[3].innerHTML==='[X]') && (item[4].innerHTML==='[X]') && (item[5].innerHTML==='[X]'))) {
  alert('Congratulations! You won!')
  counter = 0;
  resetBoard();
}

// Win condition for three in a row third row
if (((item[6].innerHTML==='[O]') && (item[7].innerHTML==='[O]') && (item[8].innerHTML==='[O]')) || ((item[6].innerHTML==='[X]') && (item[7].innerHTML==='[X]') && (item[8].innerHTML==='[X]'))) {
  alert('Congratulations! You won!')
  counter = 0;
  resetBoard();
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
  for (var i = 0; i < item.length; i++) {
    item[i].innerHTML = '[  ]'
    turn = 'First'
  }
}





reset.addEventListener("click", resetBoard)
board.addEventListener("click", testClick);
