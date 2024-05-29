# Juego de Memoria

Este proyecto es un juego de memoria donde el jugador debe emparejar cartas idénticas. El juego muestra estadísticas como el número de aciertos, movimientos y tiempo transcurrido. Cuando el jugador completa todas las parejas, se muestra un modal con las estadísticas finales.

## Descripción

El juego consiste en un conjunto de cartas que están dispuestas boca abajo. El jugador debe voltear dos cartas a la vez tratando de encontrar las parejas. Si las cartas son iguales, permanecen volteadas; de lo contrario, se voltean de nuevo. El juego sigue hasta que se encuentren todas las parejas.

## Funcionalidades

- **Barajar Cartas:** Al iniciar el juego, las cartas se barajan aleatoriamente.
- **Interacción con el Usuario:** El jugador puede seleccionar cartas para voltearlas.
- **Emparejar Cartas:** Cuando dos cartas coinciden, se marcan como correctas y permanecen volteadas.
- **Estadísticas del Juego:** Muestra el número de aciertos, movimientos realizados y tiempo transcurrido.
- **Modal de Victoria:** Cuando se emparejan todas las cartas, se muestra un modal con las estadísticas finales.
- **Reiniciar Juego:** Permite reiniciar el juego recargando la página.

## Código

### Variables de Estado

- **started:** Indica si el juego ha comenzado.
- **successes:** Número de parejas encontradas.
- **movements:** Número de movimientos realizados.
- **time:** Tiempo transcurrido.
- **card1:** Referencia a la primera carta seleccionada.
- **interval:** Identificador del intervalo de tiempo.
- **$clickedCard:** Referencia a la carta clicada actualmente.

### Eventos

- **DOMContentLoaded:** Inicializa el juego barajando las cartas.
- **click:** Maneja el clic en una carta.
- **reset:** Reinicia el juego.

### Funciones Principales

- **initializeGame:** Baraja las cartas al inicio del juego.
- **shuffleElements:** Baraja los elementos de un contenedor.
- **handleCardClick:** Maneja el clic en una carta y la lógica del juego.
- **matchingCards:** Maneja el caso de cartas coincidentes.
- **differentCards:** Maneja el caso de cartas no coincidentes.
- **startTime:** Inicia el cronómetro del juego.
- **convertingTime:** Convierte el tiempo en segundos a formato hh:mm:ss.
- **win:** Muestra la ventana modal con las estadísticas finales cuando el jugador gana.
- **resetGame:** Reinicia el juego recargando la página.

### Uso

- **Presionar el siguiente link:**
- [Ver aplicación](https://carlosjairo.github.io/javascript-projects/02_MemoryGame/)
