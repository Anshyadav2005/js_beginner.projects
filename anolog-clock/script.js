const hourHand = document.querySelector(".hour");
const secHand = document.querySelector(".second");
const minHand = document.querySelector(".minute");

function updateClock() {
  const Time = new Date();

  const hour = Time.getHours();
  const min = Time.getMinutes();
  const sec = Time.getSeconds();

  //hr % 12 convert 24hr into 12
  // 360 / 12 = 30 1 hr ka deg + min * 0.5 give 1 min rotate deg for hr hand
  const hourDeg = (hour % 12) * 30 + min * 0.5;
  const minDeg = min * 6;
  const secDeg = sec * 6;

  secHand.style.transform = `rotate(${secDeg}deg)`;
  minHand.style.transform = `rotate(${minDeg}deg)`;
  hourHand.style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(updateClock, 1000);

updateClock();
