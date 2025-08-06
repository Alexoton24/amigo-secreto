// El principal objetivo de este desafío es fortalecer 
// tus habilidades en lógica de programación.
//  Aquí deberás desarrollar la lógica para
//  resolver el problema
 let nombres = [];

 function agregarAmigo(){
//obtenemos refernecia a la caja de texto y su valor 
 let caja = document.querySelector("#amigo");
   let nombre = caja.value;
   //condicional si esta vacia la caja
 if(nombre.trim() !== ""){
    nombres.push(nombre);
    let lista = document.querySelector("#listaAmigos");
    lista.innerHTML = "" ;
  //bucle para poner la lista de nombres
    for(i=0; i< nombres.length;i++){
        let elementoLista= document.createElement('li')
        elementoLista.textContent =  nombres[i]
        lista.appendChild(elementoLista);
    }
    //boton sortear
    let botonSortear = document.getElementById("sortear")
    //condicional para habilitar boton 
 if (nombres.length >= 2){
    botonSortear.disabled = false
 }else{
    botonSortear.disabled = true
 }
//para limpiar la caja despues de terminar el bucle for 
    caja.value = ''
 
 }else{
    alert('no puedes añadir un campo vacio, por favor agrega un nombre')
 }

 }

 function sortearAmigo(){
    //condicional para sortear 
    if (nombres.length > 0 ){
       let numeroSorteado =  Math.floor(Math.random()*nombres.length);
       let amigoSorteado = nombres[numeroSorteado];
       let resultado = document.getElementById("resultado");
       resultado.innerHTML = (`El amigo sorteado es: ${amigoSorteado}`)
    } 

 }

 function reiniciar(){
    //limpiar el array
 nombres = [];
 //limpiar lista
 let lista = document.querySelector("#listaAmigos");
    lista.innerHTML = "" ;
    // boton sortear desactivado
    //boton sortear
    let botonSortear = document.getElementById("sortear")
    // para deshabilitar boton 
    botonSortear.disabled = true
    let resultado = document.getElementById("resultado");
       resultado.innerHTML = ""
       botonSortear.innerHTML = "Sortear amigo"


 }
 let caja = document.querySelector("#amigo");
caja.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    agregarAmigo();
  }
});

  
  