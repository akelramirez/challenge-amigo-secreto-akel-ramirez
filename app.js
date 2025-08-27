let listaAmigos = [];

// Esta función se encarga de tomar el valor de una caja de texto en la página
// lo valida y agregarlo a la lista de amigos.

function agregarAmigo(){
    var nombreAmigo = document.getElementById("cajaDeAmigo").value;

    if(!isNaN(nombreAmigo)){
        alert("Por favor, inserte un nombre");
    }
    else{
        listaAmigos.push(nombreAmigo);
        console.log(listaAmigos);
    }

    document.getElementById("cajaDeAmigo").value = "";
    actualizarListaAmigosHtml();
}

// Esta función se encarga de mostrar en la página(html) la lista de amigos.

function actualizarListaAmigosHtml(){
    var listaHtml = document.getElementById("listaAmigosHtml");

    listaHtml.innerHTML = "";

    for (amigo of listaAmigos){
        var nodoLi = document.createElement("li");
        var texto = document.createTextNode(amigo);
        nodoLi.appendChild(texto);
        listaHtml.appendChild(nodoLi);
    }
}

// Esta función selecciona un nombre al azar de la lista y lo muestra en la página.

function sortearAmigo(){

    if(listaAmigos.length===0){
        alert("Añadir lista de amigos");
        return;
    }

    var listaHtmlResultado = document.getElementById("resultado");
    listaHtmlResultado.innerHTML = "";

    let indice = Math.floor(Math.random()*listaAmigos.length);
    let nombreSeleccionado = listaAmigos[indice];
    
    var nodoLiResultado = document.createElement("li");
    var texto = document.createTextNode(nombreSeleccionado);
    nodoLiResultado.appendChild(texto);
    listaHtmlResultado.appendChild(nodoLiResultado);
}