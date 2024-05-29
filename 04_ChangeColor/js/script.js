/*
  Este proyecto es una aplicación web que permite al usuario cambiar el color de fondo
  del documento mediante la selección de colores simples o la generación de colores hexadecimales
  aleatorios.
*/

const d = document,
  $spanColor = d.getElementById("color-span"), // Span donde se muestra el color actual
  $navButtons = d.querySelectorAll(".nav-button"), // Botones para cambiar el tipo de color
  // Arreglo de colores simples
  COLORS = [
    "green",
    "yellow",
    "blue",
    "gray",
    "red",
    "purple",
    "orange",
    "pink",
    "teal",
    "cyan",
    "magenta",
    "lime",
    "maroon",
    "olive",
    "navy",
  ],
  HEX_CHARS = "01A23B45C67D89F"; // Caracteres para generar colores hexadecimales

// Objeto para manejar las decisiones de color.
const COLOR_DECISION = {
  SIMPLE: "SIMPLE",
  HEX: "HEX",
};

// Variable para almacenar la decisión de color actual (simple o hex).
let colorDecision = COLOR_DECISION.SIMPLE;

d.addEventListener("click", (e) => {
  // Cambia la decisión de color a SIMPLE cuando se hace clic en el botón correspondiente.
  if (e.target.matches(".button-simple")) assignDecision(COLOR_DECISION.SIMPLE);
  // Cambia la decisión de color a HEX cuando se hace clic en el botón correspondiente.
  if (e.target.matches(".button-hex")) assignDecision(COLOR_DECISION.HEX);
  // Cambia el color del fondo al hacer clic en el botón de cambio de color.
  if (e.target.matches("#button-change-color")) changeColor();
});

// Asigna la decisión de color actual y actualiza la interfaz para reflejar la selección.

function assignDecision(decision) {
  // Si la decisión no ha cambiado, no hace nada.
  if (decision === colorDecision) return;

  // Actualiza la decisión de color y la interfaz de usuario.
  colorDecision = decision;
  $navButtons.forEach((button) => button.classList.toggle("click"));
}

// Cambia el color de fondo del documento y actualiza el texto del span con el valor del color.

function changeColor() {
  let choice; // Variable para almacenar el color elegido.

  // Si la decisión de color es SIMPLE, selecciona un color aleatorio del arreglo COLORS.
  if (colorDecision === COLOR_DECISION.SIMPLE) {
    let randomNumber = Math.floor(Math.random() * COLORS.length);
    choice = COLORS[randomNumber];
  } else {
    // Si la decisión de color es HEX, genera un color hexadecimal aleatorio.
    choice = "#";
    for (let i = 0; i < 6; i++) {
      let randomCharIndex = Math.floor(Math.random() * HEX_CHARS.length);
      choice += HEX_CHARS[randomCharIndex];
    }
  }

  // Aplica el color elegido al fondo del documento y actualiza el span con el valor del color.
  d.body.style.backgroundColor = choice;
  $spanColor.textContent = choice.toUpperCase(); // Muestra el color en mayúsculas.
  $spanColor.style.color = choice; // Establece el color del texto para que coincida con el fondo.
}
