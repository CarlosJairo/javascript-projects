const d = document;
const $form = document.querySelector(".form");

$form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Obtiene los valores ingresados por el usuario y los convierte a números enteros.
  const day = parseInt(e.target.day.value);
  const month = parseInt(e.target.month.value);
  const year = parseInt(e.target.year.value);

  // Obtiene la fecha actual y la divide en día, mes y año.
  const today = new Date().toLocaleDateString().split("/");
  const currentMonth = parseInt(today[1]);
  const currentDay = parseInt(today[0]);
  const currentYear = parseInt(today[2]);

  // Realiza las validaciones de los valores ingresados por el usuario.
  // Retorna verdadero si hay un error, falso si no hay error.
  isValidDay = validateInput(day, "day", 1, 31);
  isValidMonth = validateInput(month, "month", 1, 12);
  isValidYear = validateInput(year, "year", 1, currentYear);

  // Si alguna de las validaciones falla, se detiene la ejecución de la función.
  if (isValidDay || isValidMonth || isValidYear) return;

  // Calcula la edad en años, meses y días.
  const totalYears =
    currentYear -
    year -
    (month > currentMonth ||
    (month === currentMonth ? (day > currentDay ? true : false) : false)
      ? 1
      : 0);

  const totalMonths =
    month > currentMonth ? currentMonth + 12 - month : currentMonth - month;

  const totalDays = day > currentDay ? currentDay + 12 - day : currentDay - day;

  // Actualiza los elementos del DOM con los resultados de la edad calculada.
  d.querySelector(".years").textContent = totalYears;
  d.querySelector(".months").textContent = totalMonths;
  d.querySelector(".days").textContent = totalDays;
});

// función validateInput para validar los valores ingresados por el usuario.
function validateInput(valor, elemento, min, max) {
  // Si hay un error, agrega las clases de error a los elementos del formulario.
  if (!valor || valor < min || valor > max) {
    d.querySelector(`.${elemento}-error`).classList.add("error");
    d.querySelector(`.${elemento}-label`).classList.add("error");
    $form[elemento].classList.add(`error`);
    return true;
  } else {
    // Si el valor es válido, quita las clases de error de los elementos relevantes del formulario.

    d.querySelector(`.${elemento}-error`).classList.remove("error");
    d.querySelector(`.${elemento}-label`).classList.remove("error");
    $form[elemento].classList.remove(`error`);
    return false;
  }
}
