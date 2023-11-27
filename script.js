//JAM DIGITAL
function displayDigital() {
  //update the time
  const clock = new Date();
  const hoursNow = clock.getHours();
  const minutesNow = clock.getMinutes();
  const secondsNow = clock.getSeconds();
  //grab div
  const divHours = document.getElementById("hours");
  const divMinutes = document.getElementById("minutes");
  const divSeconds = document.getElementById("seconds");
  //get time from currently now to string
  const hours = hoursNow.toString().padStart(2, "0");
  const minutes = minutesNow.toString().padStart(2, "0");
  const seconds = secondsNow.toString().padStart(2, "0");

  const displayHours = `${hours}`;
  const displayMinutes = `${minutes}`;
  const displaySeconds = `${seconds}`;

  //send text and content to HTML
  divHours.textContent = displayHours;
  divMinutes.textContent = displayMinutes;
  divSeconds.textContent = displaySeconds;
}
// Update the time every second
setInterval(displayDigital, 1000);
// Display initial time
displayDigital();

//JAM ANALOG
function displayAnalog() {
  //update the time
  const clock = new Date();
  const hoursNow = clock.getHours();
  const minutesNow = clock.getMinutes();
  const secondsNow = clock.getSeconds();
  //grab the div
  const hourHand = document.getElementById("hourHand");
  const minuteHand = document.getElementById("minuteHand");
  const secondHand = document.getElementById("secondHand");

  const hourDeg = (hoursNow % 12) * 30 + minutesNow * 0.5;
  //Karena satu putaran jam adalah
  //360 derajat dan ada 12 jam pada jam analog,
  //maka setiap jam memiliki rotasi sebesar 30 derajat.
  //% 12 digunakan untuk memastikan bahwa angka jam
  //tidak melebihi 12 (misalnya, jika saat ini jam 13,
  //% 12 akan mengembalikan 1
  const minuteDeg = minutesNow * 6;
  const secondDeg = secondsNow * 6;

  hourHand.style.transform = `rotate(${hourDeg}deg)`;
  minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
  secondHand.style.transform = `rotate(${secondDeg}deg)`;
}
// Update the time every second
setInterval(displayAnalog, 1000);
// Display initial time
displayAnalog();

let isAnalogDisplayed = false; // Track the state of clock display
//To switch the Clock
const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", () => {
  const digital = document.getElementById("digital");
  const analog = document.getElementById("analog");

  analog.classList.toggle("hidden");
  digital.classList.toggle("hidden");

  // Toggle clock display state and update button text accordingly
  isAnalogDisplayed = !isAnalogDisplayed;
  if (isAnalogDisplayed) {
    submitButton.innerHTML = "Switch to Digital";
  } else {
    submitButton.innerHTML = "Switch to Analog";
  }
});
