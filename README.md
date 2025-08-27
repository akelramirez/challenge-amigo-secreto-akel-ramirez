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
2. Haz clic en el botón **Agregar** para guardarlo en la lista.  
3. La lista se actualizará en pantalla.  
4. Cuando tengas varios amigos agregados, presiona **Sortear** para elegir uno al azar. 

## Funciones Principales:
- **`agregarAmigo()`** → Añade un nuevo nombre a la lista (si no es un número).  
- **`actualizarListaAmigosHtml()`** → Refresca la lista en el HTML.  
- **`sortearAmigo()`** → Elige un amigo aleatorio y lo muestra en pantalla.

## Autor:
- Akel Ramirez Campo.
