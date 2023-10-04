import { barcelona, roma, paris, londres } from './ciudades.js'

//obtener los elementos del DOM
let enlaces = document.querySelectorAll('a')
let tituloElemento =document.getElementById('titulo')
let imagenElemento =document.getElementById('imagen')
let subTituloElemento =document.getElementById('subtitulo')
let parrafoElemento =document.getElementById('parrafo')
let precioElemento =document.getElementById('precio')


console.log(enlaces)

//agregar un evento click a cada enlace
enlaces.forEach(function (enlace) {
enlace.addEventListener('click', function() {
    //Remover activo
enlaces.forEach(function (enlace) {
    enlace.classList.remove('active');
});
//Agregar la clase 'Active' al enlace actual
this.classList.add('active')

//Obtener contenido segun el enlace al que hagamos click
let contenido = obtenerContenido(this.textContent)

tituloElemento.innerHTML = contenido.titulo
subTituloElemento.innerHTML = contenido.subtitulo
parrafoElemento.innerHTML = contenido.parrafo
precioElemento.innerHTML = contenido.precio
imagenElemento.innerHTML = contenido.imagen

});

});

//Funcion para traer la informacion correcta desde ciudades.js
function obtenerContenido(enlace){
    let contenido = {
        'Barcelona': barcelona,
        'Roma': roma,
        'París': paris,
        'Londres': londres
    };
    return contenido[enlace];
}