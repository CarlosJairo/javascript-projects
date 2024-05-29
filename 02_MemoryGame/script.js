/*
  Este script implementa un juego de memoria donde el jugador debe emparejar
  cartas idénticas. El juego muestra estadísticas como el número de aciertos, 
  movimientos y tiempo transcurrido. Cuando el jugador completa todas las parejas, 
  se muestra un modal con las estadísticas finales.
*/

const d = document;
const $cardsContainer = d.querySelector(".cards-container");
const $successes = d.querySelector(".successes");
const $movements = d.querySelector(".movements");
const $time = d.querySelector(".time");
const $modalWindow = d.querySelector(".modal-window");
const $successesModal = d.querySelector(".successes-modal");
const $movementsModal = d.querySelector(".movements-modal");
const $timeModal = d.querySelector(".time-modal");
const $resetBtn = d.querySelector(".reset-btn");

// Variables de estado del juego
let started = false; // Indica si el juego ha comenzado
let successes = 0; // Número de parejas encontradas
let movements = 0; // Número de movimientos realizados
let time; // Tiempo transcurrido
let card1; // Referencia a la primera carta seleccionada
let interval; // Identificador del intervalo de tiempo
let $clickedCard; // Referencia a la carta clicada actualmente

d.addEventListener("DOMContentLoaded", initializeGame);
d.addEventListener("click", handleCardClick);
$resetBtn.addEventListener("click", resetGame);

// Inicializa el juego barajando las cartas
function initializeGame() {
  shuffleElements(d.querySelectorAll(".card"));
}

// Baraja los elementos de un contenedor
function shuffleElements(elements) {
  let items = Array.from(elements); // Convierte NodeList a Array
  let fragment = document.createDocumentFragment(); // Crea un fragmento para mejorar rendimiento

  // Baraja las cartas
  for (let i = 0; i < elements.length; i++) {
    let num = Math.floor(Math.random() * items.length);
    fragment.appendChild(items[num]);
    items.splice(num, 1);
  }

  $cardsContainer.appendChild(fragment); // Añade las cartas barajadas al contenedor
}

// Maneja el clic en una carta
function handleCardClick(e) {
  if (e.target.matches(".card")) {
    if (!started) startTime(); // Inicia el cronómetro si no ha empezado

    $clickedCard = e.target;

    // Si la carta ya estaba seleccionada, deseleccionarla
    if ($clickedCard.matches(".card_selected")) {
      $clickedCard.classList.remove("card_selected");
      card1 = null;
      return;
    }

    // Si no hay una carta previamente seleccionada
    if (!card1) {
      $clickedCard.classList.add("card_selected");
      card1 = $clickedCard;
      return;
    }

    // Incrementa el contador de movimientos
    movements++;

    const valueCard1 = card1.getAttribute("data-id");
    const valueCard2 = $clickedCard.getAttribute("data-id");

    // Compara las cartas seleccionadas
    valueCard1 === valueCard2 ? matchingCards() : differentCards();

    // Actualiza las estadísticas en el DOM
    $successes.textContent = successes;
    $movements.textContent = movements;
  }
}

// Maneja el caso de cartas coincidentes
function matchingCards() {
  successes++; // Incrementa el contador de aciertos
  $clickedCard.classList.add("card_correct");
  card1.classList.add("card_correct");

  // Deshabilita las cartas emparejadas
  $clickedCard.disabled = true;
  card1.disabled = true;
  card1 = null;

  // Comprueba si se han encontrado todas las parejas
  if (successes === 8) win();
}

// Maneja el caso de cartas no coincidentes
function differentCards() {
  $clickedCard.classList.add("card_selected");
  let aux = card1;
  let aux2 = $clickedCard;
  card1 = null;

  // Desselecciona las cartas después de un breve retraso
  setTimeout(() => {
    aux.classList.remove("card_selected");
    aux2.classList.remove("card_selected");
  }, 500);
}

// Inicia el cronómetro del juego
function startTime() {
  started = true; // Marca el juego como iniciado

  const startTime = new Date().getTime();

  // Actualiza el tiempo transcurrido cada segundo
  interval = setInterval(() => {
    const timeNow = new Date().getTime();

    time = convertingTime(parseInt((timeNow - startTime) / 1000));
    $time.textContent = time; // Actualiza el tiempo en el DOM
  }, 1000);
}

// Convierte el tiempo en segundos a formato hh:mm:ss
function convertingTime(time) {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const remainingSeconds = time % 60;

  return `${hours < 10 ? "0" : ""}${hours}:${
    minutes < 10 ? "0" : ""
  }${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
}

// Muestra la ventana modal con las estadísticas finales cuando el jugador gana
function win() {
  clearInterval(interval); // Detiene el cronómetro
  $successesModal.textContent = successes;
  $movementsModal.textContent = movements;
  $timeModal.textContent = time;

  $modalWindow.classList.add("isActive"); // Muestra el modal
}

// Reinicia el juego recargando la página
function resetGame() {
  location.reload();
}
