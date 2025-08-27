# Sorteo de Amigos:

Este proyecto es una aplicación web sencilla en **JavaScript** que permite:

1. Agregar nombres de amigos a una lista.  
2. Mostrar la lista en pantalla.  
3. Realizar un sorteo aleatorio para elegir a un amigo.  

## Requisitos:
- Un navegador web (Chrome, Firefox, Edge, etc.).  
- Archivo HTML con los siguientes elementos:  
  - `cajaDeAmigo` → campo de texto donde se escribe el nombre.  
  - `listaAmigosHtml` → lista (`<ul>` o `<ol>`) donde se muestran los nombres.  
  - `resultado` → lista donde se muestra el amigo sorteado.  

## Cómo usarlo:
1. Escribe un nombre en la caja de texto.
   <br> <br>
   <img width="600" height="600" alt="0-inicio-de-sorteo-amigo" src="https://github.com/user-attachments/assets/cf7b4f4a-f806-4c90-9f84-c69cb9195511" />
  <br> <br>
3. Haz clic en el botón **Añadir** para guardarlo en la lista.
   <br> <br>
   <img width="600" height="600" alt="1-agregar-nombre" src="https://github.com/user-attachments/assets/8ba3ccab-b88a-494b-a8bb-4f175d3a2245" />
  <br> <br>
5. La lista se actualizará en pantalla.
   <br> <br>
   <img width="600" height="600" alt="3-lista-de-nombres" src="https://github.com/user-attachments/assets/d18b66c9-b1f7-40c3-b555-3e96d52befd8" />
   <br> <br>
6. Cuando tengas varios amigos agregados, presiona **Sortear Amigo** para elegir uno al azar y mostrando el resultado.
   <br> <br>
   <img width="600" height="600" alt="4-resultado-sorteo-amigo" src="https://github.com/user-attachments/assets/108f0773-dc7c-4807-9f54-265f7da37f6a" />
   <br> <br>

## Funciones Principales:
- **`agregarAmigo()`** → Añade un nuevo nombre a la lista (si no es un número).  
- **`actualizarListaAmigosHtml()`** → Refresca la lista en el HTML.  
- **`sortearAmigo()`** → Elige un amigo aleatorio y lo muestra en pantalla.

## Autor:
- Akel Ramirez Campo.
