const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const track = document.querySelector(".track");
const img = document.querySelectorAll(".track img");
const totalImages = img.length;
const imgWidth = 200;
let index = 0;
function imgMove() {
  const movx = -index * imgWidth;
  track.style.transform = `translateX(${movx}px)`;
}

next.addEventListener("click", () => {
  if (index < totalImages - 1) { //stop next button
    index++;
    imgMove();
  }
});
prev.addEventListener("click", () => {
  if (index > 0) { //stop prev button
    index--;
    imgMove();
  }
});
