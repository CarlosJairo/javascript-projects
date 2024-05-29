/*
  Este proyecto es un reloj digital que muestra la hora actual en formato
  de 12 horas con AM/PM y resalta el día actual de la semana.
*/

const $clock = document.querySelector(".clock");
const $period = document.querySelector(".period");
const $days = document.querySelectorAll(".days-container > *");

// Adding event listener to execute code when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Call the showHour function immediately to display the current time
  showHour();
  // Set interval to update the clock every second
  setInterval(() => showHour(), 1000);
});

// Funcion para mostrar el tiempo
function showHour() {
  // Crear nuevo objeto Date para obtener la fecha y hora actual
  const date = new Date();
  const currentTime = date.toLocaleTimeString();
  const day = date.getDay();

  // Mostrar el tiempo en el reloj
  $clock.textContent =
    (currentTime.slice(0, 2).includes(":") && "0") + currentTime.slice(0, -5);
  $period.textContent = currentTime.includes("p") ? "pm" : "am";

  // Resalte el día actual en el contenedor de días.
  $days.forEach(($day) =>
    $day.classList.toggle("active-day", $day.matches(`.day-${day}`))
  );
}
