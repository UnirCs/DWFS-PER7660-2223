# Interactuando con el DOM

En este ejercicio usaremos la API del DOM vista en clase.
Para ello, crea como siempre una carpeta con tu nombre y apellidos y dentro de ella copia (no muevas) los siguientes archivos:
 - El archivo HTML que desarrollaste en el ejercicio del Tema 1 para hacer tu CV u hoja de vida.
 - El archivo CSS (si lo hiciste) que desarrollaste para el archivo HTML anterior.

## 1.- Modo Oscuro

Deberás implementar el [modo oscuro y modo claro](https://www.ailonwebs.com/es/blog/diseno-paginas-web/modo-oscuro-y-modo-claro/index.php#:~:text=El%20modo%20oscuro%20o%20tema,texto%20oscuro%20y%20fondo%20claro.) dentro de la página web que representa el archivo HTML de tu CV.
Para realizarlo, puedes optar por seguir estos pasos, aunque puedes hacerlo de alguna otra forma completamente distinta:
 - En algún punto del documento HTML (preferiblemente al principio) inserta un [botón de On/Off](https://www.w3schools.com/howto/howto_css_switch.asp). Seguro que este botón te resulta familiar, ya que lo habrás usado en infinidad de apps y webs más de una vez.
 - Cada vez que ese botón se presione, se deberá ejecutar un código hecho en JavaScript que usará la API del DOM.
 - Dicho código deberá modificar el estilo de todos los elementos HTML del documento para que pasen a ser de un estilo oscuro si eran claros, y viceversa.
 - Se recomienda usar el método [toggle](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/toggle).

## 2.- El árbol del documento

Una vez que el documento HTML haya cargado correctamente, se deberá ejecutar una función en JavaScript que usará la API del DOM para mostrar por consola las hojas (elementos finales) del árbol de elementos asociado al body del documento HTML de tu CV.

Para asegurarte de que ejecutas el script cuando la página haya cargado por completo, puedes usar el [evento load](https://developer.mozilla.org/es/docs/Web/API/Window/load_event).
