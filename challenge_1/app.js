function testClick(e) {
 console.log(e.path[0].innerHTML)
 if (e.path[0].innerHTML === "[X]") {
   e.path[0].innerHTML = "[O]"
 } else {
  e.path[0].innerHTML = "[X]"
 }
}

const board = document.getElementById("board");

board.addEventListener("click", testClick);
