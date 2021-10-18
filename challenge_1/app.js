function testClick(e) {
 console.log(e.path[0].innerHTML)
}

const board = document.getElementById("board");

board.addEventListener("click", testClick);
