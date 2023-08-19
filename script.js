function rotateClockHands() {
  let currentDate = new Date();
  let hourHand = document.querySelector(".hour-hand");
  let minuteHand = document.querySelector(".minute-hand");
  let secondHand = document.querySelector(".second-hand");
  let hours = currentDate.getHours();
  let minutes = currentDate.getMinutes();
  let seconds = currentDate.getSeconds();
  let hourRotation = 30 * hours + minutes / 2;
  let minuteRotation = 6 * minutes + seconds / 10;
  let secondRotation = 6 * seconds;

  hourHand.style.transform = `rotate(${hourRotation}deg)`;
  minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
  secondHand.style.transform = `rotate(${secondRotation}deg)`;
}
setInterval(rotateClockHands, 1000);
