let amigos = []; //Se declara la variable de tipo Array
console.log (amigos.length);

//Función agregar nombre de amigo
function agregarAmigo (){

    let nombreAmigo = document.getElementById ('amigo').value;
    console.log(nombreAmigo);
    console.log(typeof(nombreAmigo));
    //Validar que el campo no esté vacío
    if (nombreAmigo.trim() === "") {
            alert("Por favor, inserte un nombre.");
        } 
    else if (amigos.includes(nombreAmigo)) {
        alert(`${nombreAmigo} ya fue registrado, por favor agrega otro nombre`)
      
    else {
            amigos.push(nombreAmigo); // Agregaras el nombre al array amigos
            actualizarLista(); //Se llama a la función 
            console.log("Amigo agregado: " + nombreAmigo);
            console.log(amigos);
            document.getElementById('amigo').value = ""; //Limpiar campo de entrada

            //Reiniciar contenido del campo resultado
            const resultadoElement = document.getElementById('resultado');//Obtener el elemento de resultado
            resultadoElement.innerHTML = ""; //Limpiar contenido de resultado
        }
}

function actualizarLista(){ //Se declara función para la lista 
    const listaElement = document.getElementById ('listaAmigos'); //Obtener el elemento de la lista 
    listaElement.innerHTML = ""; //Limpiar lista existente

    for (let i = 0; i < amigos.length; i++){ //Iterar sobre el arreglo
        const li = document.createElement('li');//variable que no se puede reasignar y crea elemento en la lista 
        li.textContent = amigos[i]; // Establece el texto del elemento con el nombre del amigo
        listaElement.appendChild(li); // Agrega el elemento a la lista
        console.log(amigos);
    
    }

}

function sortearAmigo(){
    const resultadoElement = document.getElementById('resultado'); //Obtener el elemento del resultado
    //Validar que el array amigos no este vacío
    if (amigos.length === 0){
        resultadoElement.innerHTML = "No hay amigos para sortear.";//Mostar mensaje en el elemento
        return;//Salir de la función
    }
    
    const indiceAleatorio = Math.floor(Math.random() * amigos.length); //Generar un índice aleatorio
    const amigoSorteado = amigos [indiceAleatorio]; //Obtener el amigo sorteado
    console.log ("Amigo Sorteado:" + amigoSorteado);//mostrar amigo sorteado en consola
    resultadoElement.innerHTML = "El amigo sorteado es " + amigoSorteado;// Actualizar elemento


}
