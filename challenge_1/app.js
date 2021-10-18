function testClick(e) {
 console.log(e.path[0].innerHTML)
 e.path[0].innerHTML = "Yo"
}

const board = document.getElementById("board");

board.addEventListener("click", testClick);
