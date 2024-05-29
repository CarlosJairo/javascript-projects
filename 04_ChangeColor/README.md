# Cambiador de Color de Fondo

Este proyecto es una aplicación web que permite al usuario cambiar el color de fondo del documento mediante la selección de colores simples o la generación de colores hexadecimales aleatorios.

## Descripción

El cambiador de color de fondo permite al usuario alternar entre dos modos de selección de color:

- **Colores Simples:** Una selección de colores predefinidos.
- **Colores Hexadecimales:** Generación de colores hexadecimales aleatorios.

El color seleccionado se aplica al fondo del documento y se muestra en un span.

## Funcionalidades

- **Alternar Modos de Color:** Permite al usuario seleccionar entre colores simples y hexadecimales.
- **Cambio de Color Aleatorio:** Cambia el color del fondo del documento a un color aleatorio basado en el modo seleccionado.
- **Visualización del Color:** Muestra el valor del color actual en el documento.

## Código

### Variables de Estado

- **$spanColor:** Elemento del DOM donde se muestra el color actual.
- **$navButtons:** Botones de navegación para cambiar el tipo de color.
- **COLORS:** Arreglo de colores simples predefinidos.
- **HEX_CHARS:** Caracteres para generar colores hexadecimales.
- **COLOR_DECISION:** Objeto que define los modos de color (SIMPLE y HEX).
- **colorDecision:** Variable que almacena la decisión de color actual.

### Eventos

- **click:** Maneja los clics en los botones de selección y cambio de color.

### Funciones Principales

- **assignDecision:** Asigna la decisión de color actual y actualiza la interfaz para reflejar la selección.
- **changeColor:** Cambia el color de fondo del documento y actualiza el texto del span con el valor del

### Uso

- **Presionar el siguiente link:**
- [Ver aplicación](https://carlosjairo.github.io/javascript-projects/04_ChangeColor/)
