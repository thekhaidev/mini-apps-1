function testClick(e) {
 console.log(e.path[0].innerHTML)
 if (e.path[0].innerHTML === "Yo") {
   e.path[0].innerHTML = "Nah"
 } else {
  e.path[0].innerHTML = "Yo"
 }
}

const board = document.getElementById("board");

board.addEventListener("click", testClick);
