/* Tomamos el la cantidad a agregar y la guardamos dentro de la variable  cantidadParaAgregarFernet*/
let cantidadParaAgregarvinoJugo = document.querySelector("#cantAgregarvinoJugo");
/* Tomamos el valor del total de productos vendidos dentor de la variable  cantidadDeFernetVendidos*/
let cantidadDeVodkavinoJugo = document.querySelector("#cantVendidoVodkavinoJugo");

/* Creamos la variable para ir guardando el valor ingresado en el input*/
let cantidadParaAgregarvinoJugoNumero = 0;
/* Creamos la variable para guardar el valor que debemos mostrar en el total */
let cantidadDevinoJugoVendidosNumero = 0;


function removevinoJugo(){
    /* Guardamos el valor de la cantidad a agregar dentro de una variable en forma numeritca */
    cantidadParaAgregarvinoJugoNumero = parseInt(cantidadParaAgregarvinoJugo.value);
    /* La variable contenedora del numero se iguala por si mimsa y se resta 1 532754643 */
    cantidadParaAgregarvinoJugoNumero = cantidadParaAgregarvinoJugoNumero - 1;
    cantidadParaAgregarvinoJugo.value = cantidadParaAgregarvinoJugoNumero;
}
function addvinoJugo(){
    /* Guardamos el valor de la cantidad a agregar dentro de una variable en forma numeritca */
    cantidadParaAgregarvinoJugoNumero = parseInt(cantidadParaAgregarvinoJugo.value);
    /* La variable contenedora del numero se iguala por si mimsa y se suma 1*/
    cantidadParaAgregarvinoJugoNumero = cantidadParaAgregarvinoJugoNumero + 1;
    cantidadParaAgregarvinoJugo.value = cantidadParaAgregarvinoJugoNumero;
}
function totalvinoJugo(){
    /* Guardamos el valor de la cantidad a agregar dentro de una variable en forma numeritca */
    cantidadParaAgregarvinoJugoNumero = parseInt(cantidadParaAgregarvinoJugo.value);
    cantidadDevinoJugoVendidosNumero = parseInt(cantidadDeVodkavinoJugo.textContent);


    cantidadDevinoJugoVendidosNumero = cantidadDevinoJugoVendidosNumero + cantidadParaAgregarvinoJugoNumero;
    cantidadDeVodkavinoJugo.textContent = cantidadDevinoJugoVendidosNumero;

    cantidadParaAgregarvinoJugo.value = 0;
    
}