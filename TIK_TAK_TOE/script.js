const main = document.querySelector(".main");
const box = document.querySelectorAll(".box");
const display = document.querySelector(".display");
const reset = document.querySelector(".reset");

let player = true; //game me player ki turn
let gameOver = false; // game on - off

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

main.addEventListener("click", (e) => {
  if (gameOver) return;

  if (!e.target.classList.contains("box")) return;

  if (!e.target.innerText == "") return;

  if (player) {
    e.target.innerText = "X";
    player = false;
  } else {
    e.target.innerText = "0";
    player = true;
  }
  checkwinner();
});


const showWinner = (val1) => {
  display.innerText = `winner = ${val1}`;
  gameOver = true;
};
const checkwinner = () => {
  for (let patterns of winPatterns) {
    let val1 = box[patterns[0]].innerText;
    let val2 = box[patterns[1]].innerText;
    let val3 = box[patterns[2]].innerText;

    if (val1 != "" && val2 != "" && val3 != "") {
      if (val1 == val2 && val2 == val3) {
        showWinner(val1);
        return;
      }
    }
  }
  // draw check
  let filled = 0;

  box.forEach((b) => {
    if (b.innerText !== "") filled++;
  });

  if (filled === 9) {
    display.innerText = "Draw";
    gameOver = true;
  }
};


const resetGame = () => {
  box.forEach((e) => {
    e.innerText = "";
  });
  display.innerText = "";
  player = true;
  gameOver = false;
};
reset.addEventListener("click", resetGame);
