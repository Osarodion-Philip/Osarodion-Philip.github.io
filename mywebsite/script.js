const dayOfWeek = document.getElementById("day");
const timeOfDay = document.getElementById("time");

const weekDays = [
  "Sunday",
  "Monday",
  "Teuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const currentTime = new Date();
const weekDay = weekDays[currentTime.getUTCDay()];
console.log(weekDay);
const utcTime = currentTime.toUTCString().slice(17, 25);
console.log(utcTime);

document.addEventListener("DOMContentLoaded", (event) => {
  dayOfWeek.textContent = weekDay;
  timeOfDay.textContent = `${utcTime} UTC`;
});
