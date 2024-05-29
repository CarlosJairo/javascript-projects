# Reloj Digital

Este proyecto es un reloj digital que muestra la hora actual en formato de 12 horas con AM/PM y resalta el día actual de la semana.

## Descripción

El reloj digital actualiza la hora cada segundo y muestra el tiempo en un formato amigable para el usuario. También resalta el día actual de la semana para que el usuario pueda identificar fácilmente el día de hoy.

## Funcionalidades

- **Mostrar la Hora Actual:** Muestra la hora actual en formato de 12 horas (hh:mm:ss).
- **Indicar AM/PM:** Indica si la hora actual es AM o PM.
- **Resaltar Día Actual:** Resalta el día de la semana correspondiente a la fecha actual.

## Código

### Variables de Estado

- **$clock:** Elemento del DOM donde se muestra la hora.
- **$period:** Elemento del DOM donde se muestra AM o PM.
- **$days:** Elementos del DOM que representan los días de la semana.

### Eventos

- **DOMContentLoaded:** Inicializa el reloj y empieza a actualizar la hora cada segundo.

### Funciones Principales

- **showHour:** Función que obtiene la hora actual y actualiza los elementos del DOM correspondientes.

### Uso

- **Presionar el siguiente link:**
- [Ver aplicación](https://carlosjairo.github.io/javascript-projects/03_DigitalClock/)
