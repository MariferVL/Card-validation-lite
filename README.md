# Tarjeta de crédito válida, parte 1

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Objetivos de aprendizaje generales](#2-objetivos-de-aprendizaje-generales-de-este-proyecto)
* [3. Consideraciones generales](#3-consideraciones-generales)
* [4. Criterios de aceptación mínimos del proyecto](#4-criterios-de-aceptación-mínimos-del-proyecto)
* [5. Consideraciones técnicas](#5-consideraciones-técnicas)
* [6. Pistas, tips y lecturas complementarias](#8-pistas-tips-y-lecturas-complementarias)

***

## 1. Preámbulo

El [algoritmo de Luhn](https://es.wikipedia.org/wiki/Algoritmo_de_Luhn),
también llamado algoritmo de módulo 10, es un método de suma de verificación,
se utiliza para validar números de identificación; tales como el IMEI de los
celulares, tarjetas de crédito, etc.

Este algoritmo es simple. Obtenemos la reversa del número a verificar (que
solamente contiene dígitos [0-9]); a todos los números que ocupan una posición
par se les debe multiplicar por dos, si este número es mayor o igual a 10,
debemos sumar los dígitos del resultado; el número a verificar será válido si
la suma de sus dígitos finales es un múltiplo de 10.

![gráfica de algoritmo de Luhn](./AlgoritmoLuhn.png)

No te quedes demasiado tiempo pensando en el algoritmo, lo vas a utilizar para completar el proyecto pero los objetivos de aprendizaje no tratan sobre el algoritmo en sí mismo.

En este proyecto tendrás que construir una aplicación web que le permita a un
usuario validar el número de una tarjeta de crédito.

Como continuación del proyecto de preadmisión, volverás a trabajar sobre
fundamentos de JavaScript, incluyendo conceptos como variables, condicionales,
y funciones, así como eventos y manipulación básica del DOM, fundamentos de
HTML y CSS.

## 2. Objetivos de aprendizaje generales

Reflexiona y luego marca los objetivos que has llegado a entender y aplicar en tu proyecto. Piensa en eso al decidir tu estrategia de trabajo.

### Web APIs

- [x] **Uso de selectores del DOM**

  <details><summary>Links</summary><p>

  * [Manipulación del DOM](https://curriculum.laboratoria.la/es/topics/browser/02-dom/03-1-dom-methods-selection)
  * [Introducción al DOM - MDN](https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction)
  * [Localizando elementos DOM usando selectores - MDN](https://developer.mozilla.org/es/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)
</p></details>

- [x] **Manejo de eventos del DOM (listeners, propagación, delegación)**

  <details><summary>Links</summary><p>

  * [Introducción a eventos - MDN](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Events)
  * [EventTarget.addEventListener() - MDN](https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener)
  * [EventTarget.removeEventListener() - MDN](https://developer.mozilla.org/es/docs/Web/API/EventTarget/removeEventListener)
  * [El objeto Event](https://developer.mozilla.org/es/docs/Web/API/Event)
</p></details>

- [x] **Manipulación dinámica del DOM**

  <details><summary>Links</summary><p>

  * [Introducción al DOM](https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction)
  * [Node.appendChild() - MDN](https://developer.mozilla.org/es/docs/Web/API/Node/appendChild)
  * [Document.createElement() - MDN](https://developer.mozilla.org/es/docs/Web/API/Document/createElement)
  * [Document.createTextNode()](https://developer.mozilla.org/es/docs/Web/API/Document/createTextNode)
  * [Element.innerHTML - MDN](https://developer.mozilla.org/es/docs/Web/API/Element/innerHTML)
  * [Node.textContent - MDN](https://developer.mozilla.org/es/docs/Web/API/Node/textContent)
</p></details>

### JavaScript

- [x] **Tipos de datos primitivos**

  <details><summary>Links</summary><p>

  * [Valores primitivos - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Data_structures#valores_primitivos)
</p></details>

- [x] **Strings (cadenas de caracteres)**

  <details><summary>Links</summary><p>

  * [Strings](https://curriculum.laboratoria.la/es/topics/javascript/06-strings)
  * [String — Cadena de caracteres - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String)
</p></details>

- [x] **Variables (declaración, asignación, ámbito)**

  <details><summary>Links</summary><p>

  * [Valores, tipos de datos y operadores](https://curriculum.laboratoria.la/es/topics/javascript/01-basics/01-values-variables-and-types)
  * [Variables](https://curriculum.laboratoria.la/es/topics/javascript/01-basics/02-variables)
</p></details>

- [x] **Uso de condicionales (if-else, switch, operador ternario, lógica booleana)**

  <details><summary>Links</summary><p>

  * [Estructuras condicionales y repetitivas](https://curriculum.laboratoria.la/es/topics/javascript/02-flow-control/01-conditionals-and-loops)
  * [Tomando decisiones en tu código — condicionales - MDN](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/conditionals)
</p></details>

- [x] **Uso de bucles/ciclos (while, for, for..of)**

  <details><summary>Links</summary><p>

  * [Bucles (Loops)](https://curriculum.laboratoria.la/es/topics/javascript/02-flow-control/02-loops)
  * [Bucles e iteración - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Loops_and_iteration)
</p></details>

- [x] **Funciones (params, args, return)**

  <details><summary>Links</summary><p>

  * [Funciones (control de flujo)](https://curriculum.laboratoria.la/es/topics/javascript/02-flow-control/03-functions)
  * [Funciones clásicas](https://curriculum.laboratoria.la/es/topics/javascript/03-functions/01-classic)
  * [Arrow Functions](https://curriculum.laboratoria.la/es/topics/javascript/03-functions/02-arrow)
  * [Funciones — bloques de código reutilizables - MDN](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Functions)
</p></details>

- [x] **Uso de identificadores descriptivos (Nomenclatura y Semántica)**

## 3. Consideraciones generales
* Este proyecto se debe trajar de manera **individual**. 
* Tiempo estimado para completar las 2 partes: **1-3 _sprints_** (semanas). 
* **Tiempo estimado** para completar esta 1era parte: no más de **1 _sprint_** (semanas).👀

### 3.1 Recomendaciones
* No te sientas culpable por no saber. SI estás acá es porque quieres aprender, si ya supieras programar estarías trabajando.
* Enfócate en aprender y no solamente en "completar" el proyecto, "completarlo" es un medio para aprender.
* Te sugerimos que no intentes saberlo todo antes de empezar a codear.
* Intenta hacer ciclos cortos (horas, no días) de leer/ver videos y probar inmediatamente. Intenta poner a prueba (codear) lo que crees que has entendido al leer o ver algo.
* No te preocupes por el aspecto estético-visual en esta primera parte.

## 4. Criterios de aceptación mínimos del proyecto

Estos son los requisitos que debe cumplir tu trabajo para que consideremos que has completado lo mínimamemnte indispensable para esta etapa de tu aprendizaje.

**1. La interfaz de tu aplicación debe:**

* Permitir insertar el número de la tarjeta que se quiere validar (texto) en un campo de texto vacío. 
* Evitar que puedan escribir caracteres que no sean numéricos (dígitos 0-9).  
* Impedir que se intente validar si es que el campo está vacío (no se ha escrito nada).  
* Comunicar a la usuaria si se trata una taerjeta válida o no.
  
Tan pronto consideres que tu trabajo cumpla con todos estos criterios, puedes comenzar a trabajar en la segunda parte. 

## 5. Consideraciones técnicas

La lógica del proyecto debe estar implementada completamente en JavaScript. En
este proyecto NO está permitido usar librerías o frameworks, solo JavaScript
puro también conocido como Vanilla JavaScript.

Para comenzar este proyecto tendrás que descargar las _fuentes_ de este
repositorio que contiene un _boilerplate_. Un _boilerplate_ es la estructura
básica de un proyecto que sirve como un punto de partida con archivos iniciales.

El boilerplate contiene esta estructura:

```text
./
├── .babelrc
├── .editorconfig
├── .eslintrc
├── .gitignore
├── README.md
├── package.json
├── src
│   ├── index.html
```

### Descripción de scripts / archivos

* `README.md`: debe explicar la información necesaria para el uso de tu aplicación
  web, así como una introducción a la aplicación, su funcionalidad y decisiones de
  diseño que se tomaron.
* `src/index.html`: este es el punto de entrada a tu aplicación. Este archivo
  contiene tu _markup_ (HTML) para mostrar una caja de texto (input) y un botón (button).
  Debes completar la función _isValid_:
  - `isValid(creditCardNumber)`: `creditCardNumber` es un `string`
     con el número de tarjeta que se va a verificar. Esta función debe retornar
     un `boolean` dependiendo si es válida de acuerdo al [algoritmo de Luhn](https://www.youtube.com/watch?v=f0zL6Ot9y_w).
  Finalmente, debes completar la función `validate` para que, según
el resultado de la función `isValid`, muestre al usuario un mensaje apropiado.

## 6. Pistas, tips y lecturas complementarias

### Prepara tu PC para trabajar

1. Antes que nada, asegúrate de tener un :pencil: editor de texto en
   condiciones, algo como [Code](https://code.visualstudio.com/).
2. Para ejecutar los comandos a continuación necesitarás una :shell:
   [UNIX Shell](https://curriculum.laboratoria.la/es/topics/shell),
   que es un programita que interpreta líneas de comando (command-line
   interpreter) así como tener [git](https://curriculum.laboratoria.la/es/topics/scm/01-git)
   instalado. Si usas un sistema operativo "UNIX-like", como GNU/Linux o MacOS,
   ya tienes una _shell_ (terminal) instalada por defecto (y probablemente `git`
   también). Si usas Windows puedes usar la versión completa de [Cmder](https://cmder.app/)
   que incluye [Git bash](https://git-scm.com/download/win).
3. 📦 Instala las dependencias del proyecto con el comando `npm install`. Esto
   asume que has instalado [Node.js](https://nodejs.org/) (que incluye [npm](https://docs.npmjs.com/)).
4. Para ver la interfaz de tu programa en el navegador, usa el comando
   `npm start` para arrancar el servidor web y dirígete a
   `http://localhost:5000` en tu navegador.
5. A codear se ha dicho! :rocket:

### Recursos y temas relacionados

* Súmate al canal de Slack destinado a este proyecto [#project-card-validation](https://claseslaboratoria.slack.com/archives/C03LXJ10WJD)

* [Guía a través del algoritmo de Luhn](https://www.youtube.com/watch?v=f0zL6Ot9y_w)

* [Playlist de Terminal y shell de UNIX](https://www.youtube.com/playlist?list=PLiAEe0-R7u8nGH5TEHfSTeDNIvjZFe_Yd)

Organización del Trabajo:

* [Metodologías Ágiles](https://www.youtube.com/watch?v=v3fLx7VHxGM)
* [Scrum en menos de 2 minutos](https://www.youtube.com/watch?v=TRcReyRYIMg)
* [Scrum en Detalle](https://www.youtube.com/watch?v=nOlwF3HRrAY&t=297s). No
  esperamos que hagas todo eso desde este proyecto. Iremos profundizando poco a
  poco a lo largo del -_bootcamp_.
